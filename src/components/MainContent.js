import React from "react";
import "../style.css"
import location from "../images/location.png"



function MainContent(props){
    return(
        <div className="content-container">
            <div key={props.id} className="image--holder">
                <img 
                    src={props.imageUrl}
                    className="mountain--image"  alt="" 
                />
            </div>

            <div className="text-container">
                <div className="location">
                    <img className="location--icon" src={location} alt="location" />
                    <h2 className="spain">{props.location}</h2>
                    <a className="g-anchor" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <div>
                    <h2 className="date">{props.startDate} - {props.endDate}</h2>
                    <p className="p-tag">{props.description}</p>
                </div>
                
            </div>
        </div>
    )
}

export default MainContent