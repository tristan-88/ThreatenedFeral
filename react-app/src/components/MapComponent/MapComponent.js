import React, { useEffect, useState} from "react"
import {useFetch} from "react-async"
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, LoadScript} from "@react-google-maps/api";
import Geocode from "react-geocode";
import { directions } from "@googlemaps/google-maps-services-js/dist/directions";
import { Client } from "@googlemaps/google-maps-services-js";
import direction from "google-maps-direction"


const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
const client = new Client({})
const search = "National Zoo"


// async function direct(){
//     const directions = await fetch(
// 			`https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=${process.env.REACT_APP_API_KEY}`
//     );
//     console.log(directions.json(), "DIRECTIONS")
// }



const MapComponent = ({ locations }) => {
	
	const [apiKey, setApiKey] = useState('');
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		
		(async () => {
			const res = await fetch("/api/maps");
			const map = await res.json()
			console.log(map, "HELLO NAT")
			setApiKey(map);
			setLoaded(true)
		})();
	});

    const [state, setState] = useState([])
    const [ selected, setSelected] = useState({})
 
    const onSelect = item => {
        setSelected(item)
    }

    // const { isLoaded } = useJsApiLoader({
    //     id: "google-map-script",
    //     googleMapsApiKey: apiKey,
	// });
	
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
					key: REACT_APP_API_KEY,
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
    Geocode.setApiKey(REACT_APP_API_KEY)
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
			{loaded && (
				<LoadScript googleMapsApiKey={apiKey}>
					<GoogleMap
						mapContainerStyle={mapStyles}
						zoom={4}
						center={defaultCenter}
					>
						{locations.map((item) => {
							return (
								<Marker
									key={item.name}
									position={item.location}
									onClick={() => onSelect(item)}
								/>
							);
						})}
						{selected.location && (
							<InfoWindow
								position={selected.location}
								clickable={true}
								onCloseClick={() => setSelected({})}
							>
								<p>{selected.name}</p>
							</InfoWindow>
						)}
					</GoogleMap>
				</LoadScript>
					
				)}
			</>
		);
}


export default MapComponent;
