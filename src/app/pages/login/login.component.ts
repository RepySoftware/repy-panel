import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoginOutput } from 'src/app/models/output/login-output';
import { ToastService } from 'src/app/services/toast.service';
import { LoaderService } from 'src/app/services/loader.service';
import { HttpResponseHelper } from 'src/app/helpers/http-response-helper';
import { StorageService } from 'src/app/services/storage.service';
import { TitleService } from '../../services/title.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('backgroundImage') public backgroundImageElement: ElementRef;

  public loginForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private _toastService: ToastService,
    private _loaderService: LoaderService,
    private _imageService: ImageService,
    private _router: Router,
    private _title: TitleService
  ) {

    this._title.set('Login');

    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.setBackgroundImage();
  }

  public login(): void {

    if (!this.loginForm.valid) {
      const msg = 'Preencha todos os campos';

      this._toastService.open(msg);

      throw new Error(msg);
    }

    const l: LoginOutput = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };

    this._loaderService.show();
    this._authService.login(l).subscribe(response => {
      this._loaderService.dismiss();
      this._router.navigate(['/home']);
    }, error => {
      this._loaderService.dismiss();
      this._toastService.open(HttpResponseHelper.mapErrorResponse(error).message);
    });

  }

  private setBackgroundImage(): void {
    this._imageService.getImageOfTheDay().subscribe(imageUrl => {
      this.backgroundImageElement.nativeElement.style.backgroundImage = `url(${imageUrl})`;
    }, error => {
      this.backgroundImageElement.nativeElement.style.backgroundImage = 'url(/assets/images/login-bg.jpg)';
    });
  }

}
