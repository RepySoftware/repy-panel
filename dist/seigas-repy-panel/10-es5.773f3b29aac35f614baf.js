!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{PdK0:function(t,r,a){"use strict";a.r(r),a.d(r,"PersonsModule",function(){return Y});var o=a("ofXK"),i=a("PCNd"),l=a("ssao"),m=a("tyNb"),c=a("aHvM"),d=a("fXoL"),s=a("TmGi"),p=a("5dVO"),u=a("2g2N"),f=a("0IaG"),h=a("kmnG"),v=a("qFsG"),C=a("+0xr"),S=a("bTqV"),b=a("NFeN"),E=a("A5z7"),w=a("YxCE");function g(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",19),d["\u0275\u0275text"](1,"#"),d["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",20),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n.id)}}function x(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",19),d["\u0275\u0275text"](1,"Nome"),d["\u0275\u0275elementEnd"]())}function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",20),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function k(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",19),d["\u0275\u0275text"](1,"Tipo"),d["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"mat-chip"),d["\u0275\u0275text"](1,"Cliente"),d["\u0275\u0275elementEnd"]())}function D(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"mat-chip"),d["\u0275\u0275text"](1,"Fornecedor"),d["\u0275\u0275elementEnd"]())}function P(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",20),d["\u0275\u0275elementStart"](1,"mat-chip-list"),d["\u0275\u0275template"](2,j,2,0,"mat-chip",21),d["\u0275\u0275template"](3,D,2,0,"mat-chip",21),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",n.isCustomer),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",n.isSupplier)}}function F(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",19),d["\u0275\u0275text"](1,"Documento"),d["\u0275\u0275elementEnd"]())}function N(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",20),d["\u0275\u0275text"](1),d["\u0275\u0275pipe"](2,"cpfCnpj"),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n.documentNumber?d["\u0275\u0275pipeBind1"](2,1,n.documentNumber):null)}}function _(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",19),d["\u0275\u0275text"](1,"Endere\xe7o"),d["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",20),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n.address.description)}}function V(e,t){1&e&&d["\u0275\u0275element"](0,"th",19)}function O(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"td",20),d["\u0275\u0275elementStart"](1,"a",22),d["\u0275\u0275listener"]("click",function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"]().openForm(e.id)}),d["\u0275\u0275elementStart"](2,"mat-icon"),d["\u0275\u0275text"](3,"edit"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}}function T(e,t){1&e&&d["\u0275\u0275element"](0,"tr",23)}function $(e,t){1&e&&d["\u0275\u0275element"](0,"tr",24)}function R(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",25),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().loadMore()}),d["\u0275\u0275text"](1,"Mais..."),d["\u0275\u0275elementEnd"]()}}var G,H,q,A,J,K=((G=function(){function t(n,r,a,o){e(this,t),this._personService=n,this._loader=r,this._toast=a,this._dialog=o,this.persons=[],this.personFilter={limit:20,index:0},this.tableColumns=["id","name","type","documentNumber","address","options"]}return n(t,[{key:"ngOnInit",value:function(){this.getPersons()}},{key:"getPersons",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(n,r){e._loader.show(),e._personService.getAll(e.personFilter).subscribe(function(r){e._loader.dismiss(),t.reset&&(e.persons=[]),e.persons=e.persons.concat(r),n()},function(t){e._loader.dismiss(),e._toast.showError(t),r()})})}},{key:"loadMore",value:function(){this.personFilter.index++,this.getPersons()}},{key:"search",value:function(e){this.personFilter.q=e,this.personFilter.index=0,this.getPersons({reset:!0})}},{key:"openForm",value:function(e){var t=this;this._dialog.open(c.a,{width:"90%",height:"90%",data:{personId:e}}).afterClosed().subscribe(function(e){e&&e.hasUpdate&&t.getPersons({reset:!0})})}}]),t}()).\u0275fac=function(e){return new(e||G)(d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](p.a),d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](f.b))},G.\u0275cmp=d["\u0275\u0275defineComponent"]({type:G,selectors:[["app-persons-list"]],decls:31,vars:4,consts:[[1,"row"],[1,"col-sm-12"],[2,"width","100%"],["matInput","","autocomplete","off","placeholder","Fa\xe7a sua busca",3,"keyup.enter"],["searchInput",""],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","type"],["matColumnDef","documentNumber"],["matColumnDef","address"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[2,"text-align","center","padding","10px"],["mat-flat-button","","color","primary",3,"click",4,"ngIf"],["href","javascript:;","mat-fab","","color","primary",1,"btn-add",3,"click"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["href","javascript:;",3,"click"],["mat-header-row",""],["mat-row",""],["mat-flat-button","","color","primary",3,"click"]],template:function(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"mat-form-field",2),d["\u0275\u0275elementStart"](3,"input",3,4),d["\u0275\u0275listener"]("keyup.enter",function(){d["\u0275\u0275restoreView"](n);var e=d["\u0275\u0275reference"](4);return t.search(e.value)}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"table",5),d["\u0275\u0275elementContainerStart"](6,6),d["\u0275\u0275template"](7,g,2,0,"th",7),d["\u0275\u0275template"](8,y,2,1,"td",8),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](9,9),d["\u0275\u0275template"](10,x,2,0,"th",7),d["\u0275\u0275template"](11,I,2,1,"td",8),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](12,10),d["\u0275\u0275template"](13,k,2,0,"th",7),d["\u0275\u0275template"](14,P,4,2,"td",8),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](15,11),d["\u0275\u0275template"](16,F,2,0,"th",7),d["\u0275\u0275template"](17,N,3,3,"td",8),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](18,12),d["\u0275\u0275template"](19,_,2,0,"th",7),d["\u0275\u0275template"](20,M,2,1,"td",8),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](21,13),d["\u0275\u0275template"](22,V,1,0,"th",7),d["\u0275\u0275template"](23,O,4,0,"td",8),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275template"](24,T,1,0,"tr",14),d["\u0275\u0275template"](25,$,1,0,"tr",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](26,"div",16),d["\u0275\u0275template"](27,R,2,0,"button",17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"button",18),d["\u0275\u0275listener"]("click",function(){return t.openForm()}),d["\u0275\u0275elementStart"](29,"mat-icon"),d["\u0275\u0275text"](30,"add"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}2&e&&(d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("dataSource",t.persons),d["\u0275\u0275advance"](19),d["\u0275\u0275property"]("matHeaderRowDef",t.tableColumns),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("matRowDefColumns",t.tableColumns),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",t.persons.length>=t.personFilter.limit))},directives:[h.c,v.b,C.j,C.c,C.e,C.b,C.g,C.i,o.k,S.a,b.a,C.d,C.a,E.b,E.a,C.f,C.h],pipes:[w.a],styles:["table[_ngcontent-%COMP%]{width:100%}.btn-add[_ngcontent-%COMP%]{position:fixed;bottom:26px;right:30px}"]}),G),U=[{path:"",component:(H=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),H.\u0275fac=function(e){return new(e||H)},H.\u0275cmp=d["\u0275\u0275defineComponent"]({type:H,selectors:[["app-persons"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-sm-12"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"h1"),d["\u0275\u0275text"](3,"Pessoas"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"router-outlet"))},directives:[m.g],styles:[""]}),H),children:[{path:"",pathMatch:"full",redirectTo:"list"},{path:"list",component:K},{path:"form",component:c.a},{path:":personId/form",component:c.a}]}],X=((q=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:q}),q.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||q)},imports:[[m.f.forChild(U)],m.f]}),q),z=a("iTUp"),B=a("3Pt+"),L=((J=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:J}),J.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||J)},providers:[],imports:[[B.h,B.o]]}),J),Y=((A=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:A}),A.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||A)},imports:[[o.b,L,B.o,l.a,i.a,z.a,X]]}),A)}}])}();