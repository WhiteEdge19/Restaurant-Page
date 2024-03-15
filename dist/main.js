(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),a=t.n(r),o=t(314),i=t.n(o),s=t(417),c=t.n(s),d=new URL(t(566),t.b),p=i()(a()),l=c()(d);p.push([n.id,`body{\n    margin: 0;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows:10vh 10fr ;\n    min-height: 100vh;\n    \n}\n\nheader{\n    grid-area: 1/1/2/2;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    background-color: darkorange;\n    min-height: 100%;\n    max-height: 10vh ;\n    position:sticky;\n    top: 0;\n    \n}\n\nheader nav{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 30px;\n\n}\n\nheader button{\n    border: 5px none blue;\n    background:burlywood;\n    padding: 10px;\n    border-radius: 10px;\n    width: 100%;\n    box-shadow: 1px 1px 10px;\n    font-style: italic;\n    font-weight: bold;\n    font-family: 1.3em;\n}\n\n.container{\n    grid-area: 2/1/3/2;\n    background-color: coral;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: auto;\n    height: auto;\n}\n.home{\n    grid-area: 1/2/2/3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    border: 2px groove brown;\n}\n\n.home h3{\n    margin: 0;\n}\n\n.home p{\n    text-align: center;\n}\n.home .imagen{\n    background-image: url(${l});\n    background-size: 100% 100%;\n    min-width:50px;\n    min-height: 40px;\n    background-repeat: no-repeat;\n    width: 70%;\n    height: 40%;\n    border-radius: 20px;\n    box-shadow: 1px 1px 20px;\n}\n\n.menu{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10%;\n    gap: 10px;\n}\n.menu div{\n    text-align: center;\n    border: 5px inset 5px;\n    box-shadow: 1px 1px 10px;\n    border-radius: 20px;\n}`,""]);const u=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=t(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),d=0;d<o.length;d++){var p=t(o[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},566:(n,e,t)=>{n.exports=t.p+"6af3d606a27de81f495e.jpg"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=document.querySelector(".container"),e=document.querySelector(".container");var r=t(72),a=t.n(r),o=t(825),i=t.n(o),s=t(659),c=t.n(s),d=t(56),p=t.n(d),l=t(540),u=t.n(l),h=t(113),f=t.n(h),m=t(208),v={};v.styleTagTransform=f(),v.setAttributes=p(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),a()(m.A,v),m.A&&m.A.locals&&m.A.locals;const g=document.querySelector("header");let b=document.querySelector(".container");g.addEventListener("click",(t=>{switch(t.target.value){case"home":b.innerHTML="",n.innerHTML='\n    <div class="home">\n    <h1>Restaurant Tested¡</h1>\n    <h3>Bienvenido</h3>\n    <h3>Welcome¡</h3>\n    <p>Bienvenido a Tested¡ , donde vera algunas comidas tipicas del area local</p>\n    <p>pd:Esto es un test</p>   \n    <div class="imagen"></div>\n    </div>',console.log("home");break;case"menu":b.innerHTML="",e.innerHTML='\n    <div class="menu">\n    <div class="platos">\n        <h3>Locro de Pecho</h3>\n        <p>Un plato hecho con pure de papa\n            ,carne y arroz finamente cocido.\n            Pruebelo¡\n        </p>\n        <p>Precio : $10.00</p>\n\n    </div>\n    <div class="platos">\n        <h3>Caldo de gallina</h3>\n        <p>Un potente plato que ademas de \n            ser delicioso, ayuda a recomponer\n             energias por la consistencia de su \n             sabor\n        </p>\n        <p>Precio : $15.00</p>\n    </div>\n    <div class="platos">\n        <h3>Arroz chaufa</h3>\n        <p>Un delicioso plato que lleva trozos\n             de huevo , salchicha, verduras y\n              y de pollo.\n        </p>\n        <p>Precio : $12.00</p>\n    </div>\n</div>\n<div class="menu">\n    <div class="bebidas">\n        <h3>Jugo de maracuya</h3>\n        <p>Acompaña tus platos con este delicioso\n             jugo de maracuya, fresco y gratificante.\n        </p>\n        <p>Precio : $8.00</p>\n    </div>\n    <div class="bebidas">\n        <h3>Inca kola</h3>\n        <p>Disfruta de la tipica gaseosa con tu plato \n            favorito.\n        </p>\n        <p>Precio : $5.00</p>\n    </div>\n    <div class="bebidas">\n        <h3>Chicha morada</h3>\n        <p>Prueba esta deliciosa bebida natural \n            acompañada de tu plato favorito!\n        </p>\n        <p>Precio : $7.00</p>\n    </div>\n</div>\n<div class="menu">\n    <div class="postres">\n        <h3>Pastel de platano</h3>\n        <p>Prueba el delicioso pastel de platano \n            cuyo sabor te encantara!\n        </p>\n        <p>Precio : $5.00</p>\n    </div>\n    <div class="postres">\n        <h3>Mazamorra de fresa</h3>\n        <p>Degusta este postre fantastico que pasa \n            suave despues de una comida\n        </p>\n        <p>Precio : $6.00</p>\n    </div>\n    <div class="postres">\n        <h3>Helado Frito</h3>\n        <p>Prueba los diferentes sabores disponibles \n            de este delicioso postre :\n            Menta , Fresa y Mango!\n        </p>\n        <p>Precio : $8:00</p>\n    </div>',console.log("menu")}}))})()})();