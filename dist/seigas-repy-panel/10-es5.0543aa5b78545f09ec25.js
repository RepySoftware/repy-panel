!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7itd":function(e,t,n){!function(e,t,n){"use strict";var i=function(e){e&&Object.assign(this,e)},o=function(){function t(e,t){this.el=e,this.ngZone=t,this.onAddressChange=new n.EventEmitter}return t.prototype.ngAfterViewInit=function(){this.options||(this.options=new i),this.initialize()},t.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)},t.prototype.initialize=function(){var e=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");if(this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options),!this.autocomplete)throw new Error("Autocomplete is not initialized");null!=!this.autocomplete.addListener&&(this.eventListener=this.autocomplete.addListener("place_changed",function(){e.handleChangeEvent()})),this.el.nativeElement.addEventListener("keydown",function(t){t.key&&"enter"==t.key.toLowerCase()&&t.target===e.el.nativeElement&&(t.preventDefault(),t.stopPropagation())}),window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&setTimeout(function(){var e=document.getElementsByClassName("pac-container");if(e){var t=Array.from(e);if(t)for(var n=0,i=t;n<i.length;n++){var o=i[n];o&&o.addEventListener("touchend",function(e){e.stopImmediatePropagation()})}}},500)},t.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions),this.autocomplete.setTypes(this.options.types)},t.prototype.handleChangeEvent=function(){var e=this;this.ngZone.run(function(){e.place=e.autocomplete.getPlace(),e.place&&e.onAddressChange.emit(e.place)})},t.ctorParameters=function(){return[{type:n.ElementRef},{type:n.NgZone}]},t.propDecorators={options:[{type:n.Input,args:["options"]}],onAddressChange:[{type:n.Output}]},t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone))},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","ngx-google-places-autocomplete",""]],inputs:{options:"options"},outputs:{onAddressChange:"onAddressChange"},exportAs:["ngx-places"]}),t}();t.GooglePlaceModule=function(){function t(){}return t.ctorParameters=function(){return[]},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({factory:function(e){return new(e||t)}}),t}(),t.GooglePlaceDirective=o,Object.defineProperty(t,"__esModule",{value:!0})}(n("fXoL"),t,n("fXoL"))},PCNd:function(e,t,i){"use strict";i.d(t,"a",function(){return d});var o=i("ssao"),a=i("iTUp"),r=i("ofXK"),l=i("tmjD"),c=i("3Pt+"),s=i("7itd"),m=i("fXoL"),d=function(){var e=function e(){n(this,e)};return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.a,a.a,r.c,l.b,c.r,c.i,s.GooglePlaceModule],l.b]}),e}()},iTUp:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var o=i("fXoL"),a=function(){var e=function e(){n(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e}()},iipK:function(e,i,o){"use strict";o.r(i),o.d(i,"VehiclesModule",function(){return ee});var a=o("ofXK"),r=o("ssao"),l=o("PCNd"),c=o("3Pt+"),s=o("tyNb"),m=o("0IaG"),d=o("fXoL"),p=o("5dVO"),u=o("2g2N"),f=o("D1vo"),h=o("xqXW"),v=o("kmnG"),g=o("qFsG"),E=o("d3UM"),y=o("bTqV"),w=o("IpZF"),S=o("FKr1");function b(e,t){1&e&&d["\u0275\u0275element"](0,"button-dialog-close")}function C(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"h3",16),d["\u0275\u0275text"](1,"Novo ve\xedculo"),d["\u0275\u0275elementEnd"]())}function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"h3",16),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("Edi\xe7\xe3o ",n.vehicle.nickname||n.vehicle.description,"")}}function x(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"mat-error"),d["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),d["\u0275\u0275elementEnd"]())}function k(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"mat-error"),d["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),d["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"mat-option",17),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275property"]("value",n.id),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate2"](" ",n.name," - ",n.companyBranch.name," ")}}function P(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"mat-error"),d["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),d["\u0275\u0275elementEnd"]())}var j,D=((j=function(){function e(t,i,o,a,r,l){n(this,e),this._loader=t,this._toast=i,this._vehicleService=o,this._depositService=a,this._dialogRef=r,this.inputData=l,this.deposits=[],this.initForm()}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.getDeposits(),this.inputData.vehicleId&&this.getVehicle().then(function(){return e.setFormValues()})}},{key:"initForm",value:function(){this.vehicleForm=new c.g({description:new c.e(null,c.s.required),nickname:new c.e(null),licensePlate:new c.e(null,c.s.required),deposit:new c.e(null)})}},{key:"setFormValues",value:function(){var e;this.vehicleForm.get("description").setValue(this.vehicle.description),this.vehicleForm.get("nickname").setValue(this.vehicle.nickname),this.vehicleForm.get("licensePlate").setValue(this.vehicle.licensePlate),this.vehicleForm.get("deposit").setValue(null===(e=this.vehicle.deposit)||void 0===e?void 0:e.id)}},{key:"getVehicle",value:function(){var e=this;return new Promise(function(t,n){e._loader.show(),e._vehicleService.getById(e.inputData.vehicleId).subscribe(function(n){e._loader.dismiss(),e.vehicle=n,t(n)},function(t){e._loader.dismiss(),e._toast.showHttpError(t),n(t)})})}},{key:"getDeposits",value:function(){var e=this;this._depositService.getAll().subscribe(function(t){e.deposits=t},function(t){e._toast.showHttpError(t)})}},{key:"save",value:function(){var e=this;if(!this.vehicleForm.valid)throw this.vehicleForm.markAllAsTouched(),this._toast.open("Preencha todos os campos obrigat\xf3rios"),new Error("Invalid form");var t,n={description:this.vehicleForm.get("description").value,nickname:this.vehicleForm.get("nickname").value,licensePlate:this.vehicleForm.get("licensePlate").value,depositId:this.vehicleForm.get("deposit").value};this.vehicle?(n.id=this.vehicle.id,t=this._vehicleService.update(n)):t=this._vehicleService.create(n),this._loader.show(),t.subscribe(function(t){e._loader.dismiss(),e._toast.open("Salvo com sucesso!","success"),e.vehicle=t,e.initForm(),e.setFormValues(),e._dialogRef.close({hasUpdate:!0})},function(t){e._loader.dismiss(),e._toast.showHttpError(t)})}},{key:"isModal",get:function(){return!!this.inputData}}]),e}()).\u0275fac=function(e){return new(e||j)(d["\u0275\u0275directiveInject"](p.a),d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](f.a),d["\u0275\u0275directiveInject"](h.a),d["\u0275\u0275directiveInject"](m.g),d["\u0275\u0275directiveInject"](m.a))},j.\u0275cmp=d["\u0275\u0275defineComponent"]({type:j,selectors:[["app-vehicle-form"]],decls:34,vars:8,consts:[[4,"ngIf"],[1,"row"],[1,"col-sm-12"],["class","title",4,"ngIf"],[3,"formGroup"],[1,"col-6"],["matInput","","placeholder","Descri\xe7\xe3o","autocomplete","off","formControlName","description"],["description",""],["matInput","","placeholder","Nome (opcional)","autocomplete","off","formControlName","nickname"],["nickname",""],["matInput","","placeholder","Placa","autocomplete","off","formControlName","licensePlate"],["licensePlate",""],["formControlName","deposit"],["type",""],[3,"value",4,"ngFor","ngForOf"],["mat-flat-button","","color","primary",2,"margin","24px 0",3,"click"],[1,"title"],[3,"value"]],template:function(e,t){if(1&e&&(d["\u0275\u0275template"](0,b,1,0,"button-dialog-close",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"div",2),d["\u0275\u0275template"](3,C,2,0,"h3",3),d["\u0275\u0275template"](4,I,2,1,"h3",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"form",4),d["\u0275\u0275elementStart"](6,"div",1),d["\u0275\u0275elementStart"](7,"div",5),d["\u0275\u0275elementStart"](8,"mat-form-field"),d["\u0275\u0275element"](9,"input",6,7),d["\u0275\u0275template"](11,x,2,0,"mat-error",0),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"div",5),d["\u0275\u0275elementStart"](13,"mat-form-field"),d["\u0275\u0275element"](14,"input",8,9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"div",5),d["\u0275\u0275elementStart"](17,"mat-form-field"),d["\u0275\u0275element"](18,"input",10,11),d["\u0275\u0275template"](20,k,2,0,"mat-error",0),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](21,"div",5),d["\u0275\u0275elementStart"](22,"mat-form-field"),d["\u0275\u0275elementStart"](23,"mat-label"),d["\u0275\u0275text"](24,"Dep\xf3sito (opcional)"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](25,"mat-select",12,13),d["\u0275\u0275template"](27,_,2,3,"mat-option",14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](28,P,2,0,"mat-error",0),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](29,"hr"),d["\u0275\u0275elementStart"](30,"div",1),d["\u0275\u0275elementStart"](31,"div",2),d["\u0275\u0275elementStart"](32,"button",15),d["\u0275\u0275listener"]("click",function(){return t.save()}),d["\u0275\u0275text"](33,"Salvar"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275reference"](10),i=d["\u0275\u0275reference"](19);d["\u0275\u0275property"]("ngIf",t.isModal),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngIf",!t.vehicle),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.vehicle),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formGroup",t.vehicleForm),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngIf",!n.valid),d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("ngIf",!i.valid),d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("ngForOf",t.deposits),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!t.vehicleForm.get("deposit").valid)}},directives:[a.m,c.t,c.n,c.h,v.c,g.b,c.d,c.m,c.f,v.f,E.a,a.l,y.a,w.a,v.b,S.k],styles:[""]}),j),F=o("K6Ak"),N=o("+0xr"),V=o("NFeN");function A(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",13),d["\u0275\u0275text"](1,"#"),d["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",14),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n.id)}}function L(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",13),d["\u0275\u0275text"](1,"Nome"),d["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",14),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",n.nickname," ")}}function G(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",13),d["\u0275\u0275text"](1,"Descri\xe7\xe3o"),d["\u0275\u0275elementEnd"]())}function R(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",14),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",n.description," ")}}function X(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",13),d["\u0275\u0275text"](1,"Placa"),d["\u0275\u0275elementEnd"]())}function $(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",14),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",n.licensePlate," ")}}function H(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",13),d["\u0275\u0275text"](1,"Dep\xf3sito/Unidade"),d["\u0275\u0275elementEnd"]())}function T(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate2"](" ",null==n.deposit?null:n.deposit.name," - ",null==n.deposit||null==n.deposit.companyBranch?null:n.deposit.companyBranch.name," ")}}function U(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",14),d["\u0275\u0275template"](1,T,2,2,"div",15),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",n.deposit)}}function q(e,t){1&e&&d["\u0275\u0275element"](0,"th",13)}function z(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"td",14),d["\u0275\u0275elementStart"](1,"a",16),d["\u0275\u0275listener"]("click",function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"]().openForm(e.id)}),d["\u0275\u0275elementStart"](2,"mat-icon"),d["\u0275\u0275text"](3,"edit"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}}function B(e,t){1&e&&d["\u0275\u0275element"](0,"tr",17)}function K(e,t){1&e&&d["\u0275\u0275element"](0,"tr",18)}var Z,J,W,Q=[{path:"",component:(Z=function(){function e(t,i,o,a,r){n(this,e),this._loader=t,this._toast=i,this._vehicleService=o,this._dialog=a,this._title=r,this.vehicles=[],this.tableColumns=["id","nickname","description","licensePlate","deposit","options"]}return t(e,[{key:"ngOnInit",value:function(){this._title.set("Ve\xedculos"),this.getVehicles()}},{key:"getVehicles",value:function(){var e=this;return new Promise(function(t,n){e._loader.show(),e._vehicleService.getAll().subscribe(function(n){e._loader.dismiss(),e.vehicles=n,t()},function(t){e._loader.dismiss(),e._toast.showHttpError(t),n()})})}},{key:"openForm",value:function(e){var t=this;this._dialog.open(D,{width:"90%",height:"90%",data:{vehicleId:e}}).afterClosed().subscribe(function(e){e&&e.hasUpdate&&t.getVehicles()})}}]),e}(),Z.\u0275fac=function(e){return new(e||Z)(d["\u0275\u0275directiveInject"](p.a),d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](f.a),d["\u0275\u0275directiveInject"](m.b),d["\u0275\u0275directiveInject"](F.a))},Z.\u0275cmp=d["\u0275\u0275defineComponent"]({type:Z,selectors:[["app-vehicles"]],decls:26,vars:3,consts:[[2,"font-size","32px","margin","16px"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nickname"],["matColumnDef","description"],["matColumnDef","licensePlate"],["matColumnDef","deposit"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["href","javascript:;","mat-fab","","color","primary",1,"btn-add",3,"click"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["href","javascript:;",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"h1",0),d["\u0275\u0275text"](1,"Ve\xedculos"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"table",1),d["\u0275\u0275elementContainerStart"](3,2),d["\u0275\u0275template"](4,A,2,0,"th",3),d["\u0275\u0275template"](5,M,2,1,"td",4),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](6,5),d["\u0275\u0275template"](7,L,2,0,"th",3),d["\u0275\u0275template"](8,O,2,1,"td",4),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](9,6),d["\u0275\u0275template"](10,G,2,0,"th",3),d["\u0275\u0275template"](11,R,2,1,"td",4),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](12,7),d["\u0275\u0275template"](13,X,2,0,"th",3),d["\u0275\u0275template"](14,$,2,1,"td",4),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](15,8),d["\u0275\u0275template"](16,H,2,0,"th",3),d["\u0275\u0275template"](17,U,2,1,"td",4),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](18,9),d["\u0275\u0275template"](19,q,1,0,"th",3),d["\u0275\u0275template"](20,z,4,0,"td",4),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275template"](21,B,1,0,"tr",10),d["\u0275\u0275template"](22,K,1,0,"tr",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](23,"button",12),d["\u0275\u0275listener"]("click",function(){return t.openForm()}),d["\u0275\u0275elementStart"](24,"mat-icon"),d["\u0275\u0275text"](25,"add"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("dataSource",t.vehicles),d["\u0275\u0275advance"](19),d["\u0275\u0275property"]("matHeaderRowDef",t.tableColumns),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("matRowDefColumns",t.tableColumns))},directives:[N.j,N.c,N.e,N.b,N.g,N.i,y.a,V.a,N.d,N.a,a.m,N.f,N.h],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:64px;background:#eee;z-index:10}.btn-add[_ngcontent-%COMP%]{position:fixed;bottom:26px;right:30px}"]}),Z)}],Y=((W=function e(){n(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:W}),W.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||W)},imports:[[s.g.forChild(Q)],s.g]}),W),ee=((J=function e(){n(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:J}),J.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||J)},imports:[[a.c,r.a,Y,l.a,c.r]]}),J)}}])}();