(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[83,106],{658:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return R}));var a=r(15),i=r(9),n=r(2),l=r(3),o=r(4),s=r(5),c=r(0),u=(r(69),r(54)),p=r(17),f=r(187),d=r(86),y=r(26),b=r(1),m=(r(11),r(13),r(10),r(27)),v=r(7),h=r(25),O=r(242),j=r(374),g=r(371),w=r(370),x=r(378),S=r(372),I=r(249),M=r(369),T=r(659),L=r(45),E=r(36),P=r(43),k=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).copyright="",e.fullExtent=new L.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,E.a.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=E.a.WebMercator,e.subDomains=null,e.tileInfo=new M.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new P.a({x:-20037508.342787,y:20037508.342787,spatialReference:E.a.WebMercator}),spatialReference:E.a.WebMercator,lods:[new I.a({level:0,scale:591657527.591555,resolution:156543.033928}),new I.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new I.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new I.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new I.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new I.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new I.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new I.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new I.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new I.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new I.a({level:10,scale:577790.554289,resolution:152.874056570411}),new I.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new I.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new I.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new I.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new I.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new I.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new I.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new I.a({level:18,scale:2256.994353,resolution:.597164283559817}),new I.a({level:19,scale:1128.497176,resolution:.298582141647617}),new I.a({level:20,scale:564.248588,resolution:.14929107082380833}),new I.a({level:21,scale:282.124294,resolution:.07464553541190416}),new I.a({level:22,scale:141.062147,resolution:.03732276770595208}),new I.a({level:23,scale:70.5310735,resolution:.01866138385297604})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return Object(l.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(i.a)({urlTemplate:e},t):e}},{key:"load",value:function(e){var t=this,r=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var r=new y.a(t.urlTemplate);t.subDomains&&t.subDomains.length>0||-1===r.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new p.a("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(r),Promise.resolve(this)}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,r=Object(a.a)(this.tileInfo.lods);try{for(r.s();!(t=r.n()).done;){var i=t.value;e[i.level]=i.levelValue||i.level}}catch(n){r.e(n)}finally{r.f()}return e}},{key:"readSpatialReference",value:function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&E.a.fromJSON(t.fullExtent.spatialReference)}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,i=new y.a(t),n=i.scheme?i.scheme+"://":"//",l=n+i.authority+"/";if(-1===i.authority.indexOf("{subDomain}"))e.push(l);else if(r&&r.length>0&&i.authority.split(".").length>1){var o,s=Object(a.a)(r);try{for(s.s();!(o=s.n()).done;){var c=o.value;e.push(n+i.authority.replace(/\{subDomain\}/gi,c)+"/")}}catch(u){s.e(u)}finally{s.f()}}return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new y.a(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){e&&Object(y.w)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(y.D)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=a.signal,l=this.getTileUrl(e,t,r),o={responseType:"image",signal:n,query:Object(i.a)({},this.refreshParameters)};return Object(u.default)(l,o).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,t,r){var a=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(d.c)(this.urlPath,{level:a,z:a,col:r,x:r,row:t,y:t})}}]),r}(Object(j.a)(Object(x.a)(Object(S.a)(Object(g.a)(Object(w.a)(Object(f.a)(O.a)))))));Object(c.a)([Object(b.b)({type:String,value:"",json:{write:!0}})],k.prototype,"copyright",void 0),Object(c.a)([Object(b.b)({type:L.a,json:{write:!0}})],k.prototype,"fullExtent",void 0),Object(c.a)([Object(b.b)({readOnly:!0,json:{read:!1,write:!1}})],k.prototype,"legendEnabled",void 0),Object(c.a)([Object(b.b)({type:["show","hide"]})],k.prototype,"listMode",void 0),Object(c.a)([Object(b.b)()],k.prototype,"levelValues",null),Object(c.a)([Object(b.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],k.prototype,"isReference",void 0),Object(c.a)([Object(b.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],k.prototype,"operationalLayerType",void 0),Object(c.a)([Object(b.b)({readOnly:!0,json:{read:!1,write:!1}})],k.prototype,"popupEnabled",void 0),Object(c.a)([Object(b.b)({type:E.a})],k.prototype,"spatialReference",void 0),Object(c.a)([Object(m.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],k.prototype,"readSpatialReference",null),Object(c.a)([Object(b.b)({type:[String],json:{write:!0}})],k.prototype,"subDomains",void 0),Object(c.a)([Object(b.b)({type:M.a,json:{write:!0}})],k.prototype,"tileInfo",void 0),Object(c.a)([Object(b.b)({readOnly:!0})],k.prototype,"tileServers",null),Object(c.a)([Object(b.b)({json:{read:!1}})],k.prototype,"type",void 0),Object(c.a)([Object(b.b)()],k.prototype,"urlPath",null),Object(c.a)([Object(b.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],k.prototype,"urlTemplate",void 0),Object(c.a)([Object(m.a)("urlTemplate",["urlTemplate","templateUrl"])],k.prototype,"readUrlTemplate",null),Object(c.a)([Object(h.a)("urlTemplate",{templateUrl:{type:String}})],k.prototype,"writeUrlTemplate",null),Object(c.a)([Object(b.b)({type:T.a,json:{write:!0}})],k.prototype,"wmtsInfo",void 0);var R=k=Object(c.a)([Object(v.a)("esri.layers.WebTileLayer")],k)},659:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var a,i=r(2),n=r(3),l=r(4),o=r(5),s=r(0),c=r(18),u=r(19),p=r(1),f=(r(13),r(11),r(10),r(7)),d=a=function(e){Object(l.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(i.a)(this,r),t.call(this,e)}return Object(n.a)(r,[{key:"clone",value:function(){return new a({customLayerParameters:Object(u.a)(this.customLayerParameters),customParameters:Object(u.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),r}(c.a);Object(s.a)([Object(p.b)({json:{type:Object,write:!0}})],d.prototype,"customLayerParameters",void 0),Object(s.a)([Object(p.b)({json:{type:Object,write:!0}})],d.prototype,"customParameters",void 0),Object(s.a)([Object(p.b)({type:String,json:{write:!0}})],d.prototype,"layerIdentifier",void 0),Object(s.a)([Object(p.b)({type:String,json:{write:!0}})],d.prototype,"tileMatrixSet",void 0),Object(s.a)([Object(p.b)({type:String,json:{write:!0}})],d.prototype,"url",void 0);var y=d=a=Object(s.a)([Object(f.a)("esri.layer.support.WMTSLayerInfo")],d)},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return o}));var a=r(6),i=r.n(a),n=r(15),l=i.a.mark(s);function o(e,t){var r,a=Object(n.a)(e.children);try{for(a.s();!(r=a.n()).done;){var i=r.value;if(i.localName in t){var l=t[i.localName];if("function"==typeof l){var s=l(i);s&&o(i,s)}else o(i,l)}}}catch(c){a.e(c)}finally{a.f()}}function s(e,t){var r,a,o,c;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:r=Object(n.a)(e.children),i.prev=1,r.s();case 3:if((a=r.n()).done){i.next=15;break}if(!((o=a.value).localName in t)){i.next=13;break}if("function"!=typeof(c=t[o.localName])){i.next=12;break}return i.next=10,c(o);case 10:i.next=13;break;case 12:return i.delegateYield(s(o,c),"t0",13);case 13:i.next=3;break;case 15:i.next=20;break;case 17:i.prev=17,i.t1=i.catch(1),r.e(i.t1);case 20:return i.prev=20,r.f(),i.finish(20);case 23:case"end":return i.stop()}}),l,null,[[1,17,20,23]])}},850:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return je}));var a,i=r(6),n=r.n(i),l=r(12),o=r(9),s=r(2),c=r(3),u=r(16),p=r(4),f=r(5),d=r(0),y=r(54),b=r(32),m=r(17),v=r(63),h=r(19),O=r(187),j=r(55),g=r(23),w=r(26),x=r(1),S=(r(13),r(11),r(10),r(27)),I=r(7),M=r(25),T=r(45),L=r(242),E=r(658),P=r(374),k=r(371),R=r(370),C=r(378),F=r(372),_=r(369),U=r(659),V=r(18),A=a=function(e){Object(p.a)(r,e);var t=Object(f.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).fullExtent=null,a.id=null,a.tileInfo=null,a}return Object(c.a)(r,[{key:"clone",value:function(){var e=new a;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}}]),r}(V.a);Object(d.a)([Object(x.b)({type:T.a,json:{read:{source:"fullExtent"}}})],A.prototype,"fullExtent",void 0),Object(d.a)([Object(x.b)({type:String,json:{read:{source:"id"}}})],A.prototype,"id",void 0),Object(d.a)([Object(x.b)({type:_.a,json:{read:{source:"tileInfo"}}})],A.prototype,"tileInfo",void 0);var N,W=A=a=Object(d.a)([Object(I.a)("esri.layer.support.TileMatrixSet")],A),D=N=function(e){Object(p.a)(r,e);var t=Object(f.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).id=null,a.title=null,a.description=null,a.legendUrl=null,a}return Object(c.a)(r,[{key:"clone",value:function(){var e=new N;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}}]),r}(V.a);Object(d.a)([Object(x.b)({json:{read:{source:"id"}}})],D.prototype,"id",void 0),Object(d.a)([Object(x.b)({json:{read:{source:"title"}}})],D.prototype,"title",void 0),Object(d.a)([Object(x.b)({json:{read:{source:"abstract"}}})],D.prototype,"description",void 0),Object(d.a)([Object(x.b)({json:{read:{source:"legendUrl"}}})],D.prototype,"legendUrl",void 0),Object(d.a)([Object(x.b)({json:{read:{source:"isDefault"}}})],D.prototype,"isDefault",void 0),Object(d.a)([Object(x.b)({json:{read:{source:"keywords"}}})],D.prototype,"keywords",void 0);var K,B=D=N=Object(d.a)([Object(I.a)("esri.layer.support.WMTSStyle")],D),H=K=function(e){Object(p.a)(r,e);var t=Object(f.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).fullExtent=null,a.fullExtents=null,a.imageFormats=null,a.id=null,a.layer=null,a.styles=null,a.tileMatrixSetId=null,a.tileMatrixSets=null,a}return Object(c.a)(r,[{key:"description",get:function(){return this._get("description")},set:function(e){this._set("description",e)}},{key:"readFullExtent",value:function(e,t){return(e=t.fullExtent)?T.a.fromJSON(e):null}},{key:"readFullExtents",value:function(e,t){var r;return null!=(r=t.fullExtents)&&r.length?t.fullExtents.map((function(e){return T.a.fromJSON(e)})):t.tileMatrixSets.map((function(e){return T.a.fromJSON(e.fullExtent)})).filter((function(e){return e}))}},{key:"imageFormat",get:function(){var e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e},set:function(e){var t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}},{key:"styleId",get:function(){var e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e},set:function(e){this._set("styleId",e)}},{key:"title",get:function(){return this._get("title")},set:function(e){this._set("title",e)}},{key:"tileMatrixSet",get:function(){var e=this;return this.tileMatrixSets?this.tileMatrixSets.find((function(t){return t.id===e.tileMatrixSetId})):null}},{key:"clone",value:function(){var e=new K;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}}]),r}(V.a);Object(d.a)([Object(x.b)()],H.prototype,"description",null),Object(d.a)([Object(x.b)()],H.prototype,"fullExtent",void 0),Object(d.a)([Object(S.a)("fullExtent",["fullExtent"])],H.prototype,"readFullExtent",null),Object(d.a)([Object(x.b)({readOnly:!0})],H.prototype,"fullExtents",void 0),Object(d.a)([Object(S.a)("fullExtents",["fullExtents","tileMatrixSets"])],H.prototype,"readFullExtents",null),Object(d.a)([Object(x.b)()],H.prototype,"imageFormat",null),Object(d.a)([Object(x.b)({json:{read:{source:"formats"}}})],H.prototype,"imageFormats",void 0),Object(d.a)([Object(x.b)()],H.prototype,"id",void 0),Object(d.a)([Object(x.b)()],H.prototype,"layer",void 0),Object(d.a)([Object(x.b)()],H.prototype,"styleId",null),Object(d.a)([Object(x.b)({type:b.a.ofType(B),json:{read:{source:"styles"}}})],H.prototype,"styles",void 0),Object(d.a)([Object(x.b)({value:null,json:{write:{ignoreOrigin:!0}}})],H.prototype,"title",null),Object(d.a)([Object(x.b)()],H.prototype,"tileMatrixSetId",void 0),Object(d.a)([Object(x.b)({readOnly:!0})],H.prototype,"tileMatrixSet",null),Object(d.a)([Object(x.b)({type:b.a.ofType(W),json:{read:{source:"tileMatrixSets"}}})],H.prototype,"tileMatrixSets",void 0);var J=H=K=Object(d.a)([Object(I.a)("esri.layers.support.WMTSSublayer")],H),q=r(22),z=r(8),G=r(43),Y=r(224),Q=r(196),X=r(758),Z=90.71428571428571,$=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function ee(e,t){var r,a;e=e.replace(/ows:/gi,"");var i=(new DOMParser).parseFromString(e,"text/xml").documentElement,n=new Map,l=new Map,o=ae("Contents",i);if(!o)throw new m.a("wmtslayer:wmts-capabilities-xml-is-not-valid");var s,c,u=ae("OperationsMetadata",i),p=null==u?void 0:u.querySelector("[name='GetTile']"),f=null==p?void 0:p.getElementsByTagName("Get"),d=f&&Array.prototype.slice.call(f),y=null!=(r=(null==t||null==(a=t.url)?void 0:a.indexOf("https"))>-1)&&r,b=t.serviceMode,v=t&&t.url;if(d&&d.length&&d.some((function(e){var t=ae("Constraint",e);return!t||oe("AllowedValues","Value",b,t)?(v=e.attributes[0].nodeValue,!0):(!t||oe("AllowedValues","Value","RESTful",t)||oe("AllowedValues","Value","REST",t)?c=e.attributes[0].nodeValue:t&&!oe("AllowedValues","Value","KVP",t)||(s=e.attributes[0].nodeValue),!1)})),!v)if(c)v=c,b="RESTful";else if(s)v=s,b="KVP";else{var h=ae("ServiceMetadataURL",i);v=h&&h.getAttribute("xlink:href")}var O=v.indexOf("1.0.0/");-1===O&&"RESTful"===b?v+="/":O>-1&&(v=v.substring(0,O)),"KVP"===b&&(v+=O>-1?"":"?"),y&&(v=v.replace(/^http:/i,"https:"));var j=le("ServiceIdentification>ServiceTypeVersion",i),g=le("ServiceIdentification>AccessConstraints",i),w=ie("Layer",o),x=ie("TileMatrixSet",o),S=w.map((function(e){var t=le("Identifier",e);return n.set(t,e),function(e,t,r,a,i){var n=le("Abstract",t),l=ne("Format",t);return{id:e,fullExtent:ce(t),fullExtents:ue(t),description:n,formats:l,styles:pe(t,a),title:le("Title",t),tileMatrixSets:fe(i,t,r)}}(t,e,x,y,j)}));return{copyright:g,dimensionMap:l,layerMap:n,layers:S,serviceMode:b,tileUrl:v}}function te(e){return e.layers.forEach((function(e){e.tileMatrixSets.forEach((function(e){var t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((function(r){r.scale=96*r.scale/t.dpi,r.resolution=me(t.spatialReference.wkid,r.scale*Z/96,e.id)})),t.dpi=96)}))})),e}function re(e){return e.nodeType===Node.ELEMENT_NODE}function ae(e,t){for(var r=0;r<t.childNodes.length;r++){var a=t.childNodes[r];if(re(a)&&a.nodeName===e)return a}return null}function ie(e,t){for(var r=[],a=0;a<t.childNodes.length;a++){var i=t.childNodes[a];re(i)&&i.nodeName===e&&r.push(i)}return r}function ne(e,t){for(var r=[],a=0;a<t.childNodes.length;a++){var i=t.childNodes[a];re(i)&&i.nodeName===e&&r.push(i)}return r.map((function(e){return e.textContent}))}function le(e,t){return e.split(">").forEach((function(e){t&&(t=ae(e,t))})),t&&t.textContent}function oe(e,t,r,a){var i;return Array.prototype.slice.call(a.childNodes).some((function(a){if(a.nodeName.indexOf(e)>-1){var n=ae(t,a),l=n&&n.textContent;if(l===r||r.split(":")&&r.split(":")[1]===l)return i=a,!0}return!1})),i}function se(e,t){var r,a=[],i=null==(r=e.layerMap)?void 0:r.get(t);if(i){var n,l,o,s,c=ie("ResourceURL",i),u=ie("Dimension",i);return u.length&&(n=le("Identifier",u[0]),l=ne("Default",u[0])||ne("Value",u[0])),u.length>1&&(o=le("Identifier",u[1]),s=ne("Default",u[1])||ne("Value",u[1])),e.dimensionMap.set(t,{dimensions:l,dimensions2:s}),c.forEach((function(e){var t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(n&&l.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue}");else{var r=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");r>-1&&(t=t.substring(0,r)+"{dimensionValue}"+t.substring(r+n.length+2))}if(o&&s.length)if(t.indexOf("{"+o+"}")>-1)t=t.replace("{"+o+"}","{dimensionValue2}");else{var i=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");i>-1&&(t=t.substring(0,i)+"{dimensionValue2}"+t.substring(i+o.length+2))}a.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),a}}function ce(e){var t=ae("WGS84BoundingBox",e),r=t?le("LowerCorner",t).split(" "):["-180","-90"],a=t?le("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(a[0]),ymax:parseFloat(a[1]),spatialReference:{wkid:4326}}}function ue(e){var t=[];return Object(X.b)(e,{BoundingBox:function(e){var r,a,i,n,l=e.getAttribute("crs"),o=de(l),s=l.includes("epsg")&&ye(o.wkid);Object(X.b)(e,{LowerCorner:function(e){var t,i,n;t=e.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),i=Object(q.a)(t,2),r=i[0],a=i[1],s&&(r=(n=[a,r])[0],a=n[1])},UpperCorner:function(e){var t,r,a;t=e.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),r=Object(q.a)(t,2),i=r[0],n=r[1],s&&(i=(a=[n,i])[0],n=a[1])}}),t.push({xmin:r,ymin:a,xmax:i,ymax:n,spatialReference:o})}}),t}function pe(e,t){return ie("Style",e).map((function(e){var r=ae("LegendURL",e),a=ae("Keywords",e),i=a&&ne("Keyword",a),n=r&&r.getAttribute("xlink:href");return t&&(n=n&&n.replace(/^http:/i,"https:")),{abstract:le("Abstract",e),id:le("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:i,legendUrl:n,title:le("Title",e)}}))}function fe(e,t,r){return ie("TileMatrixSetLink",t).map((function(e){return ae("TileMatrixSet",e).textContent})).map((function(a){return function(e,t,r,a){var i=ne("TileMatrix",oe("TileMatrixSetLink","TileMatrixSet",t,r)),n=a.find((function(e){var r=ae("Identifier",e),a=r&&r.textContent;return!!(a===t||t.split(":")&&t.split(":")[1]===a)})),l=function(e){var t=le("SupportedCRS",e).toLowerCase(),r=de(t),a=le("TopLeftCorner",ae("TileMatrix",e)).split(" "),i=a[0].split("E").map((function(e){return Number(e)})),n=a[1].split("E").map((function(e){return Number(e)})),l=i.length>1?i[0]*Math.pow(10,i[1]):i[0],o=n.length>1?n[0]*Math.pow(10,n[1]):n[0];return t.includes("epsg")&&ye(r.wkid)?new G.a({x:o,y:l,spatialReference:r}):new G.a({x:l,y:o,spatialReference:r})}(n),o=l.spatialReference,s=o.wkid,c=ae("TileMatrix",n),u=[parseInt(le("TileWidth",c),10),parseInt(le("TileHeight",c),10)],p=[];i.length?i.forEach((function(e,r){var a=oe("TileMatrix","Identifier",e,n);p.push(be(a,s,r,t))})):ie("TileMatrix",n).forEach((function(e,r){p.push(be(e,s,r,t))}));var f=function(e,t,r,a,i){var n,l,o,s,c,u,p=ae("BoundingBox",t);if(p&&(n=le("LowerCorner",p).split(" "),l=le("UpperCorner",p).split(" ")),n&&n.length>1&&l&&l.length>1)o=parseFloat(n[0]),c=parseFloat(n[1]),s=parseFloat(l[0]),u=parseFloat(l[1]);else{var f=ae("TileMatrix",t),d=parseInt(le("MatrixWidth",f),10),y=parseInt(le("MatrixHeight",f),10);o=r.x,u=r.y,s=o+d*a[0]*i.resolution,c=u-y*a[1]*i.resolution}return function(e,t){return"1.0.0"===e&&ye(t.wkid)}(e,r.spatialReference)?new T.a(c,o,u,s,r.spatialReference):new T.a(o,c,s,u,r.spatialReference)}(e,n,l,u,p[0]).toJSON(),d=new _.a({dpi:96,spatialReference:o,size:u,origin:l,lods:p}).toJSON();return{id:t,fullExtent:f,tileInfo:d}}(e,a,t,r)}))}function de(e){e=e.toLowerCase();var t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);var r=function(e){return e.includes("crs84")||e.includes("crs:84")?4326:e.includes("crs83")||e.includes("crs:83")?4269:e.includes("crs27")||e.includes("crs:27")?4267:null}(e);return Object(z.j)(r)&&(t=r),{wkid:t}}function ye(e){return $.some((function(t){var r=Object(q.a)(t,2),a=r[0],i=r[1];return e>=a&&e<=i}))}function be(e,t,r,a){var i,n=le("Identifier",e),l=le("ScaleDenominator",e).split("E").map((function(e){return Number(e)})),o=me(t,i=l.length>1?l[0]*Math.pow(10,l[1]):l[0],a);return i*=96/Z,{cols:parseInt(le("MatrixWidth",e),10),level:r,levelValue:n,scale:i,resolution:o,rows:parseInt(le("MatrixHeight",e),10)}}function me(e,t,r){return 7*t/25e3/(Q.a.hasOwnProperty(String(e))?Q.a.values[Q.a[e]]:"default028mm"===r?6370997*Math.PI/180:Object(Y.f)(e).metersPerDegree)}var ve={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},he=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]),Oe=function(e){Object(p.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i)))._sublayersHandles=new v.a,e.copyright="",e.customParameters=null,e.customLayerParameters=null,e.fullExtent=null,e.operationalLayerType="WebTiledLayer",e.resourceInfo=null,e.serviceMode="RESTful",e.sublayers=null,e.type="wmts",e.version="1.0.0",e.watch("activeLayer",(function(t,r){r&&(r.layer=null),t&&(t.layer=Object(u.a)(e))}),!0),e.watch("sublayers",(function(t,r){r&&(r.forEach((function(e){e.layer=null})),e._sublayersHandles.removeAll(),e._sublayersHandles=null),t&&(t.forEach((function(t){t.layer=Object(u.a)(e)})),e._sublayersHandles||(e._sublayersHandles=new v.a),e._sublayersHandles.add([t.on("after-add",(function(t){t.item.layer=Object(u.a)(e)})),t.on("after-remove",(function(e){e.item.layer=null}))]))}),!0),e}return Object(c.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(o.a)({url:e},t):e}},{key:"load",value:function(e){var t=this;if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(g.u).then((function(){return t._fetchService(e)})).catch((function(e){throw Object(g.u)(e),new m.a("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}},{key:"activeLayer",get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)}},{key:"readActiveLayerFromService",value:function(e,t,r){var a=this;this.activeLayer||(this.activeLayer=new J);var i=t.layers.find((function(e){return e.id===a.activeLayer.id}));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}},{key:"readActiveLayerFromItemOrWebDoc",value:function(e,t){var r=t.templateUrl,a=t.wmtsInfo,i=r?this._getLowerCasedUrlParams(r):null,n=null==a?void 0:a.layerIdentifier,l=null,o=null==a?void 0:a.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);var s=null==i?void 0:i.format,c=null==i?void 0:i.style;return new J({id:n,imageFormat:s,styleId:c,tileMatrixSetId:l})}},{key:"writeActiveLayer",value:function(e,t,r,a){var i=this.activeLayer;t.templateUrl=this.getUrlTemplate(i.id,i.tileMatrixSetId,i.imageFormat,i.styleId);var n=Object(j.b)("tileMatrixSet.tileInfo",i);t.tileInfo=n?n.toJSON(a):null,t.wmtsInfo=Object(o.a)(Object(o.a)({},t.wmtsInfo),{},{layerIdentifier:i.id,tileMatrixSet:i.tileMatrixSetId})}},{key:"readCustomParameters",value:function(e,t){var r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}},{key:"fullExtents",get:function(){return this.activeLayer.fullExtents}},{key:"readServiceMode",value:function(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}},{key:"readSublayersFromService",value:function(e,t,r){return function(e,t){return e.map((function(e){var r=new J;return r.read(e,t),r}))}(t.layers,r)}},{key:"supportedSpatialReferences",get:function(){return this.activeLayer.tileMatrixSets.map((function(e){return e.tileInfo.spatialReference})).toArray()}},{key:"title",get:function(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"},set:function(e){e?this._override("title",e):this._clearOverride("title")}},{key:"url",get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}},{key:"createWebTileLayer",value:function(e){var t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,a=e.fullExtent,i=new U.a({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(i.customLayerParameters=this.customLayerParameters),this.customParameters&&(i.customParameters=this.customParameters),new E.default({fullExtent:a,urlTemplate:t,tileInfo:r,wmtsInfo:i})}},{key:"fetchTile",value:function(e,t,r){var a=this.getTileUrl(e,t,r);return Object(y.default)(a,{responseType:"image"}).then((function(e){return e.data}))}},{key:"findSublayerById",value:function(e){return this.sublayers.find((function(t){return t.id===e}))}},{key:"getTileUrl",value:function(e,t,r){var a=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],i=a?a.levelValue?a.levelValue:"".concat(a.level):"".concat(e),n=this.resourceInfo?"":function(e,t,r,a,i,n,l,o){var s=e.dimensionMap,c=se(e,t),u=s.get(t).dimensions&&s.get(t).dimensions[0],p=s.get(t).dimensions2&&s.get(t).dimensions2[0],f="";if(c&&c.length>0){var d=null;c.some((function(e){return e.format===a&&(d=e,!0)})),d||(d=c[l%c.length]),f=d.template.replace(/\{Style\}/gi,i).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,n).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p)}return f}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,i,t,r);return n||(n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,i).replace(/\{row\}/gi,"".concat(t)).replace(/\{col\}/gi,"".concat(r))),n=this._appendCustomLayerParameters(n)}},{key:"getUrlTemplate",value:function(e,t,r,a){if(!this.resourceInfo){var i=function(e,t,r,a){var i=e.dimensionMap,n=se(e,t),l="";if(n&&n.length>0){var o=i.get(t).dimensions&&i.get(t).dimensions[0],s=i.get(t).dimensions2&&i.get(t).dimensions2[0];(l=n[0].template).indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=(l=(l=(l=(l=(l=(l=l.replace(/\{Style\}/gi,a)).replace(/\{TileMatrixSet\}/gi,r)).replace(/\{TileMatrix\}/gi,"{level}")).replace(/\{TileRow\}/gi,"{row}")).replace(/\{TileCol\}/gi,"{col}")).replace(/\{dimensionValue\}/gi,o)).replace(/\{dimensionValue2\}/gi,s)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,a);if(i)return i}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+a+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){var n="";return ve[r.toLowerCase()]&&(n=ve[r.toLowerCase()]),this.url+e+"/"+a+"/"+t+"/{level}/{row}/{col}"+n}return""}},{key:"_fetchService",value:function(){var e=Object(l.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.resourceInfo){e.next=4;break}"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),r={ssl:!1,data:this.resourceInfo},e.next=23;break;case 4:return e.prev=4,e.next=7,this._getCapabilities(this.serviceMode,t);case 7:r=e.sent,e.next=23;break;case 10:return e.prev=10,e.t0=e.catch(4),a="KVP"===this.serviceMode?"RESTful":"KVP",e.prev=13,e.next=16,this._getCapabilities(a,t);case 16:r=e.sent,this.serviceMode=a,e.next=23;break;case 20:throw e.prev=20,e.t1=e.catch(13),new m.a("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e.t1});case 23:this.resourceInfo?r.data=te(r.data):r.data=ee(r.data,{serviceMode:this.serviceMode,url:this.url}),r.data&&this.read(r.data,{origin:"service"});case 24:case"end":return e.stop()}}),e,this,[[4,10],[13,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getCapabilities",value:function(){var e=Object(l.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this._getCapabilitiesUrl(t),e.next=3,Object(y.default)(a,Object(o.a)(Object(o.a)({},r),{},{responseType:"text"}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getTileMatrixSetById",value:function(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((function(t){return t.id===e}))}},{key:"_appendCustomParameters",value:function(e){if(this.customParameters)for(var t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}},{key:"_appendCustomLayerParameters",value:function(e){if(this.customLayerParameters||this.customParameters){var t=Object(o.a)(Object(o.a)({},Object(h.a)(this.customParameters)),this.customLayerParameters);for(var r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}},{key:"_getCapabilitiesUrl",value:function(e){var t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t)}},{key:"_getLowerCasedUrlParams",value:function(e){if(!e)return null;var t=Object(w.K)(e).query;if(!t)return null;var r={};return Object.keys(t).forEach((function(e){r[e.toLowerCase()]=t[e]})),r}},{key:"_mergeParams",value:function(e,t){var r=this._getLowerCasedUrlParams(t);if(r){var a=Object.keys(r);a.length&&(e=e?Object(h.a)(e):{},a.forEach((function(t){e.hasOwnProperty(t)||he.has(t)||(e[t]=r[t])})))}return e}}]),r}(Object(P.a)(Object(C.a)(Object(F.a)(Object(k.a)(Object(R.a)(Object(O.a)(L.a)))))));Object(d.a)([Object(x.b)()],Oe.prototype,"dimensionMap",void 0),Object(d.a)([Object(x.b)()],Oe.prototype,"layerMap",void 0),Object(d.a)([Object(x.b)({type:J,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],Oe.prototype,"activeLayer",null),Object(d.a)([Object(S.a)("service","activeLayer",["layers"])],Oe.prototype,"readActiveLayerFromService",null),Object(d.a)([Object(S.a)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],Oe.prototype,"readActiveLayerFromItemOrWebDoc",null),Object(d.a)([Object(M.a)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:_.a},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],Oe.prototype,"writeActiveLayer",null),Object(d.a)([Object(x.b)({type:String,value:"",json:{write:!0}})],Oe.prototype,"copyright",void 0),Object(d.a)([Object(x.b)({type:["show","hide"]})],Oe.prototype,"listMode",void 0),Object(d.a)([Object(x.b)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],Oe.prototype,"customParameters",void 0),Object(d.a)([Object(S.a)("web-document","customParameters"),Object(S.a)("portal-item","customParameters")],Oe.prototype,"readCustomParameters",null),Object(d.a)([Object(x.b)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],Oe.prototype,"customLayerParameters",void 0),Object(d.a)([Object(x.b)({type:T.a,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],Oe.prototype,"fullExtent",void 0),Object(d.a)([Object(x.b)({readOnly:!0})],Oe.prototype,"fullExtents",null),Object(d.a)([Object(x.b)({type:["WebTiledLayer"]})],Oe.prototype,"operationalLayerType",void 0),Object(d.a)([Object(x.b)()],Oe.prototype,"resourceInfo",void 0),Object(d.a)([Object(x.b)()],Oe.prototype,"serviceMode",void 0),Object(d.a)([Object(S.a)(["portal-item","web-document"],"serviceMode",["templateUrl"])],Oe.prototype,"readServiceMode",null),Object(d.a)([Object(x.b)({type:b.a.ofType(J)})],Oe.prototype,"sublayers",void 0),Object(d.a)([Object(S.a)("service","sublayers",["layers"])],Oe.prototype,"readSublayersFromService",null),Object(d.a)([Object(x.b)({readOnly:!0})],Oe.prototype,"supportedSpatialReferences",null),Object(d.a)([Object(x.b)({json:{read:{source:"title"}}})],Oe.prototype,"title",null),Object(d.a)([Object(x.b)({json:{read:!1},readOnly:!0,value:"wmts"})],Oe.prototype,"type",void 0),Object(d.a)([Object(x.b)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],Oe.prototype,"url",null),Object(d.a)([Object(x.b)()],Oe.prototype,"version",void 0);var je=Oe=Object(d.a)([Object(I.a)("esri.layers.WMTSLayer")],Oe)}}]);
//# sourceMappingURL=83.b457533c.chunk.js.map