!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4GoG":function(t,a,o){"use strict";o.d(a,"a",function(){return l});var l=function(){function t(){e(this,t)}return n(t,null,[{key:"toCpfCnpj",value:function(e){return e?11==e.length?e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4"):14==e.length?e.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5"):e:null}},{key:"getOnlyNumbers",value:function(e){return e.replace(/[^0-9\\.]+/g,"")}},{key:"toMoney",value:function(e){return"R$ "+e.toFixed(2).replace(".",",")}}]),t}()},"99Un":function(t,a,o){"use strict";o.r(a),o.d(a,"HomeModule",function(){return I});var l=o("ofXK"),r=o("wd/R"),d=o("fXoL"),i=o("0AbP"),s=o("Wp6s"),c=o("Xa2L"),m=o("OJOy"),p=o("uAcK");function u(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",5),d["\u0275\u0275element"](1,"mat-spinner",6),d["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275elementStart"](1,"td"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"td"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"td"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"td"),d["\u0275\u0275text"](8),d["\u0275\u0275pipe"](9,"money"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"td"),d["\u0275\u0275text"](11),d["\u0275\u0275pipe"](12,"money"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate2"]("",n.product.name," (",n.product.code,")"),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](n.quantityIssued),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](n.quantityDelivered),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](9,6,n.totalIssuedSalePrice)),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](12,8,n.totalDeliveredSalePrice))}}function y(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275elementStart"](1,"td",10),d["\u0275\u0275text"](2,"Nenhum produto"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"mat-card-content"),d["\u0275\u0275elementStart"](1,"table",7),d["\u0275\u0275elementStart"](2,"thead"),d["\u0275\u0275elementStart"](3,"tr"),d["\u0275\u0275elementStart"](4,"th"),d["\u0275\u0275text"](5,"Produto"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"th"),d["\u0275\u0275text"](7,"Qtd. emitida"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"th"),d["\u0275\u0275text"](9,"Qtd. entregue"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"th"),d["\u0275\u0275text"](11,"Valor (emitido)"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"th"),d["\u0275\u0275text"](13,"Valor (entregue)"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"tbody"),d["\u0275\u0275template"](15,f,13,10,"tr",8),d["\u0275\u0275template"](16,y,3,0,"tr",4),d["\u0275\u0275elementStart"](17,"tr",9),d["\u0275\u0275elementStart"](18,"td"),d["\u0275\u0275text"](19,"Total:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"td"),d["\u0275\u0275text"](21),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"td"),d["\u0275\u0275text"](23),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"td"),d["\u0275\u0275text"](25),d["\u0275\u0275pipe"](26,"money"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](27,"td"),d["\u0275\u0275text"](28),d["\u0275\u0275pipe"](29,"money"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](15),d["\u0275\u0275property"]("ngForOf",n.salesToday.items),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!n.salesToday.items.length),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](n.salesToday.totalIssuedItems),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](n.salesToday.totalDeliveredItems),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](26,6,n.salesToday.totalIssuedSalePrice)),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](29,8,n.salesToday.totalDeliveredSalePrice))}}var v,S,x=((v=function(){function t(n){e(this,t),this._dashboardService=n,this.today=r().format("YYYY-MM-DD")}return n(t,[{key:"ngOnInit",value:function(){var e=this;this._dashboardService.getSalesByDay(this.today,1).subscribe(function(t){e.salesToday=t,e.salesToday.items=e.salesToday.items.sort(function(e,t){return t.quantityIssued-e.quantityIssued})})}}]),t}()).\u0275fac=function(e){return new(e||v)(d["\u0275\u0275directiveInject"](i.a))},v.\u0275cmp=d["\u0275\u0275defineComponent"]({type:v,selectors:[["app-home"]],decls:11,vars:5,consts:[[2,"margin-top","15px"],[1,"row"],[1,"col-md-6","sales-today"],["class","loading-spinner",4,"ngIf"],[4,"ngIf"],[1,"loading-spinner"],["diameter","60"],[1,"sales-table"],[4,"ngFor","ngForOf"],[1,"total"],["colspan","5"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"div",2),d["\u0275\u0275elementStart"](3,"mat-card"),d["\u0275\u0275elementStart"](4,"mat-card-title"),d["\u0275\u0275text"](5,"Vendas hoje"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"mat-card-subtitle"),d["\u0275\u0275text"](7),d["\u0275\u0275pipe"](8,"momentDate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](9,u,2,0,"div",3),d["\u0275\u0275template"](10,g,30,10,"mat-card-content",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](7),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](8,3,t.today)),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",!t.salesToday),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.salesToday))},directives:[s.a,s.e,s.d,l.k,c.b,s.b,l.j],pipes:[m.a,p.a],styles:[".sales-today[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:6px}.sales-today[_ngcontent-%COMP%]   .sales-table[_ngcontent-%COMP%]{width:100%}.sales-today[_ngcontent-%COMP%]   .sales-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}.sales-today[_ngcontent-%COMP%]   .sales-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .sales-today[_ngcontent-%COMP%]   .sales-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:6px}.sales-today[_ngcontent-%COMP%]   .sales-table[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{font-weight:700}.sales-today[_ngcontent-%COMP%]   .sales-table[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(td:first-child){font-size:15px;color:var(--color-pomegranate)}"]}),v),h=o("ssao"),E=o("tyNb"),b=o("iTUp"),I=((S=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||S)},imports:[[l.b,h.a,b.a,E.g.forChild([{path:"",component:x}])]]}),S)},iTUp:function(t,n,a){"use strict";a.d(n,"a",function(){return l});var o=a("fXoL"),l=function(){var t=function t(){e(this,t)};return t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)}}),t}()}}])}();