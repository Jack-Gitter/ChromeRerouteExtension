!function(){"use strict";chrome.runtime.onMessage.addListener((function(e,n){return t=void 0,r=void 0,a=function(){var n,t;return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(e,i)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}(this,(function(r){if(console.log("hi!"),"routes"in e)for(chrome.alarms.clearAll(),n=e.routes,t=0;t<n.length;t++)chrome.alarms.create(n[t].field,{when:Date.now()+(o=n[t].time,a=void 0,c=void 0,u=void 0,a=new Date,i=o.split(":"),c=parseInt(i[0]),u=parseInt(i[1]),l=a.getHours(),s=a.getMinutes(),f=a.getSeconds(),c-=l,u-=s,c*=36e5,u*=6e4,console.log(c+u-1e3*f),c+u-1e3*f),periodInMinutes:1440});var o,a,i,c,u,l,s,f;return[2]}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{u(a.next(e))}catch(e){n(e)}}function c(e){try{u(a.throw(e))}catch(e){n(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,c)}u((a=a.apply(t,r||[])).next())}));var t,r,o,a})),chrome.alarms.onAlarm.addListener((function(e){chrome.tabs.create({active:!0,index:0}),chrome.tabs.update({url:e.name})}))}();