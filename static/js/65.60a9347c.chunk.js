(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[65],{537:function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var a=i(2),n=i(3),r=i(4),s=i(5),o=i(0),c=i(29),u=i(84),l=i(111),h=i(167),d=i(10),p=i(8),b=i(140),y=i(1),f=(i(11),i(13),i(7)),v=function(e){Object(r.a)(i,e);var t=Object(s.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).layer=null,n.parent=null,n}return Object(n.a)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",a=e.layer&&e.layer.title||"no title";throw d.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(a,"', id: '").concat(i,"')"),t),t}}))}},{key:"fullOpacity",get:function(){return Object(p.r)(this.get("layer.opacity"),1)*Object(p.r)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}(Object(l.b)(Object(h.a)(Object(b.b)(u.a.EventedMixin(c.a)))));Object(o.a)([Object(y.b)()],v.prototype,"fullOpacity",null),Object(o.a)([Object(y.b)()],v.prototype,"layer",void 0),Object(o.a)([Object(y.b)()],v.prototype,"parent",void 0),Object(o.a)([Object(y.b)({readOnly:!0})],v.prototype,"suspended",null),Object(o.a)([Object(y.b)({readOnly:!0})],v.prototype,"suspendInfo",null),Object(o.a)([Object(y.b)({readOnly:!0})],v.prototype,"legendEnabled",null),Object(o.a)([Object(y.b)({type:Boolean,readOnly:!0})],v.prototype,"updating",null),Object(o.a)([Object(y.b)({readOnly:!0})],v.prototype,"updatingProgress",null),Object(o.a)([Object(y.b)()],v.prototype,"visible",null);var O=v=Object(o.a)([Object(f.a)("esri.views.layers.LayerView")],v)},538:function(e,t,i){"use strict";i.d(t,"a",(function(){return C}));var a,n=i(2),r=i(3),s=i(42),o=i(38),c=i(4),u=i(5),l=i(0),h=i(32),d=i(120),p=i(24),b=i(1),y=(i(11),i(13),i(10),i(7)),f=i(568),v=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return i}(i(18).a),O=v=Object(l.a)([Object(y.a)("esri.views.layers.support.ClipArea")],v),j=a=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(n.a)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return Object(r.a)(i,[{key:"clone",value:function(){return new a({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(O);Object(l.a)([Object(b.b)({type:[Number,String],json:{write:!0}})],j.prototype,"left",void 0),Object(l.a)([Object(b.b)({type:[Number,String],json:{write:!0}})],j.prototype,"right",void 0),Object(l.a)([Object(b.b)({type:[Number,String],json:{write:!0}})],j.prototype,"top",void 0),Object(l.a)([Object(b.b)({type:[Number,String],json:{write:!0}})],j.prototype,"bottom",void 0),Object(l.a)([Object(b.b)({readOnly:!0})],j.prototype,"version",null);var g,m=j=a=Object(l.a)([Object(y.a)("esri.views.layers.support.ClipRect")],j),x=(i(69),i(100)),w=i(62),k=i(45),_=i(98),R={base:x.a,key:"type",typeMap:{extent:k.a,polygon:_.a}},M=g=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(n.a)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return Object(r.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new g({geometry:this.geometry.clone()})}}]),i}(O);Object(l.a)([Object(b.b)({types:R,json:{read:w.a,write:!0}})],M.prototype,"geometry",void 0),Object(l.a)([Object(b.b)({readOnly:!0})],M.prototype,"version",null);var S=M=g=Object(l.a)([Object(y.a)("esri.views.layers.support.Geometry")],M),q=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(n.a)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return Object(r.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(O);Object(l.a)([Object(b.b)({type:[[[Number]]],json:{write:!0}})],q.prototype,"path",void 0),Object(l.a)([Object(b.b)({readOnly:!0})],q.prototype,"version",null);var B=q=Object(l.a)([Object(y.a)("esri.views.layers.support.Path")],q),P=h.a.ofType({key:"type",base:O,typeMap:{rect:m,path:B,geometry:S}}),C=function(e){var t=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(n.a)(this,i),(e=t.apply(this,arguments)).clips=new P,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return Object(r.a)(i,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new f.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(p.a)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),Object(p.a)(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!=(e=null==(i=t.layer)?void 0:i.opacity)?e:1)}),!0),Object(p.a)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),Object(p.a)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}},{key:"isVisibleAtScale",value:function(e){var t=!0,i=this.layer,a=i.minScale,n=i.maxScale;if(null!=a&&null!=n){var r=!a,s=!n;!r&&e<=a&&(r=!0),!s&&e>=n&&(s=!0),t=r&&s}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!Object(s.a)(Object(o.a)(i.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),i}(e);return Object(l.a)([Object(b.b)({type:P,set:function(e){var t=Object(d.b)(e,this._get("clips"),P);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(l.a)([Object(b.b)()],t.prototype,"moving",void 0),Object(l.a)([Object(b.b)()],t.prototype,"attached",void 0),Object(l.a)([Object(b.b)()],t.prototype,"container",void 0),Object(l.a)([Object(b.b)()],t.prototype,"suspended",void 0),Object(l.a)([Object(b.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(l.a)([Object(b.b)()],t.prototype,"updateRequested",void 0),Object(l.a)([Object(b.b)()],t.prototype,"updating",null),Object(l.a)([Object(b.b)()],t.prototype,"view",void 0),t=Object(l.a)([Object(y.a)("esri.views.2d.layers.LayerView2D")],t)}},578:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var a=i(2),n=i(3),r=i(8),s=function(){function e(t,i,n){Object(a.a)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=n}return Object(n.a)(e,[{key:"width",get:function(){return Object(r.j)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return Object(r.j)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!Object(r.i)(t)){var i=this.filter({pixelBlock:t});if(!Object(r.i)(i.pixelBlock)){var a=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(a),e.putImageData(n,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return Object(r.i)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()},585:function(e,t,i){"use strict";i.d(t,"a",(function(){return j}));var a=i(22),n=i(2),r=i(3),s=i(16),o=i(42),c=i(38),u=i(4),l=i(5),h=i(8),d=i(222),p=i(289),b=i(344),y=(i(512),i(513),i(11),i(511),i(510),i(517),i(515),i(509)),f=(i(514),i(539)),v=i(578);function O(e,t,i){var a={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(a.width=t,a.height=i),new y.a(e,a)}var j=function(e){Object(u.a)(i,e);var t=Object(l.a)(i);function i(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1?arguments[1]:void 0,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(n.a)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=o,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.blendFunction=r,e.source=a,e.requestRender=e.requestRender.bind(Object(s.a)(e)),e}return Object(r.a)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){Object(o.a)(Object(c.a)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"_createTransforms",value:function(){return{dvs:Object(p.b)()}}},{key:"setTransform",value:function(e){var t=Object(d.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),n=Object(a.a)(i,2),r=n[0],s=n[1],o=this.resolution/this.pixelRatio/e.resolution,c=o*this.width,u=o*this.height,l=Math.PI*this.rotation/180;Object(d.c)(t,t,Object(b.b)(r,s)),Object(d.c)(t,t,Object(b.b)(c/2,u/2)),Object(d.j)(t,t,-l),Object(d.c)(t,t,Object(b.b)(-c/2,-u/2)),Object(d.g)(t,t,Object(b.b)(c,u)),Object(d.h)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=O(e,this.sourceWidth,this.sourceHeight):this._texture=O(e));var i,a=this.source;if(a){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(i=a)&&"render"in i)if(a instanceof v.a){var n=a.getRenderedRasterPixels();this._texture.setData(Object(h.j)(n)?n.renderedRasterPixels:null)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(a));else(function(e){return e&&!("render"in e)})(a)&&this._texture.setData(a);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(f.a)},597:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var a=i(2),n=i(3),r=i(4),s=i(5),o=i(0),c=i(10),u=i(23),l=i(24),h=i(1),d=(i(11),i(13),i(7)),p=function(e){var t=function(e){Object(r.a)(i,e);var t=Object(s.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"initialize",value:function(){var e=this;this.handles.add(Object(l.b)(this,"layer","refresh",(function(){e.doRefresh().catch((function(t){Object(u.m)(t)||c.a.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),i}(e);return Object(o.a)([Object(h.b)()],t.prototype,"layer",void 0),t=Object(o.a)([Object(d.a)("esri.layers.mixins.RefreshableLayerView")],t)}},612:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var a=i(28),n=i(2),r=i(3),s=i(42),o=i(38),c=i(4),u=i(5),l=i(603),h=i(502),d=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.blendFunction}))}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"bitmap",brushes:[l.a.bitmap],target:function(){return t.children},drawPhase:h.c.MAP});return[].concat(Object(a.a)(Object(s.a)(Object(o.a)(i.prototype),"prepareRenderPasses",this).call(this,e)),[n])}}]),i}(i(564).a)},647:function(e,t,i){"use strict";i.d(t,"a",(function(){return U}));var a=i(6),n=i.n(a),r=i(15),s=i(12),o=i(2),c=i(3),u=i(4),l=i(5),h=i(0),d=i(29),p=i(23),b=i(1),y=(i(11),i(13),i(10),i(7)),f=i(45),v=i(131),O=i(40),j=i(369),g=i(22),m=Math.PI/180;function x(e,t){var i=t.rotation*m,a=Math.abs(Math.cos(i)),n=Math.abs(Math.sin(i)),r=Object(g.a)(t.size,2),s=r[0],o=r[1];return e[0]=Math.round(o*n+s*a),e[1]=Math.round(o*a+s*n),e}function w(e,t,i,a){var n=Object(g.a)(t,2),r=n[0],s=n[1],o=Object(g.a)(a,2),c=o[0],u=o[1],l=.5*i;return e[0]=r-l*c,e[1]=s-l*u,e[2]=r+l*c,e[3]=s+l*u,e}var k=i(585),_=i(376),R=i(150),M=Object(v.g)(),S=[0,0],q=new R.a(0,0,0,0),B=2048,P=2048,C=!1,I=!1,E=!1,T=function(e){Object(u.a)(i,e);var t=Object(l.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e))._imagePromise=null,a.bitmaps=[],a.hidpi=E,a.imageMaxWidth=B,a.imageMaxHeight=P,a.imageRotationSupported=C,a.imageNormalizationSupported=I,a.update=Object(p.i)(function(){var e=Object(s.a)(n.a.mark((function e(t,i){var o,c,u,l,h,d,p,b,y,f,v;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stationary&&!a.destroyed){e.next=2;break}return e.abrupt("return",null);case 2:return o=t.state,c=Object(O.e)(o.spatialReference),u=a.hidpi?t.pixelRatio:1,(l=a.imageNormalizationSupported&&o.worldScreenWidth&&o.worldScreenWidth<o.size[0])?(S[0]=o.worldScreenWidth,S[1]=o.size[1]):a.imageRotationSupported?(S[0]=o.size[0],S[1]=o.size[1]):x(S,o),h=Math.floor(S[0]*u)>a.imageMaxWidth||Math.floor(S[1]*u)>a.imageMaxHeight,d=c&&(o.extent.xmin<c.valid[0]||o.extent.xmax>c.valid[1]),p=!a.imageNormalizationSupported&&d,b=!h&&!p,y=a.imageRotationSupported?o.rotation:0,b?(f=l?o.paddedViewState.center:o.center,a._imagePromise=a._singleExport(o,S,f,o.resolution,y,u,i)):(v=Math.min(a.imageMaxWidth,a.imageMaxHeight),p&&(v=Math.min(o.worldScreenWidth,v)),a._imagePromise=a._tiledExport(o,v,y,u,i)),e.abrupt("return",a._imagePromise.then(function(){var e=Object(s.a)(n.a.mark((function e(t){var i,s,o,c,u,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a._imagePromise=null,!a.destroyed){a.bitmaps=null!=t?t:[],i=Object(r.a)(a.container.children);try{for(o=function(){var e=s.value;t.includes(e)||e.fadeOut().then((function(){e.remove()}))},i.s();!(s=i.n()).done;)o()}catch(n){i.e(n)}finally{i.f()}c=Object(r.a)(t);try{for(c.s();!(u=c.n()).done;)l=u.value,a.container.addChild(l),l.fadeIn()}catch(n){c.e(n)}finally{c.f()}}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw a._imagePromise=null,e})));case 7:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),5e3),a}return Object(c.a)(i,[{key:"destroy",value:function(){this.bitmaps=[]}},{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}},{key:"updateExports",value:function(e){var t,i=Object(r.a)(this.container.children);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(!a.visible||!a.stage)return;e(a),a.invalidateTexture(),a.requestRender()}}catch(n){i.e(n)}finally{i.f()}}},{key:"_export",value:function(){var e=Object(s.a)(n.a.mark((function e(t,i,a,r,s,o){var c,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSource(t,Math.floor(i*s),Math.floor(a*s),{rotation:r,pixelRatio:s,signal:o});case 2:return c=e.sent,u=new k.a(c,"additive"),e.abrupt("return",(u.x=t.xmin,u.y=t.ymax,u.resolution=t.width/i,u.rotation=r,u.pixelRatio=s,u));case 5:case"end":return e.stop()}}),e,this)})));return function(t,i,a,n,r,s){return e.apply(this,arguments)}}()},{key:"_singleExport",value:function(){var e=Object(s.a)(n.a.mark((function e(t,i,a,r,s,o,c){var u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(M,a,r,i),u=new f.a(M[0],M[1],M[2],M[3],t.spatialReference),e.next=4,this._export(u,i[0],i[1],s,o,c);case 4:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,i,a,n,r,s,o){return e.apply(this,arguments)}}()},{key:"_tiledExport",value:function(e,t,i,a,n){var r=this,s=j.a.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),o=new _.a(s),c=o.getTileCoverage(e);if(!c)return null;var u=[];return c.forEach((function(s,c,l,h){q.set(s,c,l,h),o.getTileBounds(M,q);var d=new f.a(M[0],M[1],M[2],M[3],e.spatialReference);u.push(r._export(d,t,t,i,a,n))})),Promise.all(u)}}]),i}(d.a);Object(h.a)([Object(b.b)()],T.prototype,"_imagePromise",void 0),Object(h.a)([Object(b.b)()],T.prototype,"bitmaps",void 0),Object(h.a)([Object(b.b)()],T.prototype,"container",void 0),Object(h.a)([Object(b.b)()],T.prototype,"fetchSource",void 0),Object(h.a)([Object(b.b)()],T.prototype,"hidpi",void 0),Object(h.a)([Object(b.b)()],T.prototype,"imageMaxWidth",void 0),Object(h.a)([Object(b.b)()],T.prototype,"imageMaxHeight",void 0),Object(h.a)([Object(b.b)()],T.prototype,"imageRotationSupported",void 0),Object(h.a)([Object(b.b)()],T.prototype,"imageNormalizationSupported",void 0),Object(h.a)([Object(b.b)()],T.prototype,"requestUpdate",void 0),Object(h.a)([Object(b.b)()],T.prototype,"updating",null);var U=T=Object(h.a)([Object(y.a)("esri.views.2d.layers.support.ExportStrategy")],T)},920:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return x}));var a=i(6),n=i.n(a),r=i(12),s=i(2),o=i(3),c=i(4),u=i(5),l=i(0),h=i(10),d=i(23),p=i(1),b=(i(11),i(13),i(7)),y=i(612),f=i(538),v=i(647),O=i(537),j=i(597),g=h.a.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D"),m=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"hitTest",value:function(){return null}},{key:"update",value:function(e){this.strategy.update(e).catch((function(e){Object(d.m)(e)||g.error(e)})),this.notifyChange("updating")}},{key:"attach",value:function(){this._bitmapContainer=new y.a,this.container.addChild(this._bitmapContainer),this.strategy=new v.a({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}},{key:"detach",value:function(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"fetchBitmapData",value:function(e,t,i){return this.layer.fetchImage(e,t,i)}},{key:"doRefresh",value:function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}}]),i}(Object(j.a)(Object(f.a)(O.a)));Object(l.a)([Object(p.b)()],m.prototype,"strategy",void 0),Object(l.a)([Object(p.b)()],m.prototype,"updating",void 0);var x=m=Object(l.a)([Object(b.a)("esri.views.2d.layers.BaseDynamicLayerView2D")],m)}}]);
//# sourceMappingURL=65.60a9347c.chunk.js.map