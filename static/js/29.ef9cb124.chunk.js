(this.webpackJsonpabley_map_application=this.webpackJsonpabley_map_application||[]).push([[29],{509:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var n=i(9),r=i(2),a=i(3),s=i(71),l=i(8),o=i(511),u=i(510),c=i(565),h=function(){function e(t,i){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(r.a)(this,e),this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(u.c.Texture,this),this._descriptor=Object(n.a)({target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1},i),34067===this._descriptor.target?this.setDataCubeMap(a):this.setData(a)}return Object(a.a)(e,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._descriptor}},{key:"dispose",value:function(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(u.c.Texture,this))}},{key:"release",value:function(){this.dispose()}},{key:"resize",value:function(e,t){var i=this._descriptor;i.width===e&&i.height===t||(i.width=e,i.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}},{key:"setDataCubeMap",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=34069;t<=34074;t++)this.setData(e,t)}},{key:"setData",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3553;if(this._context&&this._context.gl){var n=this._context.gl;this._glName||(this._glName=n.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);var r=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES),a=this._descriptor;e._validateTexture(this._context,a),n.pixelStorei(n.UNPACK_ALIGNMENT,a.unpackAlignment),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,a.flipped?1:0),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.preMultiplyAlpha?1:0);var s=a.pixelFormat,u=a.internalFormat?a.internalFormat:this._deriveInternalFormat(s,a.dataType);if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){var c=t.width,h=t.height;t instanceof HTMLVideoElement&&(c=t.videoWidth,h=t.videoHeight),a.width&&a.height,n.texImage2D(i,0,u,s,a.dataType,t),Object(o.a)(n),a.hasMipmap&&this.generateMipmap(),void 0===a.width&&(a.width=c),void 0===a.height&&(a.height=h)}else{null!=a.width&&null!=a.height||console.error("Width and height must be specified!"),n.DEPTH24_STENCIL8&&u===n.DEPTH_STENCIL&&(u=n.DEPTH24_STENCIL8);var d=a.width,f=a.height;if(_(t)){var g=Math.round(Math.log(Math.max(d,f))/Math.LN2)+1;a.hasMipmap=a.hasMipmap&&g===t.levels.length;for(var E=0;;++E){var p=t.levels[Math.min(E,t.levels.length-1)];if(n.compressedTexImage2D(i,E,u,d,f,0,p),1===d&&1===f||!a.hasMipmap)break;d=Math.max(1,d>>1),f=Math.max(1,f>>1)}}else if(Object(l.j)(t))n.texImage2D(i,0,u,d,f,0,s,a.dataType,t),Object(o.a)(n),a.hasMipmap&&this.generateMipmap();else for(var T=0;n.texImage2D(i,T,u,d,f,0,s,a.dataType,null),Object(o.a)(n),(1!==d||1!==f)&&a.hasMipmap;++T)d=Math.max(1,d>>1),f=Math.max(1,f>>1)}e._applySamplingMode(n,this._descriptor),e._applyWrapMode(n,this._descriptor),e._applyAnisotropicFilteringParameters(this._context,this._descriptor),Object(o.a)(n),this._context.bindTexture(r,e.TEXTURE_UNIT_FOR_UPDATES)}}},{key:"updateData",value:function(t,i,n,r,a,s){var l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:3553;s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var o=this._context.gl,u=this._descriptor,c=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);(i<0||n<0||r>u.width||a>u.height||i+r>u.width||n+a>u.height)&&console.error("An attempt to update out of bounds of the texture!"),o.pixelStorei(o.UNPACK_ALIGNMENT,u.unpackAlignment),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,u.flipped?1:0),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.preMultiplyAlpha?1:0),s instanceof ImageData||s instanceof HTMLImageElement||s instanceof HTMLCanvasElement||s instanceof HTMLVideoElement?o.texSubImage2D(l,t,i,n,u.pixelFormat,u.dataType,s):o.texSubImage2D(l,t,i,n,r,a,u.pixelFormat,u.dataType,s),this._context.bindTexture(c,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"generateMipmap",value:function(){var t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,e._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);var i=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(t.target),this._context.bindTexture(i,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"setSamplingMode",value:function(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}},{key:"setWrapMode",value:function(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,e._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}},{key:"applyChanges",value:function(){var t=this._context.gl,i=this._descriptor;this._samplingModeDirty&&(e._applySamplingMode(t,i),this._samplingModeDirty=!1),this._wrapModeDirty&&(e._applyWrapMode(t,i),this._wrapModeDirty=!1)}},{key:"_deriveInternalFormat",value:function(e,t){if("webgl"===this._context.webglVersion)return e;if(5126===t)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}}],[{key:"_validateTexture",value:function(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");var i=Object(s.h)(t.width)&&Object(s.h)(t.height);Object(c.a)(e.gl)||i||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}},{key:"_applySamplingMode",value:function(e,t){var i=t.samplingMode,n=t.samplingMode;9985===i||9987===i?(i=9729,t.hasMipmap||(n=9729)):9984!==i&&9986!==i||(i=9728,t.hasMipmap||(n=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,i),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,n)}},{key:"_applyWrapMode",value:function(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}},{key:"_applyAnisotropicFilteringParameters",value:function(e,t){var i,n=e.capabilities.textureFilterAnisotropic;n&&e.gl.texParameterf(t.target,n.TEXTURE_MAX_ANISOTROPY,null!=(i=t.maxAnisotropy)?i:1)}}]),e}();function _(e){return Object(l.j)(e)&&"type"in e&&"compressed"===e.type}h.TEXTURE_UNIT_FOR_UPDATES=0},510:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n}));var n,r=33984;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.Program=3]="Program",e[e.Framebuffer=4]="Framebuffer",e[e.Renderbuffer=5]="Renderbuffer",e[e.COUNT=6]="COUNT"}(n||(n={}));var a=33306},511:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return o}));var n=i(17),r=i(11),a=i(10).a.getLogger("esri/views/webgl");var s=!!Object(r.a)("enable-feature:webgl-debug");function l(){return s}function o(){return s}function u(e){if(l()){var t=e.getError();if(t){var i=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),r=(new Error).stack;a.error(new n.a("webgl-error","WebGL error occured",{message:i,stack:r}))}}}},565:function(e,t,i){"use strict";function n(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}i.d(t,"a",(function(){return n}))},591:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r}));var n=i(615);function r(e){var t="";for(var i in e){var n=e[i];if("boolean"==typeof n)n&&(t+="#define ".concat(i,"\n"));else if("number"==typeof n)t+="#define ".concat(i," ").concat(n.toFixed(),"\n");else if("object"==typeof n){var r=n.options,a=0;for(var s in r)t+="#define ".concat(r[s]," ").concat((a++).toFixed(),"\n");t+="#define ".concat(i," ").concat(r[n.value],"\n")}}return t}function a(e,t,i,r){i=i||{},r=r||"";var a="function"==typeof t.shaders?t.shaders(i):t.shaders;return new n.a(e,r+a.vertexShader,r+a.fragmentShader,t.attributes)}},667:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i(2),r=i(3),a=i(591),s=function(){function e(t){Object(n.a)(this,e),this._programCacheByTemplate=new Map,this._rctx=t}return Object(r.a)(e,[{key:"dispose",value:function(){this._programCacheByTemplate.forEach((function(e){return e.programs.forEach((function(e){return e.dispose()}))})),this._programCacheByTemplate=null}},{key:"getProgram",value:function(e,t){var i=this;return this._programCacheByTemplate.has(e)||this.addProgramTemplate(e,(function(t){return Object(a.a)(i._rctx,e,t)})),this.getProgramTemplateInstance(e,t)}},{key:"addProgramTemplate",value:function(e,t){this._programCacheByTemplate.set(e,{constructor:t,programs:new Map})}},{key:"getProgramTemplateInstance",value:function(e,t){var i=this._programCacheByTemplate.get(e);if(i){var n=t?JSON.stringify(t):"default";if(!i.programs.has(n)){var r=i.constructor(t);i.programs.set(n,r)}return i.programs.get(n)}return null}}]),e}()},668:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i(2),r=i(3),a=function(){function e(t){Object(n.a)(this,e),this.readFile=t}return Object(r.a)(e,[{key:"resolveIncludes",value:function(e){return this.resolve(e)}},{key:"resolve",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(i.has(e))return i.get(e);var n=this.read(e);if(!n)throw new Error("cannot find shader file ".concat(e));for(var r=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,a=r.exec(n),s=[];null!=a;)s.push({path:a[1],start:a.index,length:a[0].length}),a=r.exec(n);var l=0,o="";return s.forEach((function(e){o+=n.slice(l,e.start),o+=i.has(e.path)?"":t.resolve(e.path,i),l=e.start+e.length})),o+=n.slice(l),i.set(e,o),o}},{key:"read",value:function(e){return this.readFile(e)}}]),e}()},693:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i(2),r=i(565),a=function e(t,i,r,a,s,l,o,u){Object(n.a)(this,e),this.createQuery=t,this.resultAvailable=i,this.getResult=r,this.disjoint=a,this.beginTimeElapsed=s,this.endTimeElapsed=l,this.createTimestamp=o,this.timestampBits=u};function s(e,t){if(t.disjointTimerQuery)return null;var i=e.getExtension("EXT_disjoint_timer_query_webgl2");return i&&Object(r.a)(e)?new a((function(){return e.createQuery()}),(function(t){return e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE)}),(function(t){return e.getQueryParameter(t,e.QUERY_RESULT)}),(function(){return e.getParameter(i.GPU_DISJOINT_EXT)}),(function(t){return e.beginQuery(i.TIME_ELAPSED_EXT,t)}),(function(){return e.endQuery(i.TIME_ELAPSED_EXT)}),(function(e){return i.queryCounterEXT(e,i.TIMESTAMP_EXT)}),(function(){return e.getQuery(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT)})):(i=e.getExtension("EXT_disjoint_timer_query"))?new a((function(){return i.createQueryEXT()}),(function(e){return i.getQueryObjectEXT(e,i.QUERY_RESULT_AVAILABLE_EXT)}),(function(e){return i.getQueryObjectEXT(e,i.QUERY_RESULT_EXT)}),(function(){return e.getParameter(i.GPU_DISJOINT_EXT)}),(function(e){return i.beginQueryEXT(i.TIME_ELAPSED_EXT,e)}),(function(){return i.endQueryEXT(i.TIME_ELAPSED_EXT)}),(function(e){return i.queryCounterEXT(e,i.TIMESTAMP_EXT)}),(function(){return i.getQueryEXT(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT)})):null}},727:function(e,t,i){"use strict";i.d(t,"a",(function(){return E}));var n=i(2),r=i(3),a=i(8),s=i(511),l=i(510),o=function(){function e(){for(Object(n.a)(this,e),this._current=new Array,this._max=new Array,this._allocations=new Map;this._current.length<l.c.COUNT;)this._current.push(0),this._max.push(0)}return Object(r.a)(e,[{key:"resetMax",value:function(){for(this._max.length=0;this._max.length<this._current.length;)this._max.push(0)}},{key:"increment",value:function(e,t){var i=++this._current[e];this._max[e]=Math.max(i,this._max[e])}},{key:"decrement",value:function(e,t){--this._current[e]}},{key:"max",get:function(){return this._max}},{key:"current",get:function(){return this._current}},{key:"total",get:function(){return this.current.reduce((function(e,t){return e+t}),0)}},{key:"printResourceCount",value:function(){if(this.total>0){console.log("Live objects:");for(var e=0;e<l.c.COUNT;++e){var t=this._current[e];t>0&&console.log("".concat(l.c[e],": ").concat(t))}}if(this._allocations.size>0){console.log("".concat(this._allocations.size," live object allocations:"));var i=new Map;this._allocations.forEach((function(e){var t;i.set(e,(null!=(t=i.get(e))?t:0)+1)})),i.forEach((function(e,t){return console.log(e," : ",t)}))}}}]),e}(),u=i(515),c=i(509),h=i(565),_=i(15),d=i(693);function f(e,t){var i,n,r,a,s,l,o,u,c,_,f,E=t.disabledExtensions||{},p=t.debugWebGLExtensions||{},T=null,b=null,v=null,x=null;return{get drawBuffers(){return f||(f=function(e,t){if(t.disjointTimerQuery)return null;if(Object(h.a)(e))return{drawBuffers:e.drawBuffers.bind(e),MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS};if(t.drawBuffers)return null;var i=e.getExtension("WEBGL_draw_buffers");return i?{drawBuffers:i.drawBuffersWEBGL.bind(i),MAX_DRAW_BUFFERS:i.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:i.MAX_COLOR_ATTACHMENTS_WEBGL}:null}(e,E)),f},get instancing(){return i||(i=function(e){if(Object(h.a)(e))return{drawArraysInstanced:e.drawArraysInstanced.bind(e),drawElementsInstanced:e.drawElementsInstanced.bind(e),vertexAttribDivisor:e.vertexAttribDivisor.bind(e)};var t=e.getExtension("ANGLE_instanced_arrays");return t?{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t)}:null}(e)),i},get vao(){return n||(n=function(e,t){if(Object(h.a)(e))return{createVertexArray:e.createVertexArray.bind(e),deleteVertexArray:e.deleteVertexArray.bind(e),bindVertexArray:e.bindVertexArray.bind(e)};if(t.vao)return null;var i=e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object");return i?{createVertexArray:i.createVertexArrayOES.bind(i),deleteVertexArray:i.deleteVertexArrayOES.bind(i),bindVertexArray:i.bindVertexArrayOES.bind(i)}:null}(e,E)),n},get compressedTextureETC(){return r||(r=function(e,t){if(t.compressedTextureETC)return null;var i=e.getExtension("WEBGL_compressed_texture_etc");return i?{COMPRESSED_R11_EAC:i.COMPRESSED_R11_EAC,COMPRESSED_SIGNED_R11_EAC:i.COMPRESSED_SIGNED_R11_EAC,COMPRESSED_RG11_EAC:i.COMPRESSED_RG11_EAC,COMPRESSED_SIGNED_RG11_EAC:i.COMPRESSED_SIGNED_RG11_EAC,COMPRESSED_RGB8_ETC2:i.COMPRESSED_RGB8_ETC2,COMPRESSED_SRGB8_ETC2:i.COMPRESSED_SRGB8_ETC2,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_RGBA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC}:null}(e,E)),r},get compressedTextureS3TC(){return a||(a=function(e,t){if(t.compressedTextureS3TC)return null;var i=e.getExtension("WEBGL_compressed_texture_s3tc");return i?{COMPRESSED_RGB_S3TC_DXT1:i.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:i.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:i.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:i.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}(e,E)),a},get textureFilterAnisotropic(){return s||(s=function(e,t){if(t.textureFilterAnisotropic)return null;var i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");return i?{MAX_TEXTURE_MAX_ANISOTROPY:i.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:i.TEXTURE_MAX_ANISOTROPY_EXT}:null}(e,E)),s},get disjointTimerQuery(){return l||(l=Object(d.a)(e,E)),l},get textureFloat(){return o||(o=function(e,t){if(Object(h.a)(e))return{textureFloat:!0,textureFloatLinear:!t.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!t.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:e.HALF_FLOAT};if(e instanceof WebGLRenderingContext){var i=!t.textureHalfFloat&&e.getExtension("OES_texture_half_float");return{textureFloat:!t.textureFloat&&!!e.getExtension("OES_texture_float"),textureFloatLinear:!t.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!!i,textureHalfFloatLinear:!t.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:i?i.HALF_FLOAT_OES:void 0}}return null}(e,E)),o},get colorBufferFloat(){return u||(u=function(e,t){if(Object(h.a)(e)){var i=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),n=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_float"),r=!t.colorBufferFloat&&e.getExtension("EXT_float_blend");return i||n||r?{textureFloat:!!n,textureHalfFloat:!!i,floatBlend:!!r,R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F,RGB16F:e.RGB16F}:null}if(e instanceof WebGLRenderingContext){var a=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),s=!t.colorBufferFloat&&e.getExtension("WEBGL_color_buffer_float"),l=!t.colorBufferFloat&&e.getExtension("EXT_float_blend");return a||s||l?{textureFloat:!!s,textureHalfFloat:!!a,floatBlend:!!l,RGBA16F:a?a.RGBA16F_EXT:void 0,RGB16F:a?a.RGB16F_EXT:void 0,RGBA32F:s?s.RGBA32F_EXT:void 0}:null}return null}(e,E)),u},get blendMinMax(){return c||(c=function(e,t){if(Object(h.a)(e))return{MIN:e.MIN,MAX:e.MAX};if(t.blendMinMax)return null;var i=e.getExtension("EXT_blend_minmax");return i?{MIN:i.MIN_EXT,MAX:i.MAX_EXT}:null}(e,E)),c},get depthTexture(){return null===T&&(T=g(e,E,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),T},get standardDerivatives(){return null===b&&(b=g(e,E,"standardDerivatives",!0,["OES_standard_derivatives"])),b},get shaderTextureLOD(){return null===v&&(v=g(e,E,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),v},get fragDepth(){return null===x&&(x=g(e,E,"fragDepth",!0,["EXT_frag_depth"])),x},get loseContext(){return _||(_=function(e,t){var i=t.loseContext&&e.getExtension("WEBGL_lose_context");return i?{loseRenderingContext:function(){return i.loseContext()}}:null}(e,p)),_},enable:function(e){return this[e]}}}function g(e,t,i,n,r){if(n&&Object(h.a)(e))return!0;if(t[i])return!1;var a,s=Object(_.a)(r);try{for(s.s();!(a=s.n()).done;){var l=a.value;if(e.getExtension(l))return!0}}catch(o){s.e(o)}finally{s.f()}return!1}var E=function(){function e(t){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(n.a)(this,e),this.gl=t,this.instanceCounter=new o,this._blendEnabled=!1,this._blendColorState={r:0,g:0,b:0,a:0},this._blendFunctionState={srcRGB:1,dstRGB:0,srcAlpha:1,dstAlpha:0},this._blendEquationState={mode:32774,modeAlpha:32774},this._colorMaskState={r:!0,g:!0,b:!0,a:!0},this._polygonCullingEnabled=!1,this._cullFace=1029,this._frontFace=2305,this._scissorTestEnabled=!1,this._scissorRect={x:0,y:0,width:0,height:0},this._depthTestEnabled=!1,this._depthFunction=513,this._clearDepth=1,this._depthWriteEnabled=!0,this._depthRange={zNear:0,zFar:1},this._viewport=null,this._stencilTestEnabled=!1,this._polygonOffsetFillEnabled=!1,this._polygonOffset=[0,0],this._stencilFunction={face:1032,func:519,ref:0,mask:1},this._clearStencil=0,this._stencilWriteMask=1,this._stencilOperation={face:1032,fail:7680,zFail:7680,zPass:7680},this._clearColor={r:0,g:0,b:0,a:0},this._activeShaderProgram=null,this._activeVertexBuffer=null,this._activeIndexBuffer=null,this._activeFramebuffer=null,this._activeRenderbuffer=null,this._activeTextureUnit=0,this._textureUnitMap=new Array,this._numOfDrawCalls=0,this._numOfTriangles=0,this.webglVersion=Object(h.a)(t)?"webgl2":"webgl",t instanceof WebGLRenderingContext&&this.gl.getExtension("OES_element_index_uint"),this._capabilities=f(t,r),this._parameters=this._loadParameters(r);var a=this.gl.getParameter(this.gl.VIEWPORT);this._viewport={x:a[0],y:a[1],width:a[2],height:a[3]},this._stateTracker=new u.a({setBlending:function(e){if(e){i.setBlendingEnabled(!0),i.setBlendEquationSeparate(e.opRgb,e.opAlpha),i.setBlendFunctionSeparate(e.srcRgb,e.dstRgb,e.srcAlpha,e.dstAlpha);var t=e.color;i.setBlendColor(t.r,t.g,t.b,t.a)}else i.setBlendingEnabled(!1)},setCulling:function(e){e?(i.setFaceCullingEnabled(!0),i.setCullFace(e.face),i.setFrontFace(e.mode)):i.setFaceCullingEnabled(!1)},setPolygonOffset:function(e){e?(i.setPolygonOffsetFillEnabled(!0),i.setPolygonOffset(e.factor,e.units)):i.setPolygonOffsetFillEnabled(!1)},setDepthTest:function(e){e?(i.setDepthTestEnabled(!0),i.setDepthFunction(e.func)):i.setDepthTestEnabled(!1)},setStencilTest:function(e){if(e){i.setStencilTestEnabled(!0);var t=e.function;i.setStencilFunction(t.func,t.ref,t.mask);var n=e.operation;i.setStencilOp(n.fail,n.zFail,n.zPass)}else i.setStencilTestEnabled(!1)},setDepthWrite:function(e){e?(i.setDepthWriteEnabled(!0),i.setDepthRange(e.zNear,e.zFar)):i.setDepthWriteEnabled(!1)},setColorWrite:function(e){e?i.setColorMask(e.r,e.g,e.b,e.a):i.setColorMask(!1,!1,!1,!1)},setStencilWrite:function(e){e?i.setStencilWriteMask(e.mask):i.setStencilWriteMask(0)}}),this.enforceState()}return Object(r.a)(e,[{key:"contextAttributes",get:function(){return this.gl.getContextAttributes()}},{key:"parameters",get:function(){return this._parameters}},{key:"dispose",value:function(){this.bindVAO(null),this.unbindBuffer(34962),this.unbindBuffer(34963),this._textureUnitMap.length=0,Object(s.b)()&&this.instanceCounter.printResourceCount()}},{key:"setPipelineState",value:function(e){this._stateTracker.setPipeline(e)}},{key:"setBlendingEnabled",value:function(e){this._blendEnabled!==e&&(!0===e?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._blendEnabled=e,this._stateTracker.invalidateBlending())}},{key:"externalTextureUnitUpdate",value:function(e,t){for(var i=0;i<e.length;++i)this._textureUnitMap[e[i]]=null;t>=0&&(this._activeTextureUnit=t)}},{key:"externalVertexArrayObjectUpdate",value:function(){var e=this.capabilities.vao;e&&(e.bindVertexArray(null),this._activeVertexArrayObject=null),this._activeVertexBuffer=null,this._activeIndexBuffer=null}},{key:"externalVertexBufferUpdate",value:function(){this._activeVertexBuffer=null}},{key:"externalIndexBufferUpdate",value:function(){this._activeIndexBuffer=null}},{key:"setBlendColor",value:function(e,t,i,n){e===this._blendColorState.r&&t===this._blendColorState.g&&i===this._blendColorState.b&&n===this._blendColorState.a||(this.gl.blendColor(e,t,i,n),this._blendColorState.r=e,this._blendColorState.g=t,this._blendColorState.b=i,this._blendColorState.a=n,this._stateTracker.invalidateBlending())}},{key:"setBlendFunction",value:function(e,t){e===this._blendFunctionState.srcRGB&&t===this._blendFunctionState.dstRGB||(this.gl.blendFunc(e,t),this._blendFunctionState.srcRGB=e,this._blendFunctionState.srcAlpha=e,this._blendFunctionState.dstRGB=t,this._blendFunctionState.dstAlpha=t,this._stateTracker.invalidateBlending())}},{key:"setBlendFunctionSeparate",value:function(e,t,i,n){this._blendFunctionState.srcRGB===e&&this._blendFunctionState.srcAlpha===i&&this._blendFunctionState.dstRGB===t&&this._blendFunctionState.dstAlpha===n||(this.gl.blendFuncSeparate(e,t,i,n),this._blendFunctionState.srcRGB=e,this._blendFunctionState.srcAlpha=i,this._blendFunctionState.dstRGB=t,this._blendFunctionState.dstAlpha=n,this._stateTracker.invalidateBlending())}},{key:"setBlendEquation",value:function(e){this._blendEquationState.mode!==e&&(this.gl.blendEquation(e),this._blendEquationState.mode=e,this._blendEquationState.modeAlpha=e,this._stateTracker.invalidateBlending())}},{key:"setBlendEquationSeparate",value:function(e,t){this._blendEquationState.mode===e&&this._blendEquationState.modeAlpha===t||(this.gl.blendEquationSeparate(e,t),this._blendEquationState.mode=e,this._blendEquationState.modeAlpha=t,this._stateTracker.invalidateBlending())}},{key:"setColorMask",value:function(e,t,i,n){this._colorMaskState.r===e&&this._colorMaskState.g===t&&this._colorMaskState.b===i&&this._colorMaskState.a===n||(this.gl.colorMask(e,t,i,n),this._colorMaskState.r=e,this._colorMaskState.g=t,this._colorMaskState.b=i,this._colorMaskState.a=n,this._stateTracker.invalidateColorWrite())}},{key:"setClearColor",value:function(e,t,i,n){this._clearColor.r===e&&this._clearColor.g===t&&this._clearColor.b===i&&this._clearColor.a===n||(this.gl.clearColor(e,t,i,n),this._clearColor.r=e,this._clearColor.g=t,this._clearColor.b=i,this._clearColor.a=n)}},{key:"setFaceCullingEnabled",value:function(e){this._polygonCullingEnabled!==e&&(!0===e?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._polygonCullingEnabled=e,this._stateTracker.invalidateCulling())}},{key:"setPolygonOffsetFillEnabled",value:function(e){this._polygonOffsetFillEnabled!==e&&(!0===e?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._polygonOffsetFillEnabled=e,this._stateTracker.invalidatePolygonOffset())}},{key:"setPolygonOffset",value:function(e,t){this._polygonOffset[0]===e&&this._polygonOffset[1]===t||(this._polygonOffset[0]=e,this._polygonOffset[1]=t,this.gl.polygonOffset(e,t),this._stateTracker.invalidatePolygonOffset())}},{key:"setCullFace",value:function(e){this._cullFace!==e&&(this.gl.cullFace(e),this._cullFace=e,this._stateTracker.invalidateCulling())}},{key:"setFrontFace",value:function(e){this._frontFace!==e&&(this.gl.frontFace(e),this._frontFace=e,this._stateTracker.invalidateCulling())}},{key:"setScissorTestEnabled",value:function(e){this._scissorTestEnabled!==e&&(!0===e?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._scissorTestEnabled=e)}},{key:"setScissorRect",value:function(e,t,i,n){this._scissorRect.x===e&&this._scissorRect.y===t&&this._scissorRect.width===i&&this._scissorRect.height===n||(this.gl.scissor(e,t,i,n),this._scissorRect.x=e,this._scissorRect.y=t,this._scissorRect.width=i,this._scissorRect.height=n)}},{key:"setDepthTestEnabled",value:function(e){this._depthTestEnabled!==e&&(!0===e?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._depthTestEnabled=e,this._stateTracker.invalidateDepthTest())}},{key:"setClearDepth",value:function(e){this._clearDepth!==e&&(this.gl.clearDepth(e),this._clearDepth=e)}},{key:"setDepthFunction",value:function(e){this._depthFunction!==e&&(this.gl.depthFunc(e),this._depthFunction=e,this._stateTracker.invalidateDepthTest())}},{key:"setDepthWriteEnabled",value:function(e){this._depthWriteEnabled!==e&&(this.gl.depthMask(e),this._depthWriteEnabled=e,this._stateTracker.invalidateDepthWrite())}},{key:"setDepthRange",value:function(e,t){this._depthRange.zNear===e&&this._depthRange.zFar===t||(this.gl.depthRange(e,t),this._depthRange.zNear=e,this._depthRange.zFar=t,this._stateTracker.invalidateDepthWrite())}},{key:"setStencilTestEnabled",value:function(e){this._stencilTestEnabled!==e&&(!0===e?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._stencilTestEnabled=e,this._stateTracker.invalidateStencilTest())}},{key:"setClearStencil",value:function(e){e!==this._clearStencil&&(this.gl.clearStencil(e),this._clearStencil=e)}},{key:"setStencilFunction",value:function(e,t,i){this._stencilFunction.func===e&&this._stencilFunction.ref===t&&this._stencilFunction.mask===i||(this.gl.stencilFunc(e,t,i),this._stencilFunction.face=1032,this._stencilFunction.func=e,this._stencilFunction.ref=t,this._stencilFunction.mask=i,this._stateTracker.invalidateStencilTest())}},{key:"setStencilFunctionSeparate",value:function(e,t,i,n){this._stencilFunction.face===e&&this._stencilFunction.func===t&&this._stencilFunction.ref===i&&this._stencilFunction.mask===n||(this.gl.stencilFuncSeparate(e,t,i,n),this._stencilFunction.face=e,this._stencilFunction.func=t,this._stencilFunction.ref=i,this._stencilFunction.mask=n,this._stateTracker.invalidateStencilTest())}},{key:"setStencilWriteMask",value:function(e){this._stencilWriteMask!==e&&(this.gl.stencilMask(e),this._stencilWriteMask=e,this._stateTracker.invalidateStencilWrite())}},{key:"setStencilOp",value:function(e,t,i){this._stencilOperation.fail===e&&this._stencilOperation.zFail===t&&this._stencilOperation.zPass===i||(this.gl.stencilOp(e,t,i),this._stencilOperation.face=1032,this._stencilOperation.fail=e,this._stencilOperation.zFail=t,this._stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest())}},{key:"setStencilOpSeparate",value:function(e,t,i,n){this._stencilOperation.face===e&&this._stencilOperation.fail===t&&this._stencilOperation.zFail===i&&this._stencilOperation.zPass===n||(this.gl.stencilOpSeparate(e,t,i,n),this._stencilOperation.face=e,this._stencilOperation.face=e,this._stencilOperation.fail=t,this._stencilOperation.zFail=i,this._stencilOperation.zPass=n,this._stateTracker.invalidateStencilTest())}},{key:"setActiveTexture",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this._activeTextureUnit;return e>=0&&(t||e!==this._activeTextureUnit)&&(this.gl.activeTexture(l.a+e),this._activeTextureUnit=e),i}},{key:"clear",value:function(e){e&&this.gl.clear(e)}},{key:"clearSafe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255;e&&(16384&e&&this.setColorMask(!0,!0,!0,!0),256&e&&this.setDepthWriteEnabled(!0),1024&e&&this.setStencilWriteMask(t),this.gl.clear(e))}},{key:"drawArrays",value:function(e,t,i){Object(s.b)()&&(this._numOfDrawCalls++,this._numOfTriangles+=T(e,i)),this.gl.drawArrays(e,t,i)}},{key:"drawElements",value:function(e,t,i,n){Object(s.b)()&&(this._numOfDrawCalls++,this._numOfTriangles+=T(e,t)),this.gl.drawElements(e,t,i,n)}},{key:"logIno",value:function(){Object(s.b)()&&console.log("DrawCalls: ".concat(this._numOfDrawCalls,", Triangles: ").concat(this._numOfTriangles))}},{key:"capabilities",get:function(){return this._capabilities}},{key:"setViewport",value:function(e,t,i,n){i=Math.max(Math.round(i),1),n=Math.max(Math.round(n),1);var r=this._viewport;r.x===e&&r.y===t&&r.width===i&&r.height===n||(r.x=e,r.y=t,r.width=i,r.height=n,this.gl.viewport(e,t,i,n))}},{key:"getViewport",value:function(){return{x:this._viewport.x,y:this._viewport.y,width:this._viewport.width,height:this._viewport.height}}},{key:"useProgram",value:function(e){var t,i;if(!e)return null==(i=this._activeShaderProgram)||i.stop(),this._activeShaderProgram=null,void this.gl.useProgram(null);this._activeShaderProgram!==e&&(null==(t=this._activeShaderProgram)||t.stop(),this._activeShaderProgram=e,this.gl.useProgram(e.glName))}},{key:"bindTexture",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(t>=this.parameters.maxTextureImageUnits||t<0)&&console.error("Input texture unit is out of range of available units!");var n=this._textureUnitMap[t];return this.setActiveTexture(t,i),Object(a.i)(e)||null==e.glName?(Object(a.j)(n)&&this.gl.bindTexture(n.descriptor.target,null),this._textureUnitMap[t]=null,n):i||n!==e?(this.gl.bindTexture(e.descriptor.target,e.glName),e.applyChanges(),this._textureUnitMap[t]=e,n):(e.applyChanges(),n)}},{key:"unbindTextureAllUnits",value:function(e){for(var t=0;t<this.parameters.maxTextureImageUnits;t++)this._textureUnitMap[t]===e&&(this.bindTexture(null,t),this._textureUnitMap[t]=null)}},{key:"bindFramebuffer",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3553;if(Object(a.i)(e))return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),void(this._activeFramebuffer=null);(t||this._activeFramebuffer!==e)&&(e.initializeAndBind(i),this._activeFramebuffer=e)}},{key:"bindBuffer",value:function(e){e&&(34962===e.bufferType?this._activeVertexBuffer=p(this.gl,e,e.bufferType,this._activeVertexBuffer):this._activeIndexBuffer=p(this.gl,e,e.bufferType,this._activeIndexBuffer))}},{key:"bindRenderbuffer",value:function(e){var t=this.gl;e||(t.bindRenderbuffer(t.RENDERBUFFER,null),this._activeRenderbuffer=null),this._activeRenderbuffer!==e&&(t.bindRenderbuffer(t.RENDERBUFFER,e.glName),this._activeRenderbuffer=e)}},{key:"unbindBuffer",value:function(e){34962===e?this._activeVertexBuffer=p(this.gl,null,e,this._activeVertexBuffer):this._activeIndexBuffer=p(this.gl,null,e,this._activeIndexBuffer)}},{key:"bindVAO",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(a.i)(e)?this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null):this._activeVertexArrayObject!==e&&(e.bind(),this._activeVertexArrayObject=e)}},{key:"getBoundFramebufferObject",value:function(){return this._activeFramebuffer}},{key:"getBoundVAO",value:function(){return this._activeVertexArrayObject}},{key:"resetState",value:function(){this.useProgram(null),this.bindVAO(null),this.bindFramebuffer(null),this.unbindBuffer(34962),this.unbindBuffer(34963);for(var e=0;e<this.parameters.maxTextureImageUnits;++e)this.bindTexture(null,e);this.setBlendingEnabled(!1),this.setBlendFunction(1,0),this.setBlendEquation(32774),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(1029),this.setFrontFace(2305),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(513),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(519,0,0),this.setStencilOp(7680,7680,7680),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}},{key:"enforceState",value:function(){var e=this.gl,t=this.capabilities.vao;t&&t.bindVertexArray(null);for(var i=0;i<this.parameters.maxVertexAttributes;i++)e.disableVertexAttribArray(i);if(this._activeVertexBuffer?e.bindBuffer(this._activeVertexBuffer.bufferType,this._activeVertexBuffer.glName):e.bindBuffer(34962,null),this._activeIndexBuffer?e.bindBuffer(this._activeIndexBuffer.bufferType,this._activeIndexBuffer.glName):e.bindBuffer(34963,null),t&&this._activeVertexArrayObject){var n=this._activeVertexArrayObject;this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null),this.bindVAO(n)}e.bindFramebuffer(e.FRAMEBUFFER,this._activeFramebuffer?this._activeFramebuffer.glName:null),e.useProgram(this._activeShaderProgram?this._activeShaderProgram.glName:null),e.blendColor(this._blendColorState.r,this._blendColorState.g,this._blendColorState.b,this._blendColorState.a),e.bindRenderbuffer(e.RENDERBUFFER,this._activeRenderbuffer?this._activeRenderbuffer.glName:null),!0===this._blendEnabled?e.enable(this.gl.BLEND):e.disable(this.gl.BLEND),e.blendEquationSeparate(this._blendEquationState.mode,this._blendEquationState.modeAlpha),e.blendFuncSeparate(this._blendFunctionState.srcRGB,this._blendFunctionState.dstRGB,this._blendFunctionState.srcAlpha,this._blendFunctionState.dstAlpha),e.clearColor(this._clearColor.r,this._clearColor.g,this._clearColor.b,this._clearColor.a),e.clearDepth(this._clearDepth),e.clearStencil(this._clearStencil),e.colorMask(this._colorMaskState.r,this._colorMaskState.g,this._colorMaskState.b,this._colorMaskState.a),e.cullFace(this._cullFace),e.depthFunc(this._depthFunction),e.depthRange(this._depthRange.zNear,this._depthRange.zFar),!0===this._depthTestEnabled?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),e.depthMask(this._depthWriteEnabled),e.frontFace(this._frontFace),e.lineWidth(1),!0===this._polygonCullingEnabled?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),e.polygonOffset(this._polygonOffset[0],this._polygonOffset[1]),!0===this._polygonOffsetFillEnabled?e.enable(e.POLYGON_OFFSET_FILL):e.disable(e.POLYGON_OFFSET_FILL),e.scissor(this._scissorRect.x,this._scissorRect.y,this._scissorRect.width,this._scissorRect.height),!0===this._scissorTestEnabled?e.enable(e.SCISSOR_TEST):e.disable(e.SCISSOR_TEST),e.stencilFunc(this._stencilFunction.func,this._stencilFunction.ref,this._stencilFunction.mask),e.stencilOpSeparate(this._stencilOperation.face,this._stencilOperation.fail,this._stencilOperation.zFail,this._stencilOperation.zPass),!0===this._stencilTestEnabled?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),e.stencilMask(this._stencilWriteMask);for(var r=0;r<this.parameters.maxTextureImageUnits;r++){e.activeTexture(l.a+r),e.bindTexture(3553,null),e.bindTexture(34067,null),Object(h.a)(e)&&e.bindTexture(32879,null);var o=this._textureUnitMap[r];Object(a.j)(o)&&e.bindTexture(o.descriptor.target,o.glName)}e.activeTexture(l.a+this._activeTextureUnit),e.viewport(this._viewport.x,this._viewport.y,this._viewport.width,this._viewport.height),Object(s.b)()&&(this._numOfDrawCalls=0,this._numOfTriangles=0)}},{key:"_loadParameters",value:function(e){var t,i=this.capabilities.textureFilterAnisotropic,n=null!=(t=e.maxAnisotropy)?t:1/0,r={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:i?Math.min(this.gl.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY),n):1,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),maxTextureSize:this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)};return c.a.TEXTURE_UNIT_FOR_UPDATES=r.maxTextureImageUnits-1,r}}]),e}();function p(e,t,i,n){return t?n!==t&&e.bindBuffer(i,t.glName):e.bindBuffer(i,null),t}function T(e,t){switch(e){case 0:return 2*t;case 4:return t/3;case 5:case 6:return t-2;default:return 0}}},873:function(e,t,i){"use strict";i.r(t);var n=i(512);i.d(t,"BufferObject",(function(){return n.a}));var r=i(513);i.d(t,"FramebufferObject",(function(){return r.a}));var a=i(615);i.d(t,"Program",(function(){return a.a}));var s=i(667);i.d(t,"ProgramCache",(function(){return s.a}));var l=i(691);i.d(t,"Renderbuffer",(function(){return l.a}));var o=i(727);i.d(t,"RenderingContext",(function(){return o.a}));var u=i(668);i.d(t,"ShaderCompiler",(function(){return u.a}));var c=i(509);i.d(t,"Texture",(function(){return c.a}));var h=i(514);i.d(t,"VertexArrayObject",(function(){return h.a}));var _=i(591);i.d(t,"createProgram",(function(){return _.a})),i.d(t,"glslifyDefineMap",(function(){return _.b}));var d=i(303);i.d(t,"createContextOrErrorHTML",(function(){return d.b}))}}]);
//# sourceMappingURL=29.ef9cb124.chunk.js.map