!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{F4UR:function(n,r,i){"use strict";i.r(r),i.d(r,"LoginModule",function(){return j});var o=i("ofXK"),a=i("3Pt+"),s=i("fXoL"),m=i("lGQG"),c=i("2g2N"),l=i("5dVO"),d=i("mnRn"),u=i("tyNb"),g=i("K6Ak"),f=i("jjde"),p=i("Wp6s"),v=i("kmnG"),h=i("qFsG"),b=i("bTqV"),w=["backgroundImage"];function S(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"mat-error"),s["\u0275\u0275text"](1," Este campo cont\xe9m erros "),s["\u0275\u0275elementEnd"]())}function y(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"mat-error"),s["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),s["\u0275\u0275elementEnd"]())}var I,E,k=((I=function(){function n(t,r,i,o,s,m,c){e(this,n),this._authService=t,this._toastService=r,this._loaderService=i,this._imageService=o,this._router=s,this._title=m,this._sidenavService=c,this._title.set("Login"),this.loginForm=new a.g({username:new a.e(null,[a.s.required]),password:new a.e(null,a.s.required)})}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){this.setBackgroundImage()}},{key:"login",value:function(){var e=this;if(!this.loginForm.valid){var t="Preencha todos os campos";throw this._toastService.open(t),new Error(t)}var n={username:this.loginForm.get("username").value,password:this.loginForm.get("password").value};this._loaderService.show(),this._authService.login(n).subscribe(function(t){e._loaderService.dismiss(),e._router.navigate(["/home"],{queryParams:{sn:!0}})},function(t){e._loaderService.dismiss(),e._toastService.showHttpError(t)})}},{key:"setBackgroundImage",value:function(){var e=this;this._imageService.getImageOfTheDay().subscribe(function(t){e.backgroundImageElement.nativeElement.style.backgroundImage="url(".concat(t,")")},function(t){e.backgroundImageElement.nativeElement.style.backgroundImage="url(/assets/images/login-bg.jpg)"})}}])&&t(r.prototype,i),o&&t(r,o),n}()).\u0275fac=function(e){return new(e||I)(s["\u0275\u0275directiveInject"](m.a),s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](d.a),s["\u0275\u0275directiveInject"](u.c),s["\u0275\u0275directiveInject"](g.a),s["\u0275\u0275directiveInject"](f.a))},I.\u0275cmp=s["\u0275\u0275defineComponent"]({type:I,selectors:[["app-login"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](w,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.backgroundImageElement=n.first)},decls:20,vars:3,consts:[[1,"bg"],["backgroundImage",""],[1,"row"],[1,"col-md-4","offset-md-4"],[1,"login-card"],["src","/assets/images/logo.png",2,"width","200px","padding","17px"],[2,"font-size","18px","font-weight","bold"],[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Nome de usu\xe1rio","formControlName","username"],["username",""],[4,"ngIf"],["matInput","","placeholder","Senha","formControlName","password","type","password"],["password",""],["mat-flat-button","","color","primary",2,"width","100%"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",0,1),s["\u0275\u0275elementStart"](2,"div",2),s["\u0275\u0275elementStart"](3,"div",3),s["\u0275\u0275elementStart"](4,"mat-card",4),s["\u0275\u0275elementStart"](5,"div"),s["\u0275\u0275element"](6,"img",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"mat-card-subtitle",6),s["\u0275\u0275text"](8,"Login"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"form",7),s["\u0275\u0275listener"]("ngSubmit",function(){return t.login()}),s["\u0275\u0275elementStart"](10,"mat-form-field"),s["\u0275\u0275element"](11,"input",8,9),s["\u0275\u0275template"](13,S,2,0,"mat-error",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"mat-form-field"),s["\u0275\u0275element"](15,"input",11,12),s["\u0275\u0275template"](17,y,2,0,"mat-error",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"button",13),s["\u0275\u0275text"](19,"Entrar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275reference"](12),r=s["\u0275\u0275reference"](16);s["\u0275\u0275advance"](9),s["\u0275\u0275property"]("formGroup",t.loginForm),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",!n.valid),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",!r.valid)}},directives:[p.a,p.f,a.t,a.n,a.h,v.c,h.b,a.d,a.m,a.f,o.m,b.a,v.b],styles:[".bg[_ngcontent-%COMP%]{background-size:cover;position:absolute;width:100%;height:100%}.login-card[_ngcontent-%COMP%]{text-align:center;padding:30px;margin-top:20%!important}"]}),I),_=i("ssao"),j=((E=function t(){e(this,t)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[o.c,_.a,u.g.forChild([{path:"",component:k}]),a.r]]}),E)}}])}();