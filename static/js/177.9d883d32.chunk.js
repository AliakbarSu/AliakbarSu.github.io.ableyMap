(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[177],{962:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return q}));var a=r(2),i=r(3),n=r(4),c=r(5),o=r(0),s=r(1),u=(r(11),r(13),r(10),r(7)),l=r(6),p=r.n(l),b=r(9),f=r(12),y=r(54),O=r(750),j=r(243),d=r(792),m=r(59),v=(r(69),r(93)),B=r(18),g=r(8),h=r(27),k=r(36),R=r(807),P=r(125),A=r(751),N=r(43),S=r(88),x=r(98);function F(e){return P.default.fromJSON(e).features.map((function(e){return e.geometry}))}var J=function(e){Object(n.a)(r,e);var t=Object(c.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).directions=null,i.facilities=null,i.incidents=null,i.messages=null,i.pointBarriers=null,i.polylineBarriers=null,i.polygonBarriers=null,i.routes=null,i}return Object(i.a)(r,[{key:"readFacilities",value:function(e){return F(e)}},{key:"readIncidents",value:function(e){return F(e)}},{key:"readPointBarriers",value:function(e,t){return F(t.barriers)}},{key:"readPolylineBarriers",value:function(e){return F(e)}},{key:"readPolygonBarriers",value:function(e){return F(e)}},{key:"readRoutes",value:function(e){return function(e){return e.features.map((function(t){var r=k.a.fromJSON(e.spatialReference),a=v.a.fromJSON(t);return Object(g.j)(a.geometry)&&(a.geometry.spatialReference=r),a}))}(e)}}]),r}(B.a);Object(o.a)([Object(s.b)({type:[R.a]})],J.prototype,"directions",void 0),Object(o.a)([Object(s.b)({type:[N.a]})],J.prototype,"facilities",void 0),Object(o.a)([Object(h.a)("facilities")],J.prototype,"readFacilities",null),Object(o.a)([Object(s.b)({type:[N.a]})],J.prototype,"incidents",void 0),Object(o.a)([Object(h.a)("incidents")],J.prototype,"readIncidents",null),Object(o.a)([Object(s.b)({type:[A.a]})],J.prototype,"messages",void 0),Object(o.a)([Object(s.b)({type:[N.a]})],J.prototype,"pointBarriers",void 0),Object(o.a)([Object(h.a)("pointBarriers",["barriers"])],J.prototype,"readPointBarriers",null),Object(o.a)([Object(s.b)({type:[S.a]})],J.prototype,"polylineBarriers",void 0),Object(o.a)([Object(h.a)("polylineBarriers")],J.prototype,"readPolylineBarriers",null),Object(o.a)([Object(s.b)({type:[x.a]})],J.prototype,"polygonBarriers",void 0),Object(o.a)([Object(h.a)("polygonBarriers")],J.prototype,"readPolygonBarriers",null),Object(o.a)([Object(s.b)({type:[v.a]})],J.prototype,"routes",void 0),Object(o.a)([Object(h.a)("routes")],J.prototype,"readRoutes",null);var w=J=Object(o.a)([Object(u.a)("esri.rest.support.ClosestFacilitySolveResult")],J),C=Object(O.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});function _(){return(_=Object(f.a)(p.a.mark((function e(t,r,a){var i,n,c,o,s,u,l,f,O,v,B,g,h,k,R;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],n=[],c={},o={},s=Object(m.c)(t),u=s.path,r.incidents&&r.incidents.features&&Object(d.a)(r.incidents.features,n,"incidents.features",c),r.facilities&&r.facilities.features&&Object(d.a)(r.facilities.features,n,"facilities.features",c),r.pointBarriers&&r.pointBarriers.features&&Object(d.a)(r.pointBarriers.features,n,"pointBarriers.features",c),r.polylineBarriers&&r.polylineBarriers.features&&Object(d.a)(r.polylineBarriers.features,n,"polylineBarriers.features",c),r.polygonBarriers&&r.polygonBarriers.features&&Object(d.a)(r.polygonBarriers.features,n,"polygonBarriers.features",c),e.next=4,Object(j.a)(n);case 4:for(f in l=e.sent,c)O=c[f],i.push(f),o[f]=l.slice(O[0],O[1]);if(!Object(d.e)(o,i)){e.next=17;break}return v=null,e.prev=8,e.next=11,Object(d.c)(u,r.apiKey,a);case 11:v=e.sent,e.next=16;break;case 14:e.prev=14,e.t0=e.catch(8);case 16:v&&!v.hasZ&&Object(d.b)(o,i);case 17:for(g in B=function(e){o[e].forEach((function(t,a){r.get(e)[a].geometry=t}))},o)B(g);return h=Object(b.a)(Object(b.a)({},a),{},{query:Object(b.a)(Object(b.a)(Object(b.a)({},s.query),C.toQueryParams(r)),{},{f:"json"})}),e.next=22,Object(y.default)("".concat(u,"/solveClosestFacility"),h);case 22:return k=e.sent,R=k.data,e.abrupt("return",w.fromJSON(R));case 25:case"end":return e.stop()}}),e,null,[[8,14]])})))).apply(this,arguments)}var T=function(e){Object(n.a)(r,e);var t=Object(c.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).url=null,i}return Object(i.a)(r,[{key:"solve",value:function(e,t){return function(e,t,r){return _.apply(this,arguments)}(this.url,e,t)}}]),r}(r(298).a);Object(o.a)([Object(s.b)()],T.prototype,"url",void 0);var q=T=Object(o.a)([Object(u.a)("esri.tasks.ClosestFacilityTask")],T)}}]);
//# sourceMappingURL=177.9d883d32.chunk.js.map