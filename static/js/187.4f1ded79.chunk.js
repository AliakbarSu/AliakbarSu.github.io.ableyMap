(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[187],{927:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var i=a(9),r=a(2),n=a(3),s=a(42),l=a(38),u=a(4),c=a(5),o=a(0),y=a(8),b=a(24),p=(a(1),a(11),a(13),a(10),a(7)),h=a(791),f=a(710);var d=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"initialize",value:function(){var e=this;this.handles.add([Object(b.a)(this.view,"viewpoint",(function(){return e._update()}))])}},{key:"_injectOverrides",value:function(e){var t=Object(s.a)(Object(l.a)(a.prototype),"_injectOverrides",this).call(this,e),i=this.view.scale,r=this.layer.sublayers.filter((function(e){return function(e,t){return!e.visible||0!==e.minScale&&t>e.minScale||0!==e.maxScale&&t<e.maxScale}(e,i)})).map((function(e){return e.subtypeCode}));if(!r.length)return t;var n="NOT ".concat(this.layer.subtypeField," IN (").concat(r.join(","),")");if(Object(y.i)(t))return new f.a({where:n});var u=t.clone();return u.where+=" AND ".concat(n),u}},{key:"_setLayersForFeature",value:function(e){var t=this.layer.fieldsIndex.get(this.layer.subtypeField),a=e.attributes[t.name],i=this.layer.sublayers.find((function(e){return e.subtypeCode===a}));e.layer=i,e.sourceLayer=this.layer}},{key:"_createSchemaConfig",value:function(){var e=this,t={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((function(t){return{featureReduction:null,geometryType:e.layer.geometryType,labelingInfo:t.labelingInfo,labelsVisible:t.labelsVisible,renderer:t.renderer,subtypeCode:t.subtypeCode,orderBy:null}}))},r=this.layer.sublayers.map((function(e){return e.subtypeCode})).join(","),n=this.layer.sublayers.length?"".concat(this.layer.subtypeField," IN (").concat(r,")"):"1=2",u=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return u+=n,Object(i.a)(Object(i.a)(Object(i.a)({},Object(s.a)(Object(l.a)(a.prototype),"_createSchemaConfig",this).call(this)),t),{},{definitionExpression:u})}}]),a}(h.default),v=d=Object(o.a)([Object(p.a)("esri.views.2d.layers.SubtypeGroupLayerView2D")],d)}}]);
//# sourceMappingURL=187.4f1ded79.chunk.js.map