(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[105],{608:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},859:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return re}));var n=r(15),o=r(6),i=r.n(o),a=r(12),s=r(2),u=r(3),p=r(16),c=r(42),l=r(38),d=r(4),y=r(5),b=r(0),f=(r(69),r(203)),O=(r(292),r(346),r(348),r(347),r(114),r(271),r(270),r(293)),j=r(273),v=r(187),h=r(1),m=(r(11),r(13),r(10),r(7)),g=r(25),S=r(189),x=r(242),w=r(22),k=r(17),F=r(91),R=r(8),I=r(810),C=r(125),D=r(36),T="http://www.opengis.net/def/crs/OGC/1.3/CRS84",P=function(e){Object(d.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.apply(this,arguments)).featureDefinition=null,e.type="ogc-feature",e}return Object(u.a)(r,[{key:"load",value:function(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}},{key:"getFeatureDefinition",value:function(){var e=this.featureDefinition,t=e.collection,r=e.layerDefinition,n=e.spatialReference,o=e.supportedCrs,i=this.layer,a=i.apiKey;return{capabilities:i.capabilities,collection:t,layerDefinition:r,queryParameters:{apiKey:a,customParameters:i.customParameters},spatialReference:n,supportedCrs:o}}},{key:"queryExtent",value:function(e){return null}},{key:"queryFeatureCount",value:function(e){return null}},{key:"queryFeatures",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((function(e){return C.default.fromJSON(e)}))}},{key:"queryFeaturesJSON",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getFeatureDefinition();return this.load(t).then((function(){return Object(I.g)(r,e,t)}))}},{key:"queryObjectIds",value:function(e){return null}},{key:"supportsSpatialReference",value:function(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}},{key:"_conformsToType",value:function(e,t){var r,n=new RegExp("^".concat(t,"$"),"i");return null!=(r=e.conformsTo.some((function(e){return n.test(e)})))&&r}},{key:"_getCapabilities",value:function(e,t){var r,n,o,i,a,s,u,p=Object(R.j)(t)?null==(r=t.components)?void 0:r.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(n=null!=(o=null==p||null==(i=p.limit)||null==(a=i.schema)?void 0:a.maximum)?o:null==p||null==(s=p.limitFeatures)||null==(u=s.schema)?void 0:u.maximum)?n:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}},{key:"_getExtent",value:function(e){var t,r=null==(t=e.extent)?void 0:t.spatial;if(!r)return null;var n=r.bbox[0],o=4===n.length,i=n[0],a=n[1],s=o?void 0:n[2];return{xmin:i,ymin:a,xmax:o?n[2]:n[3],ymax:o?n[3]:n[4],zmin:s,zmax:o?void 0:n[5],spatialReference:D.a.WGS84.toJSON()}}},{key:"_getStorageSpatialReference",value:function(e){var t,r=null!=(t=e.storageCrs)?t:T,n=Object(I.f)(r);return Object(R.i)(n)?D.a.WGS84:new D.a({wkid:n})}},{key:"_getSupportedSpatialReferences",value:function(e,t){var r,n="#/crs",o=null!=(r=e.crs)?r:[T],i=o.includes(n)?o.filter((function(e){return e!==n})).concat(t.crs):o,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((function(e){return!a.test(e)}))}},{key:"_loadOGCServices",value:function(){var e=Object(a.a)(i.a.mark((function e(t,r){var o,a,s,u,p,c,l,d,y,b,f,O,j,v,h,m,g,x,F,C,D,T,P,E,_,G,q,Q,B;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Object(R.j)(r)?r.signal:null,a=t.apiKey,s=t.collectionId,u=t.customParameters,p=t.fields,c=t.geometryType,l=t.hasZ,d=t.objectIdField,y=t.timeInfo,b=t.url,f={fields:null==p?void 0:p.map((function(e){return e.toJSON()})),geometryType:S.c.toJSON(c),hasZ:l,objectIdField:d,timeInfo:null==y?void 0:y.toJSON()},O={apiKey:a,customParameters:u,signal:o},e.next=14,Object(I.d)(b,O);case 14:return j=e.sent,e.next=17,Promise.all([Object(I.c)(j,O),Object(I.b)(j,O)]);case 17:if(v=e.sent,h=Object(w.a)(v,2),m=h[0],g=h[1],this._conformsToType(m,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson")){e.next=23;break}throw new k.a("ogc-feature-layer:no-geojson-support","Server does not support geojson");case 23:if(x=g.collections.find((function(e){return e.id===s})),x){e.next=26;break}throw new k.a("ogc-feature-layer:collection-not-found","Server does not contain the named collection");case 26:if(!this._conformsToType(m,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")){e.next=32;break}return e.next=29,Object(I.e)(j,O);case 29:e.t0=e.sent,e.next=33;break;case 32:e.t0=null;case 33:return F=e.t0,e.next=36,Object(I.a)(x,f,O);case 36:C=e.sent,D=this._getCapabilities(C.hasZ,F),T=this._getExtent(x),P=this._getStorageSpatialReference(x).toJSON(),E=this._getSupportedSpatialReferences(x,g),_={},G=Object(n.a)(E);try{for(G.s();!(q=G.n()).done;)Q=q.value,B=Object(I.f)(Q),Object(R.j)(B)&&(_[B]=Q)}catch(i){G.e(i)}finally{G.f()}C.extent=T,this.featureDefinition={capabilities:D,collection:x,layerDefinition:C,queryParameters:{},spatialReference:P,supportedCrs:_};case 45:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(F.a);Object(b.a)([Object(h.b)()],P.prototype,"featureDefinition",void 0),Object(b.a)([Object(h.b)({constructOnly:!0})],P.prototype,"layer",void 0),Object(b.a)([Object(h.b)()],P.prototype,"type",void 0);var E=P=Object(b.a)([Object(m.a)("esri.layers.graphics.sources.OGCFeatureSource")],P),_=r(389),G=r(374),q=r(391),Q=r(371),B=r(432),M=r(370),z=r(378),J=r(372),L=r(392),N=r(112),W=r(275),A=r(354),Z=r(244),H=r(393),U=r(58),V=r(251),K=r(350),$=r(89),X=r(387),Y=r(45),ee=Object(H.a)(),te=function(e){Object(d.a)(r,e);var t=Object(y.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).collectionId=null,n.copyright=null,n.definitionExpression=null,n.description=null,n.displayField=null,n.elevationInfo=null,n.featureReduction=null,n.fields=null,n.fieldsIndex=null,n.fullExtent=null,n.geometryType=null,n.hasZ=void 0,n.labelingInfo=null,n.labelsVisible=!0,n.legendEnabled=!0,n.objectIdField=null,n.operationalLayerType="OGCFeatureLayer",n.popupEnabled=!0,n.popupTemplate=null,n.screenSizePerspectiveEnabled=!0,n.source=new E({layer:Object(p.a)(n)}),n.spatialReference=null,n.title=null,n.type="ogc-feature",n.typeIdField=null,n.types=null,n.url=null,n}return Object(u.a)(r,[{key:"destroy",value:function(){var e;null==(e=this.source)||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((function(){return t._fetchService(e)}))),this.when()}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"writeWebSceneFeatureReduction",value:function(e,t,r,n){Object(W.d)(e,t,"layerDefinition.featureReduction",n)}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"renderer",set:function(e){Object(U.k)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"on",value:function(e,t){return Object(c.a)(Object(l.a)(r.prototype),"on",this).call(this,e,t)}},{key:"createPopupTemplate",value:function(e){return Object(X.a)(this,e)}},{key:"createQuery",value:function(){return new $.a}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,n,o=this,i=!1,a=null==t||null==(r=t.feature)?void 0:r.attributes,s=this.typeIdField&&(null==a?void 0:a[this.typeIdField]);return null!=s&&this.types&&(i=this.types.some((function(t){var r,i;return t.id==s&&("inherited"===(null==(i=n=null==(r=t.domains)?void 0:r[e])?void 0:i.type)&&(n=o._getLayerDomain(e)),!0)}))),i||n||(n=this._getLayerDomain(e)),n}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures($.a.from(e)||r.createQuery(),t)})).then((function(e){var t;return null==e||null==(t=e.features)||t.forEach((function(e){e.layer=e.sourceLayer=r})),e}))}},{key:"_fetchService",value:function(){var e=Object(a.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.source.load(t);case 2:this.read(this.source.featureDefinition,{origin:"service"}),Object(U.k)(this.renderer,this.fieldsIndex),Object(U.l)(this.timeInfo,this.fieldsIndex);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getLayerDomain",value:function(e){if(!this.fields)return null;var t,r=Object(n.a)(this.fields);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(o.name===e&&o.domain)return o.domain}}catch(i){r.e(i)}finally{r.f()}return null}}]),r}(Object(_.a)(Object(q.a)(Object(G.a)(Object(B.a)(Object(L.a)(Object(J.a)(Object(Q.a)(Object(M.a)(Object(z.a)(Object(v.a)(x.a)))))))))));Object(b.a)([Object(h.b)({readOnly:!0,json:{origins:{service:{read:!0}}}})],te.prototype,"capabilities",void 0),Object(b.a)([Object(h.b)({type:String,json:{write:!0}})],te.prototype,"collectionId",void 0),Object(b.a)([Object(h.b)({type:String})],te.prototype,"copyright",void 0),Object(b.a)([Object(h.b)({readOnly:!0})],te.prototype,"defaultPopupTemplate",null),Object(b.a)([Object(h.b)({type:String})],te.prototype,"definitionExpression",void 0),Object(b.a)([Object(h.b)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],te.prototype,"description",void 0),Object(b.a)([Object(h.b)({type:String})],te.prototype,"displayField",void 0),Object(b.a)([Object(h.b)(N.b)],te.prototype,"elevationInfo",void 0),Object(b.a)([Object(h.b)(W.a)],te.prototype,"featureReduction",void 0),Object(b.a)([Object(g.a)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:W.c}})],te.prototype,"writeWebSceneFeatureReduction",null),Object(b.a)([Object(h.b)({type:[Z.a],json:{origins:{service:{name:"layerDefinition.fields"}}}})],te.prototype,"fields",void 0),Object(b.a)([Object(h.b)(ee.fieldsIndex)],te.prototype,"fieldsIndex",void 0),Object(b.a)([Object(h.b)({readOnly:!0,type:Y.a,json:{origins:{service:{name:"layerDefinition.extent"}}}})],te.prototype,"fullExtent",void 0),Object(b.a)([Object(h.b)({type:S.a.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:S.a.read}}}}})],te.prototype,"geometryType",void 0),Object(b.a)([Object(h.b)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],te.prototype,"hasZ",void 0),Object(b.a)([Object(h.b)({type:Boolean,readOnly:!0})],te.prototype,"isTable",null),Object(b.a)([Object(h.b)({type:[V.a],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:K.a},write:!0}}}})],te.prototype,"labelingInfo",void 0),Object(b.a)([Object(h.b)(N.d)],te.prototype,"labelsVisible",void 0),Object(b.a)([Object(h.b)(N.e)],te.prototype,"legendEnabled",void 0),Object(b.a)([Object(h.b)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],te.prototype,"objectIdField",void 0),Object(b.a)([Object(h.b)({type:["OGCFeatureLayer"]})],te.prototype,"operationalLayerType",void 0),Object(b.a)([Object(h.b)(N.j)],te.prototype,"popupEnabled",void 0),Object(b.a)([Object(h.b)({type:f.a,json:{name:"popupInfo",write:!0}})],te.prototype,"popupTemplate",void 0),Object(b.a)([Object(h.b)({types:j.a,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:j.b,name:"layerDefinition.drawingInfo.renderer",write:{writer:O.c}}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],te.prototype,"renderer",null),Object(b.a)([Object(h.b)({type:Boolean})],te.prototype,"screenSizePerspectiveEnabled",void 0),Object(b.a)([Object(h.b)({readOnly:!0})],te.prototype,"source",void 0),Object(b.a)([Object(h.b)({readOnly:!0,type:D.a,json:{origins:{service:{read:!0}}}})],te.prototype,"spatialReference",void 0),Object(b.a)([Object(h.b)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],te.prototype,"title",void 0),Object(b.a)([Object(h.b)({readOnly:!0,json:{read:!1}})],te.prototype,"type",void 0),Object(b.a)([Object(h.b)({type:String,readOnly:!0})],te.prototype,"typeIdField",void 0),Object(b.a)([Object(h.b)({type:[A.a]})],te.prototype,"types",void 0),Object(b.a)([Object(h.b)(N.n)],te.prototype,"url",void 0);var re=te=Object(b.a)([Object(m.a)("esri.layers.OGCFeatureLayer")],te)}}]);
//# sourceMappingURL=105.7acf8bfc.chunk.js.map