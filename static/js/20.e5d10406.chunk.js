(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[20],{625:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i}));var a=r(15);function i(e,t,r){return t.flatten((function(e){return e.sublayers})).length!==e.length||(!!e.some((function(e){return e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r}))||!l(e,t))}function n(e,t,r){return!!e.some((function(e){var t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===r.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!l(e,t)}function l(e,t){if(!e||!e.length)return!0;var r=t.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).map((function(e){return e.id})).toArray();if(e.length>r.length)return!1;var i,n=0,l=r.length,o=Object(a.a)(e);try{for(o.s();!(i=o.n()).done;){for(var s=i.value.id;n<l&&r[n]!==s;)n++;if(n>=l)return!1}}catch(u){o.e(u)}finally{o.f()}return!0}function o(e){return!!e&&e.some((function(e){return null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale}))}},712:function(e,t,r){"use strict";r.d(t,"a",(function(){return ae}));var a,i=r(22),n=r(15),l=r(6),o=r.n(l),s=r(9),u=r(12),c=r(2),y=r(3),p=r(4),b=r(5),d=r(0),f=(r(69),r(203)),h=(r(292),r(346),r(348),r(347),r(114),r(271),r(270),r(293),r(273)),v=r(54),O=r(56),j=r(32),g=r(17),m=r(111),I=r(167),S=r(19),w=r(91),x=r(10),k=r(8),L=r(187),D=r(26),P=r(1),_=r(68),E=r(41),F=(r(11),r(27)),T=r(7),M=r(25),N=r(13),V=r(96),A=r(354),C=r(244),J=r(373),q=r(251),B=r(409),U=r(195),Q=r(417),G=r(89),R=r(387),K=r(607),W=r(45);function X(e){return e&&"esriSMS"===e.type}function z(e,t,r){var a,i=this.originIdOf(t)>=Object(V.d)(r.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&"map-image"===(null==(a=r.layer)?void 0:a.type)&&(r.writeSublayerStructure||i)}}function H(e,t,r){var a;return{enabled:!!r&&"tile"===(null==(a=r.layer)?void 0:a.type)&&this._isOverridden(t)}}function Y(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function Z(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=Object(V.d)(r.origin))}}var $=x.a.getLogger("esri.layers.support.Sublayer"),ee=0,te=new Set;te.add("layer"),te.add("parent"),te.add("loaded"),te.add("loadStatus"),te.add("loadError"),te.add("loadWarnings");var re=a=function(e){Object(p.a)(l,e);var t=Object(b.a)(l);function l(e){var r;return Object(c.a)(this,l),(r=t.call(this,e)).capabilities=void 0,r.fields=null,r.fullExtent=null,r.globalIdField=null,r.legendEnabled=!0,r.objectIdField=null,r.popupEnabled=!0,r.popupTemplate=null,r.sourceJSON=null,r.title=null,r.typeIdField=null,r.types=null,r}return Object(y.a)(l,[{key:"load",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise(Object(u.a)(o.a.mark((function e(){var a,i,n,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.layer||r.url){e.next=2;break}throw new g.a("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:r});case 2:if(i=null,r.layer&&!(r.originIdOf("url")>2)&&"data-layer"!==(null==(a=r.source)?void 0:a.type)){e.next=9;break}return e.next=6,Object(v.default)(r.url,Object(s.a)({responseType:"json",query:{f:"json"}},t));case 6:i=e.sent.data,e.next=14;break;case 9:return l=r.id,"map-layer"===(null==(n=r.source)?void 0:n.type)&&(l=r.source.mapLayerId),e.next=13,r.layer.fetchSublayerInfo(l,t);case 13:i=e.sent;case 14:i&&(r.sourceJSON=i,r.read({layerDefinition:i},{origin:"service"}));case 15:case"end":return e.stop()}}),e)})))()),this));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"readCapabilities",value:function(e,t){var r=(e=(t=t.layerDefinition||t).capabilities||e)?e.toLowerCase().split(",").map((function(e){return e.trim()})):[];return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:-1!==r.indexOf("query")}}}},{key:"definitionExpression",set:function(e){this._setAndNotifyLayer("definitionExpression",e)}},{key:"fieldsIndex",get:function(){return new J.a(this.fields||[])}},{key:"floorInfo",set:function(e){this._setAndNotifyLayer("floorInfo",e)}},{key:"readGlobalIdFieldFromService",value:function(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields){var r,a=Object(n.a)(t.fields);try{for(a.s();!(r=a.n()).done;){var i=r.value;if("esriFieldTypeGlobalID"===i.type)return i.name}}catch(l){a.e(l)}finally{a.f()}}}},{key:"id",get:function(){var e=this._get("id");return null==e?ee++:e},set:function(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}},{key:"labelingInfo",set:function(e){this._setAndNotifyLayer("labelingInfo",e)}},{key:"writeLabelingInfo",value:function(e,t,r,a){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map((function(e){return e.write({},a)}))}})}},{key:"labelsVisible",set:function(e){this._setAndNotifyLayer("labelsVisible",e)}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"listMode",set:function(e){this._set("listMode",e)}},{key:"minScale",set:function(e){this._setAndNotifyLayer("minScale",e)}},{key:"readMinScale",value:function(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}},{key:"maxScale",set:function(e){this._setAndNotifyLayer("maxScale",e)}},{key:"readMaxScale",value:function(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}},{key:"readObjectIdFieldFromService",value:function(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields){var r,a=Object(n.a)(t.fields);try{for(a.s();!(r=a.n()).done;){var i=r.value;if("esriFieldTypeOID"===i.type)return i.name}}catch(l){a.e(l)}finally{a.f()}}}},{key:"opacity",set:function(e){this._setAndNotifyLayer("opacity",e)}},{key:"readOpacity",value:function(e,t){var r=t.layerDefinition;return 1-.01*(null!=r.transparency?r.transparency:r.drawingInfo.transparency)}},{key:"writeOpacity",value:function(e,t,r,a){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}},{key:"writeParent",value:function(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=Object(N.e)(this.parent.id):t.parentLayerId=-1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",set:function(e){if(e){var t,r=Object(n.a)(e.getSymbols());try{for(r.s();!(t=r.n()).done;){var a=t.value;if(Object(O.c)(a)){$.warn("Sublayer renderer should use 2D symbols");break}}}catch(i){r.e(i)}finally{r.f()}}this._setAndNotifyLayer("renderer",e)}},{key:"source",get:function(){return this._get("source")||new Q.a({mapLayerId:this.id})},set:function(e){this._setAndNotifyLayer("source",e)}},{key:"sublayers",set:function(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return Object(N.m)(j.a.ofType(a),e)}},{key:"writeSublayers",value:function(e,t,r){this.get("sublayers.length")&&(t[r]=this.sublayers.map((function(e){return e.id})).toArray().reverse())}},{key:"readTypeIdField",value:function(e,t){var r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();var a=t.fields.find((function(e){return e.name.toLowerCase()===r}));a&&(r=a.name)}return null}},{key:"url",get:function(){var e,t,r=null!=(e=null==(t=this.layer)?void 0:t.parsedUrl)?e:this._lastParsedUrl,a=this.source;if(!r)return null;if(this._lastParsedUrl=r,"map-layer"===(null==a?void 0:a.type))return"".concat(r.path,"/").concat(a.mapLayerId);var i={layer:JSON.stringify({source:this.source})};return"".concat(r.path,"/dynamicLayer?").concat(Object(D.E)(i))},set:function(e){e?this._override("url",e):this._clearOverride("url")}},{key:"visible",set:function(e){this._setAndNotifyLayer("visible",e)}},{key:"writeVisible",value:function(e,t,r,a){t[r]=this.getAtOrigin("defaultVisibility","service")||e}},{key:"clone",value:function(){var e=Object(_.a)(this).store,t=new a;return Object(_.a)(t).store=e.clone(te),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}},{key:"createPopupTemplate",value:function(e){return Object(R.a)(this,e)}},{key:"createQuery",value:function(){return new G.a({returnGeometry:!0,where:this.definitionExpression||"1=1"})}},{key:"createFeatureLayer",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,i,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.hasOwnProperty("sublayers")){e.next=2;break}return e.abrupt("return",null);case 2:return i=null==(t=this.layer)?void 0:t.parsedUrl,e.next=6,Promise.resolve().then(r.bind(null,295));case 6:return e.t0=e.sent.default,e.t1={url:i.path},n=new e.t0(e.t1),e.abrupt("return",(i&&this.source&&("map-layer"===this.source.type?n.layerId=this.source.mapLayerId:n.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(n.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(n.definitionExpression=this.definitionExpression),this.floorInfo&&(n.floorInfo=Object(S.a)(this.floorInfo)),this.originIdOf("labelingInfo")>2&&(n.labelingInfo=Object(S.a)(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(n.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(n.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(n.visible=this.visible),this.originIdOf("minScale")>0&&(n.minScale=this.minScale),this.originIdOf("maxScale")>0&&(n.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(n.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(n.popupTemplate=Object(S.a)(this.popupTemplate)),this.originIdOf("renderer")>2&&(n.renderer=Object(S.a)(this.renderer)),"data-layer"===(null==(a=this.source)?void 0:a.type)&&(n.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(n.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(n.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(n.customParameters=this.layer.customParameters),n));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFeatureType",value:function(e){var t=this.typeIdField,r=this.types;if(!t||!e)return null;var a=e.attributes?e.attributes[t]:void 0;if(null==a)return null;var i=null;return r.some((function(e){var t=e.id;return null!=t&&(t.toString()===a.toString()&&(i=e),!!i)})),i}},{key:"getFieldDomain",value:function(e,t){var r=t&&t.feature,a=this.getFeatureType(r);if(a){var i=a.domains&&a.domains[e];if(i&&"inherited"!==i.type)return i}return this._getLayerDomain(e)}},{key:"queryFeatures",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,l,u,c,y,p,b,d,f,h,v,O,j,m=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:this.createQuery(),a=m.length>1?m[1]:void 0,e.next=4,this.load();case 4:if(this.get("capabilities.operations.supportsQuery")){e.next=6;break}throw new g.a("Sublayer.queryFeatures","this layer doesn't support queries.");case 6:return e.next=8,Promise.all([Promise.resolve().then(r.bind(null,170)),Promise.resolve().then(r.bind(null,125))]);case 8:return p=e.sent,b=Object(i.a)(p,2),d=b[0].executeQuery,f=b[1].default,e.next=14,d(this.url,G.a.from(t),null!=(l=null==(u=this.layer)?void 0:u.spatialReference)?l:null,Object(s.a)(Object(s.a)({},a),{},{query:Object(s.a)(Object(s.a)({},null==(c=this.layer)?void 0:c.customParameters),{},{token:null==(y=this.layer)?void 0:y.apiKey})}));case 14:if(h=e.sent,null!=(v=f.fromJSON(h.data))&&v.features){O=Object(n.a)(v.features);try{for(O.s();!(j=O.n()).done;)j.value.sourceLayer=this}catch(o){O.e(o)}finally{O.f()}}return e.abrupt("return",v);case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toExportImageJSON",value:function(e){var t,r=this,a={id:this.id,source:(null==(t=this.source)?void 0:t.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};if(this.definitionExpression){var i=Object(k.j)(e)?Object(K.a)(e,this):this.definitionExpression;a.definitionExpression=i}else Object(k.j)(e)&&(a.definitionExpression=e);var n=["renderer","labelingInfo","opacity","labelsVisible"].reduce((function(e,t){return e[t]=r.originIdOf(t),e}),{}),l=Object.keys(n).some((function(e){return n[e]>2}));if(l){var o=a.drawingInfo={};n.renderer>2&&(o.renderer=this.renderer?this.renderer.toJSON():null),n.labelsVisible>2&&(o.showLabels=this.labelsVisible),this.labelsVisible&&n.labelingInfo>2&&(o.labelingInfo=this.labelingInfo?this.labelingInfo.map((function(e){return e.write({},{origin:"service",layer:r.layer})})):null,o.showLabels=!0),n.opacity>2&&(o.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(o.renderer)}return a}},{key:"_assignDefaultSymbolColors",value:function(e){this._forEachSimpleMarkerSymbols(e,(function(e){e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}},{key:"_forEachSimpleMarkerSymbols",value:function(e,t){if(e){var r,a="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[],i=Object(n.a)(a);try{for(i.s();!(r=i.n()).done;){var l=r.value;X(l.symbol)&&t(l.symbol)}}catch(o){i.e(o)}finally{i.f()}"symbol"in e&&X(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&X(e.defaultSymbol)&&t(e.defaultSymbol)}}},{key:"_setAndNotifyLayer",value:function(e,t){var r,a,i=this.layer,n=this._get(e);switch(e){case"definitionExpression":case"floorInfo":r="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":r="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":r="supportsDynamicLayers",a="supportsModification"}var l=Object(_.a)(this).getDefaultOrigin();if("service"!==l){if(r&&!1===this.get("layer.capabilities.exportMap.".concat(r)))return void this._logLockedError(e,"capability not available 'layer.capabilities.exportMap.".concat(r,"'"));if(a&&!1===this.get("capabilities.exportMap.".concat(a)))return void this._logLockedError(e,"capability not available 'capabilities.exportMap.".concat(a,"'"))}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==l&&n!==t&&i&&i.emit&&i.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}},{key:"_handleSublayersChange",value:function(e,t){var r=this;t&&(t.forEach((function(e){e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((function(e){e.parent=r,e.layer=r.layer})),this.handles.add([e.on("after-add",(function(e){var t=e.item;t.parent=r,t.layer=r.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null})),e.on("before-changes",(function(e){var t=r.get("layer.capabilities.exportMap.supportsSublayersChanges");null==t||t||($.error(new g.a("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:r,layer:r.layer})),e.preventDefault())}))]))}},{key:"_logLockedError",value:function(e,t){$.error(new g.a("sublayer:locked","Property '".concat(e,"' can't be changed on Sublayer from the layer '").concat(this.layer.id,"'"),{reason:t,sublayer:this,layer:this.layer}))}},{key:"_getLayerDomain",value:function(e){var t=this.fieldsIndex.get(e);return t?t.domain:null}}]),l}(Object(m.b)(Object(L.a)(Object(I.a)(w.a))));re.test={isMapImageLayerOverridePolicy:function(e){return e===Y||e===z},isTileImageLayerOverridePolicy:function(e){return e===H}},Object(d.a)([Object(P.b)({readOnly:!0})],re.prototype,"capabilities",void 0),Object(d.a)([Object(F.a)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],re.prototype,"readCapabilities",null),Object(d.a)([Object(P.b)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{overridePolicy:z}}})],re.prototype,"definitionExpression",null),Object(d.a)([Object(P.b)({type:[C.a],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],re.prototype,"fields",void 0),Object(d.a)([Object(P.b)({readOnly:!0})],re.prototype,"fieldsIndex",null),Object(d.a)([Object(P.b)({type:B.a,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:z},origins:{"web-scene":{read:!1,write:!1}}}})],re.prototype,"floorInfo",null),Object(d.a)([Object(P.b)({type:W.a,json:{read:{source:"layerDefinition.extent"}}})],re.prototype,"fullExtent",void 0),Object(d.a)([Object(P.b)({type:String})],re.prototype,"globalIdField",void 0),Object(d.a)([Object(F.a)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],re.prototype,"readGlobalIdFieldFromService",null),Object(d.a)([Object(P.b)({type:N.a,json:{write:{ignoreOrigin:!0}}})],re.prototype,"id",null),Object(d.a)([Object(P.b)({value:null,type:[q.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:Y}}})],re.prototype,"labelingInfo",null),Object(d.a)([Object(M.a)("labelingInfo")],re.prototype,"writeLabelingInfo",null),Object(d.a)([Object(P.b)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:Y}}})],re.prototype,"labelsVisible",null),Object(d.a)([Object(P.b)({value:null})],re.prototype,"layer",null),Object(d.a)([Object(P.b)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:Z}}})],re.prototype,"legendEnabled",void 0),Object(d.a)([Object(P.b)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],re.prototype,"listMode",null),Object(d.a)([Object(P.b)({type:Number,value:0,json:{write:{overridePolicy:Y}}})],re.prototype,"minScale",null),Object(d.a)([Object(F.a)("minScale",["minScale","layerDefinition.minScale"])],re.prototype,"readMinScale",null),Object(d.a)([Object(P.b)({type:Number,value:0,json:{write:{overridePolicy:Y}}})],re.prototype,"maxScale",null),Object(d.a)([Object(F.a)("maxScale",["maxScale","layerDefinition.maxScale"])],re.prototype,"readMaxScale",null),Object(d.a)([Object(P.b)({type:String})],re.prototype,"objectIdField",void 0),Object(d.a)([Object(F.a)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],re.prototype,"readObjectIdFieldFromService",null),Object(d.a)([Object(P.b)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:Y}}})],re.prototype,"opacity",null),Object(d.a)([Object(F.a)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],re.prototype,"readOpacity",null),Object(d.a)([Object(M.a)("opacity")],re.prototype,"writeOpacity",null),Object(d.a)([Object(P.b)({json:{type:N.a,write:{target:"parentLayerId",allowNull:!0,overridePolicy:Y}}})],re.prototype,"parent",void 0),Object(d.a)([Object(M.a)("parent")],re.prototype,"writeParent",null),Object(d.a)([Object(P.b)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,t){return!t.disablePopup}},write:{target:"disablePopup",overridePolicy:Z,writer:function(e,t,r){t[r]=!e}}}})],re.prototype,"popupEnabled",void 0),Object(d.a)([Object(P.b)({type:f.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:Z}}})],re.prototype,"popupTemplate",void 0),Object(d.a)([Object(P.b)({readOnly:!0})],re.prototype,"defaultPopupTemplate",null),Object(d.a)([Object(P.b)({types:h.a,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:Y},origins:{"web-scene":{types:h.b,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:Y}}}}})],re.prototype,"renderer",null),Object(d.a)([Object(P.b)({types:{key:"type",base:null,typeMap:{"data-layer":U.a,"map-layer":Q.a}},cast:function(e){if(e){if("mapLayerId"in e)return Object(N.d)(Q.a,e);if("dataSource"in e)return Object(N.d)(U.a,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:Y}}})],re.prototype,"source",null),Object(d.a)([Object(P.b)()],re.prototype,"sourceJSON",void 0),Object(d.a)([Object(P.b)({value:null,json:{type:[N.a],write:{target:"subLayerIds",allowNull:!0,overridePolicy:Y}}})],re.prototype,"sublayers",null),Object(d.a)([Object(E.a)("sublayers")],re.prototype,"castSublayers",null),Object(d.a)([Object(M.a)("sublayers")],re.prototype,"writeSublayers",null),Object(d.a)([Object(P.b)({type:String,json:{read:{source:"name"},write:{target:"name",allowNull:!0,overridePolicy:Z}}})],re.prototype,"title",void 0),Object(d.a)([Object(P.b)({type:String})],re.prototype,"typeIdField",void 0),Object(d.a)([Object(F.a)("typeIdField",["layerDefinition.typeIdField"])],re.prototype,"readTypeIdField",null),Object(d.a)([Object(P.b)({type:[A.a],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],re.prototype,"types",void 0),Object(d.a)([Object(P.b)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:H}}})],re.prototype,"url",null),Object(d.a)([Object(P.b)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:Y}}})],re.prototype,"visible",null),Object(d.a)([Object(M.a)("visible")],re.prototype,"writeVisible",null);var ae=re=a=Object(d.a)([Object(T.a)("esri.layers.support.Sublayer")],re)},776:function(e,t,r){"use strict";r.d(t,"a",(function(){return S}));var a=r(15),i=r(9),n=r(6),l=r.n(n),o=r(12),s=r(2),u=r(3),c=r(4),y=r(5),p=r(0),b=r(54),d=r(23),f=r(26),h=r(402),v=r(1),O=(r(11),r(13),r(10),r(27)),j=r(7),g=r(45),m=r(36),I=r(112),S=function(e){var t=function(e){Object(c.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.apply(this,arguments)).capabilities=void 0,e.copyright=null,e.fullExtent=null,e.legendEnabled=!0,e.spatialReference=null,e.version=null,e}return Object(u.a)(r,[{key:"readCapabilities",value:function(e,t){var r=t.capabilities&&t.capabilities.split(",").map((function(e){return e.toLowerCase().trim()}));if(!r)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var a=this.type,i=-1!==r.indexOf("query"),n=-1!==r.indexOf("map"),l=!!t.exportTilesAllowed,o=-1!==r.indexOf("tilemap"),s="tile"!==a&&!!t.supportsDynamicLayers,u="tile"!==a&&(!t.tileInfo||s),c="tile"!==a&&(!t.tileInfo||s),y="tile"!==a,p=!!t.cimVersion&&h.a.parse(t.cimVersion).since(1,4);return{operations:{supportsQuery:i,supportsExportMap:n,supportsExportTiles:l,supportsTileMap:o},exportMap:n?{supportsArcadeExpressionForLabeling:p,supportsSublayersChanges:y,supportsDynamicLayers:s,supportsSublayerVisibility:u,supportsSublayerDefinitionExpression:c}:null,exportTiles:l?{maxExportTilesCount:+t.maxExportTilesCount}:null}}},{key:"readVersion",value:function(e,t){var r=t.currentVersion;return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}},{key:"fetchSublayerInfo",value:function(){var e=Object(o.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchAllLayersAndTables(r);case 2:return e.abrupt("return",this._allLayersAndTablesMap.get(t));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchAllLayersAndTables",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(t);case 2:return this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Object(b.default)(Object(f.K)(this.url).path+"/layers",{responseType:"json",query:Object(i.a)(Object(i.a)({f:"json"},this.customParameters),{},{token:this.apiKey})}).then((function(e){n._allLayersAndTablesMap=new Map;var t,r=Object(a.a)(e.data.layers);try{for(r.s();!(t=r.n()).done;){var i=t.value;n._allLayersAndTablesMap.set(i.id,i)}}catch(l){r.e(l)}finally{r.f()}return{result:e.data}}),(function(e){return{error:e}}))),e.next=5,this._allLayersAndTablesPromise;case 5:if(r=e.sent,Object(d.v)(t),!("result"in r)){e.next=8;break}return e.abrupt("return",r.result);case 8:throw r.error;case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(e);return Object(p.a)([Object(v.b)({readOnly:!0})],t.prototype,"capabilities",void 0),Object(p.a)([Object(O.a)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),Object(p.a)([Object(v.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(p.a)([Object(v.b)({type:g.a})],t.prototype,"fullExtent",void 0),Object(p.a)([Object(v.b)(I.c)],t.prototype,"id",void 0),Object(p.a)([Object(v.b)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),Object(p.a)([Object(v.b)(I.j)],t.prototype,"popupEnabled",void 0),Object(p.a)([Object(v.b)({type:m.a})],t.prototype,"spatialReference",void 0),Object(p.a)([Object(v.b)()],t.prototype,"version",void 0),Object(p.a)([Object(O.a)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=Object(p.a)([Object(j.a)("esri.layers.mixins.ArcGISMapService")],t)}},777:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var a=r(15),i=r(2),n=r(3),l=r(42),o=r(38),s=r(4),u=r(5),c=r(0),y=r(32),p=r(171),b=r(17),d=r(10),f=r(1),h=(r(11),r(68)),v=(r(13),r(7)),O=r(96),j=r(712),g=r(625),m=d.a.getLogger("esri.layers.TileLayer");var I=y.a.ofType(j.a);function S(e,t){e&&e.forEach((function(e){t(e),e.sublayers&&e.sublayers.length&&S(e.sublayers,t)}))}var w=function(e){var t=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).allSublayers=new p.a({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.sublayersSourceJSON={2:{},3:{},4:{},5:{}},e.handles.add(e.watch("sublayers",(function(t,r){return e._handleSublayersChange(t,r)}),!0)),e}return Object(n.a)(r,[{key:"readSublayers",value:function(e,t){if(t&&e){var r=this.sublayersSourceJSON,a=Object(O.d)(t.origin);if(!(a<2)&&(r[a]={context:t,visibleLayers:e.visibleLayers||r[a].visibleLayers,layers:e.layers||r[a].layers},!(a>2))){this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);var i=this.createSublayersForOrigin("web-document"),n=i.sublayers,l=i.origin,o=Object(h.a)(this);o.setDefaultOrigin(l),this._set("sublayers",new I(n)),o.setDefaultOrigin("user")}}}},{key:"findSublayerById",value:function(e){return this.allSublayers.find((function(t){return t.id===e}))}},{key:"createServiceSublayers",value:function(){return this.createSublayersForOrigin("service").sublayers}},{key:"createSublayersForOrigin",value:function(e){var t,r=Object(O.d)("web-document"===e?"web-map":e),i=2,n=this.sublayersSourceJSON[2].layers,l=this.sublayersSourceJSON[2].context,o=null,s=[3,4,5].filter((function(e){return e<=r})),u=Object(a.a)(s);try{for(u.s();!(t=u.n()).done;){var c=t.value,y=this.sublayersSourceJSON[c];Object(g.b)(y.layers)&&(i=c,n=y.layers,l=y.context,y.visibleLayers&&(o={visibleLayers:y.visibleLayers,context:y.context}))}}catch(N){u.e(N)}finally{u.f()}var p,b=[3,4,5].filter((function(e){return e>i&&e<=r})),d=null,f=Object(a.a)(b);try{for(f.s();!(p=f.n()).done;){var h=p.value,v=this.sublayersSourceJSON[h],m=v.layers,w=v.visibleLayers,x=v.context;m&&(d={layers:m,context:x}),w&&(o={visibleLayers:w,context:x})}}catch(N){f.e(N)}finally{f.f()}var k=function(e,t){var r=[],a={};return e?(e.forEach((function(e){var i=new j.a;if(i.read(e,t),a[i.id]=i,null!=e.parentLayerId&&-1!==e.parentLayerId){var n=a[e.parentLayerId];n.sublayers||(n.sublayers=[]),n.sublayers.unshift(i)}else r.unshift(i)})),r):r}(n,l),L=new Map,D=new Set;if(d){var P,_=Object(a.a)(d.layers);try{for(_.s();!(P=_.n()).done;){var E=P.value;L.set(E.id,E)}}catch(N){_.e(N)}finally{_.f()}}if(o){var F,T=Object(a.a)(o.visibleLayers);try{for(T.s();!(F=T.n()).done;){var M=F.value;D.add(M)}}catch(N){T.e(N)}finally{T.f()}}return S(k,(function(e){d&&e.read(L.get(e.id),d.context),o&&e.read({defaultVisibility:D.has(e.id)},o.context)})),{origin:Object(O.b)(i),sublayers:new I({items:k})}}},{key:"read",value:function(e,t){Object(l.a)(Object(o.a)(r.prototype),"read",this).call(this,e,t),this.readSublayers(e,t)}},{key:"_handleSublayersChange",value:function(e,t){var r=this;t&&(t.forEach((function(e){e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((function(e){e.parent=r,e.layer=r})),this.handles.add([e.on("after-add",(function(e){var t=e.item;t.parent=r,t.layer=r})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(function(e){m.error(new b.a("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:r})),e.preventDefault()})),"sublayers-owner"))}}]),r}(e);return Object(c.a)([Object(f.b)({readOnly:!0})],t.prototype,"allSublayers",void 0),Object(c.a)([Object(f.b)({readOnly:!0,type:y.a.ofType(j.a)})],t.prototype,"serviceSublayers",void 0),Object(c.a)([Object(f.b)({value:null,type:I,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),Object(c.a)([Object(f.b)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=Object(c.a)([Object(v.a)("esri.layers.mixins.SublayersOwner")],t),t}}}]);
//# sourceMappingURL=20.e5d10406.chunk.js.map