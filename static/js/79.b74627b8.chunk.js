(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[79],{487:function(e,t,n){"use strict";n.r(t),n.d(t,"work",(function(){return $})),n.d(t,"wrappedWork",(function(){return Y}));var r=n(6),i=n.n(r),a=n(12),u=n(752);function o(e,t,n){for(var r=t/3,i=new Uint32Array(n+1),a=new Uint32Array(n+1),u=function(e,t){e<t?i[e+1]++:a[t+1]++},o=0;o<r;o++){var s=e[3*o],c=e[3*o+1],f=e[3*o+2];u(s,c),u(c,f),u(f,s)}for(var l=0,d=0,v=0;v<n;v++){var h=i[v+1],p=a[v+1];i[v+1]=l,a[v+1]=d,l+=h,d+=p}for(var g=new Uint32Array(6*r),y=i[n],b=function(e,t,n){if(e<t){var r=i[e+1]++;g[2*r]=t,g[2*r+1]=n}else{var u=a[t+1]++;g[2*y+2*u]=e,g[2*y+2*u+1]=n}},m=0;m<r;m++){var w=e[3*m],k=e[3*m+1],O=e[3*m+2];b(w,k,m),b(k,O,m),b(O,w,m)}for(var j=function(e,t){for(var n=2*e,r=t-e,i=1;i<r;i++){for(var a=g[n+2*i],u=g[n+2*i+1],o=i-1;o>=0&&g[n+2*o]>a;o--)g[n+2*o+2]=g[n+2*o],g[n+2*o+3]=g[n+2*o+1];g[n+2*o+2]=a,g[n+2*o+3]=u}},A=0;A<n;A++)j(i[A],i[A+1]),j(y+a[A],y+a[A+1]);for(var F=new Int32Array(3*r),I=function(t,n){return t===e[3*n]?0:t===e[3*n+1]?1:t===e[3*n+2]?2:-1},N=function(e,t){var n=I(e,t);F[3*t+n]=-1},E=function(e,t,n,r){var i=I(e,t);F[3*t+i]=r;var a=I(n,r);F[3*r+a]=t},L=0;L<n;L++){for(var U=i[L],x=i[L+1],S=a[L],M=a[L+1];U<x&&S<M;){var V=g[2*U],B=g[2*y+2*S];V===B?(E(L,g[2*U+1],B,g[2*y+2*S+1]),U++,S++):V<B?(N(L,g[2*U+1]),U++):(N(B,g[2*y+2*S+1]),S++)}for(;U<x;)N(L,g[2*U+1]),U++;for(;S<M;)N(g[2*y+2*S],g[2*y+2*S+1]),S++}return F}var s=n(9),c=n(604),f=n(703);function l(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:d(e.layout)}}function d(e){var t=new Array;return e.fields.forEach((function(e,n){var r=Object(s.a)(Object(s.a)({},e),{},{constructor:h(e.constructor)});t.push([n,r])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}var v=[c.a,c.m,c.u,c.C,c.f,c.h,c.b,c.n,c.v,c.D,c.g,c.i,c.l,c.t,c.B,c.J,c.j,c.r,c.z,c.H,c.k,c.s,c.A,c.I,c.e,c.q,c.y,c.G,c.c,c.o,c.w,c.E,c.d,c.p,c.x,c.F];function h(e){return"".concat(e.ElementType,"_").concat(e.ElementCount)}var p=new Map;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.stride;return e.fieldNames.filter((function(t){var n=e.fields.get(t).optional;return!(n&&n.glPadding)})).map((function(r){var i=e.fields.get(r),a=i.constructor.ElementCount,u=y(i.constructor.ElementType),o=i.offset,s=!(!i.optional||!i.optional.glNormalized);return{name:r,stride:n,count:a,type:u,offset:o,normalized:s,divisor:t}}))}function y(e){var t=b[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}v.forEach((function(e){return p.set(h(e),e)}));var b={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126},m=Object(f.a)().vec3f("position").u16("componentIndex").u16("u16padding"),w=(g(Object(f.a)().vec2u8("sideness")),Object(f.a)().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0})),k=w.clone().vec3f("normal"),O=w.clone().vec3f("normalA").vec3f("normalB"),j=(new Map([["position0",0],["position1",1],["componentIndex",2],["variantOffset",3],["variantStroke",4],["variantExtension",5],["normal",6],["normalA",6],["normalB",7],["sideness",8]]),n(2)),A=n(3),F=n(399),I=n(52),N=n(83),E=function(){function e(){Object(j.a)(this,e)}return Object(A.a)(e,[{key:"updateSettings",value:function(e){this.settings=e,this.edgeHashFunction=e.reducedPrecision?M:S}},{key:"write",value:function(e,t,n){var r=this.edgeHashFunction(n);W.seed=r;var i=W.getIntRange(0,255),a=W.getIntRange(0,this.settings.variants-1),u=W.getFloat(),o=255*(.5*function(e,t){var n=e<0?-1:1;return Math.pow(Math.abs(e),t)*n}(-(1-Math.min(u/.7,1))+Math.max(0,u-.7)/(1-.7),1.2)+.5);e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex),e.variantOffset.set(t,i),e.variantStroke.set(t,a),e.variantExtension.set(t,o)}},{key:"trim",value:function(e,t){return e.slice(0,t)}}]),e}(),L=new Float32Array(6),U=new Uint32Array(L.buffer),x=new Uint32Array(1);function S(e){var t=L;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],x[0]=5381;for(var n=0;n<U.length;n++)x[0]=31*x[0]+U[n];return x[0]}function M(e){var t=L;t[0]=V(e.position0[0]),t[1]=V(e.position0[1]),t[2]=V(e.position0[2]),t[3]=V(e.position1[0]),t[4]=V(e.position1[1]),t[5]=V(e.position1[2]),x[0]=5381;for(var n=0;n<U.length;n++)x[0]=31*x[0]+U[n];return x[0]}function V(e){return Math.round(1e4*e)/1e4}var B=function(){function e(){Object(j.a)(this,e),this.commonWriter=new E}return Object(A.a)(e,[{key:"updateSettings",value:function(e){this.commonWriter.updateSettings(e)}},{key:"allocate",value:function(e){return k.createBuffer(e)}},{key:"write",value:function(e,t,n){this.commonWriter.write(e,t,n),Object(I.c)(T,n.faceNormal0,n.faceNormal1),Object(I.o)(T,T),e.normal.setVec(t,T)}},{key:"trim",value:function(e,t){return this.commonWriter.trim(e,t)}}]),e}();B.Layout=k,B.glLayout=g(k,1);var D=function(){function e(){Object(j.a)(this,e),this.commonWriter=new E}return Object(A.a)(e,[{key:"updateSettings",value:function(e){this.commonWriter.updateSettings(e)}},{key:"allocate",value:function(e){return O.createBuffer(e)}},{key:"write",value:function(e,t,n){this.commonWriter.write(e,t,n),e.normalA.setVec(t,n.faceNormal0),e.normalB.setVec(t,n.faceNormal1)}},{key:"trim",value:function(e,t){return this.commonWriter.trim(e,t)}}]),e}();D.Layout=O,D.glLayout=g(O,1);var T=Object(N.e)(),W=new F.a,C=n(108),z=n(71),P=n(153),q=-1;function _(e,t){return e.cosAngle<t}function H(e,t){return e.cosAngle>t}function J(e,t){var n=Object(z.a)(e.cosAngle),r=K.fwd,i=K.ortho;return Object(I.r)(r,e.position1,e.position0),n*(Object(I.e)(Object(I.d)(i,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}function R(e){for(var t=e.faces.length/3,n=e.faces,r=e.neighbors,i=0,a=0;a<t;a++){var u=r[3*a+0],o=r[3*a+1],s=r[3*a+2],c=n[3*a+0],f=n[3*a+1],l=n[3*a+2];i+=u===q||c<f?1:0,i+=o===q||f<l?1:0,i+=s===q||l<c?1:0}for(var d=new Int32Array(4*i),v=0,h=0;h<t;h++){var p=r[3*h+0],g=r[3*h+1],y=r[3*h+2],b=n[3*h+0],m=n[3*h+1],w=n[3*h+2];(p===q||b<m)&&(d[v++]=b,d[v++]=m,d[v++]=h,d[v++]=p),(g===q||m<w)&&(d[v++]=m,d[v++]=w,d[v++]=h,d[v++]=g),(y===q||w<b)&&(d[v++]=w,d[v++]=b,d[v++]=h,d[v++]=y)}return d}function G(e){for(var t=e.faces.length/3,n=e.vertices.position,r=e.faces,i=Q.v0,a=Q.v1,u=Q.v2,o=new Float32Array(3*t),s=0;s<t;s++){var c=r[3*s+0],f=r[3*s+1],l=r[3*s+2];n.getVec(c,i),n.getVec(f,a),n.getVec(l,u),Object(I.g)(a,a,i),Object(I.g)(u,u,i),Object(I.d)(i,a,u),Object(I.o)(i,i),o[3*s+0]=i[0],o[3*s+1]=i[1],o[3*s+2]=i[2]}return o}var K={edge:{position0:Object(N.e)(),position1:Object(N.e)(),faceNormal0:Object(N.e)(),faceNormal1:Object(N.e)(),componentIndex:0,cosAngle:0},ortho:Object(N.e)(),fwd:Object(N.e)()},Q={v0:Object(N.e)(),v1:Object(N.e)(),v2:Object(N.e)()},X={anglePlanar:4,angleSignificantEdge:35};function Y(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(a.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ee(t),r=$(n),a=[n.data.buffer],e.abrupt("return",{result:te(r,a),transferList:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){var t=function(e,t,n,r){if(t)return{faces:n,facesLength:r,neighbors:o(n,r,e.count),vertices:e};var i=Object(u.a)(e.buffer,e.stride/4,{originalIndices:n,originalIndicesLength:r}),a=o(i.indices,r,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:a,vertices:m.createView(i.buffer)}}(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return ne.updateSettings(e.writerSettings),re.updateSettings(e.writerSettings),function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:X,i=e.vertices.position,a=e.vertices.componentIndex,u=Object(z.f)(r.anglePlanar),o=Object(z.f)(r.angleSignificantEdge),s=Math.cos(o),c=Math.cos(u),f=K.edge,l=f.position0,d=f.position1,v=f.faceNormal0,h=f.faceNormal1,p=G(e),g=R(e),y=g.length/4,b=t.allocate(y),m=0,w=y,k=n.allocate(w),O=0,j=0,A=0,F=Object(C.h)(0,y),N=new Float32Array(y);Object(P.b)(N,(function(e,t,n){i.getVec(g[4*t+0],l),i.getVec(g[4*t+1],d),n[t]=Object(I.j)(l,d)})),F.sort((function(e,t){return N[t]-N[e]}));for(var E=new Array,L=new Array,U=0;U<y;U++){var x=F[U],S=N[x],M=g[4*x+0],V=g[4*x+1],B=g[4*x+2],D=g[4*x+3],T=D===q;if(i.getVec(M,l),i.getVec(V,d),T)Object(I.s)(v,p[3*B+0],p[3*B+1],p[3*B+2]),Object(I.h)(h,v),f.componentIndex=a.get(M),f.cosAngle=Object(I.e)(v,h);else{if(Object(I.s)(v,p[3*B+0],p[3*B+1],p[3*B+2]),Object(I.s)(h,p[3*D+0],p[3*D+1],p[3*D+2]),f.componentIndex=a.get(M),f.cosAngle=Object(I.e)(v,h),H(f,c))continue;f.cosAngle<-.9999&&Object(I.h)(h,v)}j+=S,A++,T||_(f,s)?(t.write(b,m++,f),E.push(S)):J(f,u)&&(n.write(k,O++,f),L.push(S))}var W=new Float32Array(E.reverse()),Q=new Float32Array(L.reverse());return{regular:{instancesData:t.trim(b,m),lodInfo:{lengths:W}},silhouette:{instancesData:n.trim(k,O),lodInfo:{lengths:Q}},averageEdgeLength:j/A}}(t,ne,re)}function ee(e){return{data:m.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function te(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:l(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:l(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}var ne=new B,re=new D},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u}));n(11);function r(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function i(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function a(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function u(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},703:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(15),i=n(2),a=n(3),u=n(604),o=n(674),s=function(){function e(t,n){Object(i.a)(this,e),this.layout=t,this.buffer="number"==typeof n?new ArrayBuffer(n*t.stride):n;var a,u=Object(r.a)(t.fieldNames);try{for(u.s();!(a=u.n()).done;){var o=a.value,s=t.fields.get(o);this[o]=new s.constructor(this.buffer,s.offset,this.stride)}}catch(c){u.e(c)}finally{u.f()}}return Object(a.a)(e,[{key:"stride",get:function(){return this.layout.stride}},{key:"count",get:function(){return this.buffer.byteLength/this.stride}},{key:"byteLength",get:function(){return this.buffer.byteLength}},{key:"getField",value:function(e,t){var n=this[e];return n&&n.elementCount===t.ElementCount&&n.elementType===t.ElementType?n:null}},{key:"slice",value:function(t,n){return new e(this.layout,this.buffer.slice(t*this.stride,n*this.stride))}},{key:"copyFrom",value:function(e,t,n,r){var i=this.stride;if(i%4==0){var a=new Uint32Array(e.buffer,t*i,r*i/4);new Uint32Array(this.buffer,n*i,r*i/4).set(a)}else{var u=new Uint8Array(e.buffer,t*i,r*i);new Uint8Array(this.buffer,n*i,r*i).set(u)}}}]),e}(),c=function(){function e(){Object(i.a)(this,e),this.stride=0,this.fields=new Map,this.fieldNames=[]}return Object(a.a)(e,[{key:"vec2f",value:function(e,t){return this.appendField(e,u.m,t),this}},{key:"vec2f64",value:function(e,t){return this.appendField(e,u.n,t),this}},{key:"vec3f",value:function(e,t){return this.appendField(e,u.u,t),this}},{key:"vec3f64",value:function(e,t){return this.appendField(e,u.v,t),this}},{key:"vec4f",value:function(e,t){return this.appendField(e,u.C,t),this}},{key:"vec4f64",value:function(e,t){return this.appendField(e,u.D,t),this}},{key:"mat3f",value:function(e,t){return this.appendField(e,u.f,t),this}},{key:"mat3f64",value:function(e,t){return this.appendField(e,u.g,t),this}},{key:"mat4f",value:function(e,t){return this.appendField(e,u.h,t),this}},{key:"mat4f64",value:function(e,t){return this.appendField(e,u.i,t),this}},{key:"vec4u8",value:function(e,t){return this.appendField(e,u.J,t),this}},{key:"f32",value:function(e,t){return this.appendField(e,u.a,t),this}},{key:"f64",value:function(e,t){return this.appendField(e,u.b,t),this}},{key:"u8",value:function(e,t){return this.appendField(e,u.l,t),this}},{key:"u16",value:function(e,t){return this.appendField(e,u.j,t),this}},{key:"i8",value:function(e,t){return this.appendField(e,u.e,t),this}},{key:"vec2i8",value:function(e,t){return this.appendField(e,u.q,t),this}},{key:"vec2i16",value:function(e,t){return this.appendField(e,u.o,t),this}},{key:"vec2u8",value:function(e,t){return this.appendField(e,u.t,t),this}},{key:"vec4u16",value:function(e,t){return this.appendField(e,u.H,t),this}},{key:"u32",value:function(e,t){return this.appendField(e,u.k,t),this}},{key:"appendField",value:function(e,t,n){var r=t.ElementCount*Object(o.a)(t.ElementType),i=this.stride;this.fields.set(e,{size:r,constructor:t,offset:i,optional:n}),this.stride+=r,this.fieldNames.push(e)}},{key:"alignTo",value:function(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}},{key:"hasField",value:function(e){return this.fieldNames.indexOf(e)>=0}},{key:"createBuffer",value:function(e){return new s(this,e)}},{key:"createView",value:function(e){return new s(this,e)}},{key:"clone",value:function(){var t=new e;return t.stride=this.stride,t.fields=new Map,this.fields.forEach((function(e,n){return t.fields.set(n,e)})),t.fieldNames=this.fieldNames.slice(),t.BufferType=this.BufferType,t}}]),e}();function f(){return new c}},752:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(71);function i(e,t,n){var i,c=e.byteLength/(4*t),f=new Uint32Array(e,0,c*t),l=new Uint32Array(c),d=null!=(i=null==n?void 0:n.minReduction)?i:0,v=(null==n?void 0:n.originalIndices)||null,h=v?v.length:0,p=(null==n?void 0:n.componentOffsets)||null,g=0;if(p)for(var y=0;y<p.length-1;y++){var b=p[y+1]-p[y];b>g&&(g=b)}else g=c;var m=Math.floor(1.1*g)+1;(null==s||s.length<2*m)&&(s=new Uint32Array(Object(r.k)(2*m)));for(var w=0;w<2*m;w++)s[w]=0;for(var k=0,O=!!p&&!!v,j=O?h:c,A=O?new Uint32Array(h):null,F=1.96,I=0!==d?Math.ceil(4*F*F/(d*d)*d*(1-d)):j,N=1,E=p?p[1]:j,L=0;L<j;L++){if(L===I){var U=1-k/L;if(U+F*Math.sqrt(U*(1-U)/L)<d)return null;I*=2}if(L===E){for(var x=0;x<2*m;x++)s[x]=0;if(v)for(var S=p[N-1];S<p[N];S++)A[S]=l[v[S]];E=p[++N]}for(var M=O?v[L]:L,V=M*t,B=o(f,V,t),D=B%m,T=k;0!==s[2*D+1];){if(s[2*D]===B){var W=s[2*D+1]-1;if(a(f,V,W*t,t)){T=l[W];break}}++D>=m&&(D-=m)}T===k&&(s[2*D]=B,s[2*D+1]=M+1,k++),l[M]=T}if(0!==d&&1-k/c<d)return null;if(O){for(var C=p[N-1];C<A.length;C++)A[C]=l[v[C]];l=A}var z=new Uint32Array(t*k);k=0;for(var P=0;P<j;P++)l[P]===k&&(u(f,(O?v[P]:P)*t,z,k*t,t),k++);if(v&&!O){for(var q=new Uint32Array(h),_=0;_<q.length;_++)q[_]=l[v[_]];l=q}return{buffer:z.buffer,indices:l,uniqueCount:k}}function a(e,t,n,r){for(var i=0;i<r;i++)if(e[t+i]!==e[n+i])return!1;return!0}function u(e,t,n,r,i){for(var a=0;a<i;a++)n[r+a]=e[t+a]}function o(e,t,n){for(var r=0,i=0;i<n;i++)r=(r=e[t+i]+r|0)+(r<<11)+(r>>>2)|0;return r>>>0}var s=null}}]);
//# sourceMappingURL=79.b74627b8.chunk.js.map