!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4GoG":function(e,n,o){"use strict";o.d(n,"a",function(){return i});var i=function(){function e(){t(this,e)}return r(e,null,[{key:"toCpfCnpj",value:function(e){return e?11==e.length?e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4"):14==e.length?e.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5"):e:null}},{key:"getOnlyNumbers",value:function(e){return e.replace(/[^0-9\\.]+/g,"")}},{key:"toMoney",value:function(e){return"R$ "+e.toFixed(2).replace(".",",")}}]),e}()},"7itd":function(e,t,n){!function(e,t,n){"use strict";var r=function(e){e&&Object.assign(this,e)},o=function(){function t(e,t){this.el=e,this.ngZone=t,this.onAddressChange=new n.EventEmitter}return t.prototype.ngAfterViewInit=function(){this.options||(this.options=new r),this.initialize()},t.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)},t.prototype.initialize=function(){var e=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");if(this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options),!this.autocomplete)throw new Error("Autocomplete is not initialized");null!=!this.autocomplete.addListener&&(this.eventListener=this.autocomplete.addListener("place_changed",function(){e.handleChangeEvent()})),this.el.nativeElement.addEventListener("keydown",function(t){t.key&&"enter"==t.key.toLowerCase()&&t.target===e.el.nativeElement&&(t.preventDefault(),t.stopPropagation())}),window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&setTimeout(function(){var e=document.getElementsByClassName("pac-container");if(e){var t=Array.from(e);if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o&&o.addEventListener("touchend",function(e){e.stopImmediatePropagation()})}}},500)},t.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions),this.autocomplete.setTypes(this.options.types)},t.prototype.handleChangeEvent=function(){var e=this;this.ngZone.run(function(){e.place=e.autocomplete.getPlace(),e.place&&e.onAddressChange.emit(e.place)})},t.ctorParameters=function(){return[{type:n.ElementRef},{type:n.NgZone}]},t.propDecorators={options:[{type:n.Input,args:["options"]}],onAddressChange:[{type:n.Output}]},t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone))},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","ngx-google-places-autocomplete",""]],inputs:{options:"options"},outputs:{onAddressChange:"onAddressChange"},exportAs:["ngx-places"]}),t}();t.GooglePlaceModule=function(){function t(){}return t.ctorParameters=function(){return[]},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({factory:function(e){return new(e||t)}}),t}(),t.GooglePlaceDirective=o,Object.defineProperty(t,"__esModule",{value:!0})}(n("fXoL"),t,n("fXoL"))},FUS3:function(e,n,r){"use strict";r.d(n,"a",function(){return s});var o=r("3Pt+"),i=r("fXoL"),s=function(){var e=function e(){t(this,e)};return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[],imports:[[o.i,o.r]]}),e}()},PCNd:function(e,n,r){"use strict";r.d(n,"a",function(){return c});var o=r("ssao"),i=r("iTUp"),s=r("ofXK"),a=r("tmjD"),d=r("3Pt+"),l=r("7itd"),m=r("fXoL"),c=function(){var e=function e(){t(this,e)};return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.a,i.a,s.c,a.b,d.r,d.i,l.GooglePlaceModule],a.b]}),e}()},YxCE:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var i=o("4GoG"),s=o("fXoL"),a=function(){var e=function(){function e(){t(this,e)}return r(e,[{key:"transform",value:function(e){return i.a.toCpfCnpj(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=s["\u0275\u0275definePipe"]({name:"cpfCnpj",type:e,pure:!0}),e}()},aHvM:function(n,o,i){"use strict";var s,a,d;i.d(o,"a",function(){return fe});var l,m,c,u,p=i("mrSG"),f=i("3Pt+"),h=i("0IaG"),v=function(e){return e.CONTRIBUTOR="CONTRIBUTOR",e.EXEMPT="EXEMPT",e.NON_CONTRIBUTOR="NON_CONTRIBUTOR",e}({}),g=(e(s={},v.CONTRIBUTOR,"Contribuinte ICMS"),e(s,v.EXEMPT,"Contribuinte isento de Inscri\xe7\xe3o no Cadastro de Contribuintes"),e(s,v.NON_CONTRIBUTOR,"N\xe3o contribuinte"),s),S=function(e){return e.UNDEFINED="UNDEFINED",e.NATIONAL_SIMPLE="NATIONAL_SIMPLE",e.NATIONAL_SIMPLE_EXCESS_GROSS_REVENUE_SUB_LIMIT="NATIONAL_SIMPLE_EXCESS_GROSS_REVENUE_SUB_LIMIT",e.NORMAL="NORMAL",e}({}),E=(e(a={},S.UNDEFINED,"N\xe3o definido"),e(a,S.NATIONAL_SIMPLE,"Simples nacional"),e(a,S.NATIONAL_SIMPLE_EXCESS_GROSS_REVENUE_SUB_LIMIT,"Simples nacional - Excesso de sublimite de receita bruta"),e(a,S.NORMAL,"Regime normal"),a),C=function(e){return e.NORMAL="NORMAL",e.LEGAL="LEGAL",e}({}),y=(e(d={},C.LEGAL,"Jur\xeddica"),e(d,C.NORMAL,"F\xedsica"),d),_=i("4GoG"),b=i("fXoL"),I=i("TmGi"),N=i("tyNb"),F=i("iC8P"),x=i("5dVO"),w=i("2g2N"),R=i("DgsJ"),P=i("ofXK"),O=i("kmnG"),k=i("d3UM"),A=i("qFsG"),T=i("tmjD"),L=i("bSwM"),M=i("1jcm"),j=i("7itd"),V=["addressSearch"],G=function(){return{country:"BR"}},D=function(e){return{componentRestrictions:e}},U=((l=function(){function e(n,r,o){var i=this;t(this,e),this._addressConfigService=n,this._toast=r,this._cdRef=o,this.insertedAddress=!1,this.addressTouched=!1,this.clearAddress(),this.initForm(),this._addressConfigService.setFormValuesEmitter.subscribe(function(){return i.setFormValues()})}return r(e,[{key:"ngAfterViewInit",value:function(){this.setFormValues()}},{key:"initForm",value:function(){this.addressForm=new f.g({addressSearch:new f.e(null),number:new f.e(null),referencePoint:new f.e(null),complement:new f.e(null)})}},{key:"clearAddress",value:function(){this._addressConfigService.address={description:null,street:null,number:null,zipCode:null,neighborhood:null,city:null,region:null,country:null,referencePoint:null,complement:null,latitude:null,longitude:null}}},{key:"setFormValues",value:function(){this._addressConfigService.address?(this._addressConfigService.address={description:this._addressConfigService.address.description,street:this._addressConfigService.address.street,number:this._addressConfigService.address.number,zipCode:this._addressConfigService.address.zipCode,neighborhood:this._addressConfigService.address.neighborhood,city:this._addressConfigService.address.city,region:this._addressConfigService.address.region,country:this._addressConfigService.address.country,referencePoint:this._addressConfigService.address.referencePoint,complement:this._addressConfigService.address.complement,latitude:this._addressConfigService.address.latitude,longitude:this._addressConfigService.address.longitude},this.addressSearchInput.nativeElement.value=this._addressConfigService.address.description,this.addressForm.get("number").setValue(this._addressConfigService.address.number),this.addressForm.get("referencePoint").setValue(this._addressConfigService.address.referencePoint),this.addressForm.get("complement").setValue(this._addressConfigService.address.complement),this.insertedAddress=!0,this._cdRef.detectChanges()):this.clearAddress()}},{key:"addressChanged",value:function(e){var t,n,r,o,i,s,a,d;this._addressConfigService.address.description=e.formatted_address,this._addressConfigService.address.street=null===(t=e.address_components.find(function(e){return e.types.includes("route")}))||void 0===t?void 0:t.long_name,this._addressConfigService.address.number=null===(n=e.address_components.find(function(e){return e.types.includes("street_number")}))||void 0===n?void 0:n.long_name,this._addressConfigService.address.zipCode=null===(r=e.address_components.find(function(e){return e.types.includes("postal_code")}))||void 0===r?void 0:r.long_name,this._addressConfigService.address.neighborhood=null===(o=e.address_components.find(function(e){return e.types.includes("sublocality_level_1")}))||void 0===o?void 0:o.long_name,this._addressConfigService.address.city=null===(i=e.address_components.find(function(e){return e.types.includes("administrative_area_level_2")}))||void 0===i?void 0:i.long_name,this._addressConfigService.address.region=null===(s=e.address_components.find(function(e){return e.types.includes("administrative_area_level_1")}))||void 0===s?void 0:s.long_name,this._addressConfigService.address.country=null===(a=e.address_components.find(function(e){return e.types.includes("country")}))||void 0===a?void 0:a.long_name,this._addressConfigService.address.latitude=e.geometry.location.lat(),this._addressConfigService.address.longitude=e.geometry.location.lng(),this._addressConfigService.address.complement=null===(d=e.address_components.find(function(e){return e.types.includes("subpremise")}))||void 0===d?void 0:d.long_name,this._addressConfigService.address.number&&this.addressForm.get("number").setValue(this._addressConfigService.address.number),this._addressConfigService.address.complement&&this.addressForm.get("complement").setValue(this._addressConfigService.address.complement),this._addressConfigService.address.referencePoint&&this.addressForm.get("referencePoint").setValue(this._addressConfigService.address.referencePoint),this.insertedAddress=!0}},{key:"onInputExtraFields",value:function(e){this._addressConfigService.address[e]=this.addressForm.get(e).value}},{key:"addressFocus",value:function(){this.addressSearchInput.nativeElement.value=null,this.insertedAddress=!1,this.clearAddress()}},{key:"addressBlur",value:function(){this.addressTouched=!0}}]),e}()).\u0275fac=function(e){return new(e||l)(b["\u0275\u0275directiveInject"](R.a),b["\u0275\u0275directiveInject"](w.a),b["\u0275\u0275directiveInject"](b.ChangeDetectorRef))},l.\u0275cmp=b["\u0275\u0275defineComponent"]({type:l,selectors:[["app-address-config"]],viewQuery:function(e,t){var n;1&e&&b["\u0275\u0275viewQuery"](V,!0),2&e&&b["\u0275\u0275queryRefresh"](n=b["\u0275\u0275loadQuery"]())&&(t.addressSearchInput=n.first)},decls:19,vars:5,consts:[["autocomplete","off",3,"formGroup"],[1,"row",2,"margin-bottom","100px"],[1,"col-12"],["matInput","","formControlName","addressSearch","placeholder","Digite o endere\xe7o","autocomplete","off","ngx-google-places-autocomplete","",3,"options","onAddressChange","focus","blur"],["addressSearch","","placesRef","ngx-places"],[1,"col-md-4"],["matInput","","placeholder","N\xfamero","autocomplete","off","formControlName","number",3,"input"],["number",""],["matInput","","placeholder","Complemento (opcional)","autocomplete","off","formControlName","complement",3,"input"],["name",""],["matInput","","placeholder","Ponto de refer\xeancia (opcional)","autocomplete","off","formControlName","referencePoint",3,"input"]],template:function(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"form",0),b["\u0275\u0275elementStart"](1,"div",1),b["\u0275\u0275elementStart"](2,"div",2),b["\u0275\u0275elementStart"](3,"mat-form-field"),b["\u0275\u0275elementStart"](4,"input",3,4),b["\u0275\u0275listener"]("onAddressChange",function(e){return t.addressChanged(e)})("focus",function(){return t.addressFocus()})("blur",function(){return t.addressBlur()}),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](7,"div",5),b["\u0275\u0275elementStart"](8,"mat-form-field"),b["\u0275\u0275elementStart"](9,"input",6,7),b["\u0275\u0275listener"]("input",function(){return t.onInputExtraFields("number")}),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](11,"div",5),b["\u0275\u0275elementStart"](12,"mat-form-field"),b["\u0275\u0275elementStart"](13,"input",8,9),b["\u0275\u0275listener"]("input",function(){return t.onInputExtraFields("complement")}),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](15,"div",5),b["\u0275\u0275elementStart"](16,"mat-form-field"),b["\u0275\u0275elementStart"](17,"input",10,9),b["\u0275\u0275listener"]("input",function(){return t.onInputExtraFields("referencePoint")}),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"]()),2&e&&(b["\u0275\u0275property"]("formGroup",t.addressForm),b["\u0275\u0275advance"](4),b["\u0275\u0275property"]("options",b["\u0275\u0275pureFunction1"](3,D,b["\u0275\u0275pureFunction0"](2,G))))},directives:[f.t,f.n,f.h,O.c,A.b,f.d,f.m,f.f,j.GooglePlaceDirective],styles:[".address-input[_ngcontent-%COMP%]{width:100%;padding:13px 0 8px;border:none;outline:none;margin-left:15px;background:transparent}.input-error[_ngcontent-%COMP%]{display:block}"]}),l),B=i("MutI"),X=i("f0Cb"),$=i("bTqV"),z=i("IpZF"),q=i("FKr1"),Q=i("NFeN"),J=i("YxCE"),Z=((u=function(){function e(){t(this,e)}return r(e,[{key:"transform",value:function(e){return function(e){return y[e]}(e)}}]),e}()).\u0275fac=function(e){return new(e||u)},u.\u0275pipe=b["\u0275\u0275definePipe"]({name:"personType",type:u,pure:!0}),u),W=((c=function(){function e(){t(this,e)}return r(e,[{key:"transform",value:function(e){return function(e){return E[e]}(e)}}]),e}()).\u0275fac=function(e){return new(e||c)},c.\u0275pipe=b["\u0275\u0275definePipe"]({name:"personTaxRegime",type:c,pure:!0}),c),H=((m=function(){function e(){t(this,e)}return r(e,[{key:"transform",value:function(e){return function(e){return g[e]}(e)}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275pipe=b["\u0275\u0275definePipe"]({name:"personIcmsContributorType",type:m,pure:!0}),m),K=["phone"];function Y(e,t){1&e&&b["\u0275\u0275element"](0,"button-dialog-close")}function ee(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"h3",34),b["\u0275\u0275text"](1,"Nova pessoa"),b["\u0275\u0275elementEnd"]())}function te(e,t){if(1&e&&(b["\u0275\u0275elementStart"](0,"h3",34),b["\u0275\u0275text"](1),b["\u0275\u0275pipe"](2,"cpfCnpj"),b["\u0275\u0275elementEnd"]()),2&e){var n=b["\u0275\u0275nextContext"]();b["\u0275\u0275advance"](1),b["\u0275\u0275textInterpolate2"]("Edi\xe7\xe3o ",n.person.name," - ",b["\u0275\u0275pipeBind1"](2,2,n.person.documentNumber),"")}}function ne(e,t){if(1&e&&(b["\u0275\u0275elementStart"](0,"mat-option",35),b["\u0275\u0275text"](1),b["\u0275\u0275pipe"](2,"personType"),b["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;b["\u0275\u0275property"]("value",n),b["\u0275\u0275advance"](1),b["\u0275\u0275textInterpolate1"](" ",b["\u0275\u0275pipeBind1"](2,2,n)," ")}}function re(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"mat-error"),b["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),b["\u0275\u0275elementEnd"]())}function oe(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"mat-error"),b["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),b["\u0275\u0275elementEnd"]())}function ie(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"mat-error"),b["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),b["\u0275\u0275elementEnd"]())}function se(e,t){if(1&e&&(b["\u0275\u0275elementStart"](0,"mat-option",35),b["\u0275\u0275text"](1),b["\u0275\u0275pipe"](2,"personTaxRegime"),b["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;b["\u0275\u0275property"]("value",n),b["\u0275\u0275advance"](1),b["\u0275\u0275textInterpolate1"](" ",b["\u0275\u0275pipeBind1"](2,2,n)," ")}}function ae(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"mat-error"),b["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),b["\u0275\u0275elementEnd"]())}function de(e,t){if(1&e&&(b["\u0275\u0275elementStart"](0,"mat-option",35),b["\u0275\u0275text"](1),b["\u0275\u0275pipe"](2,"personIcmsContributorType"),b["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;b["\u0275\u0275property"]("value",n),b["\u0275\u0275advance"](1),b["\u0275\u0275textInterpolate1"](" ",b["\u0275\u0275pipeBind1"](2,2,n)," ")}}function le(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"mat-error"),b["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),b["\u0275\u0275elementEnd"]())}function me(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"mat-error"),b["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),b["\u0275\u0275elementEnd"]())}function ce(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"mat-error"),b["\u0275\u0275text"](1," Este campo \xe9 obrigat\xf3rio "),b["\u0275\u0275elementEnd"]())}function ue(e,t){if(1&e){var n=b["\u0275\u0275getCurrentView"]();b["\u0275\u0275elementStart"](0,"mat-list-item",36),b["\u0275\u0275elementStart"](1,"span"),b["\u0275\u0275text"](2),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](3,"mat-icon",37),b["\u0275\u0275listener"]("click",function(){b["\u0275\u0275restoreView"](n);var e=t.index;return b["\u0275\u0275nextContext"]().removePhone(e)}),b["\u0275\u0275text"](4,"close"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;b["\u0275\u0275advance"](2),b["\u0275\u0275textInterpolate1"](" ",r.phone," ")}}var pe,fe=((pe=function(){function n(r,o,i,s,a,d,l,m){var c;t(this,n),this._personService=r,this._activatedRoute=o,this._alert=i,this._loader=s,this._toast=a,this._addressConfigService=d,this._dialogRef=l,this.inputData=m,this.phones=[],this.personTypes=Object.values(C),this.personTaxRegimes=Object.values(S),this.personIcmsContributorTypes=Object.values(v),this.documentNumberMasks=(e(c={},C.NORMAL,"000.000.000-00"),e(c,C.LEGAL,"00.000.000/0000-00"),c),this.initForm()}return r(n,[{key:"ngOnInit",value:function(){var e=this;this.personId=this._activatedRoute.snapshot.params.personId||this.inputData.personId,this.isModal=!!this.inputData.personId,this.personId&&this.getPerson().then(function(){return e.setFormValues()})}},{key:"initForm",value:function(){this.personForm=new f.g({type:new f.e(C.NORMAL,f.s.required),documentNumber:new f.e(null),name:new f.e(null),tradeName:new f.e(null),email:new f.e(null,f.s.email),isSupplier:new f.e(null),isCustomer:new f.e(!0),taxRegime:new f.e(S.UNDEFINED,f.s.required),icmsContributorType:new f.e(null),stateRegistration:new f.e(null),municipalRegistration:new f.e(null),isActive:new f.e(!0)})}},{key:"setFormValues",value:function(){this.personForm.get("type").setValue(this.person.type),this.personForm.get("documentNumber").setValue(this.person.documentNumber),this.personForm.get("name").setValue(this.person.name),this.personForm.get("tradeName").setValue(this.person.tradeName),this.personForm.get("email").setValue(this.person.email),this.personForm.get("isSupplier").setValue(this.person.isSupplier),this.personForm.get("isCustomer").setValue(this.person.isCustomer),this.personForm.get("taxRegime").setValue(this.person.taxRegime),this.personForm.get("icmsContributorType").setValue(this.person.icmsContributorType),this.personForm.get("stateRegistration").setValue(this.person.stateRegistration),this.personForm.get("municipalRegistration").setValue(this.person.municipalRegistration),this.personForm.get("isActive").setValue(this.person.isActive),this._addressConfigService.address=this.person.address,this._addressConfigService.setFormValues(),this.phones=this.person.phones}},{key:"getPerson",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.personId;return new Promise(function(n,r){e._loader.show(),e._personService.getById(t).subscribe(function(t){e._loader.dismiss(),e.person=t,n()},function(t){e._loader.dismiss(),e._toast.showHttpError(t)})})}},{key:"addPhone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.phoneElement.nativeElement.value,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e?_.a.getOnlyNumbers(e):null;!r||r.length<8?this._toast.open("Telefone inv\xe1lido"):(this.phones.push({phone:r}),t&&(this.phoneElement.nativeElement.value=null),n&&this.phoneElement.nativeElement.focus())}},{key:"removePhone",value:function(e){this.phones.splice(e,1)}},{key:"save",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,r,o,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.personForm.valid){e.next=2;break}throw this.personForm.markAllAsTouched(),this._toast.open("Preencha todos os campos obrigat\xf3rios"),new Error("Invalid form");case 2:if(!this.phoneElement.nativeElement.value){e.next=10;break}return t=this._alert.open({message:"Voc\xea digitou o telefone <strong>".concat(this.phoneElement.nativeElement.value,"</strong> mas n\xe3o adicionou.<br><br>Adicionar telefone?"),buttons:[{text:"N\xe3o",color:"basic",closeOnClick:!1,onClick:function(e){return e.close({closedWithOption:"no"})}},{text:"Sim",color:"primary",onClick:function(e){return e.close({closedWithOption:"yes"})}}]}),e.next=6,t.afterClosed().toPromise();case 6:if(null==(n=e.sent)?void 0:n.closedWithOption){e.next=9;break}return e.abrupt("return");case 9:"yes"==(null==n?void 0:n.closedWithOption)&&this.addPhone(this.phoneElement.nativeElement.value,!0,!1);case 10:r={type:this.personForm.get("type").value,documentNumber:this.personForm.get("documentNumber").value,name:this.personForm.get("name").value,tradeName:this.personForm.get("tradeName").value,email:this.personForm.get("email").value,address:this._addressConfigService.address&&this._addressConfigService.address.street?{description:this._addressConfigService.address.description,street:this._addressConfigService.address.street,number:this._addressConfigService.address.number,zipCode:this._addressConfigService.address.zipCode,neighborhood:this._addressConfigService.address.neighborhood,city:this._addressConfigService.address.city,region:this._addressConfigService.address.region,country:this._addressConfigService.address.country,complement:this._addressConfigService.address.complement,referencePoint:this._addressConfigService.address.referencePoint,latitude:this._addressConfigService.address.latitude,longitude:this._addressConfigService.address.longitude}:null,isSupplier:this.personForm.get("isSupplier").value,isCustomer:this.personForm.get("isCustomer").value,taxRegime:this.personForm.get("taxRegime").value,icmsContributorType:this.personForm.get("icmsContributorType").value,stateRegistration:this.personForm.get("stateRegistration").value,municipalRegistration:this.personForm.get("municipalRegistration").value,isActive:this.personForm.get("isActive").value,personPhones:this.phones},this.person?(r.id=this.person.id,o=this._personService.update(r)):o=this._personService.create(r),this._loader.show(),o.subscribe(function(e){i._loader.dismiss(),i._toast.open("Salvo com sucesso!","success"),i.person=e,i.initForm(),i.setFormValues(),i._dialogRef.close({hasUpdate:!0})},function(e){i._loader.dismiss(),i._toast.showHttpError(e)});case 12:case"end":return e.stop()}},e,this)}))}}]),n}()).\u0275fac=function(e){return new(e||pe)(b["\u0275\u0275directiveInject"](I.a),b["\u0275\u0275directiveInject"](N.a),b["\u0275\u0275directiveInject"](F.a),b["\u0275\u0275directiveInject"](x.a),b["\u0275\u0275directiveInject"](w.a),b["\u0275\u0275directiveInject"](R.a),b["\u0275\u0275directiveInject"](h.g),b["\u0275\u0275directiveInject"](h.a))},pe.\u0275cmp=b["\u0275\u0275defineComponent"]({type:pe,selectors:[["app-person-form"]],viewQuery:function(e,t){var n;1&e&&b["\u0275\u0275viewQuery"](K,!0),2&e&&b["\u0275\u0275queryRefresh"](n=b["\u0275\u0275loadQuery"]())&&(t.phoneElement=n.first)},decls:91,vars:17,consts:[[4,"ngIf"],[1,"row"],[1,"col-sm-12"],["class","title",4,"ngIf"],[3,"formGroup"],[1,"col-12"],[1,"col-md-3"],["formControlName","type"],["type",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","CPF/CNPJ","autocomplete","off","formControlName","documentNumber",3,"mask"],["documentNumber",""],[1,"col-md-6"],["matInput","","placeholder","Nome","autocomplete","off","formControlName","name"],["name",""],["matInput","","placeholder","Nome Fantasia","autocomplete","off","formControlName","tradeName"],["tradeName",""],[1,"col-md-6",2,"padding-top","30px"],["formControlName","isSupplier",1,"role-checkbox"],["formControlName","isCustomer",1,"role-checkbox"],["formControlName","isActive"],["formControlName","taxRegime"],["taxRegime",""],["formControlName","icmsContributorType"],["icmsContributorType",""],["matInput","","placeholder","Inscri\xe7\xe3o estadual","autocomplete","off","formControlName","stateRegistration"],["stateRegistration",""],["matInput","","placeholder","Inscri\xe7\xe3o municipal","autocomplete","off","formControlName","municipalRegistration"],["municipalRegistration",""],["class","phone-item",4,"ngFor","ngForOf"],["matInput","","placeholder","Novo telefone","mask","(00) 000000000","autocomplete","off"],["phone",""],["type","button","mat-stroked-button","",3,"disabled","click"],["mat-flat-button","","color","primary",2,"margin","24px 0",3,"click"],[1,"title"],[3,"value"],[1,"phone-item"],[1,"close",3,"click"]],template:function(e,t){if(1&e&&(b["\u0275\u0275template"](0,Y,1,0,"button-dialog-close",0),b["\u0275\u0275elementStart"](1,"div",1),b["\u0275\u0275elementStart"](2,"div",2),b["\u0275\u0275template"](3,ee,2,0,"h3",3),b["\u0275\u0275template"](4,te,3,4,"h3",3),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](5,"form",4),b["\u0275\u0275elementStart"](6,"div",1),b["\u0275\u0275elementStart"](7,"div",5),b["\u0275\u0275elementStart"](8,"h5"),b["\u0275\u0275text"](9,"Geral"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](10,"div",1),b["\u0275\u0275elementStart"](11,"div",6),b["\u0275\u0275elementStart"](12,"mat-form-field"),b["\u0275\u0275elementStart"](13,"mat-label"),b["\u0275\u0275text"](14,"Tipo"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](15,"mat-select",7,8),b["\u0275\u0275template"](17,ne,3,4,"mat-option",9),b["\u0275\u0275elementEnd"](),b["\u0275\u0275template"](18,re,2,0,"mat-error",0),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](19,"div",6),b["\u0275\u0275elementStart"](20,"mat-form-field"),b["\u0275\u0275element"](21,"input",10,11),b["\u0275\u0275template"](23,oe,2,0,"mat-error",0),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](24,"div",12),b["\u0275\u0275elementStart"](25,"mat-form-field"),b["\u0275\u0275element"](26,"input",13,14),b["\u0275\u0275template"](28,ie,2,0,"mat-error",0),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](29,"div",12),b["\u0275\u0275elementStart"](30,"mat-form-field"),b["\u0275\u0275element"](31,"input",15,16),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](33,"div",17),b["\u0275\u0275elementStart"](34,"mat-checkbox",18),b["\u0275\u0275text"](35,"Fornecedor"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](36,"mat-checkbox",19),b["\u0275\u0275text"](37,"Cliente"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](38,"mat-slide-toggle",20),b["\u0275\u0275text"](39,"Ativo"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](40,"div",12),b["\u0275\u0275elementStart"](41,"mat-form-field"),b["\u0275\u0275elementStart"](42,"mat-label"),b["\u0275\u0275text"](43,"Regime tribut\xe1rio"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](44,"mat-select",21,22),b["\u0275\u0275template"](46,se,3,4,"mat-option",9),b["\u0275\u0275elementEnd"](),b["\u0275\u0275template"](47,ae,2,0,"mat-error",0),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](48,"div",12),b["\u0275\u0275elementStart"](49,"mat-form-field"),b["\u0275\u0275elementStart"](50,"mat-label"),b["\u0275\u0275text"](51,"Contribuinte"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](52,"mat-select",23,24),b["\u0275\u0275template"](54,de,3,4,"mat-option",9),b["\u0275\u0275elementEnd"](),b["\u0275\u0275template"](55,le,2,0,"mat-error",0),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](56,"div",12),b["\u0275\u0275elementStart"](57,"mat-form-field"),b["\u0275\u0275element"](58,"input",25,26),b["\u0275\u0275template"](60,me,2,0,"mat-error",0),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](61,"div",12),b["\u0275\u0275elementStart"](62,"mat-form-field"),b["\u0275\u0275element"](63,"input",27,28),b["\u0275\u0275template"](65,ce,2,0,"mat-error",0),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275element"](66,"hr"),b["\u0275\u0275elementStart"](67,"div",1),b["\u0275\u0275elementStart"](68,"div",5),b["\u0275\u0275elementStart"](69,"h5"),b["\u0275\u0275text"](70,"Endere\xe7o"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275element"](71,"app-address-config"),b["\u0275\u0275element"](72,"hr"),b["\u0275\u0275elementStart"](73,"div",1),b["\u0275\u0275elementStart"](74,"div",5),b["\u0275\u0275elementStart"](75,"h5"),b["\u0275\u0275text"](76,"Telefones"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](77,"div",12),b["\u0275\u0275elementStart"](78,"mat-list"),b["\u0275\u0275template"](79,ue,5,1,"mat-list-item",29),b["\u0275\u0275element"](80,"mat-divider"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](81,"mat-form-field"),b["\u0275\u0275element"](82,"input",30,31),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](84,"button",32),b["\u0275\u0275listener"]("click",function(){return t.addPhone()}),b["\u0275\u0275text"](85,"Adicionar"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275element"](86,"hr"),b["\u0275\u0275elementStart"](87,"div",1),b["\u0275\u0275elementStart"](88,"div",2),b["\u0275\u0275elementStart"](89,"button",33),b["\u0275\u0275listener"]("click",function(){return t.save()}),b["\u0275\u0275text"](90,"Salvar"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"]()),2&e){var n=b["\u0275\u0275reference"](16),r=b["\u0275\u0275reference"](22),o=b["\u0275\u0275reference"](27),i=b["\u0275\u0275reference"](59),s=b["\u0275\u0275reference"](64),a=b["\u0275\u0275reference"](83);b["\u0275\u0275property"]("ngIf",t.isModal),b["\u0275\u0275advance"](3),b["\u0275\u0275property"]("ngIf",!t.person),b["\u0275\u0275advance"](1),b["\u0275\u0275property"]("ngIf",t.person),b["\u0275\u0275advance"](1),b["\u0275\u0275property"]("formGroup",t.personForm),b["\u0275\u0275advance"](12),b["\u0275\u0275property"]("ngForOf",t.personTypes),b["\u0275\u0275advance"](1),b["\u0275\u0275property"]("ngIf",!t.personForm.get("type").valid),b["\u0275\u0275advance"](3),b["\u0275\u0275property"]("mask",t.documentNumberMasks[n.value]),b["\u0275\u0275advance"](2),b["\u0275\u0275property"]("ngIf",!r.valid),b["\u0275\u0275advance"](5),b["\u0275\u0275property"]("ngIf",!o.valid),b["\u0275\u0275advance"](18),b["\u0275\u0275property"]("ngForOf",t.personTaxRegimes),b["\u0275\u0275advance"](1),b["\u0275\u0275property"]("ngIf",!t.personForm.get("taxRegime").valid),b["\u0275\u0275advance"](7),b["\u0275\u0275property"]("ngForOf",t.personIcmsContributorTypes),b["\u0275\u0275advance"](1),b["\u0275\u0275property"]("ngIf",!t.personForm.get("icmsContributorType").valid),b["\u0275\u0275advance"](5),b["\u0275\u0275property"]("ngIf",!i.valid),b["\u0275\u0275advance"](5),b["\u0275\u0275property"]("ngIf",!s.valid),b["\u0275\u0275advance"](14),b["\u0275\u0275property"]("ngForOf",t.phones),b["\u0275\u0275advance"](5),b["\u0275\u0275property"]("disabled",!a.value)}},directives:[P.l,f.t,f.n,f.h,O.c,O.f,k.a,f.m,f.f,P.k,A.b,f.d,T.a,L.a,M.a,U,B.a,X.a,$.a,z.a,q.k,O.b,B.c,Q.a],pipes:[J.a,Z,W,H],styles:["form[_ngcontent-%COMP%]{margin-top:12px}.role-checkbox[_ngcontent-%COMP%]{margin-right:16px}.phone-item[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;right:0;cursor:pointer}"]}),pe)},iTUp:function(e,n,r){"use strict";r.d(n,"a",function(){return i});var o=r("fXoL"),i=function(){var e=function e(){t(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e}()}}])}();