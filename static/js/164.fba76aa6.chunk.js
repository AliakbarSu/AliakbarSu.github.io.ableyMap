(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[164],{832:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var n=r(2),o=r(3),a=r(4),i=r(5),l=r(0),u=r(32),c=r(187),s=r(1),b=(r(11),r(13),r(10),r(27)),f=r(7),p=r(295),y=r(242),O=r(371),d=r(370),j=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(n.a)(this,r);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).type="route",e}return Object(o.a)(r,[{key:"barrierLines",get:function(){return this._getNamedFeatureLayer("PolylineBarriers")}},{key:"barrierPoints",get:function(){return this._getNamedFeatureLayer("Barriers")}},{key:"barrierPolygons",get:function(){return this._getNamedFeatureLayer("PolygonBarriers")}},{key:"directionLines",get:function(){return this._getNamedFeatureLayer("DirectionLines")}},{key:"directionPoints",get:function(){return this._getNamedFeatureLayer("DirectionPoints")}},{key:"readFeatureCollectionsFromItem",value:function(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((function(e){var t=new p.default;return t.read(e,r),t}))}},{key:"readFeatureCollectionsFromWebMap",value:function(e,t,r){return t.featureCollection.layers.map((function(e){var t=new p.default;return t.read(e,r),t}))}},{key:"fullExtent",get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return e?e.union(t.fullExtent):t.fullExtent}),null):null}},{key:"maxScale",get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return null==e?t.maxScale:Math.min(e,t.maxScale)}),null):0},set:function(e){this.featureCollections.forEach((function(t){t.maxScale=e})),this._set("maxScale",e)}},{key:"minScale",get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return null==e?t.minScale:Math.min(e,t.minScale)}),null):0},set:function(e){this.featureCollections.forEach((function(t){t.minScale=e})),this._set("minScale",e)}},{key:"routeInfo",get:function(){return this._getNamedFeatureLayer("RouteInfo")}},{key:"stops",get:function(){return this._getNamedFeatureLayer("Stops")}},{key:"load",value:function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}},{key:"_getNamedFeatureLayer",value:function(e){if(this.featureCollections)return this.featureCollections.find((function(t){return t.title===e}))}}]),r}(Object(O.a)(Object(d.a)(Object(c.a)(y.a))));Object(l.a)([Object(s.b)()],j.prototype,"barrierLines",null),Object(l.a)([Object(s.b)()],j.prototype,"barrierPoints",null),Object(l.a)([Object(s.b)()],j.prototype,"barrierPolygons",null),Object(l.a)([Object(s.b)()],j.prototype,"directionLines",null),Object(l.a)([Object(s.b)()],j.prototype,"directionPoints",null),Object(l.a)([Object(s.b)({type:u.a.ofType(p.default)})],j.prototype,"featureCollections",void 0),Object(l.a)([Object(b.a)("portal-item","featureCollections",["layers"])],j.prototype,"readFeatureCollectionsFromItem",null),Object(l.a)([Object(b.a)("web-map","featureCollections",["featureCollection.layers"])],j.prototype,"readFeatureCollectionsFromWebMap",null),Object(l.a)([Object(s.b)({readOnly:!0})],j.prototype,"fullExtent",null),Object(l.a)([Object(s.b)({type:["show","hide"]})],j.prototype,"listMode",void 0),Object(l.a)([Object(s.b)()],j.prototype,"maxScale",null),Object(l.a)([Object(s.b)()],j.prototype,"minScale",null),Object(l.a)([Object(s.b)()],j.prototype,"routeInfo",null),Object(l.a)([Object(s.b)()],j.prototype,"stops",null),Object(l.a)([Object(s.b)({readOnly:!0,json:{read:!1}})],j.prototype,"type",void 0);var m=j=Object(l.a)([Object(f.a)("esri.layers.RouteLayer")],j)}}]);
//# sourceMappingURL=164.fba76aa6.chunk.js.map