(self.webpackChunkrepy_panel=self.webpackChunkrepy_panel||[]).push([[592],{78434:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(3679),o=n(37716);let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({providers:[],imports:[[r.u5,r.UX]]}),e})()},92914:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});class r{static format(e){if(!e)return null;let t="";if(e.description){const n=e;t+=n.street,t+=n.number?`, ${n.number}`:"",t+=n.complement?` (${n.complement}${n.referencePoint?" - "+n.referencePoint:""})`:"",t+=n.neighborhood?` - ${n.neighborhood}`:"",t+=` - ${n.city}`,t+=` - ${n.region}`}else{const n=e;t+=n.addressStreet,t+=n.addressNumber?`, ${n.addressNumber}`:"",t+=n.addressComplement?` (${n.addressComplement}${n.addressReferencePoint?" - "+n.addressReferencePoint:""})`:"",t+=n.addressNeighborhood?` - ${n.addressNeighborhood}`:"",t+=` - ${n.addressCity}`,t+=` - ${n.addressRegion}`}return t}}},75100:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var r=n(92914),o=n(37716);let i=(()=>{class e{transform(e){return r.h.format(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o["\u0275\u0275definePipe"]({name:"address",type:e,pure:!0}),e})()},69604:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(16738),o=n(37716);let i=(()=>{class e{transform(e,t="L"){return r(e).calendar()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o["\u0275\u0275definePipe"]({name:"momentCalendar",type:e,pure:!0}),e})()},26835:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});var r=n(16738),o=n(37716);let i=(()=>{class e{transform(e,t="L"){return e?r(e).format(t):"-"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o["\u0275\u0275definePipe"]({name:"momentDate",type:e,pure:!0}),e})()},15169:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(3769),o=n(37716);let i=(()=>{class e{transform(e){return null!=e?r.E.toMoney(e):"-"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o["\u0275\u0275definePipe"]({name:"money",type:e,pure:!0}),e})()},54822:function(e,t,n){"use strict";n.d(t,{Y:function(){return h}});var r=n(79765),o=n(54395),i=n(37716),s=n(98295),u=n(49983),l=n(21554),c=n(51095),a=n(76627),p=n(38583),m=n(72458);const d=["autocompleteInput"];function f(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"mat-option",6),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275property"]("value",e.value),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.label," ")}}let h=(()=>{class e{constructor(e){this._cdRef=e,this.disabled=!1,this.items=[],this.onInputSubject=new r.xQ}ngOnInit(){this.onInputSubject.pipe((0,o.b)(300)).subscribe(e=>this.options.onGetItems(e).subscribe(e=>this.items=e))}selectItem(e){this.selectedItem=e,this.autocompleteInput.nativeElement.value=this.selectedItem.label,this.options.onSelectItem(this.selectedItem),this._cdRef.detectChanges()}onSelectItem(e){const t=this.items.find(t=>t.value==e.option.value);this.selectItem(t)}onBlur(){this.autocompleteInput.nativeElement.value=this.selectedItem?this.selectedItem.label:null}onFocus(){this.autocompleteInput.nativeElement.value=null}clear(){this.items=[],this.autocompleteInput.nativeElement.value=null,this.selectedItem=null,this.options.emitOnClear&&this.options.onSelectItem({value:null,label:null})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](i.ChangeDetectorRef))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-autocomplete"]],viewQuery:function(e,t){if(1&e&&i["\u0275\u0275viewQuery"](d,5),2&e){let e;i["\u0275\u0275queryRefresh"](e=i["\u0275\u0275loadQuery"]())&&(t.autocompleteInput=e.first)}},inputs:{options:"options",disabled:"disabled"},decls:9,vars:4,consts:[["type","text","autocomplete","off","matInput","",3,"placeholder","matAutocomplete","disabled","input","blur","focus"],["autocompleteInput",""],["mat-icon-button","","matSuffix","",3,"click"],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"mat-form-field"),i["\u0275\u0275elementStart"](1,"input",0,1),i["\u0275\u0275listener"]("input",function(){i["\u0275\u0275restoreView"](e);const n=i["\u0275\u0275reference"](2);return t.onInputSubject.next(n.value)})("blur",function(){return t.onBlur()})("focus",function(){return t.onFocus()}),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"button",2),i["\u0275\u0275listener"]("click",function(){return t.clear()}),i["\u0275\u0275elementStart"](4,"mat-icon"),i["\u0275\u0275text"](5,"close"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"mat-autocomplete",3,4),i["\u0275\u0275listener"]("optionSelected",function(e){return t.onSelectItem(e)}),i["\u0275\u0275template"](8,f,2,2,"mat-option",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275reference"](7);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("placeholder",null==t.options?null:t.options.placeholder)("matAutocomplete",e)("disabled",t.disabled),i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("ngForOf",t.items)}},directives:[s.KE,u.Nt,l.ZL,c.lW,s.R9,a.Hw,l.XC,p.sg,m.ey],styles:[""]}),e})()}}]);