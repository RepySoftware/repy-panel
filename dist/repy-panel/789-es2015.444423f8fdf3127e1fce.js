(self.webpackChunkrepy_panel=self.webpackChunkrepy_panel||[]).push([[789],{40789:function(e,t,n){"use strict";n.r(t),n.d(t,{DeviceDetailsModule:function(){return Y}});var i=n(38583),a=n(37716),r=n(3310),l=n(96114),o=n(22238),c=n(34811),d=n(38555),s=n(84465),m=n(71419),v=n(32789),p=n(51095),h=n(26835),g=n(18007);function u(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"th",13),a["\u0275\u0275text"](1,"Data"),a["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275text"](1),a["\u0275\u0275pipe"](2,"momentDate"),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind2"](2,1,e.createdAt,"DD/MM/YYYY HH:mm"))}}function x(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"th",13),a["\u0275\u0275text"](1,"Peso do cilindro"),a["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275text"](1),a["\u0275\u0275pipe"](2,"round"),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind2"](2,1,e.cylinderWeight,2)," Kg ")}}function w(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"th",13),a["\u0275\u0275text"](1,"Peso total"),a["\u0275\u0275elementEnd"]())}function C(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275text"](1),a["\u0275\u0275pipe"](2,"round"),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind2"](2,1,e.weight,2)," Kg ")}}function S(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"th",13),a["\u0275\u0275text"](1,"Peso g\xe1s"),a["\u0275\u0275elementEnd"]())}function E(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275text"](1),a["\u0275\u0275pipe"](2,"round"),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind2"](2,1,e.gasWeight,2)," Kg ")}}function y(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"th",13),a["\u0275\u0275text"](1,"%"),a["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",14),a["\u0275\u0275text"](1),a["\u0275\u0275pipe"](2,"round"),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind2"](2,1,e.percentage,2),"% ")}}function P(e,t){1&e&&a["\u0275\u0275element"](0,"tr",15)}function M(e,t){1&e&&a["\u0275\u0275element"](0,"tr",16)}function O(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"button",17),a["\u0275\u0275listener"]("click",function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().loadMore()}),a["\u0275\u0275text"](1,"Mais..."),a["\u0275\u0275elementEnd"]()}}let I=(()=>{class e{constructor(e,t,n,i){this._deviceService=e,this._loader=t,this._toast=n,this.inputData=i,this.historyReads=[],this.historyReadFilter={limit:40,index:0},this.tableColumns=["createdAt","cylinderWeight","weight","gasWeight","percentage"]}ngOnInit(){this.getHistoryReads()}getHistoryReads(e={}){return new Promise((t,n)=>{this._loader.show(),this._deviceService.getHistoryReads(this.inputData.deviceId,this.historyReadFilter).subscribe(n=>{this._loader.dismiss(),e.reset&&(this.historyReads=[]),this.historyReads=this.historyReads.concat(n),t()},e=>{this._loader.dismiss(),this._toast.showHttpError(e),n()})})}loadMore(){this.historyReadFilter.index++,this.getHistoryReads()}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](c.U),a["\u0275\u0275directiveInject"](d.D),a["\u0275\u0275directiveInject"](s.k),a["\u0275\u0275directiveInject"](o.WI))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-device-gas-level-history-reads"]],decls:23,vars:4,consts:[[2,"font-size","26px"],["mat-table","",3,"dataSource"],["matColumnDef","createdAt"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","cylinderWeight"],["matColumnDef","weight"],["matColumnDef","gasWeight"],["matColumnDef","percentage"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[2,"text-align","center","padding","10px"],["mat-flat-button","","color","primary",3,"click",4,"ngIf"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["mat-flat-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"button-dialog-close"),a["\u0275\u0275elementStart"](1,"h1",0),a["\u0275\u0275text"](2,"Hist\xf3rico"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"table",1),a["\u0275\u0275elementContainerStart"](4,2),a["\u0275\u0275template"](5,u,2,0,"th",3),a["\u0275\u0275template"](6,f,3,4,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerStart"](7,5),a["\u0275\u0275template"](8,x,2,0,"th",3),a["\u0275\u0275template"](9,_,3,4,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerStart"](10,6),a["\u0275\u0275template"](11,w,2,0,"th",3),a["\u0275\u0275template"](12,C,3,4,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerStart"](13,7),a["\u0275\u0275template"](14,S,2,0,"th",3),a["\u0275\u0275template"](15,E,3,4,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerStart"](16,8),a["\u0275\u0275template"](17,y,2,0,"th",3),a["\u0275\u0275template"](18,b,3,4,"td",4),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275template"](19,P,1,0,"tr",9),a["\u0275\u0275template"](20,M,1,0,"tr",10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](21,"div",11),a["\u0275\u0275template"](22,O,2,0,"button",12),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("dataSource",t.historyReads),a["\u0275\u0275advance"](16),a["\u0275\u0275property"]("matHeaderRowDef",t.tableColumns),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("matRowDefColumns",t.tableColumns),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",t.historyReads.length>=t.historyReadFilter.limit))},directives:[m.P,v.BZ,v.w1,v.fO,v.Dz,v.as,v.nj,i.O5,v.ge,v.ev,v.XQ,v.Gk,p.lW],pipes:[h.v,g.L],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),e})(),D=(()=>{class e{constructor(e,t,n){this._loader=e,this._toast=t,this._deviceService=n}getDevice(e={id:this.deviceId}){return new Promise((t,n)=>{e.showLoader&&this._loader.show(),this._deviceService.getById(e.id).subscribe(n=>{e.showLoader&&this._loader.dismiss(),this.device=n,this.deviceId=n.id,t(this.device)},t=>{e.showLoader&&this._loader.dismiss(),this._toast.showHttpError(t),n(t)})})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](d.D),a["\u0275\u0275inject"](s.k),a["\u0275\u0275inject"](c.U))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();var k=n(54655),R=n(93738);let L=(()=>{class e{constructor(e,t,n){this._deviceDetailsService=e,this._dialog=t,this._router=n}ngOnInit(){}openHistoryReads(){this._dialog.open(I,{width:"60%",height:"90%",data:{deviceId:this._deviceDetailsService.deviceId}})}createSale(){this._router.navigate(["/sales/pos"],{queryParams:{personCustomerId:this._deviceDetailsService.device.person.id}})}get currentPercentage(){var e,t,n;return Math.round((null===(n=null===(t=null===(e=this._deviceDetailsService)||void 0===e?void 0:e.device)||void 0===t?void 0:t.deviceGasLevel)||void 0===n?void 0:n.percentage)||0)}get deviceGasLevel(){var e;return null===(e=this._deviceDetailsService.device)||void 0===e?void 0:e.deviceGasLevel}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](D),a["\u0275\u0275directiveInject"](o.uw),a["\u0275\u0275directiveInject"](k.F0))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-device-gas-level"]],decls:72,vars:15,consts:[["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px",2,"display","none"],["id","wave"],["d","M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"],["d","M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"],["d","M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"],["d","M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"],[2,"color","var(--color-asbestos)"],[1,"btn-create-sale"],["mat-stroked-button","","color","primary",3,"click"],[2,"margin-top","12px"],["mat-flat-button","","color","primary",3,"click"],[1,"row",2,"padding","20px 0 100px"],[1,"col-md-4",2,"padding-left","0"],[1,"card-percentage"],[1,"box"],[1,"percent"],["id","count",1,"percentNum"],[1,"percentB"],["id","water",1,"water"],["viewBox","0 0 560 20",1,"water_wave","water_wave_back"],[0,"xlink","href","#wave"],["viewBox","0 0 560 20",1,"water_wave","water_wave_front"],[1,"col-md-8",2,"padding-right","0"],[1,"infos"],[1,"row","danger-day"],[1,"col-md-6"],[1,"card-info"],[1,"row","weights"]],template:function(e,t){1&e&&(a["\u0275\u0275namespaceSVG"](),a["\u0275\u0275elementStart"](0,"svg",0),a["\u0275\u0275elementStart"](1,"symbol",1),a["\u0275\u0275element"](2,"path",2),a["\u0275\u0275element"](3,"path",3),a["\u0275\u0275element"](4,"path",4),a["\u0275\u0275element"](5,"path",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275namespaceHTML"](),a["\u0275\u0275elementStart"](6,"strong",6),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"div",7),a["\u0275\u0275elementStart"](9,"button",8),a["\u0275\u0275listener"]("click",function(){return t.createSale()}),a["\u0275\u0275text"](10,"Criar pedido"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"div",9),a["\u0275\u0275elementStart"](12,"button",10),a["\u0275\u0275listener"]("click",function(){return t.openHistoryReads()}),a["\u0275\u0275text"](13,"Hist\xf3rico de leituras"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"div",11),a["\u0275\u0275elementStart"](15,"div",12),a["\u0275\u0275elementStart"](16,"mat-card",13),a["\u0275\u0275elementStart"](17,"h4"),a["\u0275\u0275text"](18,"N\xedvel atual"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"div",14),a["\u0275\u0275elementStart"](20,"div",15),a["\u0275\u0275elementStart"](21,"div",16),a["\u0275\u0275text"](22),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"div",17),a["\u0275\u0275text"](24,"%"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](25,"div",18),a["\u0275\u0275namespaceSVG"](),a["\u0275\u0275elementStart"](26,"svg",19),a["\u0275\u0275element"](27,"use",20),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](28,"svg",21),a["\u0275\u0275element"](29,"use",20),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275namespaceHTML"](),a["\u0275\u0275elementStart"](30,"div",22),a["\u0275\u0275elementStart"](31,"div",23),a["\u0275\u0275elementStart"](32,"div",24),a["\u0275\u0275elementStart"](33,"div",25),a["\u0275\u0275elementStart"](34,"mat-card",26),a["\u0275\u0275elementStart"](35,"h5"),a["\u0275\u0275text"](36),a["\u0275\u0275pipe"](37,"momentDate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](38,"span"),a["\u0275\u0275text"](39,"Data da pr\xf3xima troca"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](40,"div",25),a["\u0275\u0275elementStart"](41,"mat-card",26),a["\u0275\u0275elementStart"](42,"h5"),a["\u0275\u0275text"](43),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](44,"span"),a["\u0275\u0275text"](45,"M\xe9dia de consumo"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](46,"div",27),a["\u0275\u0275elementStart"](47,"div",25),a["\u0275\u0275elementStart"](48,"mat-card",26),a["\u0275\u0275elementStart"](49,"h5"),a["\u0275\u0275text"](50),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](51,"span"),a["\u0275\u0275text"](52,"Tara do cilindro"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](53,"div",25),a["\u0275\u0275elementStart"](54,"mat-card",26),a["\u0275\u0275elementStart"](55,"h5"),a["\u0275\u0275text"](56),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](57,"span"),a["\u0275\u0275text"](58,"Peso do conte\xfado (cheio)"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](59,"div",25),a["\u0275\u0275elementStart"](60,"mat-card",26),a["\u0275\u0275elementStart"](61,"h5"),a["\u0275\u0275text"](62),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](63,"span"),a["\u0275\u0275text"](64,"Peso bruto"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](65,"div",25),a["\u0275\u0275elementStart"](66,"mat-card",26),a["\u0275\u0275elementStart"](67,"h5"),a["\u0275\u0275text"](68),a["\u0275\u0275pipe"](69,"round"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](70,"span"),a["\u0275\u0275text"](71,"Peso l\xedquido"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](7),a["\u0275\u0275textInterpolate1"]("Cilindro ",(null==t.deviceGasLevel||null==t.deviceGasLevel.cylinder?null:t.deviceGasLevel.cylinder.name)||" - ",""),a["\u0275\u0275advance"](15),a["\u0275\u0275textInterpolate"](t.currentPercentage),a["\u0275\u0275advance"](3),a["\u0275\u0275styleProp"]("transform","translate(0,"+(100-t.currentPercentage)+"%)"),a["\u0275\u0275advance"](11),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](37,10,t.deviceGasLevel.dangerDate)," "),a["\u0275\u0275advance"](7),a["\u0275\u0275textInterpolate1"]("",t.deviceGasLevel.consumptionDays," dias"),a["\u0275\u0275advance"](7),a["\u0275\u0275textInterpolate1"]("",null==t.deviceGasLevel?null:t.deviceGasLevel.cylinderWeight,"Kg"),a["\u0275\u0275advance"](6),a["\u0275\u0275textInterpolate1"]("",null==t.deviceGasLevel?null:t.deviceGasLevel.contentWeight,"Kg"),a["\u0275\u0275advance"](6),a["\u0275\u0275textInterpolate1"]("",null==t.deviceGasLevel?null:t.deviceGasLevel.currentWeight,"Kg"),a["\u0275\u0275advance"](6),a["\u0275\u0275textInterpolate1"]("",a["\u0275\u0275pipeBind2"](69,12,(null==t.deviceGasLevel?null:t.deviceGasLevel.currentWeight)-(null==t.deviceGasLevel?null:t.deviceGasLevel.cylinderWeight),2),"Kg"))},directives:[p.lW,R.a8],pipes:[h.v,g.L],styles:["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box;outline:none}body[_ngcontent-%COMP%]{background:var(--secondary-color-dark);-webkit-font-smoothing:antialiased}.btn-create-sale[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:5px;line-height:1;margin:6px 0}.card-percentage[_ngcontent-%COMP%]{height:calc(100% - 10px)}.card-percentage[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;margin:12px 0 22px}.card-percentage[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{margin:0 auto;height:180px;width:180px;transform:translate(0);background:#efefef;border-radius:100%;overflow:hidden}.card-percentage[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]{position:absolute;left:0;top:0;z-index:3;width:100%;height:100%;display:flex;display:-webkit-flex;align-items:center;justify-content:center;color:#fff;text-shadow:0 0 13px rgba(0,0,0,.5);font-size:38px;font-weight:700}.card-percentage[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{position:absolute;left:0;top:0;z-index:2;width:100%;height:100%;transform:translateY(100%);background:var(--primary-color);transition:all .3s}.card-percentage[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .water_wave[_ngcontent-%COMP%]{width:200%;position:absolute;bottom:100%}.card-percentage[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .water_wave_back[_ngcontent-%COMP%]{right:0;fill:var(--primary-color-extra-light);-webkit-animation:wave-back 2.8s linear infinite;animation:wave-back 2.8s linear infinite}.card-percentage[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .water_wave_front[_ngcontent-%COMP%]{left:0;fill:var(--primary-color);margin-bottom:-1px;-webkit-animation:wave-front 1.4s linear infinite;animation:wave-front 1.4s linear infinite}@-webkit-keyframes wave-front{to{transform:translate(-50%)}}@keyframes wave-front{to{transform:translate(-50%)}}@-webkit-keyframes wave-back{to{transform:translate(50%)}}@keyframes wave-back{to{transform:translate(50%)}}.infos[_ngcontent-%COMP%]   .weights[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .infos[_ngcontent-%COMP%]   .weights[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#666}.card-info[_ngcontent-%COMP%]{margin-bottom:10px}.card-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:27px;font-weight:700}.card-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:19px}"]}),e})();var j=n(26026),H=n(76627),G=n(75100);const z=["deviceContainer"];function W(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"span",12),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275styleProp"]("color",null!=e.device&&e.device.isOnline?"var(--color-nephritis)":"var(--color-pomegranate)"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",null!=e.device&&e.device.isOnline?"Online":"Offline"," ")}}let B=(()=>{class e{constructor(e,t,n,i,a,l,o,c){this._activatedRoute=e,this._loader=t,this._toast=n,this.deviceDetailsService=i,this._componentFactoryResolver=a,this._title=l,this._dialog=o,this._router=c,this.deviceTypeComponent={[r.Yi.GAS_LEVEL]:L},this._deviceRefreshInterval={interval:null,time:5e3}}ngOnInit(){this._title.set("Dispositivo - Detalhes");const e=this._activatedRoute.snapshot.params.id;if(!e)throw this._toast.open("Dispositivo n\xe3o encontrado"),new Error("Device not found");this.initDevice(e)}ngOnDestroy(){clearInterval(this._deviceRefreshInterval.interval)}initDevice(e){this.deviceDetailsService.getDevice({id:e,showLoader:!0}).then(e=>{this._title.set(`Dispositivo - ${e.name}`),this.deviceContainer.clear();const t=this._componentFactoryResolver.resolveComponentFactory(this.deviceTypeComponent[e.type]);this.deviceContainer.createComponent(t),this._deviceRefreshInterval.interval=setInterval(()=>this.deviceDetailsService.getDevice(),this._deviceRefreshInterval.time)})}get device(){return this.deviceDetailsService.device}openPerson(){this._dialog.open(l.c,{width:"90%",height:"90%",data:{personId:this.device.person.id}}).afterClosed().subscribe(e=>{e&&e.hasUpdate&&this.deviceDetailsService.getDevice()})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](k.gz),a["\u0275\u0275directiveInject"](d.D),a["\u0275\u0275directiveInject"](s.k),a["\u0275\u0275directiveInject"](D),a["\u0275\u0275directiveInject"](a.ComponentFactoryResolver),a["\u0275\u0275directiveInject"](j.y),a["\u0275\u0275directiveInject"](o.uw),a["\u0275\u0275directiveInject"](k.F0))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-device-details"]],viewQuery:function(e,t){if(1&e&&a["\u0275\u0275viewQuery"](z,5,a.ViewContainerRef),2&e){let e;a["\u0275\u0275queryRefresh"](e=a["\u0275\u0275loadQuery"]())&&(t.deviceContainer=e.first)}},decls:21,vars:8,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","header","default-margin-top"],["mat-stroked-button","","color","primary","routerLink","/devices",1,"btn-back"],[1,"title"],[1,"device-id"],[1,"person"],["href","javascript:;",3,"click"],[1,"address"],["class","is-online",3,"color",4,"ngIf"],[1,"col-12"],["deviceContainer",""],[1,"is-online"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"button",3),a["\u0275\u0275elementStart"](4,"mat-icon"),a["\u0275\u0275text"](5,"arrow_back"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"h1",4),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"span",5),a["\u0275\u0275text"](9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"div",6),a["\u0275\u0275elementStart"](11,"a",7),a["\u0275\u0275listener"]("click",function(){return t.openPerson()}),a["\u0275\u0275text"](12),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](13,"div",8),a["\u0275\u0275text"](14),a["\u0275\u0275pipe"](15,"address"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](16,W,2,3,"span",9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](17,"div",1),a["\u0275\u0275elementStart"](18,"div",10),a["\u0275\u0275elementContainer"](19,null,11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](7),a["\u0275\u0275textInterpolate"]((null==t.device?null:t.device.name)||"Dispositivo"),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"]("#",(null==t.device?null:t.device.id)||"-",""),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate2"](" ",null==t.device||null==t.device.person?null:t.device.person.name," (",null==t.device||null==t.device.person?null:t.device.person.id,") "),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](15,6,null==t.device?null:t.device.address)),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",t.device))},directives:[p.lW,k.rH,H.Hw,i.O5],pipes:[G.q],styles:[".header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-weight:700}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:var(--color-asbestos)}.header[_ngcontent-%COMP%]   .device-id[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .is-online[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]{font-weight:700}"]}),e})();var F=n(15495),K=n(35503),V=n(44466);let Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({providers:[D],imports:[[i.ez,K.D,V.m,F.h,k.Bz.forChild([{path:"",component:B}])]]}),e})()}}]);