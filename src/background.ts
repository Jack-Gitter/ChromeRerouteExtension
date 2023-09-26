type route = {
    field: string,
    isBeingEdited: boolean,
    time: string
}

function timeToMillis(time: string) {
    let today = new Date();
    let timeArray = time.split(":")
    let hours = parseInt(timeArray[0])
    let minutes = parseInt(timeArray[1])
    let currentHours = today.getHours();
    let currentMinutes = today.getMinutes();
    let currentSeconds = today.getSeconds();
    hours -= currentHours;
    minutes -= currentMinutes;
    hours *= 3_600_000;
    minutes *= 60000;
    let ret = hours + minutes - (currentSeconds * 1000)
    if (ret < 0) {
        ret += 86_400_000;
    }
    if (isNaN(ret) || !isFinite(ret)) {
        let newHours = today.getHours();
        let newMinutes = today.getMinutes();
        let newSeconds = today.getSeconds();
        ret = newHours + newMinutes + newSeconds;
    }
    return ret
  }

  
chrome.runtime.onMessage.addListener((request, sender) => {
    if ("routes" in request) {
        chrome.alarms.clearAll()
        chrome.storage.local.clear()
        let routes: route[] = request.routes
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].time.length !== 5) {
                continue
            }
            chrome.alarms.create(routes[i].field, {when: Date.now() + timeToMillis(routes[i].time), periodInMinutes: 1440}) 
            chrome.storage.local.set({[routes[i].field]: [routes[i].time]})
        }
    }
})
  
chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.tabs.create({active: true, index: 0})
    chrome.tabs.update({url: alarm.name})
})
  
export {}