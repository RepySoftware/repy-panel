(self.webpackChunkrepy_panel=self.webpackChunkrepy_panel||[]).push([[958],{44836:function(e,t,n){!function(e,t,n){"use strict";var i=function(e){e&&Object.assign(this,e)},o=function(){function t(e,t){this.el=e,this.ngZone=t,this.onAddressChange=new n.EventEmitter}return t.prototype.ngAfterViewInit=function(){this.options||(this.options=new i),this.initialize()},t.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)},t.prototype.initialize=function(){var e=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");if(this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options),!this.autocomplete)throw new Error("Autocomplete is not initialized");null!=!this.autocomplete.addListener&&(this.eventListener=this.autocomplete.addListener("place_changed",function(){e.handleChangeEvent()})),this.el.nativeElement.addEventListener("keydown",function(t){t.key&&"enter"==t.key.toLowerCase()&&t.target===e.el.nativeElement&&(t.preventDefault(),t.stopPropagation())}),window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&setTimeout(function(){var e=document.getElementsByClassName("pac-container");if(e){var t=Array.from(e);if(t)for(var n=0,i=t;n<i.length;n++){var o=i[n];o&&o.addEventListener("touchend",function(e){e.stopImmediatePropagation()})}}},500)},t.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions),this.autocomplete.setTypes(this.options.types)},t.prototype.handleChangeEvent=function(){var e=this;this.ngZone.run(function(){e.place=e.autocomplete.getPlace(),e.place&&e.onAddressChange.emit(e.place)})},t.ctorParameters=function(){return[{type:n.ElementRef},{type:n.NgZone}]},t.propDecorators={options:[{type:n.Input,args:["options"]}],onAddressChange:[{type:n.Output}]},t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone))},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","ngx-google-places-autocomplete",""]],inputs:{options:"options"},outputs:{onAddressChange:"onAddressChange"},exportAs:["ngx-places"]}),t}(),r=function(){function t(){}return t.ctorParameters=function(){return[]},t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({}),t}();t.GooglePlaceModule=r,t.GooglePlaceDirective=o,Object.defineProperty(t,"__esModule",{value:!0})}(n(37716),t,n(37716))},11958:function(e,t,n){"use strict";n.r(t),n.d(t,{VehiclesModule:function(){return J}});var i=n(38583),o=n(15495),r=n(44466),a=n(3679),l=n(54655),s=n(22238),c=n(37716),m=n(38555),d=n(84465),p=n(71942),h=n(37499),u=n(98295),f=n(49983),v=n(67441),g=n(51095),E=n(71419),w=n(72458);function S(e,t){1&e&&c["\u0275\u0275element"](0,"button-dialog-close")}function I(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"h3",16),c["\u0275\u0275text"](1,"Novo ve\xedculo"),c["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"h3",16),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"]("Edi\xe7\xe3o ",e.vehicle.nickname||e.vehicle.description,"")}}function C(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"mat-error"),c["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),c["\u0275\u0275elementEnd"]())}function x(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"mat-error"),c["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),c["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"mat-option",17),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275property"]("value",e.id),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate2"](" ",e.name," - ",e.companyBranch.name," ")}}function b(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"mat-error"),c["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),c["\u0275\u0275elementEnd"]())}let D=(()=>{class e{constructor(e,t,n,i,o,r){this._loader=e,this._toast=t,this._vehicleService=n,this._depositService=i,this._dialogRef=o,this.inputData=r,this.deposits=[],this.initForm()}ngOnInit(){this.getDeposits(),this.inputData.vehicleId&&this.getVehicle().then(()=>this.setFormValues())}initForm(){this.vehicleForm=new a.cw({description:new a.NI(null,a.kI.required),nickname:new a.NI(null),licensePlate:new a.NI(null,a.kI.required),deposit:new a.NI(null)})}setFormValues(){var e;this.vehicleForm.get("description").setValue(this.vehicle.description),this.vehicleForm.get("nickname").setValue(this.vehicle.nickname),this.vehicleForm.get("licensePlate").setValue(this.vehicle.licensePlate),this.vehicleForm.get("deposit").setValue(null===(e=this.vehicle.deposit)||void 0===e?void 0:e.id)}getVehicle(){return new Promise((e,t)=>{this._loader.show(),this._vehicleService.getById(this.inputData.vehicleId).subscribe(t=>{this._loader.dismiss(),this.vehicle=t,e(t)},e=>{this._loader.dismiss(),this._toast.showHttpError(e),t(e)})})}getDeposits(){this._depositService.getAll().subscribe(e=>{this.deposits=e},e=>{this._toast.showHttpError(e)})}save(){if(!this.vehicleForm.valid)throw this.vehicleForm.markAllAsTouched(),this._toast.open("Preencha todos os campos obrigat\xf3rios"),new Error("Invalid form");const e={description:this.vehicleForm.get("description").value,nickname:this.vehicleForm.get("nickname").value,licensePlate:this.vehicleForm.get("licensePlate").value,depositId:this.vehicleForm.get("deposit").value};let t;this.vehicle?(e.id=this.vehicle.id,t=this._vehicleService.update(e)):t=this._vehicleService.create(e),this._loader.show(),t.subscribe(e=>{this._loader.dismiss(),this._toast.open("Salvo com sucesso!","success"),this.vehicle=e,this.initForm(),this.setFormValues(),this._dialogRef.close({hasUpdate:!0})},e=>{this._loader.dismiss(),this._toast.showHttpError(e)})}get isModal(){return!!this.inputData}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](m.D),c["\u0275\u0275directiveInject"](d.k),c["\u0275\u0275directiveInject"](p.f),c["\u0275\u0275directiveInject"](h.s),c["\u0275\u0275directiveInject"](s.so),c["\u0275\u0275directiveInject"](s.WI))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-vehicle-form"]],decls:34,vars:8,consts:[[4,"ngIf"],[1,"row"],[1,"col-sm-12"],["class","title",4,"ngIf"],[3,"formGroup"],[1,"col-6"],["matInput","","placeholder","Descri\xe7\xe3o","autocomplete","off","formControlName","description"],["description",""],["matInput","","placeholder","Nome (opcional)","autocomplete","off","formControlName","nickname"],["nickname",""],["matInput","","placeholder","Placa","autocomplete","off","formControlName","licensePlate"],["licensePlate",""],["formControlName","deposit"],["type",""],[3,"value",4,"ngFor","ngForOf"],["mat-flat-button","","color","primary",2,"margin","24px 0",3,"click"],[1,"title"],[3,"value"]],template:function(e,t){if(1&e&&(c["\u0275\u0275template"](0,S,1,0,"button-dialog-close",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"div",2),c["\u0275\u0275template"](3,I,2,0,"h3",3),c["\u0275\u0275template"](4,y,2,1,"h3",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"form",4),c["\u0275\u0275elementStart"](6,"div",1),c["\u0275\u0275elementStart"](7,"div",5),c["\u0275\u0275elementStart"](8,"mat-form-field"),c["\u0275\u0275element"](9,"input",6,7),c["\u0275\u0275template"](11,C,2,0,"mat-error",0),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"div",5),c["\u0275\u0275elementStart"](13,"mat-form-field"),c["\u0275\u0275element"](14,"input",8,9),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"div",5),c["\u0275\u0275elementStart"](17,"mat-form-field"),c["\u0275\u0275element"](18,"input",10,11),c["\u0275\u0275template"](20,x,2,0,"mat-error",0),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](21,"div",5),c["\u0275\u0275elementStart"](22,"mat-form-field"),c["\u0275\u0275elementStart"](23,"mat-label"),c["\u0275\u0275text"](24,"Dep\xf3sito (opcional)"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](25,"mat-select",12,13),c["\u0275\u0275template"](27,_,2,3,"mat-option",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](28,b,2,0,"mat-error",0),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](29,"hr"),c["\u0275\u0275elementStart"](30,"div",1),c["\u0275\u0275elementStart"](31,"div",2),c["\u0275\u0275elementStart"](32,"button",15),c["\u0275\u0275listener"]("click",function(){return t.save()}),c["\u0275\u0275text"](33,"Salvar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275reference"](10),n=c["\u0275\u0275reference"](19);c["\u0275\u0275property"]("ngIf",t.isModal),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf",!t.vehicle),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.vehicle),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("formGroup",t.vehicleForm),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngIf",!e.valid),c["\u0275\u0275advance"](9),c["\u0275\u0275property"]("ngIf",!n.valid),c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("ngForOf",t.deposits),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!t.vehicleForm.get("deposit").valid)}},directives:[i.O5,a._Y,a.JL,a.sg,u.KE,f.Nt,a.Fj,a.JJ,a.u,u.hX,v.gD,i.sg,g.lW,E.P,u.TO,w.ey],styles:[""]}),e})();var k=n(26026),P=n(32789),j=n(76627);function F(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"th",13),c["\u0275\u0275text"](1,"#"),c["\u0275\u0275elementEnd"]())}function N(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"td",14),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](e.id)}}function V(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"th",13),c["\u0275\u0275text"](1,"Nome"),c["\u0275\u0275elementEnd"]())}function A(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"td",14),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.nickname," ")}}function M(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"th",13),c["\u0275\u0275text"](1,"Descri\xe7\xe3o"),c["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"td",14),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.description," ")}}function R(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"th",13),c["\u0275\u0275text"](1,"Placa"),c["\u0275\u0275elementEnd"]())}function z(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"td",14),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.licensePlate," ")}}function G(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"th",13),c["\u0275\u0275text"](1,"Dep\xf3sito/Unidade"),c["\u0275\u0275elementEnd"]())}function L(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div"),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate2"](" ",null==e.deposit?null:e.deposit.name," - ",null==e.deposit||null==e.deposit.companyBranch?null:e.deposit.companyBranch.name," ")}}function B(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"td",14),c["\u0275\u0275template"](1,L,2,2,"div",15),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.deposit)}}function H(e,t){1&e&&c["\u0275\u0275element"](0,"th",13)}function $(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"td",14),c["\u0275\u0275elementStart"](1,"a",16),c["\u0275\u0275listener"]("click",function(){const t=c["\u0275\u0275restoreView"](e).$implicit;return c["\u0275\u0275nextContext"]().openForm(t.id)}),c["\u0275\u0275elementStart"](2,"mat-icon"),c["\u0275\u0275text"](3,"edit"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}}function U(e,t){1&e&&c["\u0275\u0275element"](0,"tr",17)}function Z(e,t){1&e&&c["\u0275\u0275element"](0,"tr",18)}const T=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o){this._loader=e,this._toast=t,this._vehicleService=n,this._dialog=i,this._title=o,this.vehicles=[],this.tableColumns=["id","nickname","description","licensePlate","deposit","options"]}ngOnInit(){this._title.set("Ve\xedculos"),this.getVehicles()}getVehicles(){return new Promise((e,t)=>{this._loader.show(),this._vehicleService.getAll().subscribe(t=>{this._loader.dismiss(),this.vehicles=t,e()},e=>{this._loader.dismiss(),this._toast.showHttpError(e),t()})})}openForm(e){this._dialog.open(D,{width:"90%",height:"90%",data:{vehicleId:e}}).afterClosed().subscribe(e=>{e&&e.hasUpdate&&this.getVehicles()})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](m.D),c["\u0275\u0275directiveInject"](d.k),c["\u0275\u0275directiveInject"](p.f),c["\u0275\u0275directiveInject"](s.uw),c["\u0275\u0275directiveInject"](k.y))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-vehicles"]],decls:26,vars:3,consts:[[2,"font-size","32px","margin","16px"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nickname"],["matColumnDef","description"],["matColumnDef","licensePlate"],["matColumnDef","deposit"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["href","javascript:;","mat-fab","","color","primary",1,"btn-add",3,"click"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["href","javascript:;",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"h1",0),c["\u0275\u0275text"](1,"Ve\xedculos"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"table",1),c["\u0275\u0275elementContainerStart"](3,2),c["\u0275\u0275template"](4,F,2,0,"th",3),c["\u0275\u0275template"](5,N,2,1,"td",4),c["\u0275\u0275elementContainerEnd"](),c["\u0275\u0275elementContainerStart"](6,5),c["\u0275\u0275template"](7,V,2,0,"th",3),c["\u0275\u0275template"](8,A,2,1,"td",4),c["\u0275\u0275elementContainerEnd"](),c["\u0275\u0275elementContainerStart"](9,6),c["\u0275\u0275template"](10,M,2,0,"th",3),c["\u0275\u0275template"](11,O,2,1,"td",4),c["\u0275\u0275elementContainerEnd"](),c["\u0275\u0275elementContainerStart"](12,7),c["\u0275\u0275template"](13,R,2,0,"th",3),c["\u0275\u0275template"](14,z,2,1,"td",4),c["\u0275\u0275elementContainerEnd"](),c["\u0275\u0275elementContainerStart"](15,8),c["\u0275\u0275template"](16,G,2,0,"th",3),c["\u0275\u0275template"](17,B,2,1,"td",4),c["\u0275\u0275elementContainerEnd"](),c["\u0275\u0275elementContainerStart"](18,9),c["\u0275\u0275template"](19,H,1,0,"th",3),c["\u0275\u0275template"](20,$,4,0,"td",4),c["\u0275\u0275elementContainerEnd"](),c["\u0275\u0275template"](21,U,1,0,"tr",10),c["\u0275\u0275template"](22,Z,1,0,"tr",11),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](23,"button",12),c["\u0275\u0275listener"]("click",function(){return t.openForm()}),c["\u0275\u0275elementStart"](24,"mat-icon"),c["\u0275\u0275text"](25,"add"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("dataSource",t.vehicles),c["\u0275\u0275advance"](19),c["\u0275\u0275property"]("matHeaderRowDef",t.tableColumns),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("matRowDefColumns",t.tableColumns))},directives:[P.BZ,P.w1,P.fO,P.Dz,P.as,P.nj,g.lW,j.Hw,P.ge,P.ev,i.O5,P.XQ,P.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:64px;background:#eee;z-index:10}.btn-add[_ngcontent-%COMP%]{position:fixed;bottom:26px;right:30px}"]}),e})()}];let X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[l.Bz.forChild(T)],l.Bz]}),e})(),J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[i.ez,o.h,X,r.m,a.UX]]}),e})()},35503:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var i=n(37716);let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({}),e})()},44466:function(e,t,n){"use strict";n.d(t,{m:function(){return m}});var i=n(15495),o=n(35503),r=n(38583),a=n(69129),l=n(3679),s=n(44836),c=n(37716);let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[i.h,o.D,r.ez,a.yI,l.UX,l.u5,s.GooglePlaceModule],a.yI]}),e})()}}]);