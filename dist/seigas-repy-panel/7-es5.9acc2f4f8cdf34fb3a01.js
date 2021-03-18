!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{iTUp:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var a=i("fXoL"),o=function(){var e=function e(){n(this,e)};return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e}()},zjaR:function(e,i,a){"use strict";a.r(i),a.d(i,"DeviceDetailsModule",function(){return O});var o,r,c,l=a("ofXK"),d=a("fXoL"),v=a("n5pS"),s=a("5dVO"),m=a("2g2N"),f=a("BtSu"),u=((o=function(){function e(t,i,a){n(this,e),this._loader=t,this._toast=i,this._deviceService=a}return t(e,[{key:"getDevice",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{deviceKey:this.deviceKey};return new Promise(function(n,i){t.showLoader&&e._loader.show(),e._deviceService.getByKey(t.deviceKey).subscribe(function(i){t.showLoader&&e._loader.dismiss(),e.device=i,e.deviceKey=i.deviceKey,n(e.device)},function(n){t.showLoader&&e._loader.dismiss(),e._toast.showError(n),i(n)})})}}]),e}()).\u0275fac=function(e){return new(e||o)(d["\u0275\u0275inject"](s.a),d["\u0275\u0275inject"](m.a),d["\u0275\u0275inject"](f.a))},o.\u0275prov=d["\u0275\u0275defineInjectable"]({token:o,factory:o.\u0275fac}),o),p=a("Wp6s"),g=((r=function(){function e(t){n(this,e),this._deviceDetailsService=t}return t(e,[{key:"ngOnInit",value:function(){}},{key:"currentPercentage",get:function(){var e,t,n;return Math.round((null===(n=null===(t=null===(e=this._deviceDetailsService)||void 0===e?void 0:e.device)||void 0===t?void 0:t.deviceGasLevel)||void 0===n?void 0:n.percentage)||0)}},{key:"deviceGasLevel",get:function(){var e;return null===(e=this._deviceDetailsService.device)||void 0===e?void 0:e.deviceGasLevel}}]),e}()).\u0275fac=function(e){return new(e||r)(d["\u0275\u0275directiveInject"](u))},r.\u0275cmp=d["\u0275\u0275defineComponent"]({type:r,selectors:[["app-device-gas-level"]],decls:35,vars:6,consts:[["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px",2,"display","none"],["id","wave"],["d","M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"],["d","M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"],["d","M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"],["d","M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"],[2,"color","var(--color-asbestos)"],[2,"text-align","center","margin","12px 0 22px"],[1,"box"],[1,"percent"],["id","count",1,"percentNum"],[1,"percentB"],["id","water",1,"water"],["viewBox","0 0 560 20",1,"water_wave","water_wave_back"],[0,"xlink","href","#wave"],["viewBox","0 0 560 20",1,"water_wave","water_wave_front"],[1,"infos"],[1,"row"],[1,"col-md-6"],[1,"card-info"]],template:function(e,t){1&e&&(d["\u0275\u0275namespaceSVG"](),d["\u0275\u0275elementStart"](0,"svg",0),d["\u0275\u0275elementStart"](1,"symbol",1),d["\u0275\u0275element"](2,"path",2),d["\u0275\u0275element"](3,"path",3),d["\u0275\u0275element"](4,"path",4),d["\u0275\u0275element"](5,"path",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275namespaceHTML"](),d["\u0275\u0275elementStart"](6,"strong",6),d["\u0275\u0275text"](7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"h4",7),d["\u0275\u0275text"](9,"N\xedvel atual"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"div",8),d["\u0275\u0275elementStart"](11,"div",9),d["\u0275\u0275elementStart"](12,"div",10),d["\u0275\u0275text"](13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"div",11),d["\u0275\u0275text"](15,"%"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"div",12),d["\u0275\u0275namespaceSVG"](),d["\u0275\u0275elementStart"](17,"svg",13),d["\u0275\u0275element"](18,"use",14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"svg",15),d["\u0275\u0275element"](20,"use",14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275namespaceHTML"](),d["\u0275\u0275elementStart"](21,"div",16),d["\u0275\u0275elementStart"](22,"div",17),d["\u0275\u0275elementStart"](23,"div",18),d["\u0275\u0275elementStart"](24,"mat-card",19),d["\u0275\u0275elementStart"](25,"h5"),d["\u0275\u0275text"](26),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](27,"span"),d["\u0275\u0275text"](28,"Peso do cilindro vazio"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](29,"div",18),d["\u0275\u0275elementStart"](30,"mat-card",19),d["\u0275\u0275elementStart"](31,"h5"),d["\u0275\u0275text"](32),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](33,"span"),d["\u0275\u0275text"](34,"Peso do conte\xfado"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](7),d["\u0275\u0275textInterpolate1"]("Cilindro ",(null==t.deviceGasLevel||null==t.deviceGasLevel.cylinder?null:t.deviceGasLevel.cylinder.name)||" - ",""),d["\u0275\u0275advance"](6),d["\u0275\u0275textInterpolate"](t.currentPercentage),d["\u0275\u0275advance"](3),d["\u0275\u0275styleProp"]("transform","translate(0,"+(100-t.currentPercentage)+"%)"),d["\u0275\u0275advance"](10),d["\u0275\u0275textInterpolate1"]("",null==t.deviceGasLevel?null:t.deviceGasLevel.cylinderWeight,"Kg"),d["\u0275\u0275advance"](6),d["\u0275\u0275textInterpolate1"]("",null==t.deviceGasLevel?null:t.deviceGasLevel.contentWeight,"Kg"))},directives:[p.a],styles:["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box;outline:none}body[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased}.box[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{background:var(--secondary-color-dark)}.box[_ngcontent-%COMP%]{margin:0 auto;height:180px;width:180px;transform:translate(0);border-radius:100%;overflow:hidden}.box[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]{z-index:3;display:flex;display:-webkit-flex;align-items:center;justify-content:center;color:#fff;font-size:38px;font-weight:700}.box[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%}.box[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{z-index:2;transform:translateY(100%);background:var(--primary-color);transition:all .3s}.box[_ngcontent-%COMP%]   .water_wave[_ngcontent-%COMP%]{width:200%;position:absolute;bottom:100%}.box[_ngcontent-%COMP%]   .water_wave_back[_ngcontent-%COMP%]{right:0;fill:var(--primary-color-extra-light);-webkit-animation:wave-back 2.8s linear infinite;animation:wave-back 2.8s linear infinite}.box[_ngcontent-%COMP%]   .water_wave_front[_ngcontent-%COMP%]{left:0;fill:var(--primary-color);margin-bottom:-1px;-webkit-animation:wave-front 1.4s linear infinite;animation:wave-front 1.4s linear infinite}@-webkit-keyframes wave-front{to{transform:translate(-50%)}}@keyframes wave-front{to{transform:translate(-50%)}}@-webkit-keyframes wave-back{to{transform:translate(50%)}}@keyframes wave-back{to{transform:translate(50%)}}.infos[_ngcontent-%COMP%]{margin-top:37px;margin-bottom:41px}.card-info[_ngcontent-%COMP%]{margin-bottom:10px}.card-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:27px;font-weight:700}.card-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:19px}"]}),r),h=a("tyNb"),w=a("wd/R"),y=((c=function(){function e(){n(this,e)}return t(e,[{key:"transform",value:function(e){return w(e).calendar()}}]),e}()).\u0275fac=function(e){return new(e||c)},c.\u0275pipe=d["\u0275\u0275definePipe"]({name:"momentCalendar",type:c,pure:!0}),c),_=["deviceContainer"];function x(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"span",9),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275styleProp"]("color",null!=n.device&&n.device.isOnline?"var(--color-nephritis)":"var(--color-pomegranate)"),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",null!=n.device&&n.device.isOnline?"Online":"Offline"," ")}}var C,b,P=((C=function(){function e(t,i,a,o,r){var c,l,d;n(this,e),this._activatedRoute=t,this._loader=i,this._toast=a,this.deviceDetailsService=o,this._componentFactoryResolver=r,this.deviceTypeComponent=(c={},l=v.a.GAS_LEVEL,d=g,l in c?Object.defineProperty(c,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[l]=d,c),this._deviceRefreshInterval={interval:null,time:5e3}}return t(e,[{key:"ngOnInit",value:function(){var e=this._activatedRoute.snapshot.params.deviceKey;if(!e)throw this._toast.open("Dispositivo n\xe3o encontrado"),new Error("Device not found");this.initDevice(e)}},{key:"ngOnDestroy",value:function(){clearInterval(this._deviceRefreshInterval.interval)}},{key:"initDevice",value:function(e){var t=this;this.deviceDetailsService.getDevice({deviceKey:e,showLoader:!0}).then(function(e){t.deviceContainer.clear();var n=t._componentFactoryResolver.resolveComponentFactory(t.deviceTypeComponent[e.type]);t.deviceContainer.createComponent(n),t._deviceRefreshInterval.interval=setInterval(function(){return t.deviceDetailsService.getDevice()},t._deviceRefreshInterval.time)})}},{key:"device",get:function(){return this.deviceDetailsService.device}}]),e}()).\u0275fac=function(e){return new(e||C)(d["\u0275\u0275directiveInject"](h.a),d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](m.a),d["\u0275\u0275directiveInject"](u),d["\u0275\u0275directiveInject"](d.ComponentFactoryResolver))},C.\u0275cmp=d["\u0275\u0275defineComponent"]({type:C,selectors:[["app-device-details"]],viewQuery:function(e,t){var n;1&e&&d["\u0275\u0275viewQuery"](_,!0,d.ViewContainerRef),2&e&&d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.deviceContainer=n.first)},decls:16,vars:8,consts:[[1,"container"],[1,"row"],[1,"col-12","header","default-margin-top"],[1,"title"],[1,"device-key"],[1,"last-update"],["class","is-online",3,"color",4,"ngIf"],[1,"col-12"],["deviceContainer",""],[1,"is-online"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"div",2),d["\u0275\u0275elementStart"](3,"h1",3),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"span",4),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"span",5),d["\u0275\u0275text"](8),d["\u0275\u0275pipe"](9,"lowercase"),d["\u0275\u0275pipe"](10,"momentCalendar"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](11,x,2,3,"span",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"div",1),d["\u0275\u0275elementStart"](13,"div",7),d["\u0275\u0275elementContainer"](14,null,8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate"]((null==t.device?null:t.device.name)||"Dispositivo"),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("#",(null==t.device?null:t.device.deviceKey)||"0000",""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("\xdaltima atualiza\xe7\xe3o ",t.device?d["\u0275\u0275pipeBind1"](9,4,d["\u0275\u0275pipeBind1"](10,6,t.device.deviceGasLevel.lastWeightUpdate)):"-",""),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngIf",t.device))},directives:[l.k],pipes:[l.h,y],styles:[".header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:var(--color-asbestos)}.header[_ngcontent-%COMP%]   .device-key[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .is-online[_ngcontent-%COMP%]{font-weight:700}"]}),C),S=a("ssao"),M=a("iTUp"),O=((b=function e(){n(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},providers:[u],imports:[[l.b,M.a,S.a,h.f.forChild([{path:"",component:P}])]]}),b)}}])}();