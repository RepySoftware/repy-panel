import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LoaderService } from './services/loader.service';
import { DeviceService } from './services/device.service';
import { ToastService } from './services/toast.service';
import { OnlyLoggedGuard } from './guards/only-logged.guard';
import * as moment from 'moment';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from './services/storage.service';
import { NgxMaskModule } from 'ngx-mask';
import { environment } from '../environments/environment';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PersonService } from './services/person.service';
import { AddressConfigService } from './shared/address-config/address-config.service';
import { ProductService } from './services/product.service';
import { CompanyBranchService } from './services/company-branch.service';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    UserService,
    AuthService,
    StorageService,
    DeviceService,
    PersonService,
    AddressConfigService,
    ProductService,
    CompanyBranchService,
    EmployeeService,

    LoaderService,
    ToastService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    OnlyLoggedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    moment.locale('pt-br');

    if (environment.forceHttps && location.href.startsWith('http://'))
      location.href = location.href.replace('http://', 'https://');
  }
}
