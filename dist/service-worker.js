!function(){"use strict";chrome.runtime.onMessage.addListener((function(e,o){var r,t,a,i,n,s,c,l,d;if("routes"in e){chrome.storage.local.clear(),chrome.alarms.clearAll();for(var m=e.routes,u=0;u<m.length;u++)chrome.alarms.create(m[u].field,{when:Date.now()+(t=m[u].time,a=void 0,void 0,n=void 0,s=void 0,void 0,void 0,void 0,a=new Date,i=t.split(":"),n=parseInt(i[0]),s=parseInt(i[1]),c=a.getHours(),l=a.getMinutes(),d=a.getSeconds(),n-=c,s-=l,n*=36e5,s*=6e4,console.log(n+s-1e3*d),n+s-1e3*d),periodInMinutes:1440}),chrome.storage.local.set(((r={})[m[u].field]=[m[u].time],r))}})),chrome.alarms.onAlarm.addListener((function(e){chrome.tabs.create({active:!0,index:0}),chrome.tabs.update({url:e.name})}))}();