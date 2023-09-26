import React from "react";
import { useState } from "react";


export default function Routes() {

    type route = {
        field: string,
        isBeingEdited: boolean,
        time: string
    }

    let [routes, setRoutes] = useState([{field: "new route", isBeingEdited: true} as route])
   
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
        if (!route.isBeingEdited) {
            chrome.runtime.sendMessage({"routes": routes})
        }
        setRoutes([...routes])
    }
    
    function addNewRoute() {
        setRoutes([{field: "new route", isBeingEdited: true, time: ""} as route, ...routes])
    }
    
    function deleteRoute(route: route) {
        routes.splice(routes.indexOf(route), 1)
        chrome.alarms.clear(route.field)
        setRoutes([...routes])
    }

    return <div>
                <button onClick={() => addNewRoute()}>add new route</button>
                {routes.map((route, i) => 
                    <div key={i}> 
                        <input type="text" value={route.field} readOnly={!route.isBeingEdited} onChange={(e) => updateCurrentRoute(e, route)}/> 
                        <input type="time" value={route.time} readOnly={!route.isBeingEdited} onChange={(e) => updateCurrentRoutesTime(e, route)}></input>
                        <button onClick={() => editOrSaveRoute(route)}>{route.isBeingEdited === true ? "save": "edit"}</button>
                        <button onClick={() => deleteRoute(route)}>delete</button>
                    </div>
                )}
           </div>

}