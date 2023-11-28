(0,globalThis.parcelRequireee66.register)("i8Fxz",function(e,t){e.exports,e.exports=function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e,r,o){return(n=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a}:Reflect.construct).apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var a,i=Object.hasOwnProperty,l=Object.setPrototypeOf,c=Object.isFrozen,s=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,p=Object.create,d="undefined"!=typeof Reflect&&Reflect,h=d.apply,g=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),m||(m=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return n(e,r(t))});var y=k(Array.prototype.forEach),b=k(Array.prototype.pop),T=k(Array.prototype.push),v=k(String.prototype.toLowerCase),N=k(String.prototype.toString),E=k(String.prototype.match),A=k(String.prototype.replace),S=k(String.prototype.indexOf),w=k(String.prototype.trim),_=k(RegExp.prototype.test),x=(a=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(a,t)});function k(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}/* Add properties to a lookup table */function L(e,t,n){n=null!==(r=n)&&void 0!==r?r:v,l&&// independent of any properties defined on Object.prototype.
// Prevent prototype setters from intercepting set as a this value.
l(e,null);for(var r,o=t.length;o--;){var a=t[o];if("string"==typeof a){var i=n(a);i!==a&&(c(t)||(t[o]=i),a=i)}e[a]=!0}return e}/* Shallow clone an object */function O(e){var t,n=p(null);for(t in e)!0===h(i,e,[t])&&(n[t]=e[t]);return n}/* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */function D(e,t){for(;null!==e;){var n=u(e,t);if(n){if(n.get)return k(n.get);if("function"==typeof n.value)return k(n.value)}e=s(e)}return function(e){return console.warn("fallback value for",e),null}}var R=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),C=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),M=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),U=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=m(["#text"]),z=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),P=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),j=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),B=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=f(/<%[\w\W]*|[\w\W]*%>/gm),q=f(/\${[\w\W]*}/gm),Y=f(/^data-[\-\w.\u00B7-\uFFFF]/),$=f(/^aria-[\-\w]+$/),K=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i// eslint-disable-line no-useless-escape
),V=f(/^(?:\w+script|data):/i),X=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g// eslint-disable-line no-control-regex
),Z=f(/^html$/i),J=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;// Allow the callers to control the unique policy name
// by adding a data-tt-policy-suffix to the script element with the DOMPurify.
// Policy creation with duplicate names throws in Trusted Types.
var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return(// Policy creation failed (most likely another DOMPurify script has
// already run). Skip creating the policy, as this will only cause errors
// if TT are enforced.
console.warn("TrustedTypes policy "+a+" could not be created."),null)}};// SVG
return function t(){var n,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,i=function(e){return t(e)};if(/**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */i.version="2.4.7",/**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */i.removed=[],!a||!a.document||9!==a.document.nodeType)return(// Not running in a browser, provide a factory function
// so that you can pass your own Window
i.isSupported=!1,i);var l=a.document,c=a.document,DocumentFragment=a.DocumentFragment,HTMLTemplateElement=a.HTMLTemplateElement,Node=a.Node,Element=a.Element,NodeFilter=a.NodeFilter,s=a.NamedNodeMap,NamedNodeMap=void 0===s?a.NamedNodeMap||a.MozNamedAttrMap:s,HTMLFormElement=a.HTMLFormElement,DOMParser=a.DOMParser,u=a.trustedTypes,f=Element.prototype,p=D(f,"cloneNode"),d=D(f,"nextSibling"),h=D(f,"childNodes"),g=D(f,"parentNode");// new document created via createHTMLDocument. As per the spec
// (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
// a new empty registry is used when creating a template contents owner
// document, so we use that as our parent document to ensure nothing
// is inherited.
if("function"==typeof HTMLTemplateElement){var k=c.createElement("template");k.content&&k.content.ownerDocument&&(c=k.content.ownerDocument)}var Q=J(u,l),ee=Q?Q.createHTML(""):"",et=c,en=et.implementation,er=et.createNodeIterator,eo=et.createDocumentFragment,ea=et.getElementsByTagName,ei=l.importNode,el={};try{el=O(c).documentMode?c.documentMode:{}}catch(e){}var ec={};/**
     * Expose whether this browser supports running the full DOMPurify.
     */i.isSupported="function"==typeof g&&en&&void 0!==en.createHTMLDocument&&9!==el;var es=K,eu=null,em=L({},[].concat(r(R),r(C),r(M),r(F),r(H))),ef=null,ep=L({},[].concat(r(z),r(P),r(j),r(B))),ed=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),eh=null,eg=null,ey=!0,eb=!0,eT=!1,ev=!0,eN=!1,eE=!1,eA=!1,eS=!1,ew=!1,e_=!1,ex=!1,ek=!0,eL=!1,eO=!0,eD=!1,eR={},eC=null,eM=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),eI=null,eF=L({},["audio","video","img","source","image","track"]),eU=null,eH=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ez="http://www.w3.org/1998/Math/MathML",eP="http://www.w3.org/2000/svg",ej="http://www.w3.org/1999/xhtml",eB=ej,eG=!1,eW=null,eq=L({},[ez,eP,ej],N),eY=["application/xhtml+xml","text/html"],e$=null,eK=c.createElement("form"),eV=function(e){return e instanceof RegExp||e instanceof Function},eX=function(t){e$&&e$===t||(t&&"object"===e(t)||(t={}),/* Shield configuration object from prototype pollution */t=O(t),o="application/xhtml+xml"===(n=n=-1===eY.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE)?N:v,/* Set configuration parameters */eu="ALLOWED_TAGS"in t?L({},t.ALLOWED_TAGS,o):em,ef="ALLOWED_ATTR"in t?L({},t.ALLOWED_ATTR,o):ep,eW="ALLOWED_NAMESPACES"in t?L({},t.ALLOWED_NAMESPACES,N):eq,eU="ADD_URI_SAFE_ATTR"in t?L(O(eH),t.ADD_URI_SAFE_ATTR,o// eslint-disable-line indent
)// eslint-disable-line indent
:eH,eI="ADD_DATA_URI_TAGS"in t?L(O(eF),t.ADD_DATA_URI_TAGS,o// eslint-disable-line indent
)// eslint-disable-line indent
:eF,eC="FORBID_CONTENTS"in t?L({},t.FORBID_CONTENTS,o):eM,eh="FORBID_TAGS"in t?L({},t.FORBID_TAGS,o):{},eg="FORBID_ATTR"in t?L({},t.FORBID_ATTR,o):{},eR="USE_PROFILES"in t&&t.USE_PROFILES,ey=!1!==t.ALLOW_ARIA_ATTR,eb=!1!==t.ALLOW_DATA_ATTR,eT=t.ALLOW_UNKNOWN_PROTOCOLS||!1,ev=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,eN=t.SAFE_FOR_TEMPLATES||!1,eE=t.WHOLE_DOCUMENT||!1,ew=t.RETURN_DOM||!1,e_=t.RETURN_DOM_FRAGMENT||!1,ex=t.RETURN_TRUSTED_TYPE||!1,eS=t.FORCE_BODY||!1,ek=!1!==t.SANITIZE_DOM,eL=t.SANITIZE_NAMED_PROPS||!1,eO=!1!==t.KEEP_CONTENT,eD=t.IN_PLACE||!1,es=t.ALLOWED_URI_REGEXP||es,eB=t.NAMESPACE||ej,ed=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&eV(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ed.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&eV(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ed.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ed.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),eN&&(eb=!1),e_&&(ew=!0),eR&&(eu=L({},r(H)),ef=[],!0===eR.html&&(L(eu,R),L(ef,z)),!0===eR.svg&&(L(eu,C),L(ef,P),L(ef,B)),!0===eR.svgFilters&&(L(eu,M),L(ef,P),L(ef,B)),!0===eR.mathMl&&(L(eu,F),L(ef,j),L(ef,B))),t.ADD_TAGS&&(eu===em&&(eu=O(eu)),L(eu,t.ADD_TAGS,o)),t.ADD_ATTR&&(ef===ep&&(ef=O(ef)),L(ef,t.ADD_ATTR,o)),t.ADD_URI_SAFE_ATTR&&L(eU,t.ADD_URI_SAFE_ATTR,o),t.FORBID_CONTENTS&&(eC===eM&&(eC=O(eC)),L(eC,t.FORBID_CONTENTS,o)),eO&&(eu["#text"]=!0),eE&&L(eu,["html","head","body"]),eu.table&&(L(eu,["tbody"]),delete eh.tbody),m&&m(t),e$=t)},eZ=L({},["mi","mo","mn","ms","mtext"]),eJ=L({},["foreignobject","desc","title","annotation-xml"]),eQ=L({},["title","style","font","a","script"]),e0=L({},C);L(e0,M),L(e0,I);var e1=L({},F);L(e1,U);/**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */var e2=function(e){var t=g(e);// In JSDOM, if we're inside shadow DOM, then parentNode
// can be null. We just simulate parent in this case.
t&&t.tagName||(t={namespaceURI:eB,tagName:"template"});var r=v(e.tagName),o=v(t.tagName);return!!eW[e.namespaceURI]&&(e.namespaceURI===eP?// The only way to switch from HTML namespace to SVG
// is via <svg>. If it happens via any other tag, then
// it should be killed.
t.namespaceURI===ej?"svg"===r:t.namespaceURI===ez?"svg"===r&&("annotation-xml"===o||eZ[o]):!!e0[r]:e.namespaceURI===ez?// The only way to switch from HTML namespace to MathML
// is via <math>. If it happens via any other tag, then
// it should be killed.
t.namespaceURI===ej?"math"===r:t.namespaceURI===eP?"math"===r&&eJ[o]:!!e1[r]:e.namespaceURI===ej?// The only way to switch from SVG to HTML is via
// HTML integration points, and from MathML to HTML
// is via MathML text integration points
(t.namespaceURI!==eP||!!eJ[o])&&(t.namespaceURI!==ez||!!eZ[o])&&!e1[r]&&(eQ[r]||!e0[r]):"application/xhtml+xml"===n&&!!eW[e.namespaceURI])},e9=function(e){T(i.removed,{element:e});try{// eslint-disable-next-line unicorn/prefer-dom-node-remove
e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ee}catch(t){e.remove()}}},e3=function(e,t){try{T(i.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){T(i.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ef[e]){if(ew||e_)try{e9(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}}},e8=function(e){if(eS)e="<remove></remove>"+e;else{/* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */var t,r,o=E(e,/^[\r\n\t ]+/);r=o&&o[0]}"application/xhtml+xml"===n&&eB===ej&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var a=Q?Q.createHTML(e):e;/*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */if(eB===ej)try{t=new DOMParser().parseFromString(a,n)}catch(e){}/* Use createHTMLDocument in case DOMParser is not available */if(!t||!t.documentElement){t=en.createDocument(eB,"template",null);try{t.documentElement.innerHTML=eG?ee:a}catch(e){}}var i=t.body||t.documentElement;return/* Work on whole document or just its body */(e&&r&&i.insertBefore(c.createTextNode(r),i.childNodes[0]||null),eB===ej)?ea.call(t,eE?"html":"body")[0]:eE?t.documentElement:i},e6=function(e){return er.call(e.ownerDocument||e,e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT,null,!1)},e4=function(t){return"object"===e(Node)?t instanceof Node:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},e5=function(e,t,n){ec[e]&&y(ec[e],function(e){e.call(i,t,n,e$)})},e7=function(e){/* Check if element is clobbered or can clobber */if(/* Execute a hook if present */e5("beforeSanitizeElements",e,null),e instanceof HTMLFormElement&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof NamedNodeMap)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)||_(/[\u0080-\uFFFF]/,e.nodeName))return e9(e),!0;/* Now let's check the element's type and name */var t,n=o(e.nodeName);/* Detect mXSS attempts abusing namespace confusion */if(/* Execute a hook if present */e5("uponSanitizeElement",e,{tagName:n,allowedTags:eu}),e.hasChildNodes()&&!e4(e.firstElementChild)&&(!e4(e.content)||!e4(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent)||"select"===n&&_(/<template/i,e.innerHTML))return e9(e),!0;/* Remove element if anything forbids its presence */if(!eu[n]||eh[n]){/* Check if we have a custom element to handle */if(!eh[n]&&tt(n)&&(ed.tagNameCheck instanceof RegExp&&_(ed.tagNameCheck,n)||ed.tagNameCheck instanceof Function&&ed.tagNameCheck(n)))return!1;/* Keep content except for bad-listed elements */if(eO&&!eC[n]){var r=g(e)||e.parentNode,a=h(e)||e.childNodes;if(a&&r)for(var l=a.length,c=l-1;c>=0;--c)r.insertBefore(p(a[c],!0),d(e))}return e9(e),!0}return /* Check whether element has a valid namespace */e instanceof Element&&!e2(e)||("noscript"===n||"noembed"===n||"noframes"===n)&&_(/<\/no(script|embed|frames)/i,e.innerHTML)?(e9(e),!0):(eN&&3===e.nodeType&&(t=A(/* Get the element's text content */t=e.textContent,G," "),t=A(t,W," "),t=A(t,q," "),e.textContent!==t&&(T(i.removed,{element:e.cloneNode()}),e.textContent=t)),/* Execute a hook if present */e5("afterSanitizeElements",e,null),!1)},te=function(e,t,n){/* Make sure attribute cannot clobber */if(ek&&("id"===t||"name"===t)&&(n in c||n in eK))return!1;/* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */if(eb&&!eg[t]&&_(Y,t));else if(ey&&_($,t));else if(!ef[t]||eg[t]){if(!// and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
(tt(e)&&(ed.tagNameCheck instanceof RegExp&&_(ed.tagNameCheck,e)||ed.tagNameCheck instanceof Function&&ed.tagNameCheck(e))&&(ed.attributeNameCheck instanceof RegExp&&_(ed.attributeNameCheck,t)||ed.attributeNameCheck instanceof Function&&ed.attributeNameCheck(t))||// Alternative, second condition checks if it's an `is`-attribute, AND
// the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
"is"===t&&ed.allowCustomizedBuiltInElements&&(ed.tagNameCheck instanceof RegExp&&_(ed.tagNameCheck,n)||ed.tagNameCheck instanceof Function&&ed.tagNameCheck(n))))return!1}else if(eU[t]);else if(_(es,A(n,X,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===S(n,"data:")&&eI[e]);else if(eT&&!_(V,A(n,X,"")));else if(n)return!1;return!0},tt=function(e){return e.indexOf("-")>0},tn=function(t){/* Execute a hook if present */e5("beforeSanitizeAttributes",t,null);var n,r,a,l,c=t.attributes;/* Check if we have attributes; if not we might have a text node */if(c){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ef};/* Go backwards over all attributes; safely remove bad ones */for(l=c.length;l--;){var m=(n=c[l]).name,f=n.namespaceURI;/* Did the hooks approve of the attribute? */if(r="value"===m?n.value:w(n.value),a=o(m),/* Execute a hook if present */s.attrName=a,s.attrValue=r,s.keepAttr=!0,s.forceKeepAttr=void 0,e5("uponSanitizeAttribute",t,s),r=s.attrValue,!s.forceKeepAttr&&(/* Remove attribute */e3(m,t),s.keepAttr)){/* Work around a security issue in jQuery 3.0 */if(!ev&&_(/\/>/i,r)){e3(m,t);continue}eN&&(r=A(r,G," "),r=A(r,W," "),r=A(r,q," "));/* Is `value` valid for this attribute? */var p=o(t.nodeName);if(te(p,a,r)){/* Handle attributes that require Trusted Types */if(eL&&("id"===a||"name"===a)&&(// Remove the attribute with this value
e3(m,t),r="user-content-"+r),Q&&"object"===e(u)&&"function"==typeof u.getAttributeType){if(f);else switch(u.getAttributeType(p,a)){case"TrustedHTML":r=Q.createHTML(r);break;case"TrustedScriptURL":r=Q.createScriptURL(r)}}/* Handle invalid data-* attribute set by try-catching it */try{f?t.setAttributeNS(f,m,r):/* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */t.setAttribute(m,r),b(i.removed)}catch(e){}}}}/* Execute a hook if present */e5("afterSanitizeAttributes",t,null)}},tr=function e(t){var n,r=e6(t);for(/* Execute a hook if present */e5("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)/* Sanitize tags and elements *//* Execute a hook if present */e5("uponSanitizeShadowNode",n,null),e7(n)||(n.content instanceof DocumentFragment&&e(n.content),/* Check attributes, sanitize if necessary */tn(n));/* Execute a hook if present */e5("afterSanitizeShadowDOM",t,null)};return(/**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */// eslint-disable-next-line complexity
i.sanitize=function(t){var n,r,c,s,u,m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};/* Stringify, in case dirty is an object */if(/* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */(eG=!t)&&(t="<!-->"),"string"!=typeof t&&!e4(t)){if("function"==typeof t.toString){if("string"!=typeof(t=t.toString()))throw x("dirty is not a string, aborting")}else throw x("toString is not a function")}/* Check we can run. Otherwise fall back or ignore */if(!i.isSupported){if("object"===e(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof t)return a.toStaticHTML(t);if(e4(t))return a.toStaticHTML(t.outerHTML)}return t}if(eA||eX(m),/* Clean up removed elements */i.removed=[],"string"==typeof t&&(eD=!1),eD){if(t.nodeName){var f=o(t.nodeName);if(!eu[f]||eh[f])throw x("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof Node)1===(r=/* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */(n=e8("<!---->")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===r.nodeName?/* Node is already a body, use as is */n=r:"HTML"===r.nodeName?n=r:n.appendChild(r);else{/* Exit directly if we have nothing to do */if(!ew&&!eN&&!eE&&// eslint-disable-next-line unicorn/prefer-includes
-1===t.indexOf("<"))return Q&&ex?Q.createHTML(t):t;/* Check we have a DOM node from the data */if(!/* Initialize the document to work on */(n=e8(t)))return ew?null:ex?ee:""}n&&eS&&e9(n.firstChild);/* Now start iterating over the created document */for(/* Get node iterator */var p=e6(eD?t:n);c=p.nextNode();)/* Fix IE's strange behavior with manipulated textNodes #89 */3===c.nodeType&&c===s||e7(c)||(c.content instanceof DocumentFragment&&tr(c.content),/* Check attributes, sanitize if necessary */tn(c),s=c);/* If we sanitized `dirty` in-place, return it. */if(s=null,eD)return t;/* Return sanitized string or DOM */if(ew){if(e_)for(u=eo.call(n.ownerDocument);n.firstChild;)u.appendChild(n.firstChild);else u=n;return(ef.shadowroot||ef.shadowrootmod)&&/*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */(u=ei.call(l,u,!0)),u}var d=eE?n.outerHTML:n.innerHTML;return eE&&eu["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&_(Z,n.ownerDocument.doctype.name)&&(d="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+d),eN&&(d=A(d,G," "),d=A(d,W," "),d=A(d,q," ")),Q&&ex?Q.createHTML(d):d},/**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */i.setConfig=function(e){eX(e),eA=!0},/**
     * Public method to remove the configuration
     * clearConfig
     *
     */i.clearConfig=function(){e$=null,eA=!1},/**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */i.isValidAttribute=function(e,t,n){return e$||eX({}),te(o(e),o(t),n)},/**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */i.addHook=function(e,t){"function"==typeof t&&(ec[e]=ec[e]||[],T(ec[e],t))},/**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */i.removeHook=function(e){if(ec[e])return b(ec[e])},/**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */i.removeHooks=function(e){ec[e]&&(ec[e]=[])},/**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */i.removeAllHooks=function(){ec={}},i)}()}()});//# sourceMappingURL=purify.0a55e3c7.js.map

//# sourceMappingURL=purify.0a55e3c7.js.map