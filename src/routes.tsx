import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export default function Routes() {

    useEffect(() => {
        chrome.storage.local.get(null, (items) => {
            console.log(items)
            let initRoutes: route[] = []
            for (const key in items) {
                initRoutes.unshift({'field': key, 'time': items[key][0], 'isBeingEdited': false})
            }
            setRoutes(initRoutes)
        })
    }, [])

    type route = {
        field: string,
        isBeingEdited: boolean,
        time: string
    }

    let [routes, setRoutes] = useState([] as route[])
   
    function updateCurrentRoute(e: React.ChangeEvent<HTMLInputElement>, route: route) {
        route.field = e.target.value 
        setRoutes([...routes]) 
    }

    function updateCurrentRoutesTime(e: React.ChangeEvent<HTMLInputElement>, route: route) {
        route.time = e.target.value
        setRoutes([...routes])
    }
    
    function editOrSaveRoute(route: route) {
        route.isBeingEdited = !route.isBeingEdited
        setRoutes([...routes])
        if (!route.isBeingEdited) {
            chrome.runtime.sendMessage({"routes": routes})
        }
    }
    
    function addNewRoute() {
        setRoutes([{field: "", isBeingEdited: true, time: ""} as route, ...routes])
    }
    
    function deleteRoute(route: route) {
        routes.splice(routes.indexOf(route), 1)
        setRoutes([...routes])
        chrome.storage.local.remove(route.field)
        chrome.alarms.clear(route.field)
    }

    return <div>
                <button className="bigBtn buttonNotBeingEdited" onClick={() => addNewRoute()}>add new route</button>
                {routes.map((route, i) => 
                    <div key={i}> 
                        <input placeholder="https://example.com" type="text" value={route.field} readOnly={!route.isBeingEdited} onChange={(e) => updateCurrentRoute(e, route)}/> 
                        <input type="time" value={route.time} readOnly={!route.isBeingEdited} onChange={(e) => updateCurrentRoutesTime(e, route)}></input>
                        <button className={route.isBeingEdited ? "buttonBeingEdited" : "buttonNotBeingEdited"} onClick={() => editOrSaveRoute(route)}>{route.isBeingEdited === true ? "save": "edit"}</button>
                        <button className={route.isBeingEdited ? "buttonBeingEdited" : "buttonNotBeingEdited"} onClick={() => deleteRoute(route)}>delete</button>
                    </div>
                )}
           </div>

}