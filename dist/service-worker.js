!function(){"use strict";function e(e){var t=new Date,r=e.split(":"),a=parseInt(r[0]),n=parseInt(r[1]);a-=t.getHours(),n-=t.getMinutes();var s=(a*=36e5)+(n*=6e4)-1e3*t.getSeconds();return s<0&&(s+=864e5),(isNaN(s)||!isFinite(s))&&(s=t.getHours()+t.getMinutes()+t.getSeconds()),s}chrome.runtime.onMessage.addListener((function(t,r){var a;if("routes"in t){chrome.alarms.clearAll(),chrome.storage.local.clear();for(var n=t.routes,s=0;s<n.length;s++)5===n[s].time.length&&(chrome.alarms.create(n[s].field,{when:Date.now()+e(n[s].time),periodInMinutes:1440}),chrome.storage.local.set(((a={})[n[s].field]=[n[s].time],a)))}})),chrome.alarms.onAlarm.addListener((function(e){chrome.tabs.create({active:!0,index:0}),chrome.tabs.update({url:e.name})}))}();