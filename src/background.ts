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
    console.log(hours + minutes - (currentSeconds * 1000))
    return hours + minutes - (currentSeconds * 1000);
  }

  
chrome.runtime.onMessage.addListener(async (request, sender) => {
    console.log('hi!')
    if ("routes" in request) {
        chrome.alarms.clearAll()
        let routes: route[] = request.routes
        for (let i = 0; i < routes.length; i++) {
           chrome.alarms.create(routes[i].field, {when: Date.now() + timeToMillis(routes[i].time), periodInMinutes: 1440}) 
        }
    }
})
  
chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.tabs.create({active: true, index: 0})
    chrome.tabs.update({url: alarm.name})
})
  
export {}