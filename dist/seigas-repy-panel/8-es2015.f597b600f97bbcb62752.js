(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7itd":function(e,t,n){!function(e,t,n){"use strict";var o=function(){return function(e){e&&Object.assign(this,e)}}(),i=function(){function t(e,t){this.el=e,this.ngZone=t,this.onAddressChange=new n.EventEmitter}return t.prototype.ngAfterViewInit=function(){this.options||(this.options=new o),this.initialize()},t.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)},t.prototype.initialize=function(){var e=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");if(this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options),!this.autocomplete)throw new Error("Autocomplete is not initialized");null!=!this.autocomplete.addListener&&(this.eventListener=this.autocomplete.addListener("place_changed",function(){e.handleChangeEvent()})),this.el.nativeElement.addEventListener("keydown",function(t){t.key&&"enter"==t.key.toLowerCase()&&t.target===e.el.nativeElement&&(t.preventDefault(),t.stopPropagation())}),window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&setTimeout(function(){var e=document.getElementsByClassName("pac-container");if(e){var t=Array.from(e);if(t)for(var n=0,o=t;n<o.length;n++){var i=o[n];i&&i.addEventListener("touchend",function(e){e.stopImmediatePropagation()})}}},500)},t.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions),this.autocomplete.setTypes(this.options.types)},t.prototype.handleChangeEvent=function(){var e=this;this.ngZone.run(function(){e.place=e.autocomplete.getPlace(),e.place&&e.onAddressChange.emit(e.place)})},t.ctorParameters=function(){return[{type:n.ElementRef},{type:n.NgZone}]},t.propDecorators={options:[{type:n.Input,args:["options"]}],onAddressChange:[{type:n.Output}]},t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone))},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","ngx-google-places-autocomplete",""]],inputs:{options:"options"},outputs:{onAddressChange:"onAddressChange"},exportAs:["ngx-places"]}),t}();t.GooglePlaceModule=function(){function t(){}return t.ctorParameters=function(){return[]},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({factory:function(e){return new(e||t)}}),t}(),t.GooglePlaceDirective=i,Object.defineProperty(t,"__esModule",{value:!0})}(n("fXoL"),t,n("fXoL"))},PCNd:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("ssao"),i=n("iTUp"),l=n("ofXK"),r=n("tmjD"),a=n("3Pt+"),m=n("7itd"),s=n("fXoL");let c=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.a,i.a,l.c,r.b,a.r,a.i,m.GooglePlaceModule],r.b]}),e})()},ZAeM:function(e,t,n){"use strict";n.r(t),n.d(t,"EmployeesModule",function(){return U});var o=n("ofXK"),i=n("tyNb"),l=n("3Pt+"),r=n("0IaG"),a=n("fXoL"),m=n("5dVO"),s=n("2g2N"),c=n("pjuo"),d=n("D1vo"),p=n("kmnG"),u=n("qFsG"),h=n("d3UM"),f=n("FKr1"),g=n("1jcm"),v=n("bTqV"),y=n("IpZF");function E(e,t){1&e&&a["\u0275\u0275element"](0,"button-dialog-close")}function w(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"h3",25),a["\u0275\u0275text"](1,"Novo funcion\xe1rio"),a["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"h3",25),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"]("Edi\xe7\xe3o ",e.employee.name,"")}}function C(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"mat-error"),a["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),a["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"mat-option",26),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275property"]("value",e.id),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate2"](" ",e.nickname?e.nickname+" - ":"","",e.description," ")}}let x=(()=>{class e{constructor(e,t,n,o,i,l){this._loader=e,this._toast=t,this._employeeService=n,this._vehicleService=o,this._dialogRef=i,this.inputData=l,this.vehicles=[],this.initForm()}ngOnInit(){this.getVehicles(),this.inputData.employeeId&&this.getEmployee().then(()=>this.setFormValues())}initForm(){this.employeeForm=new l.g({name:new l.e(null,l.s.required),documentNumber:new l.e(null),email:new l.e(null),color:new l.e(null),vehicle:new l.e(null),isManager:new l.e(null),isAgent:new l.e(null),isDriver:new l.e(null),isActive:new l.e(null)})}setFormValues(){var e;this.employeeForm.get("name").setValue(this.employee.name),this.employeeForm.get("documentNumber").setValue(this.employee.documentNumber),this.employeeForm.get("email").setValue(this.employee.email),this.employeeForm.get("color").setValue(this.employee.color),this.employeeForm.get("vehicle").setValue(null===(e=this.employee.vehicle)||void 0===e?void 0:e.id),this.employeeForm.get("isManager").setValue(this.employee.isManager),this.employeeForm.get("isAgent").setValue(this.employee.isAgent),this.employeeForm.get("isDriver").setValue(this.employee.isDriver),this.employeeForm.get("isActive").setValue(this.employee.isActive)}getEmployee(){return new Promise((e,t)=>{this._loader.show(),this._employeeService.getById(this.inputData.employeeId).subscribe(t=>{this._loader.dismiss(),this.employee=t,e(t)},e=>{this._loader.dismiss(),this._toast.showHttpError(e),t(e)})})}getVehicles(){this._vehicleService.getAll().subscribe(e=>{this.vehicles=e},e=>{this._toast.showHttpError(e)})}save(){if(!this.employeeForm.valid)throw this.employeeForm.markAllAsTouched(),this._toast.open("Preencha todos os campos obrigat\xf3rios"),new Error("Invalid form");const e={name:this.employeeForm.get("name").value,documentNumber:this.employeeForm.get("documentNumber").value,email:this.employeeForm.get("email").value,color:this.employeeForm.get("color").value,vehicleId:this.employeeForm.get("vehicle").value,isManager:this.employeeForm.get("isManager").value,isAgent:this.employeeForm.get("isAgent").value,isDriver:this.employeeForm.get("isDriver").value,isActive:this.employeeForm.get("isActive").value};let t;this.employee?(e.id=this.employee.id,t=this._employeeService.update(e)):t=this._employeeService.create(e),this._loader.show(),t.subscribe(e=>{this._loader.dismiss(),this._toast.open("Salvo com sucesso!","success"),this.employee=e,this.initForm(),this.setFormValues(),this._dialogRef.close({hasUpdate:!0})},e=>{this._loader.dismiss(),this._toast.showHttpError(e)})}get isModal(){return!!this.inputData}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](m.a),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](c.a),a["\u0275\u0275directiveInject"](d.a),a["\u0275\u0275directiveInject"](r.g),a["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-employee-form"]],decls:48,vars:6,consts:[[4,"ngIf"],[1,"row"],[1,"col-sm-12"],["class","title",4,"ngIf"],[3,"formGroup"],[1,"col-8"],["matInput","","placeholder","Nome","autocomplete","off","formControlName","name"],["name",""],[1,"col-4"],["matInput","","placeholder","Documento (opcional)","autocomplete","off","formControlName","documentNumber"],["documentNumber",""],["matInput","","type","email","placeholder","E-mail (opcional)","autocomplete","off","formControlName","email"],["email",""],["matInput","","type","color","placeholder","Cor (opcional)","autocomplete","off","formControlName","color"],["color",""],["formControlName","vehicle"],["type",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-12"],[2,"display","flex","flex-direction","row","gap","10px"],["formControlName","isManager"],["formControlName","isAgent"],["formControlName","isDriver"],["formControlName","isActive"],["mat-flat-button","","color","primary",2,"margin","24px 0",3,"click"],[1,"title"],[3,"value"]],template:function(e,t){if(1&e&&(a["\u0275\u0275template"](0,E,1,0,"button-dialog-close",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275template"](3,w,2,0,"h3",3),a["\u0275\u0275template"](4,S,2,1,"h3",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"form",4),a["\u0275\u0275elementStart"](6,"div",1),a["\u0275\u0275elementStart"](7,"div",5),a["\u0275\u0275elementStart"](8,"mat-form-field"),a["\u0275\u0275element"](9,"input",6,7),a["\u0275\u0275template"](11,C,2,0,"mat-error",0),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"div",8),a["\u0275\u0275elementStart"](13,"mat-form-field"),a["\u0275\u0275element"](14,"input",9,10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"div",8),a["\u0275\u0275elementStart"](17,"mat-form-field"),a["\u0275\u0275element"](18,"input",11,12),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](20,"div",8),a["\u0275\u0275elementStart"](21,"mat-form-field"),a["\u0275\u0275element"](22,"input",13,14),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](24,"div",8),a["\u0275\u0275elementStart"](25,"mat-form-field"),a["\u0275\u0275elementStart"](26,"mat-label"),a["\u0275\u0275text"](27,"Ve\xedculo (opcional)"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](28,"mat-select",15,16),a["\u0275\u0275elementStart"](30,"mat-option"),a["\u0275\u0275text"](31,"-"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](32,b,2,3,"mat-option",17),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](33,"div",18),a["\u0275\u0275elementStart"](34,"div",19),a["\u0275\u0275elementStart"](35,"mat-slide-toggle",20),a["\u0275\u0275text"](36,"Gerente"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](37,"mat-slide-toggle",21),a["\u0275\u0275text"](38,"Agente"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](39,"mat-slide-toggle",22),a["\u0275\u0275text"](40,"Entregador"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](41,"mat-slide-toggle",23),a["\u0275\u0275text"](42,"Ativo"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](43,"hr"),a["\u0275\u0275elementStart"](44,"div",1),a["\u0275\u0275elementStart"](45,"div",2),a["\u0275\u0275elementStart"](46,"button",24),a["\u0275\u0275listener"]("click",function(){return t.save()}),a["\u0275\u0275text"](47,"Salvar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275reference"](10);a["\u0275\u0275property"]("ngIf",t.isModal),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",!t.employee),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.employee),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("formGroup",t.employeeForm),a["\u0275\u0275advance"](6),a["\u0275\u0275property"]("ngIf",!e.valid),a["\u0275\u0275advance"](21),a["\u0275\u0275property"]("ngForOf",t.vehicles)}},directives:[o.m,l.t,l.n,l.h,p.c,u.b,l.d,l.m,l.f,p.f,h.a,f.k,o.l,g.a,v.a,y.a,p.b],styles:[""]}),e})();var I=n("K6Ak"),_=n("+0xr"),F=n("NFeN");function A(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"th",13),a["\u0275\u0275text"](1,"#"),a["\u0275\u0275elementEnd"]())}function N(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e.id)}}function j(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"th",13),a["\u0275\u0275text"](1,"Nome"),a["\u0275\u0275elementEnd"]())}function D(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.name," ")}}function M(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"th",13),a["\u0275\u0275text"](1,"Cor"),a["\u0275\u0275elementEnd"]())}function P(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275element"](1,"div",15),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275styleProp"]("background",e.color)}}function k(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"th",13),a["\u0275\u0275text"](1,"Fun\xe7\xf5es"),a["\u0275\u0275elementEnd"]())}function V(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",n.getEmployeeTypes(e)," ")}}function G(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"th",13),a["\u0275\u0275text"](1,"Fun\xe7\xf5es"),a["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate2"](" ",null!=e.vehicle&&e.vehicle.nickname?(null==e.vehicle?null:e.vehicle.nickname)+" - ":"","",null==e.vehicle?null:e.vehicle.description," ")}}function L(e,t){1&e&&a["\u0275\u0275element"](0,"th",13)}function R(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275elementStart"](1,"a",16),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"]().openForm(n.id)}),a["\u0275\u0275elementStart"](2,"mat-icon"),a["\u0275\u0275text"](3,"edit"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}}function T(e,t){1&e&&a["\u0275\u0275element"](0,"tr",17)}function X(e,t){1&e&&a["\u0275\u0275element"](0,"tr",18)}const H=[{path:"",component:(()=>{class e{constructor(e,t,n,o,i){this._loader=e,this._toast=t,this._employeeService=n,this._dialog=o,this._title=i,this.employees=[],this.tableColumns=["id","name","color","roles","vehicle","options"]}ngOnInit(){this._title.set("Funcion\xe1rios"),this.getEmployees()}getEmployees(){return new Promise((e,t)=>{this._loader.show(),this._employeeService.getAll({index:0,limit:Number.MAX_SAFE_INTEGER}).subscribe(t=>{this._loader.dismiss(),this.employees=t,e()},e=>{this._loader.dismiss(),this._toast.showHttpError(e),t()})})}openForm(e){this._dialog.open(x,{width:"90%",height:"90%",data:{employeeId:e}}).afterClosed().subscribe(e=>{e&&e.hasUpdate&&this.getEmployees()})}getEmployeeTypes(e){const t=[];return e.isManager&&t.push("Gerente"),e.isAgent&&t.push("Agente"),e.isDriver&&t.push("Entregador"),t.join(", ")}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](m.a),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](c.a),a["\u0275\u0275directiveInject"](r.b),a["\u0275\u0275directiveInject"](I.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-employees"]],decls:26,vars:3,consts:[[2,"font-size","32px","margin","16px"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","color"],["matColumnDef","roles"],["matColumnDef","vehicle"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["href","javascript:;","mat-fab","","color","primary",1,"btn-add",3,"click"],["mat-header-cell",""],["mat-cell",""],[1,"employee-color"],["href","javascript:;",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"h1",0),a["\u0275\u0275text"](1,"Funcion\xe1rios"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](2,"table",1),a["\u0275\u0275elementContainerStart"](3,2),a["\u0275\u0275template"](4,A,2,0,"th",3),a["\u0275\u0275template"](5,N,2,1,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerStart"](6,5),a["\u0275\u0275template"](7,j,2,0,"th",3),a["\u0275\u0275template"](8,D,2,1,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerStart"](9,6),a["\u0275\u0275template"](10,M,2,0,"th",3),a["\u0275\u0275template"](11,P,2,2,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerStart"](12,7),a["\u0275\u0275template"](13,k,2,0,"th",3),a["\u0275\u0275template"](14,V,2,1,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerStart"](15,8),a["\u0275\u0275template"](16,G,2,0,"th",3),a["\u0275\u0275template"](17,O,2,2,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerStart"](18,9),a["\u0275\u0275template"](19,L,1,0,"th",3),a["\u0275\u0275template"](20,R,4,0,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275template"](21,T,1,0,"tr",10),a["\u0275\u0275template"](22,X,1,0,"tr",11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"button",12),a["\u0275\u0275listener"]("click",function(){return t.openForm()}),a["\u0275\u0275elementStart"](24,"mat-icon"),a["\u0275\u0275text"](25,"add"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("dataSource",t.employees),a["\u0275\u0275advance"](19),a["\u0275\u0275property"]("matHeaderRowDef",t.tableColumns),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("matRowDefColumns",t.tableColumns))},directives:[_.j,_.c,_.e,_.b,_.g,_.i,v.a,F.a,_.d,_.a,_.f,_.h],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:64px;background:#eee;z-index:10}table[_ngcontent-%COMP%]   .employee-color[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%}.btn-add[_ngcontent-%COMP%]{position:fixed;bottom:26px;right:30px}"]}),e})()}];let $=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(H)],i.g]}),e})();var Z=n("ssao"),z=n("PCNd");let U=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,$,Z.a,z.a,l.r]]}),e})()},iTUp:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("fXoL");let i=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})()}}]);