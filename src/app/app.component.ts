import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from './services/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavItem } from './models/ui/sidenav-item';
import { Router } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { User } from './models/api/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  public loaderState: boolean = false;

  public menuItens: SidenavItem[] = [];

  constructor(
    public userService: UserService,
    private _router: Router,
    private _loaderService: LoaderService,
    private _cdRef: ChangeDetectorRef,
    private _storageService: StorageService,
    private _authService: AuthService
  ) {
  }

  ngOnInit() {

    document.body.style.zoom = '80%';

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
    // this.sidenav.close();

    if (action)
      action();
  }

  private setMenuItens() {
    this.menuItens = [
      {
        title: 'Home',
        icon: 'home',
        route: '/home',
        showInToolbar: true
      },
      {
        title: 'Pessoas',
        icon: 'people',
        route: '/persons',
        showInToolbar: true
      },
      {
        title: 'Dispositivos',
        icon: 'devices_other',
        route: '/devices',
        showInToolbar: true
      },
      {
        title: 'PDV',
        icon: 'point_of_sale',
        route: '/sales/pos',
        showInToolbar: true
      },
      {
        title: 'Pedidos',
        icon: 'assignment',
        route: '/sales/orders',
        showInToolbar: true
      },
      {
        title: 'Entregas',
        icon: 'local_shipping',
        route: '/sales/delivery',
        showInToolbar: true
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

  public get sidenavMenus(): SidenavItem[] {
    return this.menuItens.filter(mi => mi.showCondition ? mi.showCondition() === true : true);
  }

  public get toolbarMenus(): SidenavItem[] {
    return this.menuItens.filter(mi => mi.showInToolbar);
  }
}
