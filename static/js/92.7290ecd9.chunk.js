(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[92,106],{658:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return W}));var l=a(15),r=a(9),o=a(2),n=a(3),i=a(4),s=a(5),c=a(0),p=(a(69),a(54)),u=a(17),b=a(187),y=a(86),j=a(26),v=a(1),O=(a(11),a(13),a(10),a(27)),d=a(7),f=a(25),w=a(242),m=a(374),h=a(371),g=a(370),T=a(378),S=a(372),R=a(249),I=a(369),M=a(659),x=a(45),k=a(36),P=a(43),D=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).copyright="",e.fullExtent=new x.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,k.a.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=k.a.WebMercator,e.subDomains=null,e.tileInfo=new I.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new P.a({x:-20037508.342787,y:20037508.342787,spatialReference:k.a.WebMercator}),spatialReference:k.a.WebMercator,lods:[new R.a({level:0,scale:591657527.591555,resolution:156543.033928}),new R.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new R.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new R.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new R.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new R.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new R.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new R.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new R.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new R.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new R.a({level:10,scale:577790.554289,resolution:152.874056570411}),new R.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new R.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new R.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new R.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new R.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new R.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new R.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new R.a({level:18,scale:2256.994353,resolution:.597164283559817}),new R.a({level:19,scale:1128.497176,resolution:.298582141647617}),new R.a({level:20,scale:564.248588,resolution:.14929107082380833}),new R.a({level:21,scale:282.124294,resolution:.07464553541190416}),new R.a({level:22,scale:141.062147,resolution:.03732276770595208}),new R.a({level:23,scale:70.5310735,resolution:.01866138385297604})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return Object(n.a)(a,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(r.a)({urlTemplate:e},t):e}},{key:"load",value:function(e){var t=this,a=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var a=new j.a(t.urlTemplate);t.subDomains&&t.subDomains.length>0||-1===a.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new u.a("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(a),Promise.resolve(this)}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,a=Object(l.a)(this.tileInfo.lods);try{for(a.s();!(t=a.n()).done;){var r=t.value;e[r.level]=r.levelValue||r.level}}catch(o){a.e(o)}finally{a.f()}return e}},{key:"readSpatialReference",value:function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&k.a.fromJSON(t.fullExtent.spatialReference)}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,a=this.subDomains,r=new j.a(t),o=r.scheme?r.scheme+"://":"//",n=o+r.authority+"/";if(-1===r.authority.indexOf("{subDomain}"))e.push(n);else if(a&&a.length>0&&r.authority.split(".").length>1){var i,s=Object(l.a)(a);try{for(s.s();!(i=s.n()).done;){var c=i.value;e.push(o+r.authority.replace(/\{subDomain\}/gi,c)+"/")}}catch(p){s.e(p)}finally{s.f()}}return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new j.a(e),a=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(a.length)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){e&&Object(j.w)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(j.D)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,a){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=l.signal,n=this.getTileUrl(e,t,a),i={responseType:"image",signal:o,query:Object(r.a)({},this.refreshParameters)};return Object(p.default)(n,i).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,t,a){var l=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(y.c)(this.urlPath,{level:l,z:l,col:a,x:a,row:t,y:t})}}]),a}(Object(m.a)(Object(T.a)(Object(S.a)(Object(h.a)(Object(g.a)(Object(b.a)(w.a)))))));Object(c.a)([Object(v.b)({type:String,value:"",json:{write:!0}})],D.prototype,"copyright",void 0),Object(c.a)([Object(v.b)({type:x.a,json:{write:!0}})],D.prototype,"fullExtent",void 0),Object(c.a)([Object(v.b)({readOnly:!0,json:{read:!1,write:!1}})],D.prototype,"legendEnabled",void 0),Object(c.a)([Object(v.b)({type:["show","hide"]})],D.prototype,"listMode",void 0),Object(c.a)([Object(v.b)()],D.prototype,"levelValues",null),Object(c.a)([Object(v.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],D.prototype,"isReference",void 0),Object(c.a)([Object(v.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],D.prototype,"operationalLayerType",void 0),Object(c.a)([Object(v.b)({readOnly:!0,json:{read:!1,write:!1}})],D.prototype,"popupEnabled",void 0),Object(c.a)([Object(v.b)({type:k.a})],D.prototype,"spatialReference",void 0),Object(c.a)([Object(O.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],D.prototype,"readSpatialReference",null),Object(c.a)([Object(v.b)({type:[String],json:{write:!0}})],D.prototype,"subDomains",void 0),Object(c.a)([Object(v.b)({type:I.a,json:{write:!0}})],D.prototype,"tileInfo",void 0),Object(c.a)([Object(v.b)({readOnly:!0})],D.prototype,"tileServers",null),Object(c.a)([Object(v.b)({json:{read:!1}})],D.prototype,"type",void 0),Object(c.a)([Object(v.b)()],D.prototype,"urlPath",null),Object(c.a)([Object(v.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],D.prototype,"urlTemplate",void 0),Object(c.a)([Object(O.a)("urlTemplate",["urlTemplate","templateUrl"])],D.prototype,"readUrlTemplate",null),Object(c.a)([Object(f.a)("urlTemplate",{templateUrl:{type:String}})],D.prototype,"writeUrlTemplate",null),Object(c.a)([Object(v.b)({type:M.a,json:{write:!0}})],D.prototype,"wmtsInfo",void 0);var W=D=Object(c.a)([Object(d.a)("esri.layers.WebTileLayer")],D)},659:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var l,r=a(2),o=a(3),n=a(4),i=a(5),s=a(0),c=a(18),p=a(19),u=a(1),b=(a(13),a(11),a(10),a(7)),y=l=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"clone",value:function(){return new l({customLayerParameters:Object(p.a)(this.customLayerParameters),customParameters:Object(p.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),a}(c.a);Object(s.a)([Object(u.b)({json:{type:Object,write:!0}})],y.prototype,"customLayerParameters",void 0),Object(s.a)([Object(u.b)({json:{type:Object,write:!0}})],y.prototype,"customParameters",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],y.prototype,"layerIdentifier",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],y.prototype,"tileMatrixSet",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],y.prototype,"url",void 0);var j=y=l=Object(s.a)([Object(b.a)("esri.layer.support.WMTSLayerInfo")],y)},831:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var l=a(2),r=a(3),o=a(4),n=a(5),i=a(0),s=(a(69),a(1)),c=(a(11),a(13),a(10),a(7)),p=a(43),u=a(658),b=a(249),y=a(369),j=a(204),v=a(36),O=a(45),d=function(e){Object(o.a)(a,e);var t=Object(n.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).portalItem=null,e.isReference=null,e.tileInfo=new y.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new p.a({x:-20037508.342787,y:20037508.342787,spatialReference:v.a.WebMercator}),spatialReference:v.a.WebMercator,lods:[new b.a({level:0,scale:591657527.591555,resolution:156543.033928}),new b.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new b.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new b.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new b.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new b.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new b.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new b.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new b.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new b.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new b.a({level:10,scale:577790.554289,resolution:152.874056570411}),new b.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new b.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new b.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new b.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new b.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new b.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new b.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new b.a({level:18,scale:2256.994353,resolution:.597164283559817}),new b.a({level:19,scale:1128.497176,resolution:.298582141647617})]}),e.subDomains=["a","b","c"],e.fullExtent=new O.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,v.a.WebMercator),e.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",e.operationalLayerType="OpenStreetMap",e.type="open-street-map",e.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA",e}return Object(r.a)(a,[{key:"refreshInterval",get:function(){return 0}}]),a}(u.default);Object(i.a)([Object(s.b)({type:j.default,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"portalItem",void 0),Object(i.a)([Object(s.b)({type:Boolean,json:{read:!1,write:!1}})],d.prototype,"isReference",void 0),Object(i.a)([Object(s.b)({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"refreshInterval",null),Object(i.a)([Object(s.b)({type:y.a,json:{write:!1}})],d.prototype,"tileInfo",void 0),Object(i.a)([Object(s.b)({type:["show","hide"]})],d.prototype,"listMode",void 0),Object(i.a)([Object(s.b)({readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"subDomains",void 0),Object(i.a)([Object(s.b)({readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"fullExtent",void 0),Object(i.a)([Object(s.b)({readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"urlTemplate",void 0),Object(i.a)([Object(s.b)({type:["OpenStreetMap"]})],d.prototype,"operationalLayerType",void 0),Object(i.a)([Object(s.b)({json:{read:!1}})],d.prototype,"type",void 0),Object(i.a)([Object(s.b)({json:{read:!1,write:!1}})],d.prototype,"copyright",void 0),Object(i.a)([Object(s.b)({json:{read:!1,write:!1}})],d.prototype,"wmtsInfo",void 0);var f=d=Object(i.a)([Object(c.a)("esri.layers.OpenStreetMapLayer")],d)}}]);
//# sourceMappingURL=92.7290ecd9.chunk.js.map