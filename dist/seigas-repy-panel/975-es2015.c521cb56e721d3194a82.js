(self.webpackChunkseigas_repy_panel=self.webpackChunkseigas_repy_panel||[]).push([[975],{42975:function(t,e,n){"use strict";n.r(e),n.d(e,{ProductsModule:function(){return z}});var r=n(38583),a=n(54655),o=n(37716),i=n(66082),l=n(38555),m=n(84465),c=n(22238),d=n(26026),s=n(98295),u=n(49983),p=n(32789),f=n(51095),h=n(76627);function C(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"th",20),o["\u0275\u0275text"](1,"#"),o["\u0275\u0275elementEnd"]())}function x(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"td",21),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](t.id)}}function S(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"th",20),o["\u0275\u0275text"](1,"C\xf3d."),o["\u0275\u0275elementEnd"]())}function g(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"td",21),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",t.code," ")}}function E(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"th",20),o["\u0275\u0275text"](1,"Nome"),o["\u0275\u0275elementEnd"]())}function w(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"td",21),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",t.name," ")}}function v(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"th",20),o["\u0275\u0275text"](1,"UM"),o["\u0275\u0275elementEnd"]())}function b(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"td",21),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",t.measurementUnit," ")}}function y(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"th",20),o["\u0275\u0275text"](1,"Categoria"),o["\u0275\u0275elementEnd"]())}function _(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"td",21),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",t.category.name," ")}}function k(t,e){1&t&&o["\u0275\u0275element"](0,"th",20)}function I(t,e){if(1&t){const t=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"td",21),o["\u0275\u0275elementStart"](1,"a",22),o["\u0275\u0275listener"]("click",function(){const e=o["\u0275\u0275restoreView"](t).$implicit;return o["\u0275\u0275nextContext"]().openForm(e.id)}),o["\u0275\u0275elementStart"](2,"mat-icon"),o["\u0275\u0275text"](3,"edit"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}}function D(t,e){1&t&&o["\u0275\u0275element"](0,"tr",23)}function j(t,e){1&t&&o["\u0275\u0275element"](0,"tr",24)}function M(t,e){if(1&t){const t=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"button",25),o["\u0275\u0275listener"]("click",function(){return o["\u0275\u0275restoreView"](t),o["\u0275\u0275nextContext"]().loadMore()}),o["\u0275\u0275text"](1,"Mais..."),o["\u0275\u0275elementEnd"]()}}const P=[{path:"",component:(()=>{class t{constructor(t,e,n,r,a){this._productService=t,this._loader=e,this._toast=n,this._dialog=r,this._title=a,this.products=[],this.productFilter={limit:20,index:0},this.tableColumns=["id","code","name","measurementUnit","category","options"]}ngOnInit(){this._title.set("Produtos"),this.getProducts()}getProducts(t={}){return new Promise((e,n)=>{this._loader.show(),this._productService.getAll(this.productFilter).subscribe(n=>{this._loader.dismiss(),t.reset&&(this.products=[]),this.products=this.products.concat(n),e()},t=>{this._loader.dismiss(),this._toast.showHttpError(t),n()})})}loadMore(){this.productFilter.index++,this.getProducts()}search(t){this.productFilter.q=t,this.productFilter.index=0,this.getProducts({reset:!0})}openForm(t){}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](i.M),o["\u0275\u0275directiveInject"](l.D),o["\u0275\u0275directiveInject"](m.k),o["\u0275\u0275directiveInject"](c.uw),o["\u0275\u0275directiveInject"](d.y))},t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["app-products"]],decls:33,vars:4,consts:[[2,"font-size","32px","margin","16px"],[1,"row"],[1,"col-sm-12"],[2,"width","100%"],["matInput","","autocomplete","off","placeholder","Fa\xe7a sua busca",3,"keyup.enter"],["searchInput",""],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","code"],["matColumnDef","name"],["matColumnDef","measurementUnit"],["matColumnDef","category"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[2,"text-align","center","padding","10px"],["mat-flat-button","","color","primary",3,"click",4,"ngIf"],["href","javascript:;","mat-fab","","color","primary",1,"btn-add",3,"click"],["mat-header-cell",""],["mat-cell",""],["href","javascript:;",3,"click"],["mat-header-row",""],["mat-row",""],["mat-flat-button","","color","primary",3,"click"]],template:function(t,e){if(1&t){const t=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"h1",0),o["\u0275\u0275text"](1,"Produtos"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](2,"div",1),o["\u0275\u0275elementStart"](3,"div",2),o["\u0275\u0275elementStart"](4,"mat-form-field",3),o["\u0275\u0275elementStart"](5,"input",4,5),o["\u0275\u0275listener"]("keyup.enter",function(){o["\u0275\u0275restoreView"](t);const n=o["\u0275\u0275reference"](6);return e.search(n.value)}),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"table",6),o["\u0275\u0275elementContainerStart"](8,7),o["\u0275\u0275template"](9,C,2,0,"th",8),o["\u0275\u0275template"](10,x,2,1,"td",9),o["\u0275\u0275elementContainerEnd"](),o["\u0275\u0275elementContainerStart"](11,10),o["\u0275\u0275template"](12,S,2,0,"th",8),o["\u0275\u0275template"](13,g,2,1,"td",9),o["\u0275\u0275elementContainerEnd"](),o["\u0275\u0275elementContainerStart"](14,11),o["\u0275\u0275template"](15,E,2,0,"th",8),o["\u0275\u0275template"](16,w,2,1,"td",9),o["\u0275\u0275elementContainerEnd"](),o["\u0275\u0275elementContainerStart"](17,12),o["\u0275\u0275template"](18,v,2,0,"th",8),o["\u0275\u0275template"](19,b,2,1,"td",9),o["\u0275\u0275elementContainerEnd"](),o["\u0275\u0275elementContainerStart"](20,13),o["\u0275\u0275template"](21,y,2,0,"th",8),o["\u0275\u0275template"](22,_,2,1,"td",9),o["\u0275\u0275elementContainerEnd"](),o["\u0275\u0275elementContainerStart"](23,14),o["\u0275\u0275template"](24,k,1,0,"th",8),o["\u0275\u0275template"](25,I,4,0,"td",9),o["\u0275\u0275elementContainerEnd"](),o["\u0275\u0275template"](26,D,1,0,"tr",15),o["\u0275\u0275template"](27,j,1,0,"tr",16),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](28,"div",17),o["\u0275\u0275template"](29,M,2,0,"button",18),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](30,"button",19),o["\u0275\u0275listener"]("click",function(){return e.openForm()}),o["\u0275\u0275elementStart"](31,"mat-icon"),o["\u0275\u0275text"](32,"add"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}2&t&&(o["\u0275\u0275advance"](7),o["\u0275\u0275property"]("dataSource",e.products),o["\u0275\u0275advance"](19),o["\u0275\u0275property"]("matHeaderRowDef",e.tableColumns),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("matRowDefColumns",e.tableColumns),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",e.products.length>=e.productFilter.limit))},directives:[s.KE,u.Nt,p.BZ,p.w1,p.fO,p.Dz,p.as,p.nj,r.O5,f.lW,h.Hw,p.ge,p.ev,p.XQ,p.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:64px;background:#eee;z-index:10}.btn-add[_ngcontent-%COMP%]{position:fixed;bottom:26px;right:30px}"]}),t})()}];let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[a.Bz.forChild(P)],a.Bz]}),t})();var O=n(6591);let z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[O.h,r.ez,F]]}),t})()}}]);