(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4GoG":function(e,t,n){"use strict";n.d(t,"a",function(){return a});class a{static toCpfCnpj(e){return e?11==e.length?e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4"):14==e.length?e.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5"):e:null}static getOnlyNumbers(e){return e.replace(/[^0-9\\.]+/g,"")}static toMoney(e){return"R$ "+e.toFixed(2).replace(".",",")}}},"99Un":function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",function(){return _});var a=n("ofXK"),l=n("fXoL"),r=n("wd/R"),s=n("0AbP"),d=n("2g2N"),i=n("Wp6s"),o=n("kmnG"),m=n("qFsG"),c=n("NFeN"),p=n("bTqV"),u=n("Xa2L"),f=n("OJOy"),v=n("uAcK");const S=["startDateOfIssue"],g=["endDateOfIssue"],h=["scheduleNextDays"];function E(e,t){1&e&&l["\u0275\u0275element"](0,"mat-spinner",17)}function y(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",18),l["\u0275\u0275element"](1,"mat-spinner",19),l["\u0275\u0275elementEnd"]())}function I(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"td"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"td"),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"td"),l["\u0275\u0275text"](8),l["\u0275\u0275pipe"](9,"money"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"td"),l["\u0275\u0275text"](11),l["\u0275\u0275pipe"](12,"money"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate2"]("",e.product.name," (",e.product.code,")"),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.quantityIssued),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.quantityDelivered),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](9,6,e.totalIssuedSalePrice)),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](12,8,e.totalDeliveredSalePrice))}}function x(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td",24),l["\u0275\u0275text"](2,"Nenhum produto"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"table",20),l["\u0275\u0275elementStart"](1,"thead"),l["\u0275\u0275elementStart"](2,"tr"),l["\u0275\u0275elementStart"](3,"th"),l["\u0275\u0275text"](4,"Produto"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"th"),l["\u0275\u0275text"](6,"Qtd. emitida"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"th"),l["\u0275\u0275text"](8,"Qtd. entregue"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"th"),l["\u0275\u0275text"](10,"Valor (emitido)"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"th"),l["\u0275\u0275text"](12,"Valor (entregue)"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"tbody"),l["\u0275\u0275template"](14,I,13,10,"tr",21),l["\u0275\u0275template"](15,x,3,0,"tr",22),l["\u0275\u0275elementStart"](16,"tr",23),l["\u0275\u0275elementStart"](17,"td"),l["\u0275\u0275text"](18,"Total:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"td"),l["\u0275\u0275text"](20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"td"),l["\u0275\u0275text"](22),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"td"),l["\u0275\u0275text"](24),l["\u0275\u0275pipe"](25,"money"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](26,"td"),l["\u0275\u0275text"](27),l["\u0275\u0275pipe"](28,"money"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](14),l["\u0275\u0275property"]("ngForOf",e.sales.items),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!e.sales.items.length),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate"](e.sales.totalIssuedItems),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.sales.totalDeliveredItems),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](25,6,e.sales.totalIssuedSalePrice)),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](28,8,e.sales.totalDeliveredSalePrice))}}let b=(()=>{class e{constructor(e,t,n){this._dashboardService=e,this._cdRef=t,this._toast=n,this.showButtonSpinner=!1}ngAfterViewInit(){const e=r().startOf("day"),t=r().endOf("day");this.startDateOfIssueElement.nativeElement.value=e.format("YYYY-MM-DD"),this.endDateOfIssueElement.nativeElement.value=t.format("YYYY-MM-DD"),this.scheduleNextDaysElement.nativeElement.value=3,this._cdRef.detectChanges(),this.getSales(e.toISOString(),t.toISOString(),3)}refreshSales(){const e=r(this.startDateOfIssueElement.nativeElement.value).startOf("day").toISOString(),t=r(this.endDateOfIssueElement.nativeElement.value).endOf("day").toISOString(),n=Number(this.scheduleNextDaysElement.nativeElement.value);this.getSales(e,t,n)}getSales(e,t,n){this.showButtonSpinner=!0,this._cdRef.detectChanges(),this._dashboardService.getSalesByDate(e,t,n).subscribe(e=>{this.showButtonSpinner=!1,this.sales=e,this.sales.items=this.sales.items.sort((e,t)=>t.quantityIssued-e.quantityIssued)},e=>{this.showButtonSpinner=!1,this._toast.showHttpError(e)})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](l.ChangeDetectorRef),l["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-sales-by-period"]],viewQuery:function(e,t){if(1&e&&(l["\u0275\u0275viewQuery"](S,!0),l["\u0275\u0275viewQuery"](g,!0),l["\u0275\u0275viewQuery"](h,!0)),2&e){let e;l["\u0275\u0275queryRefresh"](e=l["\u0275\u0275loadQuery"]())&&(t.startDateOfIssueElement=e.first),l["\u0275\u0275queryRefresh"](e=l["\u0275\u0275loadQuery"]())&&(t.endDateOfIssueElement=e.first),l["\u0275\u0275queryRefresh"](e=l["\u0275\u0275loadQuery"]())&&(t.scheduleNextDaysElement=e.first)}},decls:38,vars:13,consts:[[1,"row"],[1,"col-12"],[1,"col-3"],["matInput","","type","date","placeholder","Data inicial","autocomplete","off"],["startDateOfIssue",""],[1,"col-1"],[1,"btn-copy-date","no-select",3,"click"],["matInput","","type","date","placeholder","Data final","autocomplete","off"],["endDateOfIssue",""],["matInput","","type","number","autocomplete","off",3,"placeholder"],["scheduleNextDays",""],[1,"col-2"],[1,"refresh"],["mat-flat-button","","color","primary",3,"disabled","click"],["diameter","30",4,"ngIf"],["class","loading-spinner",4,"ngIf"],["class","sales-table",4,"ngIf"],["diameter","30"],[1,"loading-spinner"],["diameter","60"],[1,"sales-table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"total"],["colspan","5"]],template:function(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"mat-card"),l["\u0275\u0275elementStart"](1,"div",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"mat-card-title"),l["\u0275\u0275text"](4,"Vendas por per\xedodo"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"div",0),l["\u0275\u0275elementStart"](6,"div",1),l["\u0275\u0275elementStart"](7,"mat-card-subtitle"),l["\u0275\u0275text"](8),l["\u0275\u0275pipe"](9,"momentDate"),l["\u0275\u0275pipe"](10,"momentDate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"mat-card-content"),l["\u0275\u0275elementStart"](12,"div",0),l["\u0275\u0275elementStart"](13,"div",2),l["\u0275\u0275elementStart"](14,"mat-form-field"),l["\u0275\u0275element"](15,"input",3,4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"div",5),l["\u0275\u0275elementStart"](18,"mat-icon",6),l["\u0275\u0275listener"]("click",function(){l["\u0275\u0275restoreView"](e);const t=l["\u0275\u0275reference"](23),n=l["\u0275\u0275reference"](16);return t.value=n.value}),l["\u0275\u0275text"](19," arrow_forward "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](20,"div",2),l["\u0275\u0275elementStart"](21,"mat-form-field"),l["\u0275\u0275element"](22,"input",7,8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](24,"div",2),l["\u0275\u0275elementStart"](25,"mat-form-field"),l["\u0275\u0275element"](26,"input",9,10),l["\u0275\u0275pipe"](28,"momentDate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](29,"div",11),l["\u0275\u0275elementStart"](30,"div",12),l["\u0275\u0275elementStart"](31,"button",13),l["\u0275\u0275listener"]("click",function(){return t.refreshSales()}),l["\u0275\u0275text"](32," Atualizar "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](33,E,1,0,"mat-spinner",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](34,y,2,0,"div",15),l["\u0275\u0275elementStart"](35,"div",0),l["\u0275\u0275elementStart"](36,"div",1),l["\u0275\u0275template"](37,O,29,10,"table",16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275reference"](16),n=l["\u0275\u0275reference"](23);l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate2"](" ",l["\u0275\u0275pipeBind1"](9,7,e.value)," - ",l["\u0275\u0275pipeBind1"](10,9,n.value)," "),l["\u0275\u0275advance"](18),l["\u0275\u0275property"]("placeholder","Dias de agendamento "+(n.value?"(at\xe9 "+l["\u0275\u0275pipeBind1"](28,11,n.value)+")":"")),l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("disabled",!e.value||!n.value),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.showButtonSpinner),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!t.sales),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",t.sales)}},directives:[i.a,i.e,i.d,i.b,o.c,m.b,c.a,p.a,a.m,u.b,a.l],pipes:[f.a,v.a],styles:[".loading-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:6px}.refresh[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px}.refresh[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:7px}.refresh[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-top:8px}.btn-copy-date[_ngcontent-%COMP%]{cursor:pointer;margin-top:18px;font-weight:700}.sales-table[_ngcontent-%COMP%]{width:100%}.sales-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}.sales-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .sales-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:6px}.sales-table[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{font-weight:700}.sales-table[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(td:first-child){font-size:15px;color:var(--color-pomegranate)}"]}),e})(),w=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-home"]],decls:4,vars:0,consts:[[2,"margin-top","15px"],[1,"row"],[1,"col-12"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275element"](3,"app-sales-by-period"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())},directives:[b],styles:[""]}),e})();var D=n("ssao"),C=n("tyNb"),M=n("iTUp");let _=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,D.a,M.a,C.g.forChild([{path:"",component:w}])]]}),e})()},iTUp:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("fXoL");let l=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})()}}]);