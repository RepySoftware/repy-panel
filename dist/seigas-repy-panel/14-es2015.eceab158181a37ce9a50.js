(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{F4UR:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginModule",function(){return E});var r=n("ofXK"),i=n("3Pt+"),o=n("fXoL"),a=n("lGQG"),s=n("2g2N"),m=n("5dVO"),l=n("mnRn"),c=n("tyNb"),d=n("K6Ak"),g=n("jjde"),u=n("Wp6s"),p=n("kmnG"),h=n("qFsG"),f=n("bTqV");const v=["backgroundImage"];function b(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"mat-error"),o["\u0275\u0275text"](1," Este campo cont\xe9m erros "),o["\u0275\u0275elementEnd"]())}function w(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"mat-error"),o["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),o["\u0275\u0275elementEnd"]())}let S=(()=>{class e{constructor(e,t,n,r,o,a,s){this._authService=e,this._toastService=t,this._loaderService=n,this._imageService=r,this._router=o,this._title=a,this._sidenavService=s,this._title.set("Login"),this.loginForm=new i.g({username:new i.e(null,[i.s.required]),password:new i.e(null,i.s.required)})}ngOnInit(){this.setBackgroundImage()}login(){if(!this.loginForm.valid){const e="Preencha todos os campos";throw this._toastService.open(e),new Error(e)}const e={username:this.loginForm.get("username").value,password:this.loginForm.get("password").value};this._loaderService.show(),this._authService.login(e).subscribe(e=>{this._loaderService.dismiss(),this._router.navigate(["/home"],{queryParams:{sn:!0}})},e=>{this._loaderService.dismiss(),this._toastService.showHttpError(e)})}setBackgroundImage(){this._imageService.getImageOfTheDay().subscribe(e=>{this.backgroundImageElement.nativeElement.style.backgroundImage=`url(${e})`},e=>{this.backgroundImageElement.nativeElement.style.backgroundImage="url(/assets/images/login-bg.jpg)"})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](m.a),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](c.c),o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](g.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-login"]],viewQuery:function(e,t){if(1&e&&o["\u0275\u0275viewQuery"](v,!0),2&e){let e;o["\u0275\u0275queryRefresh"](e=o["\u0275\u0275loadQuery"]())&&(t.backgroundImageElement=e.first)}},decls:20,vars:3,consts:[[1,"bg"],["backgroundImage",""],[1,"row"],[1,"col-md-4","offset-md-4"],[1,"login-card"],["src","/assets/images/logo.png",2,"width","200px","padding","17px"],[2,"font-size","18px","font-weight","bold"],[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Nome de usu\xe1rio","formControlName","username"],["username",""],[4,"ngIf"],["matInput","","placeholder","Senha","formControlName","password","type","password"],["password",""],["mat-flat-button","","color","primary",2,"width","100%"]],template:function(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div",0,1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"mat-card",4),o["\u0275\u0275elementStart"](5,"div"),o["\u0275\u0275element"](6,"img",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"mat-card-subtitle",6),o["\u0275\u0275text"](8,"Login"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"form",7),o["\u0275\u0275listener"]("ngSubmit",function(){return t.login()}),o["\u0275\u0275elementStart"](10,"mat-form-field"),o["\u0275\u0275element"](11,"input",8,9),o["\u0275\u0275template"](13,b,2,0,"mat-error",10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"mat-form-field"),o["\u0275\u0275element"](15,"input",11,12),o["\u0275\u0275template"](17,w,2,0,"mat-error",10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](18,"button",13),o["\u0275\u0275text"](19,"Entrar"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275reference"](12),n=o["\u0275\u0275reference"](16);o["\u0275\u0275advance"](9),o["\u0275\u0275property"]("formGroup",t.loginForm),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngIf",!e.valid),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngIf",!n.valid)}},directives:[u.a,u.f,i.t,i.n,i.h,p.c,h.b,i.d,i.m,i.f,r.m,f.a,p.b],styles:[".bg[_ngcontent-%COMP%]{background-size:cover;position:absolute;width:100%;height:100%}.login-card[_ngcontent-%COMP%]{text-align:center;padding:30px;margin-top:20%!important}"]}),e})();var I=n("ssao");let E=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,I.a,c.g.forChild([{path:"",component:S}]),i.r]]}),e})()}}]);