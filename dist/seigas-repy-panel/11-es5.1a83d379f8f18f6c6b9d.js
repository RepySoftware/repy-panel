!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4GoG":function(t,a,r){"use strict";r.d(a,"a",function(){return l});var l=function(){function t(){e(this,t)}return n(t,null,[{key:"toCpfCnpj",value:function(e){return e?11==e.length?e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4"):14==e.length?e.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5"):e:null}},{key:"getOnlyNumbers",value:function(e){return e.replace(/[^0-9\\.]+/g,"")}},{key:"toMoney",value:function(e){return"R$ "+e.toFixed(2).replace(".",",")}}]),t}()},"99Un":function(t,a,r){"use strict";r.r(a),r.d(a,"HomeModule",function(){return q});var l=r("ofXK"),i=r("fXoL"),o=r("K6Ak"),d=r("tyNb"),s=r("jjde"),m=r("wd/R"),c=r("0AbP"),u=r("2g2N"),p=r("Wp6s"),f=r("kmnG"),v=r("qFsG"),h=r("NFeN"),S=r("bTqV"),g=r("Xa2L"),y=r("OJOy"),E=r("uAcK"),I=["startDateOfIssue"],x=["endDateOfIssue"],O=["scheduleNextDays"];function b(e,t){1&e&&i["\u0275\u0275element"](0,"mat-spinner",17)}function w(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",18),i["\u0275\u0275element"](1,"mat-spinner",19),i["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"tr"),i["\u0275\u0275elementStart"](1,"td"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"td"),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"td"),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"td"),i["\u0275\u0275text"](8),i["\u0275\u0275pipe"](9,"money"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"td"),i["\u0275\u0275text"](11),i["\u0275\u0275pipe"](12,"money"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate2"]("",n.product.name," (",n.product.code,")"),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n.quantityIssued),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n.quantityDelivered),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](9,6,n.totalIssuedSalePrice)),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](12,8,n.totalDeliveredSalePrice))}}function D(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"tr"),i["\u0275\u0275elementStart"](1,"td",24),i["\u0275\u0275text"](2,"Nenhum produto"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function C(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"table",20),i["\u0275\u0275elementStart"](1,"thead"),i["\u0275\u0275elementStart"](2,"tr"),i["\u0275\u0275elementStart"](3,"th"),i["\u0275\u0275text"](4,"Produto"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"th"),i["\u0275\u0275text"](6,"Qtd. emitida"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"th"),i["\u0275\u0275text"](8,"Qtd. entregue"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"th"),i["\u0275\u0275text"](10,"Valor (emitido)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"th"),i["\u0275\u0275text"](12,"Valor (entregue)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"tbody"),i["\u0275\u0275template"](14,_,13,10,"tr",21),i["\u0275\u0275template"](15,D,3,0,"tr",22),i["\u0275\u0275elementStart"](16,"tr",23),i["\u0275\u0275elementStart"](17,"td"),i["\u0275\u0275text"](18,"Total:"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"td"),i["\u0275\u0275text"](20),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"td"),i["\u0275\u0275text"](22),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"td"),i["\u0275\u0275text"](24),i["\u0275\u0275pipe"](25,"money"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](26,"td"),i["\u0275\u0275text"](27),i["\u0275\u0275pipe"](28,"money"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](14),i["\u0275\u0275property"]("ngForOf",n.sales.items),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!n.sales.items.length),i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate"](n.sales.totalIssuedItems),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n.sales.totalDeliveredItems),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](25,6,n.sales.totalIssuedSalePrice)),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](28,8,n.sales.totalDeliveredSalePrice))}}var P,M,k,j=((M=function(){function t(n,a,r){e(this,t),this._dashboardService=n,this._cdRef=a,this._toast=r,this.showButtonSpinner=!1}return n(t,[{key:"ngAfterViewInit",value:function(){var e=m().startOf("day"),t=m().endOf("day");this.startDateOfIssueElement.nativeElement.value=e.format("YYYY-MM-DD"),this.endDateOfIssueElement.nativeElement.value=t.format("YYYY-MM-DD"),this.scheduleNextDaysElement.nativeElement.value=3,this._cdRef.detectChanges(),this.getSales(e.toISOString(),t.toISOString(),3)}},{key:"refreshSales",value:function(){var e=m(this.startDateOfIssueElement.nativeElement.value).startOf("day").toISOString(),t=m(this.endDateOfIssueElement.nativeElement.value).endOf("day").toISOString(),n=Number(this.scheduleNextDaysElement.nativeElement.value);this.getSales(e,t,n)}},{key:"getSales",value:function(e,t,n){var a=this;this.showButtonSpinner=!0,this._cdRef.detectChanges(),this._dashboardService.getSalesByDate(e,t,n).subscribe(function(e){a.showButtonSpinner=!1,a.sales=e,a.sales.items=a.sales.items.sort(function(e,t){return t.quantityIssued-e.quantityIssued})},function(e){a.showButtonSpinner=!1,a._toast.showHttpError(e)})}}]),t}()).\u0275fac=function(e){return new(e||M)(i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](i.ChangeDetectorRef),i["\u0275\u0275directiveInject"](u.a))},M.\u0275cmp=i["\u0275\u0275defineComponent"]({type:M,selectors:[["app-sales-by-period"]],viewQuery:function(e,t){var n;1&e&&(i["\u0275\u0275viewQuery"](I,!0),i["\u0275\u0275viewQuery"](x,!0),i["\u0275\u0275viewQuery"](O,!0)),2&e&&(i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.startDateOfIssueElement=n.first),i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.endDateOfIssueElement=n.first),i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.scheduleNextDaysElement=n.first))},decls:38,vars:13,consts:[[1,"row"],[1,"col-12"],[1,"col-3"],["matInput","","type","date","placeholder","Data inicial","autocomplete","off"],["startDateOfIssue",""],[1,"col-1"],[1,"btn-copy-date","no-select",3,"click"],["matInput","","type","date","placeholder","Data final","autocomplete","off"],["endDateOfIssue",""],["matInput","","type","number","autocomplete","off",3,"placeholder"],["scheduleNextDays",""],[1,"col-2"],[1,"refresh"],["mat-flat-button","","color","primary",3,"disabled","click"],["diameter","30",4,"ngIf"],["class","loading-spinner",4,"ngIf"],["class","sales-table",4,"ngIf"],["diameter","30"],[1,"loading-spinner"],["diameter","60"],[1,"sales-table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"total"],["colspan","5"]],template:function(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"mat-card"),i["\u0275\u0275elementStart"](1,"div",0),i["\u0275\u0275elementStart"](2,"div",1),i["\u0275\u0275elementStart"](3,"mat-card-title"),i["\u0275\u0275text"](4,"Vendas por per\xedodo"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"div",0),i["\u0275\u0275elementStart"](6,"div",1),i["\u0275\u0275elementStart"](7,"mat-card-subtitle"),i["\u0275\u0275text"](8),i["\u0275\u0275pipe"](9,"momentDate"),i["\u0275\u0275pipe"](10,"momentDate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"mat-card-content"),i["\u0275\u0275elementStart"](12,"div",0),i["\u0275\u0275elementStart"](13,"div",2),i["\u0275\u0275elementStart"](14,"mat-form-field"),i["\u0275\u0275element"](15,"input",3,4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"div",5),i["\u0275\u0275elementStart"](18,"mat-icon",6),i["\u0275\u0275listener"]("click",function(){i["\u0275\u0275restoreView"](n);var e=i["\u0275\u0275reference"](23),t=i["\u0275\u0275reference"](16);return e.value=t.value}),i["\u0275\u0275text"](19," arrow_forward "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](20,"div",2),i["\u0275\u0275elementStart"](21,"mat-form-field"),i["\u0275\u0275element"](22,"input",7,8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](24,"div",2),i["\u0275\u0275elementStart"](25,"mat-form-field"),i["\u0275\u0275element"](26,"input",9,10),i["\u0275\u0275pipe"](28,"momentDate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](29,"div",11),i["\u0275\u0275elementStart"](30,"div",12),i["\u0275\u0275elementStart"](31,"button",13),i["\u0275\u0275listener"]("click",function(){return t.refreshSales()}),i["\u0275\u0275text"](32," Atualizar "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](33,b,1,0,"mat-spinner",14),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](34,w,2,0,"div",15),i["\u0275\u0275elementStart"](35,"div",0),i["\u0275\u0275elementStart"](36,"div",1),i["\u0275\u0275template"](37,C,29,10,"table",16),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275reference"](16),r=i["\u0275\u0275reference"](23);i["\u0275\u0275advance"](8),i["\u0275\u0275textInterpolate2"](" ",i["\u0275\u0275pipeBind1"](9,7,a.value)," - ",i["\u0275\u0275pipeBind1"](10,9,r.value)," "),i["\u0275\u0275advance"](18),i["\u0275\u0275property"]("placeholder","Dias de agendamento "+(r.value?"(at\xe9 "+i["\u0275\u0275pipeBind1"](28,11,r.value)+")":"")),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("disabled",!a.value||!r.value),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",t.showButtonSpinner),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.sales),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngIf",t.sales)}},directives:[p.a,p.g,p.f,p.c,f.c,v.b,h.a,S.a,l.m,g.b,l.l],pipes:[y.a,E.a],styles:[".loading-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:6px}.refresh[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px}.refresh[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:7px}.refresh[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-top:8px}.btn-copy-date[_ngcontent-%COMP%]{cursor:pointer;margin-top:18px;font-weight:700}.sales-table[_ngcontent-%COMP%]{width:100%}.sales-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}.sales-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .sales-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:6px}.sales-table[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{font-weight:700}.sales-table[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(td:first-child){font-size:15px;color:var(--color-pomegranate)}"]}),M),N=((P=function(){function t(n,a,r){e(this,t),this._title=n,this._activatedRoute=a,this._sidenavService=r}return n(t,[{key:"ngOnInit",value:function(){this._title.set("Home")}},{key:"ngAfterViewInit",value:function(){var e=this;this._activatedRoute.snapshot.queryParams.sn&&!0===JSON.parse(this._activatedRoute.snapshot.queryParams.sn)&&setTimeout(function(){e._sidenavService.open()},1e3)}}]),t}()).\u0275fac=function(e){return new(e||P)(i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](d.a),i["\u0275\u0275directiveInject"](s.a))},P.\u0275cmp=i["\u0275\u0275defineComponent"]({type:P,selectors:[["app-home"]],decls:4,vars:0,consts:[[2,"margin-top","15px"],[1,"row"],[1,"col-12"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275element"](3,"app-sales-by-period"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())},directives:[j],styles:[""]}),P),B=r("ssao"),R=r("iTUp"),q=((k=function t(){e(this,t)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:k}),k.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||k)},imports:[[l.c,B.a,R.a,d.g.forChild([{path:"",component:N}])]]}),k)},iTUp:function(t,n,a){"use strict";a.d(n,"a",function(){return l});var r=a("fXoL"),l=function(){var t=function t(){e(this,t)};return t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)}}),t}()}}])}();