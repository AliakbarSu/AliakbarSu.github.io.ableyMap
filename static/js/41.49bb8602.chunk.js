(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[41],{781:function(e,i,t){"use strict";t.r(i),t.d(i,"default",(function(){return g}));var s=t(2),a=t(3),r=t(16),l=t(4),n=t(5),o=t(0),c=t(250),b=t(8),y=t(187),v=t(1),u=(t(11),t(68)),h=(t(13),t(10),t(7)),d=t(25),p=t(242),f=t(374),O=t(371),j=t(370),_=t(372),k=t(425),m=t(426),w=t(279),L=function(e){Object(l.a)(t,e);var i=Object(n.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=i.call(this,e))._visibilityHandles={},a.fullExtent=void 0,a.operationalLayerType="GroupLayer",a.spatialReference=void 0,a.type="group",a._visibilityWatcher=a._visibilityWatcher.bind(Object(r.a)(a)),a}return Object(a.a)(t,[{key:"initialize",value:function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}},{key:"_writeLayers",value:function(e,i,t,s){var a=[];if(!e)return a;e.forEach((function(e){var i=Object(w.a)(e,s.webmap?s.webmap.getLayerJSONFromResourceInfo(e):null,s);Object(b.j)(i)&&i.layerType&&a.push(i)})),i.layers=a}},{key:"portalItem",set:function(e){this._set("portalItem",e)}},{key:"visibilityMode",set:function(e){var i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}},{key:"load",value:function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e)),Promise.resolve(this)}},{key:"loadAll",value:function(){var e=this;return Object(c.a)(this,(function(i){i(e.layers)}))}},{key:"layerAdded",value:function(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this._visibilityHandles[e.uid]=e.watch("visible",this._visibilityWatcher,!0)}},{key:"layerRemoved",value:function(e){var i=this._visibilityHandles[e.uid];i&&(i.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}},{key:"_turnOffOtherLayers",value:function(e){this.layers.forEach((function(i){i!==e&&(i.visible=!1)}))}},{key:"_enforceVisibility",value:function(e,i){if(Object(u.a)(this).initialized){var t=this.layers,s=t.find((function(e){return e.visible}));switch(e){case"exclusive":t.length&&!s&&((s=t.getItemAt(0)).visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((function(e){e.visible=i}))}}}},{key:"_visibleWatcher",value:function(e){"inherited"===this.visibilityMode&&this.layers.forEach((function(i){i.visible=e}))}},{key:"_visibilityWatcher",value:function(e,i,t,s){var a=s;switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(a):this._isAnyLayerVisible()||(a.visible=!0);break;case"inherited":a.visible=this.visible}}},{key:"_isAnyLayerVisible",value:function(){return this.layers.some((function(e){return e.visible}))}}]),t}(Object(f.a)(Object(_.a)(Object(O.a)(Object(j.a)(Object(m.a)(Object(k.a)(Object(y.a)(p.a))))))));Object(o.a)([Object(v.b)()],L.prototype,"fullExtent",void 0),Object(o.a)([Object(v.b)({json:{read:!1,write:{ignoreOrigin:!0}}})],L.prototype,"layers",void 0),Object(o.a)([Object(d.a)("layers")],L.prototype,"_writeLayers",null),Object(o.a)([Object(v.b)({type:["GroupLayer"]})],L.prototype,"operationalLayerType",void 0),Object(o.a)([Object(v.b)({json:{origins:{"web-document":{read:!1,write:!1}}}})],L.prototype,"portalItem",null),Object(o.a)([Object(v.b)()],L.prototype,"spatialReference",void 0),Object(o.a)([Object(v.b)({json:{read:!1},readOnly:!0,value:"group"})],L.prototype,"type",void 0),Object(o.a)([Object(v.b)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],L.prototype,"visibilityMode",null);var g=L=Object(o.a)([Object(h.a)("esri.layers.GroupLayer")],L)}}]);
//# sourceMappingURL=41.49bb8602.chunk.js.map