(()=>{"use strict";var e,t={7953:(e,t,n)=>{n(5377),n(6248),n(1418),n(3238);function o(e,t,n,o,r,c,i){try{var s=e[c](i),a=s.value}catch(e){return void n(e)}s.done?t(a):Promise.resolve(a).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var i=e.apply(t,n);function s(e){o(i,r,c,s,a,"next",e)}function a(e){o(i,r,c,s,a,"throw",e)}s(void 0)}))}}function c(){return(c=r(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve("async is workimg");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return c.apply(this,arguments)})().then(console.log("Babel!"));var i=n(5638),s=n.n(i);n(7504);s()(document).ready((function(){s()(".glazing_slider").slick({infinite:!0,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1201,settings:{slidesToShow:4,prevArrow:'<button class="prev arrow"></button>',nextArrow:'<button class="next arrow"></button>',slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:3,prevArrow:'<button class="prev arrow"></button>',nextArrow:'<button class="next arrow"></button>',slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:2,prevArrow:'<button class="prev arrow"></button>',nextArrow:'<button class="next arrow"></button>',slidesToScroll:2}},{breakpoint:530,settings:{slidesToShow:1,prevArrow:'<button class="prev arrow"></button>',nextArrow:'<button class="next arrow"></button>',slidesToScroll:1}}]}),s()(".decoration_slider").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,prevArrow:'<button class="prev arrow"></button>',nextArrow:'<button class="next arrow"></button>',slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:2,prevArrow:'<button class="prev arrow"></button>',nextArrow:'<button class="next arrow"></button>',slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,prevArrow:'<button class="prev arrow"></button>',nextArrow:'<button class="next arrow"></button>',slidesToScroll:1}}]})}));n(5849);const a=function(){function e(e,r,c){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=document.querySelectorAll(e),a=document.querySelector(r),l=document.querySelector(c),u=document.querySelectorAll('[data-modal="true"]'),d=n();s.forEach((function(e,n){e.addEventListener("click",(function(e){e.target&&e.preventDefault(),a.classList.contains("calc")?(u.forEach((function(e){e.classList.contains("calc")&&(e.style.display="none")})),a.style.display="block"):a.classList.add("show"),document.body.style.overflowY="hidden",document.body.style.marginRight="".concat(d,"px"),document.addEventListener("keydown",(function(e){t(u,a,e)}))}))})),l.addEventListener("click",(function(){o(a,u)})),a.addEventListener("click",(function(e){e.target===a&&i&&o(a,u)}))}function t(e,t,n){var r=n.keyCode;"Escape"!==n.code&&27!==r&&"27"!==r||o(t,e)}function n(){var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return e.remove(),t}function o(e,t){e.classList.contains("calc")?(t.forEach((function(e){e.classList.contains("calc")&&(e.style.display="none")})),e.style.display="none"):e.classList.add("hide"),setTimeout((function(){e.classList.remove("show"),document.body.style.overflowY="",document.body.style.marginRight="0px"}),300),setTimeout((function(){e.classList.remove("hide")}),350)}var r;r=".popup",setTimeout((function(){document.querySelector(r).style.display="block"}),6e4),e(".popup_engineer_btn",".popup_engineer",".popup_engineer .popup_close"),e(".phone_link",".popup",".popup_close"),e(".popup_calc_btn",".popup_calc",".popup_calc_close"),e(".popup_calc_button",".popup_calc_profile",".popup_calc_profile_close",!1),e(".popup_calc_profile_button",".popup_calc_end",".popup_calc_end_close",!1)};n(911),n(7760);const l=function(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"block",c=document.querySelector(e),i=document.querySelectorAll(t),s=document.querySelectorAll(n);function a(){s.forEach((function(e){e.style.display="none"})),i.forEach((function(e){e.classList.remove(o)}))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;s[e].style.display=r,i[e].classList.add(o)}a(),l(),c.addEventListener("click",(function(e){var n=e.target;n&&(n.classList.contains(t.replace(/\./,""))||n.parentNode.classList.contains(t.replace(/\./,"")))&&i.forEach((function(e,t){n!=e&&n.parentNode!=e||(a(),l(t))}))}))};n(1370);const u=function(e){document.querySelectorAll(e).forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/\D/,"")}))}))};function d(e,t,n,o,r,c,i){try{var s=e[c](i),a=s.value}catch(e){return void n(e)}s.done?t(a):Promise.resolve(a).then(o,r)}const p=function(e){var t=document.querySelectorAll("form"),n=document.querySelectorAll("input");u('input[name="user_phone"]');var o="Загрузка...",r="Спасибо! Скоро мы с вами свяжемся",c="Что-то пошло не так...",i=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector(".status").textContent=o,e.next=3,fetch(t,{method:"POST",body:n});case 3:return r=e.sent,e.next=6,r.text();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var c=e.apply(t,n);function i(e){d(c,o,r,i,s,"next",e)}function s(e){d(c,o,r,i,s,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();t.forEach((function(t){t.addEventListener("submit",(function(o){o.preventDefault();var s=document.createElement("div");s.classList.add("status"),t.appendChild(s);var a=0;for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a++;if(5!=a&&"end"===t.getAttribute("data-calc"))s.textContent="Введите все пункты",setTimeout((function(){s.remove()}),3e3);else{var u=new FormData(t);if("end"===t.getAttribute("data-calc"))for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&u.append(d,e[d]);i("assets/server.php",u).then((function(){s.textContent=r})).catch((function(){return s.textContent=c})).finally((function(){n.forEach((function(e){e.value=""})),setTimeout((function(){s.remove()}),3e3),setTimeout((function(){document.querySelector(".popup_calc_end").style.display="none",document.body.style.overflowY="",document.body.style.marginRight="0px"}),4e3)}))}}))}))};const f=function(e){var t=document.querySelectorAll(".balcon_icons_img"),n=document.querySelectorAll("#width"),o=document.querySelectorAll("#height"),r=document.querySelectorAll("#view_type"),c=document.querySelectorAll(".checkbox");function i(t,n,o){n.forEach((function(r,c){r.addEventListener(t,(function(){switch(r.nodeName){case"SPAN":e[o]=c;break;case"INPUT":"checkbox"===r.getAttribute("type")?(e[o]=0===c?"Холодное":"Теплое",n.forEach((function(e,t){e.checked=!1,c==t&&(e.checked=!0)}))):e[o]=r.value;break;case"SELECT":e[o]=r.value}}))}))}e.form=0,e.type="tree",u("#width"),u("#height"),i("click",t,"form"),i("input",o,"height"),i("input",n,"width"),i("change",r,"type"),i("change",c,"profile")};const v=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/864e5),o=Math.floor(t/36e5%24),r=Math.floor(t/1e3/60%60),c=Math.floor(t/1e3%60);return{total:t,days:n,hours:o,minutes:r,seconds:c}}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e>=0&&e<10?"0".concat(e):e}!function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=document.querySelector(e),c=r.querySelector("#days"),i=r.querySelector("#hours"),s=r.querySelector("#minutes"),a=r.querySelector("#seconds"),l=setInterval(u,1e3);function u(){var e=t(o);c.innerHTML=n(e.days),i.innerHTML=n(e.hours),s.innerHTML=n(e.minutes),a.innerHTML=n(e.seconds),e.total<=0&&clearInterval(l)}u()}(".container1",e)};window.addEventListener("DOMContentLoaded",(function(){var e={};f(e),a(),l(".glazing_slider ",".glazing_block",".glazing_content","active"),l(".decoration_slider",".no_click",".decoration_content > div > div","after_click"),l(".balcon_icons",".balcon_icons_img",".big_img > img","do_image_more","inline-block"),p(e),v("2022-05-11")}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var c=n[e]={exports:{}};return t[e].call(c.exports,c,c.exports,o),c.exports}o.m=t,e=[],o.O=(t,n,r,c)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,r,c]=e[l],s=!0,a=0;a<n.length;a++)(!1&c||i>=c)&&Object.keys(o.O).every((e=>o.O[e](n[a])))?n.splice(a--,1):(s=!1,c<i&&(i=c));s&&(e.splice(l--,1),t=r())}return t}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[n,r,c]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,c,[i,s,a]=n,l=0;for(r in s)o.o(s,r)&&(o.m[r]=s[r]);for(a&&a(o),t&&t(n);l<i.length;l++)c=i[l],o.o(e,c)&&e[c]&&e[c][0](),e[i[l]]=0;o.O()},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[898],(()=>o(7953)));r=o.O(r)})();