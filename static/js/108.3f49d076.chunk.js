(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[108],{471:function(e,n,t){"use strict";t.r(n),t.d(n,"getDataValues",(function(){return m})),t.d(n,"summaryStatistics",(function(){return p}));var a=t(6),r=t.n(a),u=t(12),i=t(71),l=t(36),o=t(700),s=t(113),c=null;function p(e){return f.apply(this,arguments)}function f(){return f=Object(u.a)(r.a.mark((function e(n){var t,a,u,i,l,s,c,p,f,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.attribute,a=n.featuresJSON,u=t.normalizationType,i=t.normalizationField,l=t.minValue,s=t.maxValue,c=t.fieldType,e.next=9,m({field:t.field,valueExpression:t.valueExpression,normalizationType:u,normalizationField:i,normalizationTotal:t.normalizationTotal,viewInfoParams:t.viewInfoParams},a);case 9:return p=e.sent,f=Object(o.d)({normalizationType:u,normalizationField:i,minValue:l,maxValue:s}),v="string"===c?Object(o.b)({values:p,supportsNullCount:f}):Object(o.a)({values:p,minValue:l,maxValue:s,useSampleStdDev:!u,supportsNullCount:f}),e.abrupt("return",Object(o.e)(v,"date"===c));case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e,n){return v.apply(this,arguments)}function v(){return v=Object(u.a)(r.a.mark((function e(n,t){var a,u,p,f,m,v,b,d,h,x,y;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:if(a=n.field,u=n.valueExpression,p=n.normalizationType,f=n.normalizationField,m=n.normalizationTotal,v=[],b=n.viewInfoParams,d=null,h=null,!u){e.next=12;break}if(c){e.next=11;break}return e.next=8,Object(s.e)();case 8:x=e.sent,y=x.arcadeUtils,c=y;case 11:d=c.createFunction(u),h=b&&c.getViewInfo({viewingMode:b.viewingMode,scale:b.scale,spatialReference:new l.a(b.spatialReference)});case 12:return e.abrupt("return",(t.forEach((function(e){var n,t=e.attributes;if(u){var r=c.createExecContext(e,h);n=c.executeFunction(d,r)}else t&&(n=t[a]);if(p&&Object(i.g)(n)){var l=t&&parseFloat(t[f]);n=Object(o.c)(n,p,l,m)}v.push(n)})),v));case 13:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}},700:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return u})),t.d(n,"e",(function(){return o}));var a=t(15),r=t(28);t(17),t(8),t(58);function u(e){var n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,a=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!a}function i(e){var n=e.returnDistinct?Object(r.a)(new Set(e.values)):e.values,t=n.filter((function(e){return null!=e})).length,a={count:t};return e.supportsNullCount&&(a.nullcount=n.length-t),a}function l(e){var n,t=e.values,r=e.useSampleStdDev,u=e.supportsNullCount,i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,o=null,s=null,c=null,p=null,f=0,m=null==e.minValue?-1/0:e.minValue,v=null==e.maxValue?1/0:e.maxValue,b=Object(a.a)(t);try{for(b.s();!(n=b.n()).done;){var d=n.value;Number.isFinite(d)?d>=m&&d<=v&&(o+=d,i=Math.min(i,d),l=Math.max(l,d),f++):"string"==typeof d&&f++}}catch(N){b.e(N)}finally{b.f()}if(f&&null!=o){s=o/f;var h,x=0,y=Object(a.a)(t);try{for(y.s();!(h=y.n()).done;){var w=h.value;Number.isFinite(w)&&w>=m&&w<=v&&(x+=Math.pow(w-s,2))}}catch(N){y.e(N)}finally{y.f()}p=r?f>1?x/(f-1):0:f>0?x/f:0,c=Math.sqrt(p)}else i=null,l=null;var g={avg:s,count:f,max:l,min:i,stddev:c,sum:o,variance:p};return u&&(g.nullcount=t.length-f),g}function o(e,n){return n?(["avg","stddev","variance"].forEach((function(n){null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function s(e,n,t,a){var r=null;switch(n){case"log":0!==e&&(r=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(a)&&0!==a&&(r=e/a*100);break;case"field":Number.isFinite(t)&&0!==t&&(r=e/t);break;case"natural-log":e>0&&(r=Math.log(e));break;case"square-root":e>0&&(r=Math.pow(e,.5))}return r}}}]);
//# sourceMappingURL=108.3f49d076.chunk.js.map