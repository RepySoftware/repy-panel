(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4GoG":function(e,t,n){"use strict";n.d(t,"a",function(){return r});class r{static toCpfCnpj(e){return e?11==e.length?e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4"):14==e.length?e.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5"):e:null}static getOnlyNumbers(e){return e.replace(/[^0-9\\.]+/g,"")}static toMoney(e){return"R$ "+e.toFixed(2).replace(".",",")}}},"7itd":function(e,t,n){!function(e,t,n){"use strict";var r=function(){return function(e){e&&Object.assign(this,e)}}(),o=function(){function t(e,t){this.el=e,this.ngZone=t,this.onAddressChange=new n.EventEmitter}return t.prototype.ngAfterViewInit=function(){this.options||(this.options=new r),this.initialize()},t.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)},t.prototype.initialize=function(){var e=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");if(this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options),!this.autocomplete)throw new Error("Autocomplete is not initialized");null!=!this.autocomplete.addListener&&(this.eventListener=this.autocomplete.addListener("place_changed",function(){e.handleChangeEvent()})),this.el.nativeElement.addEventListener("keydown",function(t){t.key&&"enter"==t.key.toLowerCase()&&t.target===e.el.nativeElement&&(t.preventDefault(),t.stopPropagation())}),window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&setTimeout(function(){var e=document.getElementsByClassName("pac-container");if(e){var t=Array.from(e);if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o&&o.addEventListener("touchend",function(e){e.stopImmediatePropagation()})}}},500)},t.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions),this.autocomplete.setTypes(this.options.types)},t.prototype.handleChangeEvent=function(){var e=this;this.ngZone.run(function(){e.place=e.autocomplete.getPlace(),e.place&&e.onAddressChange.emit(e.place)})},t.ctorParameters=function(){return[{type:n.ElementRef},{type:n.NgZone}]},t.propDecorators={options:[{type:n.Input,args:["options"]}],onAddressChange:[{type:n.Output}]},t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone))},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","ngx-google-places-autocomplete",""]],inputs:{options:"options"},outputs:{onAddressChange:"onAddressChange"},exportAs:["ngx-places"]}),t}();t.GooglePlaceModule=function(){function t(){}return t.ctorParameters=function(){return[]},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({factory:function(e){return new(e||t)}}),t}(),t.GooglePlaceDirective=o,Object.defineProperty(t,"__esModule",{value:!0})}(n("fXoL"),t,n("fXoL"))},FUS3:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("3Pt+"),o=n("fXoL");let s=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[],imports:[[r.i,r.r]]}),e})()},PCNd:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n("ssao"),o=n("iTUp"),s=n("ofXK"),i=n("tmjD"),a=n("3Pt+"),d=n("7itd"),l=n("fXoL");let m=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.a,o.a,s.c,i.b,a.r,a.i,d.GooglePlaceModule],i.b]}),e})()},YxCE:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("4GoG"),o=n("fXoL");let s=(()=>{class e{transform(e){return r.a.toCpfCnpj(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o["\u0275\u0275definePipe"]({name:"cpfCnpj",type:e,pure:!0}),e})()},aHvM:function(e,t,n){"use strict";n.d(t,"a",function(){return ee});var r=n("3Pt+"),o=n("0IaG"),s=function(e){return e.CONTRIBUTOR="CONTRIBUTOR",e.EXEMPT="EXEMPT",e.NON_CONTRIBUTOR="NON_CONTRIBUTOR",e}({});const i={[s.CONTRIBUTOR]:"Contribuinte ICMS",[s.EXEMPT]:"Contribuinte isento de Inscri\xe7\xe3o no Cadastro de Contribuintes",[s.NON_CONTRIBUTOR]:"N\xe3o contribuinte"};var a=function(e){return e.UNDEFINED="UNDEFINED",e.NATIONAL_SIMPLE="NATIONAL_SIMPLE",e.NATIONAL_SIMPLE_EXCESS_GROSS_REVENUE_SUB_LIMIT="NATIONAL_SIMPLE_EXCESS_GROSS_REVENUE_SUB_LIMIT",e.NORMAL="NORMAL",e}({});const d={[a.UNDEFINED]:"N\xe3o definido",[a.NATIONAL_SIMPLE]:"Simples nacional",[a.NATIONAL_SIMPLE_EXCESS_GROSS_REVENUE_SUB_LIMIT]:"Simples nacional - Excesso de sublimite de receita bruta",[a.NORMAL]:"Regime normal"};var l=function(e){return e.NORMAL="NORMAL",e.LEGAL="LEGAL",e}({});const m={[l.LEGAL]:"Jur\xeddica",[l.NORMAL]:"F\xedsica"};var c=n("4GoG"),p=n("fXoL"),u=n("TmGi"),f=n("tyNb"),h=n("5dVO"),g=n("2g2N"),v=n("DgsJ"),S=n("ofXK"),E=n("kmnG"),C=n("d3UM"),_=n("qFsG"),y=n("tmjD"),b=n("bSwM"),I=n("1jcm"),N=n("7itd");const F=["addressSearch"],x=function(){return{country:"BR"}},w=function(e){return{componentRestrictions:e}};let R=(()=>{class e{constructor(e,t,n){this._addressConfigService=e,this._toast=t,this._cdRef=n,this.insertedAddress=!1,this.addressTouched=!1,this.clearAddress(),this.initForm(),this._addressConfigService.setFormValuesEmitter.subscribe(()=>this.setFormValues())}ngAfterViewInit(){this.setFormValues()}initForm(){this.addressForm=new r.g({addressSearch:new r.e(null),number:new r.e(null),referencePoint:new r.e(null),complement:new r.e(null)})}clearAddress(){this._addressConfigService.address={description:null,street:null,number:null,zipCode:null,neighborhood:null,city:null,region:null,country:null,referencePoint:null,complement:null,latitude:null,longitude:null}}setFormValues(){this._addressConfigService.address?(this._addressConfigService.address={description:this._addressConfigService.address.description,street:this._addressConfigService.address.street,number:this._addressConfigService.address.number,zipCode:this._addressConfigService.address.zipCode,neighborhood:this._addressConfigService.address.neighborhood,city:this._addressConfigService.address.city,region:this._addressConfigService.address.region,country:this._addressConfigService.address.country,referencePoint:this._addressConfigService.address.referencePoint,complement:this._addressConfigService.address.complement,latitude:this._addressConfigService.address.latitude,longitude:this._addressConfigService.address.longitude},this.addressSearchInput.nativeElement.value=this._addressConfigService.address.description,this.addressForm.get("number").setValue(this._addressConfigService.address.number),this.addressForm.get("referencePoint").setValue(this._addressConfigService.address.referencePoint),this.addressForm.get("complement").setValue(this._addressConfigService.address.complement),this.insertedAddress=!0,this._cdRef.detectChanges()):this.clearAddress()}addressChanged(e){var t,n,r,o,s,i,a,d;this._addressConfigService.address.description=e.formatted_address,this._addressConfigService.address.street=null===(t=e.address_components.find(e=>e.types.includes("route")))||void 0===t?void 0:t.long_name,this._addressConfigService.address.number=null===(n=e.address_components.find(e=>e.types.includes("street_number")))||void 0===n?void 0:n.long_name,this._addressConfigService.address.zipCode=null===(r=e.address_components.find(e=>e.types.includes("postal_code")))||void 0===r?void 0:r.long_name,this._addressConfigService.address.neighborhood=null===(o=e.address_components.find(e=>e.types.includes("sublocality_level_1")))||void 0===o?void 0:o.long_name,this._addressConfigService.address.city=null===(s=e.address_components.find(e=>e.types.includes("administrative_area_level_2")))||void 0===s?void 0:s.long_name,this._addressConfigService.address.region=null===(i=e.address_components.find(e=>e.types.includes("administrative_area_level_1")))||void 0===i?void 0:i.long_name,this._addressConfigService.address.country=null===(a=e.address_components.find(e=>e.types.includes("country")))||void 0===a?void 0:a.long_name,this._addressConfigService.address.latitude=e.geometry.location.lat(),this._addressConfigService.address.longitude=e.geometry.location.lng(),this._addressConfigService.address.complement=null===(d=e.address_components.find(e=>e.types.includes("subpremise")))||void 0===d?void 0:d.long_name,this._addressConfigService.address.number&&this.addressForm.get("number").setValue(this._addressConfigService.address.number),this._addressConfigService.address.complement&&this.addressForm.get("complement").setValue(this._addressConfigService.address.complement),this._addressConfigService.address.referencePoint&&this.addressForm.get("referencePoint").setValue(this._addressConfigService.address.referencePoint),this.insertedAddress=!0}onInputExtraFields(e){this._addressConfigService.address[e]=this.addressForm.get(e).value}addressFocus(){this.addressSearchInput.nativeElement.value=null,this.insertedAddress=!1,this.clearAddress()}addressBlur(){this.addressTouched=!0}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](v.a),p["\u0275\u0275directiveInject"](g.a),p["\u0275\u0275directiveInject"](p.ChangeDetectorRef))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["app-address-config"]],viewQuery:function(e,t){if(1&e&&p["\u0275\u0275viewQuery"](F,!0),2&e){let e;p["\u0275\u0275queryRefresh"](e=p["\u0275\u0275loadQuery"]())&&(t.addressSearchInput=e.first)}},decls:19,vars:5,consts:[["autocomplete","off",3,"formGroup"],[1,"row",2,"margin-bottom","100px"],[1,"col-12"],["matInput","","formControlName","addressSearch","placeholder","Digite o endere\xe7o","autocomplete","off","ngx-google-places-autocomplete","",3,"options","onAddressChange","focus","blur"],["addressSearch","","placesRef","ngx-places"],[1,"col-md-4"],["matInput","","placeholder","N\xfamero","autocomplete","off","formControlName","number",3,"input"],["number",""],["matInput","","placeholder","Complemento (opcional)","autocomplete","off","formControlName","complement",3,"input"],["name",""],["matInput","","placeholder","Ponto de refer\xeancia (opcional)","autocomplete","off","formControlName","referencePoint",3,"input"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"div",1),p["\u0275\u0275elementStart"](2,"div",2),p["\u0275\u0275elementStart"](3,"mat-form-field"),p["\u0275\u0275elementStart"](4,"input",3,4),p["\u0275\u0275listener"]("onAddressChange",function(e){return t.addressChanged(e)})("focus",function(){return t.addressFocus()})("blur",function(){return t.addressBlur()}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"div",5),p["\u0275\u0275elementStart"](8,"mat-form-field"),p["\u0275\u0275elementStart"](9,"input",6,7),p["\u0275\u0275listener"]("input",function(){return t.onInputExtraFields("number")}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"div",5),p["\u0275\u0275elementStart"](12,"mat-form-field"),p["\u0275\u0275elementStart"](13,"input",8,9),p["\u0275\u0275listener"]("input",function(){return t.onInputExtraFields("complement")}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"div",5),p["\u0275\u0275elementStart"](16,"mat-form-field"),p["\u0275\u0275elementStart"](17,"input",10,9),p["\u0275\u0275listener"]("input",function(){return t.onInputExtraFields("referencePoint")}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.addressForm),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("options",p["\u0275\u0275pureFunction1"](3,w,p["\u0275\u0275pureFunction0"](2,x))))},directives:[r.t,r.n,r.h,E.c,_.b,r.d,r.m,r.f,N.GooglePlaceDirective],styles:[".address-input[_ngcontent-%COMP%]{width:100%;padding:13px 0 8px;border:none;outline:none;margin-left:15px;background:transparent}.input-error[_ngcontent-%COMP%]{display:block}"]}),e})();var P=n("MutI"),A=n("f0Cb"),T=n("bTqV"),O=n("IpZF"),L=n("FKr1"),M=n("NFeN"),V=n("YxCE");let j=(()=>{class e{transform(e){return function(e){return m[e]}(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=p["\u0275\u0275definePipe"]({name:"personType",type:e,pure:!0}),e})(),G=(()=>{class e{transform(e){return function(e){return d[e]}(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=p["\u0275\u0275definePipe"]({name:"personTaxRegime",type:e,pure:!0}),e})(),k=(()=>{class e{transform(e){return function(e){return i[e]}(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=p["\u0275\u0275definePipe"]({name:"personIcmsContributorType",type:e,pure:!0}),e})();function D(e,t){1&e&&p["\u0275\u0275element"](0,"button-dialog-close")}function U(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"h3",34),p["\u0275\u0275text"](1,"Nova pessoa"),p["\u0275\u0275elementEnd"]())}function B(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"h3",34),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"cpfCnpj"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate2"]("Edi\xe7\xe3o ",e.person.name," - ",p["\u0275\u0275pipeBind1"](2,2,e.person.documentNumber),"")}}function X(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"mat-option",35),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"personType"),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("value",e),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind1"](2,2,e)," ")}}function $(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"mat-error"),p["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),p["\u0275\u0275elementEnd"]())}function z(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"mat-error"),p["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),p["\u0275\u0275elementEnd"]())}function q(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"mat-error"),p["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),p["\u0275\u0275elementEnd"]())}function J(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"mat-option",35),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"personTaxRegime"),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("value",e),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind1"](2,2,e)," ")}}function Z(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"mat-error"),p["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),p["\u0275\u0275elementEnd"]())}function H(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"mat-option",35),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"personIcmsContributorType"),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("value",e),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind1"](2,2,e)," ")}}function K(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"mat-error"),p["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),p["\u0275\u0275elementEnd"]())}function Q(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"mat-error"),p["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),p["\u0275\u0275elementEnd"]())}function Y(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"mat-error"),p["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),p["\u0275\u0275elementEnd"]())}function W(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"mat-list-item",36),p["\u0275\u0275elementStart"](1,"span"),p["\u0275\u0275text"](2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"mat-icon",37),p["\u0275\u0275listener"]("click",function(){p["\u0275\u0275restoreView"](e);const n=t.index;return p["\u0275\u0275nextContext"]().removePhone(n)}),p["\u0275\u0275text"](4,"close"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"](" ",e.phone," ")}}let ee=(()=>{class e{constructor(e,t,n,r,o,i,d){this._personService=e,this._activatedRoute=t,this._loader=n,this._toast=r,this._addressConfigService=o,this._dialogRef=i,this.inputData=d,this.phones=[],this.personTypes=Object.values(l),this.personTaxRegimes=Object.values(a),this.personIcmsContributorTypes=Object.values(s),this.documentNumberMasks={[l.NORMAL]:"000.000.000-00",[l.LEGAL]:"00.000.000/0000-00"},this.initForm()}ngOnInit(){this.personId=this._activatedRoute.snapshot.params.personId||this.inputData.personId,this.isModal=!!this.inputData.personId,this.personId&&this.getPerson().then(()=>this.setFormValues())}initForm(){this.personForm=new r.g({type:new r.e(l.NORMAL,r.s.required),documentNumber:new r.e(null),name:new r.e(null),tradeName:new r.e(null),email:new r.e(null,r.s.email),isSupplier:new r.e(null),isCustomer:new r.e(!0),taxRegime:new r.e(a.UNDEFINED,r.s.required),icmsContributorType:new r.e(null),stateRegistration:new r.e(null),municipalRegistration:new r.e(null),isActive:new r.e(!0)})}setFormValues(){this.personForm.get("type").setValue(this.person.type),this.personForm.get("documentNumber").setValue(this.person.documentNumber),this.personForm.get("name").setValue(this.person.name),this.personForm.get("tradeName").setValue(this.person.tradeName),this.personForm.get("email").setValue(this.person.email),this.personForm.get("isSupplier").setValue(this.person.isSupplier),this.personForm.get("isCustomer").setValue(this.person.isCustomer),this.personForm.get("taxRegime").setValue(this.person.taxRegime),this.personForm.get("icmsContributorType").setValue(this.person.icmsContributorType),this.personForm.get("stateRegistration").setValue(this.person.stateRegistration),this.personForm.get("municipalRegistration").setValue(this.person.municipalRegistration),this.personForm.get("isActive").setValue(this.person.isActive),this._addressConfigService.address=this.person.address,this._addressConfigService.setFormValues(),this.phones=this.person.phones}getPerson(e=this.personId){return new Promise((t,n)=>{this._loader.show(),this._personService.getById(e).subscribe(e=>{this._loader.dismiss(),this.person=e,t()},e=>{this._loader.dismiss(),this._toast.showHttpError(e)})})}addPhone(e){const t=e.value?c.a.getOnlyNumbers(e.value):null;if(!t||t.length<8)throw this._toast.open("Telefone inv\xe1lido"),new Error("Invalid phone");this.phones.push({phone:t}),e.value=null,e.focus()}removePhone(e){this.phones.splice(e,1)}save(){if(!this.personForm.valid)throw this.personForm.markAllAsTouched(),this._toast.open("Preencha todos os campos obrigat\xf3rios"),new Error("Invalid form");const e={type:this.personForm.get("type").value,documentNumber:this.personForm.get("documentNumber").value,name:this.personForm.get("name").value,tradeName:this.personForm.get("tradeName").value,email:this.personForm.get("email").value,address:this._addressConfigService.address&&this._addressConfigService.address.street?{description:this._addressConfigService.address.description,street:this._addressConfigService.address.street,number:this._addressConfigService.address.number,zipCode:this._addressConfigService.address.zipCode,neighborhood:this._addressConfigService.address.neighborhood,city:this._addressConfigService.address.city,region:this._addressConfigService.address.region,country:this._addressConfigService.address.country,complement:this._addressConfigService.address.complement,referencePoint:this._addressConfigService.address.referencePoint,latitude:this._addressConfigService.address.latitude,longitude:this._addressConfigService.address.longitude}:null,isSupplier:this.personForm.get("isSupplier").value,isCustomer:this.personForm.get("isCustomer").value,taxRegime:this.personForm.get("taxRegime").value,icmsContributorType:this.personForm.get("icmsContributorType").value,stateRegistration:this.personForm.get("stateRegistration").value,municipalRegistration:this.personForm.get("municipalRegistration").value,isActive:this.personForm.get("isActive").value,personPhones:this.phones};let t;this.person?(e.id=this.person.id,t=this._personService.update(e)):t=this._personService.create(e),this._loader.show(),t.subscribe(e=>{this._loader.dismiss(),this._toast.open("Salvo com sucesso!"),this.person=e,this.initForm(),this.setFormValues(),this._dialogRef.close({hasUpdate:!0})},e=>{this._loader.dismiss(),this._toast.showHttpError(e)})}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](u.a),p["\u0275\u0275directiveInject"](f.a),p["\u0275\u0275directiveInject"](h.a),p["\u0275\u0275directiveInject"](g.a),p["\u0275\u0275directiveInject"](v.a),p["\u0275\u0275directiveInject"](o.g),p["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["app-person-form"]],decls:91,vars:17,consts:[[4,"ngIf"],[1,"row"],[1,"col-sm-12"],["class","title",4,"ngIf"],[3,"formGroup"],[1,"col-12"],[1,"col-md-3"],["formControlName","type"],["type",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","CPF/CNPJ","autocomplete","off","formControlName","documentNumber",3,"mask"],["documentNumber",""],[1,"col-md-6"],["matInput","","placeholder","Nome","autocomplete","off","formControlName","name"],["name",""],["matInput","","placeholder","Nome Fantasia","autocomplete","off","formControlName","tradeName"],["tradeName",""],[1,"col-md-6",2,"padding-top","30px"],["formControlName","isSupplier",1,"role-checkbox"],["formControlName","isCustomer",1,"role-checkbox"],["formControlName","isActive"],["formControlName","taxRegime"],["taxRegime",""],["formControlName","icmsContributorType"],["icmsContributorType",""],["matInput","","placeholder","Inscri\xe7\xe3o estadual","autocomplete","off","formControlName","stateRegistration"],["stateRegistration",""],["matInput","","placeholder","Inscri\xe7\xe3o municipal","autocomplete","off","formControlName","municipalRegistration"],["municipalRegistration",""],["class","phone-item",4,"ngFor","ngForOf"],["matInput","","placeholder","Novo telefone","mask","(00) 000000000","autocomplete","off"],["phone",""],["type","button","mat-stroked-button","",3,"disabled","click"],["mat-flat-button","","color","primary",2,"margin","24px 0",3,"click"],[1,"title"],[3,"value"],[1,"phone-item"],[1,"close",3,"click"]],template:function(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275template"](0,D,1,0,"button-dialog-close",0),p["\u0275\u0275elementStart"](1,"div",1),p["\u0275\u0275elementStart"](2,"div",2),p["\u0275\u0275template"](3,U,2,0,"h3",3),p["\u0275\u0275template"](4,B,3,4,"h3",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"form",4),p["\u0275\u0275elementStart"](6,"div",1),p["\u0275\u0275elementStart"](7,"div",5),p["\u0275\u0275elementStart"](8,"h5"),p["\u0275\u0275text"](9,"Geral"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"div",1),p["\u0275\u0275elementStart"](11,"div",6),p["\u0275\u0275elementStart"](12,"mat-form-field"),p["\u0275\u0275elementStart"](13,"mat-label"),p["\u0275\u0275text"](14,"Tipo"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"mat-select",7,8),p["\u0275\u0275template"](17,X,3,4,"mat-option",9),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](18,$,2,0,"mat-error",0),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](19,"div",6),p["\u0275\u0275elementStart"](20,"mat-form-field"),p["\u0275\u0275element"](21,"input",10,11),p["\u0275\u0275template"](23,z,2,0,"mat-error",0),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](24,"div",12),p["\u0275\u0275elementStart"](25,"mat-form-field"),p["\u0275\u0275element"](26,"input",13,14),p["\u0275\u0275template"](28,q,2,0,"mat-error",0),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](29,"div",12),p["\u0275\u0275elementStart"](30,"mat-form-field"),p["\u0275\u0275element"](31,"input",15,16),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](33,"div",17),p["\u0275\u0275elementStart"](34,"mat-checkbox",18),p["\u0275\u0275text"](35,"Fornecedor"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](36,"mat-checkbox",19),p["\u0275\u0275text"](37,"Cliente"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](38,"mat-slide-toggle",20),p["\u0275\u0275text"](39,"Ativo"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](40,"div",12),p["\u0275\u0275elementStart"](41,"mat-form-field"),p["\u0275\u0275elementStart"](42,"mat-label"),p["\u0275\u0275text"](43,"Regime tribut\xe1rio"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](44,"mat-select",21,22),p["\u0275\u0275template"](46,J,3,4,"mat-option",9),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](47,Z,2,0,"mat-error",0),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](48,"div",12),p["\u0275\u0275elementStart"](49,"mat-form-field"),p["\u0275\u0275elementStart"](50,"mat-label"),p["\u0275\u0275text"](51,"Contribuinte"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](52,"mat-select",23,24),p["\u0275\u0275template"](54,H,3,4,"mat-option",9),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](55,K,2,0,"mat-error",0),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](56,"div",12),p["\u0275\u0275elementStart"](57,"mat-form-field"),p["\u0275\u0275element"](58,"input",25,26),p["\u0275\u0275template"](60,Q,2,0,"mat-error",0),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](61,"div",12),p["\u0275\u0275elementStart"](62,"mat-form-field"),p["\u0275\u0275element"](63,"input",27,28),p["\u0275\u0275template"](65,Y,2,0,"mat-error",0),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](66,"hr"),p["\u0275\u0275elementStart"](67,"div",1),p["\u0275\u0275elementStart"](68,"div",5),p["\u0275\u0275elementStart"](69,"h5"),p["\u0275\u0275text"](70,"Endere\xe7o"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](71,"app-address-config"),p["\u0275\u0275element"](72,"hr"),p["\u0275\u0275elementStart"](73,"div",1),p["\u0275\u0275elementStart"](74,"div",5),p["\u0275\u0275elementStart"](75,"h5"),p["\u0275\u0275text"](76,"Telefones"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](77,"div",12),p["\u0275\u0275elementStart"](78,"mat-list"),p["\u0275\u0275template"](79,W,5,1,"mat-list-item",29),p["\u0275\u0275element"](80,"mat-divider"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](81,"mat-form-field"),p["\u0275\u0275element"](82,"input",30,31),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](84,"button",32),p["\u0275\u0275listener"]("click",function(){p["\u0275\u0275restoreView"](e);const n=p["\u0275\u0275reference"](83);return t.addPhone(n)}),p["\u0275\u0275text"](85,"Adicionar"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](86,"hr"),p["\u0275\u0275elementStart"](87,"div",1),p["\u0275\u0275elementStart"](88,"div",2),p["\u0275\u0275elementStart"](89,"button",33),p["\u0275\u0275listener"]("click",function(){return t.save()}),p["\u0275\u0275text"](90,"Salvar"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275reference"](16),n=p["\u0275\u0275reference"](22),r=p["\u0275\u0275reference"](27),o=p["\u0275\u0275reference"](59),s=p["\u0275\u0275reference"](64),i=p["\u0275\u0275reference"](83);p["\u0275\u0275property"]("ngIf",t.isModal),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",!t.person),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.person),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formGroup",t.personForm),p["\u0275\u0275advance"](12),p["\u0275\u0275property"]("ngForOf",t.personTypes),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!t.personForm.get("type").valid),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("mask",t.documentNumberMasks[e.value]),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",!n.valid),p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("ngIf",!r.valid),p["\u0275\u0275advance"](18),p["\u0275\u0275property"]("ngForOf",t.personTaxRegimes),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!t.personForm.get("taxRegime").valid),p["\u0275\u0275advance"](7),p["\u0275\u0275property"]("ngForOf",t.personIcmsContributorTypes),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!t.personForm.get("icmsContributorType").valid),p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("ngIf",!o.valid),p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("ngIf",!s.valid),p["\u0275\u0275advance"](14),p["\u0275\u0275property"]("ngForOf",t.phones),p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("disabled",!i.value)}},directives:[S.l,r.t,r.n,r.h,E.c,E.f,C.a,r.m,r.f,S.k,_.b,r.d,y.a,b.a,I.a,R,P.a,A.a,T.a,O.a,L.k,E.b,P.c,M.a],pipes:[V.a,j,G,k],styles:["form[_ngcontent-%COMP%]{margin-top:12px}.role-checkbox[_ngcontent-%COMP%]{margin-right:16px}.phone-item[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;right:0;cursor:pointer}"]}),e})()},iTUp:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("fXoL");let o=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})()}}]);