(self.webpackChunkrepy_panel=self.webpackChunkrepy_panel||[]).push([[33],{3769:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});class a{static toCpfCnpj(e){return e?11==e.length?e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4"):14==e.length?e.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5"):e:null}static getOnlyNumbers(e){return e.replace(/[^0-9\\.]+/g,"")}static toMoney(e){return`R$ ${e.toFixed(2).replace(".",",")}`}}},93402:function(e,t,n){"use strict";n.r(t),n.d(t,{HomeModule:function(){return H}});var a=n(38583),l=n(37716),r=n(26026),i=n(54655),s=n(25352),m=n(65939),o=n(16738),d=n(9386),c=n(84465),p=n(93738),u=n(98295),S=n(43220),f=n(51095),x=n(4885),v=n(15169);const h=["startDateOfIssue"],g=["endDateOfIssue"];function E(e,t){1&e&&l["\u0275\u0275element"](0,"mat-spinner",17)}function y(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",18),l["\u0275\u0275element"](1,"mat-spinner",19),l["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"td"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"td"),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"td"),l["\u0275\u0275text"](8),l["\u0275\u0275pipe"](9,"money"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"td"),l["\u0275\u0275text"](11),l["\u0275\u0275pipe"](12,"money"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate2"]("",e.product.name," (",e.product.code,")"),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.quantityIssued),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.quantityDelivered),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](9,6,e.totalIssuedSalePrice)),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](12,8,e.totalDeliveredSalePrice))}}function D(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td",24),l["\u0275\u0275text"](2,"Nenhum produto"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())}function I(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"table",20),l["\u0275\u0275elementStart"](1,"thead"),l["\u0275\u0275elementStart"](2,"tr"),l["\u0275\u0275elementStart"](3,"th"),l["\u0275\u0275text"](4,"Produto"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"th"),l["\u0275\u0275text"](6,"Qtd. emitida"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"th"),l["\u0275\u0275text"](8,"Qtd. entregue"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"th"),l["\u0275\u0275text"](10,"Valor (emitido)"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"th"),l["\u0275\u0275text"](12,"Valor (entregue)"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"tbody"),l["\u0275\u0275template"](14,M,13,10,"tr",21),l["\u0275\u0275template"](15,D,3,0,"tr",22),l["\u0275\u0275elementStart"](16,"tr",23),l["\u0275\u0275elementStart"](17,"td"),l["\u0275\u0275text"](18,"Total:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"td"),l["\u0275\u0275text"](20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"td"),l["\u0275\u0275text"](22),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"td"),l["\u0275\u0275text"](24),l["\u0275\u0275pipe"](25,"money"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](26,"td"),l["\u0275\u0275text"](27),l["\u0275\u0275pipe"](28,"money"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](14),l["\u0275\u0275property"]("ngForOf",e.sales.items),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!e.sales.items.length),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate"](e.sales.totalIssuedItems),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.sales.totalDeliveredItems),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](25,6,e.sales.totalIssuedSalePrice)),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](28,8,e.sales.totalDeliveredSalePrice))}}let O=(()=>{class e{constructor(e,t,n){this._dashboardService=e,this._cdRef=t,this._toast=n,this.showButtonSpinner=!1}ngAfterViewInit(){const e=o().startOf("day"),t=o().endOf("day");this.startDateOfIssueElement.nativeElement.value=e.format("DD/MM/YYYY"),this.endDateOfIssueElement.nativeElement.value=t.format("DD/MM/YYYY"),this._cdRef.detectChanges(),this.getSales(e.toISOString(),t.toISOString())}refreshSales(){const e=o(this.startDateOfIssueElement.nativeElement.value,"DD/MM/YYYY").startOf("day").toISOString(),t=o(this.endDateOfIssueElement.nativeElement.value,"DD/MM/YYYY").endOf("day").toISOString();this.getSales(e,t)}getSales(e,t){this.showButtonSpinner=!0,this._cdRef.detectChanges(),this._dashboardService.getSalesByDate(e,t).subscribe(e=>{this.showButtonSpinner=!1,this.sales=e,this.sales.items=this.sales.items.sort((e,t)=>t.quantityIssued-e.quantityIssued)},e=>{this.showButtonSpinner=!1,this._toast.showHttpError(e)})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](d.s),l["\u0275\u0275directiveInject"](l.ChangeDetectorRef),l["\u0275\u0275directiveInject"](c.k))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-sales-by-period"]],viewQuery:function(e,t){if(1&e&&(l["\u0275\u0275viewQuery"](h,5),l["\u0275\u0275viewQuery"](g,5)),2&e){let e;l["\u0275\u0275queryRefresh"](e=l["\u0275\u0275loadQuery"]())&&(t.startDateOfIssueElement=e.first),l["\u0275\u0275queryRefresh"](e=l["\u0275\u0275loadQuery"]())&&(t.endDateOfIssueElement=e.first)}},decls:26,vars:6,consts:[[1,"row"],[1,"col-12"],[1,"col-3"],[3,"rangePicker","click"],["matStartDate","","disabled","","placeholder","Data inicial"],["startDateOfIssue",""],["matEndDate","","disabled","","placeholder","Data final"],["endDateOfIssue",""],["matSuffix","",3,"for"],["disabled","false"],["dateOfIssuePicker",""],[1,"col-2"],[1,"refresh"],["mat-flat-button","","color","primary",3,"disabled","click"],["diameter","30",4,"ngIf"],["class","loading-spinner",4,"ngIf"],["class","sales-table",4,"ngIf"],["diameter","30"],[1,"loading-spinner"],["diameter","60"],[1,"sales-table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"total"],["colspan","5"]],template:function(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"mat-card"),l["\u0275\u0275elementStart"](1,"div",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"mat-card-title"),l["\u0275\u0275text"](4,"Vendas por per\xedodo"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"mat-card-content"),l["\u0275\u0275elementStart"](6,"div",0),l["\u0275\u0275elementStart"](7,"div",2),l["\u0275\u0275elementStart"](8,"mat-form-field"),l["\u0275\u0275elementStart"](9,"mat-date-range-input",3),l["\u0275\u0275listener"]("click",function(){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275reference"](16).open()}),l["\u0275\u0275element"](10,"input",4,5),l["\u0275\u0275element"](12,"input",6,7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](14,"mat-datepicker-toggle",8),l["\u0275\u0275element"](15,"mat-date-range-picker",9,10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"div",11),l["\u0275\u0275elementStart"](18,"div",12),l["\u0275\u0275elementStart"](19,"button",13),l["\u0275\u0275listener"]("click",function(){return t.refreshSales()}),l["\u0275\u0275text"](20," Atualizar "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](21,E,1,0,"mat-spinner",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](22,y,2,0,"div",15),l["\u0275\u0275elementStart"](23,"div",0),l["\u0275\u0275elementStart"](24,"div",1),l["\u0275\u0275template"](25,I,29,10,"table",16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275reference"](11),n=l["\u0275\u0275reference"](13),a=l["\u0275\u0275reference"](16);l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("rangePicker",a),l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("for",a),l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("disabled",!e.value||!n.value),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.showButtonSpinner),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!t.sales),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",t.sales)}},directives:[p.a8,p.n5,p.dn,u.KE,S.wx,S.zY,S.By,S.nW,u.R9,S._g,f.lW,a.O5,x.$g,a.sg],pipes:[v.L],styles:[".loading-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:6px}.refresh[_ngcontent-%COMP%]{display:flex;align-items:center;grid-gap:16px;gap:16px}.refresh[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:7px}.refresh[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-top:8px}.btn-copy-date[_ngcontent-%COMP%]{cursor:pointer;margin-top:18px;font-weight:700}.sales-table[_ngcontent-%COMP%]{width:100%}.sales-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}.sales-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .sales-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:6px}.sales-table[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{font-weight:700}.sales-table[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(td:first-child){font-size:15px;color:var(--color-pomegranate)}"]}),e})();var C=n(49983),b=n(76627),_=n(26835);const w=["personCustomer"],N=["startNextSaleMinDate"],P=["endNextSaleMinDate"],k=["startNextSaleMaxDate"],Y=["endNextSaleMaxDate"];function F(e,t){1&e&&l["\u0275\u0275element"](0,"mat-spinner",27)}function B(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"td"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"td"),l["\u0275\u0275text"](6),l["\u0275\u0275pipe"](7,"momentDate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"td"),l["\u0275\u0275text"](9),l["\u0275\u0275pipe"](10,"momentDate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"td"),l["\u0275\u0275text"](12),l["\u0275\u0275pipe"](13,"momentDate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"td"),l["\u0275\u0275text"](15),l["\u0275\u0275pipe"](16,"momentDate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate2"]("",e.personCustomerName," (",e.personCustomerId,")"),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.salesCount),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](7,7,e.lastSale)),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](10,9,e.nextSaleMinDate)),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](13,11,e.nextSaleAverageDate)),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](16,13,e.nextSaleMaxDate))}}function Q(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td",29),l["\u0275\u0275text"](2,"Nenhum produto"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())}function R(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"table"),l["\u0275\u0275elementStart"](1,"thead"),l["\u0275\u0275elementStart"](2,"tr"),l["\u0275\u0275elementStart"](3,"th"),l["\u0275\u0275text"](4,"Cliente"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"th"),l["\u0275\u0275text"](6,"N\xfam. de vendas"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"th"),l["\u0275\u0275text"](8,"\xdaltima venda"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"th"),l["\u0275\u0275text"](10,"Data m\xednima"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"th"),l["\u0275\u0275text"](12,"Data m\xe9dia"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"th"),l["\u0275\u0275text"](14,"Data m\xe1xima"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](15,"tbody"),l["\u0275\u0275template"](16,B,17,15,"tr",28),l["\u0275\u0275template"](17,Q,3,0,"tr",24),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](16),l["\u0275\u0275property"]("ngForOf",e.nextSales),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!e.nextSales.length)}}function j(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",22),l["\u0275\u0275listener"]("click",function(){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().loadMore()}),l["\u0275\u0275text"](1,"Mais..."),l["\u0275\u0275elementEnd"]()}}let $=(()=>{class e{constructor(e,t){this._dashboardService=e,this._toast=t,this.showButtonSpinner=!1,this.nextSales=[],this.nextSalesFilter={limit:50,index:0}}ngOnInit(){this.getNextSales()}getNextSales(e={}){return new Promise((t,n)=>{this.showButtonSpinner=!0,this._dashboardService.getPersonsCustomersNextGasSales(this.nextSalesFilter).subscribe(n=>{this.showButtonSpinner=!1,e.reset&&(this.nextSales=[]),this.nextSales=this.nextSales.concat(n),t()},e=>{this.showButtonSpinner=!1,this._toast.showHttpError(e),n()})})}loadMore(){this.nextSalesFilter.index++,this.getNextSales()}search(){this.nextSalesFilter.index=0,this.nextSalesFilter.personCustomer=this.personCustomerElement.nativeElement.value?this.personCustomerElement.nativeElement.value:null,this.nextSalesFilter.startNextSaleMinDate=this.startNextSaleMinDateElement.nativeElement.value?o(this.startNextSaleMinDateElement.nativeElement.value,"DD/MM/YYYY").startOf("day").toISOString():null,this.nextSalesFilter.endNextSaleMinDate=this.endNextSaleMinDateElement.nativeElement.value?o(this.endNextSaleMinDateElement.nativeElement.value,"DD/MM/YYYY").endOf("day").toISOString():null,this.nextSalesFilter.startNextSaleMaxDate=this.startNextSaleMaxDateElement.nativeElement.value?o(this.startNextSaleMaxDateElement.nativeElement.value,"DD/MM/YYYY").startOf("day").toISOString():null,this.nextSalesFilter.endNextSaleMaxDate=this.endNextSaleMaxDateElement.nativeElement.value?o(this.endNextSaleMaxDateElement.nativeElement.value,"DD/MM/YYYY").endOf("day").toISOString():null,this.getNextSales({reset:!0})}clearFilter(){this.nextSalesFilter.index=0,this.nextSalesFilter.personCustomer=null,this.personCustomerElement.nativeElement.value=null,this.nextSalesFilter.startNextSaleMinDate=null,this.startNextSaleMinDateElement.nativeElement.value=null,this.nextSalesFilter.endNextSaleMinDate=null,this.endNextSaleMinDateElement.nativeElement.value=null,this.nextSalesFilter.startNextSaleMaxDate=null,this.startNextSaleMaxDateElement.nativeElement.value=null,this.nextSalesFilter.endNextSaleMaxDate=null,this.endNextSaleMaxDateElement.nativeElement.value=null,this.getNextSales({reset:!0})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](d.s),l["\u0275\u0275directiveInject"](c.k))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-persons-customers-next-gas-sales"]],viewQuery:function(e,t){if(1&e&&(l["\u0275\u0275viewQuery"](w,5),l["\u0275\u0275viewQuery"](N,5),l["\u0275\u0275viewQuery"](P,5),l["\u0275\u0275viewQuery"](k,5),l["\u0275\u0275viewQuery"](Y,5)),2&e){let e;l["\u0275\u0275queryRefresh"](e=l["\u0275\u0275loadQuery"]())&&(t.personCustomerElement=e.first),l["\u0275\u0275queryRefresh"](e=l["\u0275\u0275loadQuery"]())&&(t.startNextSaleMinDateElement=e.first),l["\u0275\u0275queryRefresh"](e=l["\u0275\u0275loadQuery"]())&&(t.endNextSaleMinDateElement=e.first),l["\u0275\u0275queryRefresh"](e=l["\u0275\u0275loadQuery"]())&&(t.startNextSaleMaxDateElement=e.first),l["\u0275\u0275queryRefresh"](e=l["\u0275\u0275loadQuery"]())&&(t.endNextSaleMaxDateElement=e.first)}},decls:58,vars:11,consts:[[1,"row"],[1,"col-12"],["matInput","","placeholder","Cliente","autocomplete","off"],["personCustomer",""],[1,"col-2"],["matInput","","placeholder","In\xedcio data m\xednima","autocomplete","off",3,"matDatepicker"],["startNextSaleMinDate",""],["matSuffix","",3,"for"],["startNextSaleMinDatePicker",""],[1,"col-1"],[1,"btn-copy-date","no-select",3,"click"],["matInput","","placeholder","Final data m\xednima","autocomplete","off",3,"matDatepicker"],["endNextSaleMinDate",""],["endNextSaleMinDatePicker",""],["matInput","","placeholder","In\xedcio data m\xe1xima","autocomplete","off",3,"matDatepicker"],["startNextSaleMaxDate",""],["startNextSaleMaxDatePicker",""],["matInput","","placeholder","Final data m\xe1xima","autocomplete","off",3,"matDatepicker"],["endNextSaleMaxDate",""],["endNextSaleMaxDatePicker",""],[1,"buttons"],["mat-stroked-button","","color","primary",3,"click"],["mat-flat-button","","color","primary",3,"click"],["diameter","30",4,"ngIf"],[4,"ngIf"],[2,"text-align","center","padding","10px"],["mat-flat-button","","color","primary",3,"click",4,"ngIf"],["diameter","30"],[4,"ngFor","ngForOf"],["colspan","5"]],template:function(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"mat-card"),l["\u0275\u0275elementStart"](1,"div",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"mat-card-title"),l["\u0275\u0275text"](4,"Estat\xedsticas de vendas"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"mat-card-content"),l["\u0275\u0275elementStart"](6,"div",0),l["\u0275\u0275elementStart"](7,"div",1),l["\u0275\u0275elementStart"](8,"mat-form-field"),l["\u0275\u0275element"](9,"input",2,3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"div",4),l["\u0275\u0275elementStart"](12,"mat-form-field"),l["\u0275\u0275element"](13,"input",5,6),l["\u0275\u0275element"](15,"mat-datepicker-toggle",7),l["\u0275\u0275element"](16,"mat-datepicker",null,8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"div",9),l["\u0275\u0275elementStart"](19,"mat-icon",10),l["\u0275\u0275listener"]("click",function(){l["\u0275\u0275restoreView"](e);const t=l["\u0275\u0275reference"](24),n=l["\u0275\u0275reference"](14);return t.value=n.value}),l["\u0275\u0275text"](20," arrow_forward "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"div",4),l["\u0275\u0275elementStart"](22,"mat-form-field"),l["\u0275\u0275element"](23,"input",11,12),l["\u0275\u0275element"](25,"mat-datepicker-toggle",7),l["\u0275\u0275element"](26,"mat-datepicker",null,13),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](28,"div",4),l["\u0275\u0275elementStart"](29,"div",4),l["\u0275\u0275elementStart"](30,"mat-form-field"),l["\u0275\u0275element"](31,"input",14,15),l["\u0275\u0275element"](33,"mat-datepicker-toggle",7),l["\u0275\u0275element"](34,"mat-datepicker",null,16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](36,"div",9),l["\u0275\u0275elementStart"](37,"mat-icon",10),l["\u0275\u0275listener"]("click",function(){l["\u0275\u0275restoreView"](e);const t=l["\u0275\u0275reference"](42),n=l["\u0275\u0275reference"](32);return t.value=n.value}),l["\u0275\u0275text"](38," arrow_forward "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](39,"div",4),l["\u0275\u0275elementStart"](40,"mat-form-field"),l["\u0275\u0275element"](41,"input",17,18),l["\u0275\u0275element"](43,"mat-datepicker-toggle",7),l["\u0275\u0275element"](44,"mat-datepicker",null,19),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](46,"div",1),l["\u0275\u0275elementStart"](47,"div",20),l["\u0275\u0275elementStart"](48,"button",21),l["\u0275\u0275listener"]("click",function(){return t.clearFilter()}),l["\u0275\u0275text"](49," Limpar filtros "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](50,"button",22),l["\u0275\u0275listener"]("click",function(){return t.search()}),l["\u0275\u0275text"](51," Buscar "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](52,F,1,0,"mat-spinner",23),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](53,"div",0),l["\u0275\u0275elementStart"](54,"div",1),l["\u0275\u0275template"](55,R,18,2,"table",24),l["\u0275\u0275elementStart"](56,"div",25),l["\u0275\u0275template"](57,j,2,0,"button",26),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275reference"](17),n=l["\u0275\u0275reference"](27),a=l["\u0275\u0275reference"](35),r=l["\u0275\u0275reference"](45);l["\u0275\u0275advance"](13),l["\u0275\u0275property"]("matDatepicker",e),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("for",e),l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("matDatepicker",n),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("for",n),l["\u0275\u0275advance"](6),l["\u0275\u0275property"]("matDatepicker",a),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("for",a),l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("matDatepicker",r),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("for",r),l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("ngIf",t.showButtonSpinner),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",t.nextSales.length),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.nextSales.length>=t.nextSalesFilter.limit)}},directives:[p.a8,p.n5,p.dn,u.KE,C.Nt,S.hl,S.nW,u.R9,S.Mq,b.Hw,f.lW,a.O5,x.$g,a.sg],pipes:[_.v],styles:[".loading-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:6px}.buttons[_ngcontent-%COMP%]{display:flex;align-items:center;grid-gap:16px;gap:16px;margin-top:7px;margin-bottom:12px}.buttons[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-top:8px}.btn-copy-date[_ngcontent-%COMP%]{cursor:pointer;margin-top:18px;font-weight:700}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:6px}"]}),e})(),q=(()=>{class e{constructor(e,t,n){this._title=e,this._activatedRoute=t,this._sidenavService=n}ngOnInit(){this._title.set("Home")}ngAfterViewInit(){this._activatedRoute.snapshot.queryParams.sn&&!0===JSON.parse(this._activatedRoute.snapshot.queryParams.sn)&&setTimeout(()=>{this._sidenavService.open()},1e3)}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](r.y),l["\u0275\u0275directiveInject"](i.gz),l["\u0275\u0275directiveInject"](s.Z))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-home"]],decls:9,vars:0,consts:[["label","Vendas por per\xedodo"],[1,"row"],[1,"col-12"],["label","Estat\xedsticas de vendas"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-tab-group"),l["\u0275\u0275elementStart"](1,"mat-tab",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"div",2),l["\u0275\u0275element"](4,"app-sales-by-period"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"mat-tab",3),l["\u0275\u0275elementStart"](6,"div",1),l["\u0275\u0275elementStart"](7,"div",2),l["\u0275\u0275element"](8,"app-persons-customers-next-gas-sales"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())},directives:[m.SP,m.uX,O,$],styles:[".col-12[_ngcontent-%COMP%]{margin-top:12px}"]}),e})();var V=n(15495),z=n(35503);let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[a.ez,V.h,z.D,i.Bz.forChild([{path:"",component:q}])]]}),e})()},26835:function(e,t,n){"use strict";n.d(t,{v:function(){return r}});var a=n(16738),l=n(37716);let r=(()=>{class e{transform(e,t="L"){return e?a(e).format(t):"-"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=l["\u0275\u0275definePipe"]({name:"momentDate",type:e,pure:!0}),e})()},35503:function(e,t,n){"use strict";n.d(t,{D:function(){return l}});var a=n(37716);let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({}),e})()}}]);