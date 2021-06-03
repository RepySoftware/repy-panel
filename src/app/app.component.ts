import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from './services/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavMenu } from './models/ui/sidenav-item';
import { Router } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { User } from './models/api/user';
import { Configuration, MultilevelNodes } from 'ng-material-multilevel-menu/lib/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  public loaderState: boolean = false;

  private _menus: SidenavMenu[] = [];

  constructor(
    public userService: UserService,
    private _router: Router,
    private _loaderService: LoaderService,
    private _cdRef: ChangeDetectorRef,
    private _storageService: StorageService,
    private _authService: AuthService
  ) { }

  ngOnInit() {

    // document.body.style.zoom = '80%';

    this._loaderService.loaderEmitter.subscribe(
      state => {
        this.loaderState = state;
        this._cdRef.detectChanges();
      }
    );

    this.checkAuth();

    this.setMenuItens();
  }

  public menuClick(action?: () => void): void {

    if (action)
      action();
  }

  private setMenuItens() {
    this._menus = [
      {
        title: 'Home',
        icon: 'home',
        route: '/home'
      },
      {
        title: 'Pessoas',
        icon: 'people',
        route: '/persons'
      },
      {
        title: 'Funcionários',
        icon: 'badge',
        route: '/employees'
      },
      {
        title: 'Veículos',
        icon: 'local_shipping',
        route: '/vehicles'
      },
      {
        title: 'Estoque',
        icon: 'inventory',
        subMenus: [
          {
            title: 'Depósitos',
            route: '/stock/deposits'
          },
          {
            title: 'Controle de estoque',
            route: '/stock/stock-control'
          }
        ]
      },
      {
        title: 'Vendas',
        icon: 'assignment',
        subMenus: [
          {
            title: 'PDV',
            route: '/sales/pos'
          },
          {
            title: 'Pedidos',
            route: '/sales/orders'
          },
          {
            title: 'Entregas',
            route: '/sales/delivery'
          }
        ]
      },
      {
        title: 'Dispositivos',
        icon: 'devices_other',
        subMenus: [
          {
            title: 'Lista',
            route: '/devices/list'
          },
          {
            title: 'Mapa',
            route: '/devices/map'
          }
        ]
      },
      {
        title: 'Sair',
        icon: 'exit_to_app',
        onClick: () => this.logout()
      }
    ]
  }

  public logout(): void {

    this.sidenav.close();
    this._loaderService.show();
    this._authService.logout().subscribe(() => {
      this._loaderService.dismiss();
      this._router.navigate(['/login']);
    });
  }

  private checkAuth() {
    this._loaderService.show();

    setTimeout(() => {
      this._authService.refresh().subscribe(
        response => {
          this._loaderService.dismiss();
        },
        error => {
          this._loaderService.dismiss();
          this._router.navigate(['/login']);
        }
      );
    }, 400);
  }

  public get isLogin(): boolean {
    return this._router.url == '/login';
  }

  public get loggedUser(): User {
    return this._storageService.data && this._storageService.data.user ? this._storageService.data.user : null;
  }

  public get sidenavMenus(): SidenavMenu[] {
    return this._menus.filter(mi => mi.showCondition ? mi.showCondition() === true : true);
  }
}
