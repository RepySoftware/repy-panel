!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{PdK0:function(t,r,a){"use strict";a.r(r),a.d(r,"PersonsModule",function(){return Y});var i=a("ofXK"),o=a("PCNd"),l=a("ssao"),m=a("tyNb"),c=a("aHvM"),s=a("fXoL"),d=a("TmGi"),p=a("5dVO"),u=a("2g2N"),f=a("0IaG"),h=a("K6Ak"),v=a("kmnG"),C=a("qFsG"),b=a("+0xr"),S=a("bTqV"),E=a("NFeN"),g=a("A5z7"),w=a("YxCE");function x(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",19),s["\u0275\u0275text"](1,"#"),s["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"td",20),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](n.id)}}function k(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",19),s["\u0275\u0275text"](1,"Nome"),s["\u0275\u0275elementEnd"]())}function I(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"td",20),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function P(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",19),s["\u0275\u0275text"](1,"Tipo"),s["\u0275\u0275elementEnd"]())}function _(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"mat-chip"),s["\u0275\u0275text"](1,"Cliente"),s["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"mat-chip"),s["\u0275\u0275text"](1,"Fornecedor"),s["\u0275\u0275elementEnd"]())}function D(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"td",20),s["\u0275\u0275elementStart"](1,"mat-chip-list"),s["\u0275\u0275template"](2,_,2,0,"mat-chip",21),s["\u0275\u0275template"](3,j,2,0,"mat-chip",21),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",n.isCustomer),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",n.isSupplier)}}function F(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",19),s["\u0275\u0275text"](1,"Documento"),s["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"td",20),s["\u0275\u0275text"](1),s["\u0275\u0275pipe"](2,"cpfCnpj"),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](n.documentNumber?s["\u0275\u0275pipeBind1"](2,1,n.documentNumber):null)}}function N(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",19),s["\u0275\u0275text"](1,"Endere\xe7o"),s["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"td",20),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](n.address.description)}}function V(e,t){1&e&&s["\u0275\u0275element"](0,"th",19)}function T(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"td",20),s["\u0275\u0275elementStart"](1,"a",22),s["\u0275\u0275listener"]("click",function(){s["\u0275\u0275restoreView"](n);var e=t.$implicit;return s["\u0275\u0275nextContext"]().openForm(e.id)}),s["\u0275\u0275elementStart"](2,"mat-icon"),s["\u0275\u0275text"](3,"edit"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}}function $(e,t){1&e&&s["\u0275\u0275element"](0,"tr",23)}function H(e,t){1&e&&s["\u0275\u0275element"](0,"tr",24)}function R(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",25),s["\u0275\u0275listener"]("click",function(){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().loadMore()}),s["\u0275\u0275text"](1,"Mais..."),s["\u0275\u0275elementEnd"]()}}var G,q,A,K,U=((G=function(){function t(n,r,a,i,o){e(this,t),this._personService=n,this._loader=r,this._toast=a,this._dialog=i,this._title=o,this.persons=[],this.personFilter={limit:20,index:0},this.tableColumns=["id","name","type","documentNumber","address","options"]}return n(t,[{key:"ngOnInit",value:function(){this._title.set("Pessoas - Lista"),this.getPersons()}},{key:"getPersons",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(n,r){e._loader.show(),e._personService.getAll(e.personFilter).subscribe(function(r){e._loader.dismiss(),t.reset&&(e.persons=[]),e.persons=e.persons.concat(r),n()},function(t){e._loader.dismiss(),e._toast.showHttpError(t),r()})})}},{key:"loadMore",value:function(){this.personFilter.index++,this.getPersons()}},{key:"search",value:function(e){this.personFilter.q=e,this.personFilter.index=0,this.getPersons({reset:!0})}},{key:"openForm",value:function(e){var t=this;this._dialog.open(c.a,{width:"90%",height:"90%",data:{personId:e}}).afterClosed().subscribe(function(e){e&&e.hasUpdate&&t.getPersons({reset:!0})})}}]),t}()).\u0275fac=function(e){return new(e||G)(s["\u0275\u0275directiveInject"](d.a),s["\u0275\u0275directiveInject"](p.a),s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](f.b),s["\u0275\u0275directiveInject"](h.a))},G.\u0275cmp=s["\u0275\u0275defineComponent"]({type:G,selectors:[["app-persons-list"]],decls:31,vars:4,consts:[[1,"row"],[1,"col-sm-12"],[2,"width","100%"],["matInput","","autocomplete","off","placeholder","Fa\xe7a sua busca",3,"keyup.enter"],["searchInput",""],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","type"],["matColumnDef","documentNumber"],["matColumnDef","address"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[2,"text-align","center","padding","10px"],["mat-flat-button","","color","primary",3,"click",4,"ngIf"],["href","javascript:;","mat-fab","","color","primary",1,"btn-add",3,"click"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["href","javascript:;",3,"click"],["mat-header-row",""],["mat-row",""],["mat-flat-button","","color","primary",3,"click"]],template:function(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"mat-form-field",2),s["\u0275\u0275elementStart"](3,"input",3,4),s["\u0275\u0275listener"]("keyup.enter",function(){s["\u0275\u0275restoreView"](n);var e=s["\u0275\u0275reference"](4);return t.search(e.value)}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"table",5),s["\u0275\u0275elementContainerStart"](6,6),s["\u0275\u0275template"](7,x,2,0,"th",7),s["\u0275\u0275template"](8,y,2,1,"td",8),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275elementContainerStart"](9,9),s["\u0275\u0275template"](10,k,2,0,"th",7),s["\u0275\u0275template"](11,I,2,1,"td",8),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275elementContainerStart"](12,10),s["\u0275\u0275template"](13,P,2,0,"th",7),s["\u0275\u0275template"](14,D,4,2,"td",8),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275elementContainerStart"](15,11),s["\u0275\u0275template"](16,F,2,0,"th",7),s["\u0275\u0275template"](17,M,3,3,"td",8),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275elementContainerStart"](18,12),s["\u0275\u0275template"](19,N,2,0,"th",7),s["\u0275\u0275template"](20,O,2,1,"td",8),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275elementContainerStart"](21,13),s["\u0275\u0275template"](22,V,1,0,"th",7),s["\u0275\u0275template"](23,T,4,0,"td",8),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275template"](24,$,1,0,"tr",14),s["\u0275\u0275template"](25,H,1,0,"tr",15),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](26,"div",16),s["\u0275\u0275template"](27,R,2,0,"button",17),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](28,"button",18),s["\u0275\u0275listener"]("click",function(){return t.openForm()}),s["\u0275\u0275elementStart"](29,"mat-icon"),s["\u0275\u0275text"](30,"add"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}2&e&&(s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("dataSource",t.persons),s["\u0275\u0275advance"](19),s["\u0275\u0275property"]("matHeaderRowDef",t.tableColumns),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("matRowDefColumns",t.tableColumns),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",t.persons.length>=t.personFilter.limit))},directives:[v.c,C.b,b.j,b.c,b.e,b.b,b.g,b.i,i.m,S.a,E.a,b.d,b.a,g.b,g.a,b.f,b.h],pipes:[w.a],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:64px;background:#eee;z-index:10}.btn-add[_ngcontent-%COMP%]{position:fixed;bottom:26px;right:30px}"]}),G),z=[{path:"",component:(q=function(){function t(n){e(this,t),this._title=n}return n(t,[{key:"ngOnInit",value:function(){this._title.set("Pessoas")}}]),t}(),q.\u0275fac=function(e){return new(e||q)(s["\u0275\u0275directiveInject"](h.a))},q.\u0275cmp=s["\u0275\u0275defineComponent"]({type:q,selectors:[["app-persons"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-sm-12"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"h1"),s["\u0275\u0275text"](3,"Pessoas"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](4,"router-outlet"))},directives:[m.h],styles:[""]}),q),children:[{path:"",pathMatch:"full",redirectTo:"list"},{path:"list",component:U},{path:"form",component:c.a},{path:":personId/form",component:c.a}]}],J=((A=function t(){e(this,t)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:A}),A.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||A)},imports:[[m.g.forChild(z)],m.g]}),A),L=a("iTUp"),X=a("3Pt+"),B=a("FUS3"),Y=((K=function t(){e(this,t)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:K}),K.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||K)},imports:[[i.c,B.a,X.r,l.a,o.a,L.a,J]]}),K)}}])}();