(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[173],{481:function(e,a,t){"use strict";t.r(a),t.d(a,"previewSymbol2D",(function(){return v}));var l=t(9),n=t(39),i=t(17),c=t(37),s=t(397),o=t(764),r=t(765),u="picture-fill",m=120,p=document.createElement("canvas");function h(e,a){var t=p.getContext("2d"),l=[];return a&&(a.weight&&l.push(a.weight),a.size&&l.push(a.size+"px"),a.family&&l.push(a.family)),t.font=l.join(" "),t.measureText(e).width}function d(e){if(0===e.length)return 0;if(e.length>2){var a=Object(c.d)(1),t=parseFloat(e);switch(e.slice(-2)){case"px":return t;case"pt":return t*a;case"in":return 72*t*a;case"pc":return 12*t*a;case"mm":return 2.8346456692913384*t*a;case"cm":return 28.346456692913385*t*a}}return parseFloat(e)}function v(e,a){var t,p,v=null!=(null==a?void 0:a.size)?Object(c.c)(a.size):null,f=null!=(null==a?void 0:a.maxSize)?Object(c.c)(a.maxSize):null,b=null!=(null==a?void 0:a.opacity)?a.opacity:null,y=null!=(null==a?void 0:a.rotation)?a.rotation:"angle"in e?e.angle:null,w=Object(s.c)(e),g=Object(s.e)(e);if(w&&!g){var M="type"in w?null:new n.a(w);"#ffffff"===(M?M.toHex():null)&&(g={color:"#bdc3c7",width:.75})}var j={shape:null,fill:null,stroke:g,offset:[0,0]};null!=(t=g)&&t.width&&(g.width=Math.min(g.width,80));var k=(null==(p=g)?void 0:p.width)||0,O=null!=v&&(null==(null==a?void 0:a.scale)||(null==a?void 0:a.scale)),x=0,L=0,z=!1;switch(e.type){case"simple-marker":var C=e.style,F=Math.min(null!=v?v:Object(c.c)(e.size),f||m);switch(x=F,L=F,C){case"circle":j.shape={type:"circle",cx:0,cy:0,r:.5*F},O||(x+=k,L+=k);break;case"cross":j.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[x,.5*L]},{command:"M",values:[.5*x,0]},{command:"L",values:[.5*x,L]}]};break;case"diamond":j.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[.5*x,0]},{command:"L",values:[x,.5*L]},{command:"L",values:[.5*x,L]},{command:"Z",values:[]}]},O||(x+=k,L+=k);break;case"square":j.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[x,0]},{command:"L",values:[x,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},O||(x+=k,L+=k),y&&(z=!0);break;case"triangle":j.shape={type:"path",path:[{command:"M",values:[.5*x,0]},{command:"L",values:[x,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},O||(x+=k,L+=k),y&&(z=!0);break;case"x":j.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[x,L]},{command:"M",values:[x,0]},{command:"L",values:[0,L]}]},y&&(z=!0);break;case"path":j.shape={type:"path",path:e.path||""},O||(x+=k,L+=k),y&&(z=!0),O=!0}break;case"simple-line":var S=Math.min(null!=v?v:k,f||80),P=S>22?2*S:40;g.width=S,x=P,L=S,j.shape={type:"path",path:[{command:"M",values:[0,L]},{command:"L",values:[x,L]}]};break;case u:case"simple-fill":x=Math.min(null!=v?v:22,f||m)+k,L=x,O=!0,j.shape="object"==typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.isSquareFill?o.l.squareFill[0]:o.l.fill[0];break;case"picture-marker":var _=Object(c.c)(e.width),q=Object(c.c)(e.height),E=null!=v?v:Math.max(_,q),Z=_/q;_=Z<=1?Math.ceil(E*Z):E,q=Z<=1?E:Math.ceil(E/Z),x=Math.min(_,f||m),L=Math.min(q,f||m),j.shape={type:"image",x:-Math.round(x/2),y:-Math.round(L/2),width:x,height:L,src:e.url||""},y&&(z=!0);break;case"text":var D=e,H=D.text||"Aa",J=D.font,T=Math.min(null!=v?v:Object(c.c)(J.size),f||m),A=h(H,{weight:J.weight,size:T,family:J.family}),R=/[\uE600-\uE6FF]/.test(H);x=R?T:A,L=T;var B=.25*d((J?T:0).toString());R&&(B+=5),j.shape={type:"text",text:H,x:0,y:B,align:"middle",decoration:J&&J.decoration,rotated:D.rotated,kerning:D.kerning},j.font=J&&{size:T,style:J.style,decoration:J.decoration,weight:J.weight,family:J.family}}if(!j.shape)return Promise.reject(new i.a("symbolPreview: renderPreviewHTML2D","symbol not supported."));var G=w,I=e.color,K=null;return G&&"pattern"===G.type&&I&&e.type!==u?K=Object(s.d)(G.src,I.toCss(!0)).then((function(e){return G.src=e,j.fill=G,j})):(j.fill=w,K=Promise.resolve(j)),K.then((function(e){var t=[[e]];if("object"==typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.applyColorModulation){var n=.6*x;t.unshift([Object(l.a)(Object(l.a)({},e),{},{offset:[-n,0],fill:Object(o.a)(w,-.3)})]),t.push([Object(l.a)(Object(l.a)({},e),{},{offset:[n,0],fill:Object(o.a)(w,.3)})]),x+=2*n}return Object(r.a)(t,[x,L],{node:a&&a.node,scale:O,opacity:b,rotation:y,useRotationSize:z})}))}}}]);
//# sourceMappingURL=173.e93d594f.chunk.js.map