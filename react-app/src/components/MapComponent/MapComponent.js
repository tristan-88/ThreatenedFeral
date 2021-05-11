import React, { useEffect, useState} from "react"
import {useFetch} from "react-async"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { directions } from "@googlemaps/google-maps-services-js/dist/directions";
import { Client } from "@googlemaps/google-maps-services-js";
import direction from "google-maps-direction"


const client = new Client({})
const search = "National Zoo"


// async function direct(){
//     const directions = await fetch(
// 			`https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=${process.env.REACT_APP_API_KEY}`
//     );
//     console.log(directions.json(), "DIRECTIONS")
// }



const MapComponent = () => {
     const [state, setState] = useState([])
 


    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
    });
    const mapStyles = {
        height: "500px",
        width: "500px"
    };
  
    const defaultCenter = {
			lat: 38.929616,
			lng: -77.049784,
    };
    
    //gets a lng and lat from string address
    client
			.geocode({
				params: {
					address:"3001 Connecticut Ave NW, Washington, DC 20008",
					key: process.env.REACT_APP_API_KEY,
				},
			})
			.then((r) => {
				console.log("Address:....", +r.data.results[0].formatted_address);
				console.log("Latitude:....", +r.data.results[0].geometry.location.lat);
				console.log("Logitude:....", +r.data.results[0].geometry.location.lng);
			})
			.catch((e) => {
				console.log(e);
            });
    
    //grabs the long and lng of th place I put in string you search for 
    Geocode.setApiKey(process.env.REACT_APP_API_KEY)
    Geocode.setLanguage('en')
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();
    Geocode.fromAddress(search).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				console.log(lat, lng, "National Zoo");
			},
			(error) => {
				console.error(error);
			}
    );
    
  
    return (
     <>
        {isLoaded && < GoogleMap
	mapContainerStyle = {mapStyles}
    zoom = {15}
    center = { defaultCenter }
        />}
		</>
	);
}


export default MapComponent;
