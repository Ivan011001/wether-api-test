var t,e,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};t=void 0!==i?i:"undefined"!=typeof window?window:n,e=function(t){if(void 0===t&&void 0===t.document)return!1;var e,i="Show",n="Ask",o="Prompt",a={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},r=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},s=function(e){return e||(e="head"),null!==t.document[e]||(r('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},l=function(){var t={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e&&"[object Object]"===Object.prototype.toString.call(i[n])?t[n]=l(t[n],i[n]):t[n]=i[n])};i<arguments.length;i++)n(arguments[i]);return t},c=function(e){var i=t.document.createElement("div");return i.innerHTML=e,i.textContent||i.innerText||""},f=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},m=function(i,r,f,m,u,p,g,b,x){if(!s("body"))return!1;e||d.Confirm.init({});var h=l(!0,e,{});"object"!=typeof x||Array.isArray(x)||(e=l(!0,e,x)),"string"!=typeof r&&(r="Notiflix Confirm"),"string"!=typeof f&&(f="Do you agree with me?"),"string"!=typeof u&&(u="Yes"),"string"!=typeof p&&(p="No"),"function"!=typeof g&&(g=void 0),"function"!=typeof b&&(b=void 0),e.plainText&&(r=c(r),f=c(f),u=c(u),p=c(p)),e.plainText||(r.length>e.titleMaxLength&&(r="Possible HTML Tags Error",f='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',u="Okay",p="..."),f.length>e.messageMaxLength&&(r="Possible HTML Tags Error",f='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',u="Okay",p="..."),(u.length||p.length)>e.buttonsMaxLength&&(r="Possible HTML Tags Error",f='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',u="Okay",p="...")),r.length>e.titleMaxLength&&(r=r.substring(0,e.titleMaxLength)+"..."),f.length>e.messageMaxLength&&(f=f.substring(0,e.messageMaxLength)+"..."),u.length>e.buttonsMaxLength&&(u=u.substring(0,e.buttonsMaxLength)+"..."),p.length>e.buttonsMaxLength&&(p=p.substring(0,e.buttonsMaxLength)+"..."),e.cssAnimation||(e.cssAnimationDuration=0);var k=t.document.createElement("div");k.id=a.ID,k.className=e.className+(e.cssAnimation?" nx-with-animation nx-"+e.cssAnimationStyle:""),k.style.zIndex=e.zindex,k.style.padding=e.distance,e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on"));var y="string"==typeof e.position?e.position.trim():"center";k.classList.add("nx-position-"+y),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';var v="";e.backOverlay&&(v='<div class="'+e.className+"-overlay"+(e.cssAnimation?" nx-with-animation":"")+'" style="background:'+e.backOverlayColor+";animation-duration:"+e.cssAnimationDuration+'ms;"></div>');var w="";"function"==typeof g&&(w='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+e.cancelButtonColor+";background:"+e.cancelButtonBackground+";font-size:"+e.buttonsFontSize+';">'+p+"</a>");var N="",C=null,z=void 0;if(i===n||i===o){C=m||"";var L=i===n||C.length>200?Math.ceil(1.5*C.length):250;N='<div><input id="NXConfirmValidationInput" type="text" '+(i===o?'value="'+C+'"':"")+' maxlength="'+L+'" style="font-size:'+e.messageFontSize+";border-radius: "+e.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(k.innerHTML=v+'<div class="'+e.className+'-content" style="width:'+e.width+"; background:"+e.backgroundColor+"; animation-duration:"+e.cssAnimationDuration+"ms; border-radius: "+e.borderRadius+';"><div class="'+e.className+'-head"><h5 style="color:'+e.titleColor+";font-size:"+e.titleFontSize+';">'+r+'</h5><div style="color:'+e.messageColor+";font-size:"+e.messageFontSize+';">'+f+N+'</div></div><div class="'+e.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof g?"":" nx-full")+'" style="color:'+e.okButtonColor+";background:"+e.okButtonBackground+";font-size:"+e.buttonsFontSize+';">'+u+"</a>"+w+"</div></div>",!t.document.getElementById(k.id)){t.document.body.appendChild(k);var S=t.document.getElementById(k.id),M=t.document.getElementById("NXConfirmButtonOk"),B=t.document.getElementById("NXConfirmValidationInput");B&&(B.focus(),B.setSelectionRange(0,(B.value||"").length),B.addEventListener("keyup",(function(t){var e=t.target.value;i===n&&e!==C?(t.preventDefault(),B.classList.add("nx-validation-failure"),B.classList.remove("nx-validation-success")):(i===n&&(B.classList.remove("nx-validation-failure"),B.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&M.dispatchEvent(new Event("click")))}))),M.addEventListener("click",(function(t){if(i===n&&C&&B){if((B.value||"").toString()!==C)return B.focus(),B.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;B.classList.remove("nx-validation-failure")}"function"==typeof g&&(i===o&&B&&(z=B.value||""),g(z)),S.classList.add("nx-remove");var a=setTimeout((function(){null!==S.parentNode&&(S.parentNode.removeChild(S),clearTimeout(a))}),e.cssAnimationDuration)})),"function"==typeof g&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof b&&(i===o&&B&&(z=B.value||""),b(z)),S.classList.add("nx-remove");var t=setTimeout((function(){null!==S.parentNode&&(S.parentNode.removeChild(S),clearTimeout(t))}),e.cssAnimationDuration)}))}e=l(!0,e,h)},d={Confirm:{init:function(i){e=l(!0,a,i),function(e,i){if(!s("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var n=t.document.createElement("style");n.id=i,n.innerHTML=e(),t.document.head.appendChild(n)}}(f,"NotiflixConfirmInternalCSS")},merge:function(t){if(!e)return r("You have to initialize the Confirm module before call Merge function."),!1;e=l(!0,e,t)},show:function(t,e,n,o,a,r,s){m(i,t,e,null,n,o,a,r,s)},ask:function(t,e,i,o,a,r,s,l){m(n,t,e,i,o,a,r,s,l)},prompt:function(t,e,i,n,a,r,s,l){m(o,t,e,i,n,a,r,s,l)}}};return"object"==typeof t.Notiflix?l(!0,t.Notiflix,{Confirm:d.Confirm}):{Confirm:d.Confirm}},"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof n?n=e(t):t.Notiflix=e(t);var o={};!function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof o?o=e(t):t.Notiflix=e(t)}(void 0!==i?i:"undefined"!=typeof window?window:o,(function(t){if(void 0===t&&void 0===t.document)return!1;var e,i="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",n="Standard",o="Hourglass",a="Circle",r="Arrows",s="Dots",l="Pulse",c={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},f=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+i)},m=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+i)},d=function(e){return e||(e="head"),null!==t.document[e]||(f('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},u=function(){var t={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e&&"[object Object]"===Object.prototype.toString.call(i[n])?t[n]=u(t[n],i[n]):t[n]=i[n])};i<arguments.length;i++)n(arguments[i]);return t},p=function(e){var i=t.document.createElement("div");return i.innerHTML=e,i.textContent||i.innerText||""},g=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},b=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},x=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},h=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},k=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},y=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},v=0,w=function(i,n,y,w,C,z){var L;if(Array.isArray(y)){if(y.length<1)return f("Array of HTMLElements should contains at least one HTMLElement."),!1;L=y}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,y)){if(y.length<1)return f("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;L=Array.prototype.slice.call(y)}else{if("string"!=typeof y||(y||"").length<1||1===(y||"").length&&("#"===(y||"")[0]||"."===(y||"")[0]))return f("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var S=t.document.querySelectorAll(y);if(S.length<1)return f('You called the "Notiflix.Block..." function with "'+y+'" selector, but there is no such element(s) in the document.'),!1;L=S}e||N.Block.init({});var M=u(!0,e,{});if("object"==typeof w&&!Array.isArray(w)||"object"==typeof C&&!Array.isArray(C)){var B={};"object"==typeof w?B=w:"object"==typeof C&&(B=C),e=u(!0,e,B)}var T="";"string"==typeof w&&w.length>0&&(T=w),e.cssAnimation||(e.cssAnimationDuration=0);var W=c.className;"string"==typeof e.className&&(W=e.className.trim());var A,j,E="number"==typeof e.querySelectorLimit?e.querySelectorLimit:200,H=(L||[]).length>=E?E:L.length,I="nx-block-temporary-position";if(i)for(var D=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],O=0;O<H;O++){var X=L[O];if(X){if(D.indexOf(X.tagName.toLocaleLowerCase("en"))>-1)break;var F=X.querySelectorAll("[id^="+c.ID+"]");if(F.length<1){var $="";n&&(n===o?(A=e.svgSize,j=e.svgColor,A||(A="60px"),j||(j="#32c682"),$='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+j+'" width="'+A+'" height="'+A+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'):$=n===a?b(e.svgSize,e.svgColor):n===r?x(e.svgSize,e.svgColor):n===s?h(e.svgSize,e.svgColor):n===l?k(e.svgSize,e.svgColor):g(e.svgSize,e.svgColor));var P='<span class="'+W+'-icon" style="width:'+e.svgSize+";height:"+e.svgSize+';">'+$+"</span>",q="";T.length>0&&(T=T.length>e.messageMaxLength?p(T).substring(0,e.messageMaxLength)+"...":p(T),q='<span style="font-size:'+e.messageFontSize+";color:"+e.messageColor+';" class="'+W+'-message">'+T+"</span>"),v++;var R=t.document.createElement("div");R.id=c.ID+"-"+v,R.className=W+(e.cssAnimation?" nx-with-animation":""),R.style.position=e.position,R.style.zIndex=e.zindex,R.style.background=e.backgroundColor,R.style.animationDuration=e.cssAnimationDuration+"ms",R.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",e.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=P+q;var V=t.getComputedStyle(X).getPropertyValue("position"),Y="string"==typeof V?V.toLocaleLowerCase("en"):"relative",Q=Math.round(1.25*parseInt(e.svgSize))+40,U="";Q>(X.offsetHeight||0)&&(U="min-height:"+Q+"px;");var _="";_=X.getAttribute("id")?"#"+X.getAttribute("id"):X.classList[0]?"."+X.classList[0]:(X.tagName||"").toLocaleLowerCase("en");var G="",J=["absolute","relative","fixed","sticky"].indexOf(Y)<=-1;if(J||U.length>0){if(!d("head"))return!1;J&&(G="position:relative!important;");var K='<style id="Style-'+c.ID+"-"+v+'">'+_+"."+"nx-block-temporary-position{"+G+U+"}</style>",Z=t.document.createRange();Z.selectNode(t.document.head);var tt=Z.createContextualFragment(K);t.document.head.appendChild(tt),X.classList.add(I)}X.appendChild(R)}}}else var et=function(i){var n=setTimeout((function(){null!==i.parentNode&&i.parentNode.removeChild(i);var e=i.getAttribute("id"),o=t.document.getElementById("Style-"+e);o&&null!==o.parentNode&&o.parentNode.removeChild(o),clearTimeout(n)}),e.cssAnimationDuration)},it=function(t){if(t&&t.length>0)for(var e=0;e<t.length;e++){var i=t[e];i&&(i.classList.add("nx-remove"),et(i))}else m("string"==typeof y?'"Notiflix.Block.remove();" function called with "'+y+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+y+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},nt=function(t){var i=setTimeout((function(){t.classList.remove(I),clearTimeout(i)}),e.cssAnimationDuration+300)},ot=setTimeout((function(){for(var t=0;t<H;t++){var e=L[t];e&&(nt(e),F=e.querySelectorAll("[id^="+c.ID+"]"),it(F))}clearTimeout(ot)}),z);e=u(!0,e,M)},N={Block:{init:function(i){e=u(!0,c,i),function(e,i){if(!d("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var n=t.document.createElement("style");n.id=i,n.innerHTML=e(),t.document.head.appendChild(n)}}(y,"NotiflixBlockInternalCSS")},merge:function(t){if(!e)return f('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1;e=u(!0,e,t)},standard:function(t,e,i){w(!0,n,t,e,i)},hourglass:function(t,e,i){w(!0,o,t,e,i)},circle:function(t,e,i){w(!0,a,t,e,i)},arrows:function(t,e,i){w(!0,r,t,e,i)},dots:function(t,e,i){w(!0,s,t,e,i)},pulse:function(t,e,i){w(!0,l,t,e,i)},remove:function(t,e){"number"!=typeof e&&(e=0),w(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?u(!0,t.Notiflix,{Block:N.Block}):{Block:N.Block}}));const a=document.querySelector("form"),r=document.querySelector(".weather-wrapper"),s=document.querySelector(".js-weather-serch");function l({weather:t,main:e,wind:i,sys:n,name:o}){const a=`\n      <p>City name: ${o}</p>\n      <p>Weather type: ${t[0].main}</p>\n      <p>Weather description: ${t[0].description}</p>\n      <p>Wind speed: ${i.speed}</p>\n      <p>Temperature: ${f(e.temp)}</p>\n      <p>Max temperature: ${f(e.temp_max)}</p>\n      <p>Min temperature: ${f(e.temp_min)}</p>\n      <p>Pressure: ${e.pressure}</p>\n      <p>Sunrise: ${c(n.sunrise)}</p>\n      <p>Sunset: ${c(n.sunset)}</p>\n  `;r.innerHTML=a}function c(t){const e=new Date(1e3*t);return`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}function f(t){return(t-273.15).toFixed(2)}a.addEventListener("submit",(t=>{var e;t.preventDefault(),(e=s.value,fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=ed75ccbaa36376d6c7d9a8196e9f5b6a`).then((t=>t.json()))).then(l).catch((()=>{}))}));
//# sourceMappingURL=index.506054c3.js.map
