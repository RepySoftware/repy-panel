import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from './services/user.service';
import { MatSidenav } from '@angular/material';
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
    this.sidenav.close();

    if (action)
      action();
  }

  private setMenuItens() {
    this.menuItens = [
      {
        title: 'Home',
        icon: 'home',
        route: '/home'
      },
      {
        title: 'Produtos',
        icon: 'shopping_basket',
        route: '/products'
      },
      {
        title: 'Pedidos',
        icon: 'description',
        route: '/purchase-orders',
        showCondition: () => true
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
}
