parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-modal-overlay"),o=document.querySelectorAll(".js-close-modal,.header-nav__link,.header-nav__btn--menu"),s=document.querySelectorAll(".js-modal");e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector(".js-modal[data-modal='"+o+"']").classList.add("is-open"),t.classList.add("is-open")})}),o.forEach(function(e){e.addEventListener("click",function(){this.closest(".js-modal").classList.remove("is-open"),e.classList.contains("btn")||t.classList.remove("is-open")})}),t.addEventListener("click",function(){t.classList.remove("is-open"),s.forEach(function(e){e.classList.remove("is-open")})});
},{}]},{},["RSqK"], null)
//# sourceMappingURL=/Icecream-group9/modal.de827c0d.js.map