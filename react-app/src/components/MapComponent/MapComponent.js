// import React, { useEffect, useState } from "react";
// import { useFetch } from "react-async";
// import {
// 	GoogleMap,
// 	useJsApiLoader,
// 	Marker,
// 	InfoWindow,
// 	LoadScript,
// } from "@react-google-maps/api";
// import Geocode from "react-geocode";
// import { directions } from "@googlemaps/google-maps-services-js/dist/directions";
// import { Client } from "@googlemaps/google-maps-services-js";
// import direction from "google-maps-direction";
// import './MapComponent.css'

// const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
// const client = new Client({});
// const search = "National Zoo";

// // async function direct(){
// //     const directions = await fetch(
// // 			`https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=${process.env.REACT_APP_API_KEY}`
// //     );
// //     console.log(directions.json(), "DIRECTIONS")
// // }

// const MapComponent = ({ locations }) => {
// 	const [geoLat, setGeoLat] = useState(0)
// 	const [geoLng, setGeoLng] = useState(0)
// 	const [geoLat2, setGeoLat2] = useState(0);
// 	const [geoLng2, setGeoLng2] = useState(0);
// 	const [apiKey, setApiKey] = useState("");
// 	const [loaded, setLoaded] = useState(false);
// 	useEffect(() => {
// 		(async () => {
// 			const res = await fetch("/api/maps");
// 			const map = await res.json();
// 			setApiKey(map);
// 			setLoaded(true);
// 			//grabs the long and lng of th place I put in string you search for
// 			// Geocode.setApiKey(map);
// 			// Geocode.setLanguage("en");
// 			// Geocode.setLocationType("ROOFTOP");
// 			// Geocode.enableDebug();
// 			// Geocode.fromAddress(search).then(
// 			// 	(response) => {
// 			// 		const { lat, lng } = response.results[0].geometry.location;
// 			// 		setGeoLat(lat);
// 			// 		setGeoLng(lng);
// 			// 		// console.log(lat, lng, "National Zoo");
// 			// 	},
// 			// 	(error) => {
// 			// 		console.error(error);
// 			// 	}
// 			// );
// 		})();

// 	});

// 	const [state, setState] = useState([]);
// 	const [selected, setSelected] = useState({});

// 	const onSelect = (item) => {
// 		setSelected(item);
// 	};

// 	// const { isLoaded } = useJsApiLoader({
// 	//     id: "google-map-script",
// 	//     googleMapsApiKey: apiKey,
// 	// });

// 	const mapStyles = {
// 		height: "500px",
// 		width: "500px",
// 	};

// 	const defaultCenter = {
// 		lat: locations[0].location.lat,
// 		lng: locations[0].location.lng
// 	};

// 	//gets a lng and lat from string address
// 	// client
// 	// 	.geocode({
// 	// 		params: {
// 	// 			address: "3001 Connecticut Ave NW, Washington, DC 20008",
// 	// 			key: apiKey,
// 	// 		},
// 	// 	})
// 	// 	.then((r) => {
// 	// 		console.log(`Place Id:....,  ${r.data.results[0].place_id}`);
// 	// 		console.log(`Address:....,  ${r.data.results[0].formatted_address}`);
// 	// 		console.log("Latitude:....", +r.data.results[0].geometry.location.lat);
// 	// 		console.log("Logitude:....", +r.data.results[0].geometry.location.lng);
// 	// 		const { lat, lng } = r.data.results[0].geometry.location
// 	// 		setGeoLat2(lat)
// 	// 		setGeoLng2(lng)
// 	// 	})
// 	// 	.catch((e) => {
// 	// 		console.log(e);
// 	// 	});

	

	

// 	return (
// 		<div>
// 			{loaded && (
// 				<>
// 					{/* <h1>GeoLat:{geoLat} GeoLng:{geoLng}</h1>
// 					<h1>GeoLat:{geoLat2} GeoLng:{geoLng2}</h1> */}
// 					<LoadScript googleMapsApiKey={apiKey}>
// 						<div id="block">
// 							<div className="map"><GoogleMap
// 								mapContainerStyle={mapStyles}
// 								zoom={4}
// 								center={defaultCenter}
// 							>
// 								{locations.map((item) => {
// 									// console.log(item, "items!!!");
// 									return (
// 										<Marker
// 											key={item.name}
// 											position={item.location}
// 											onClick={() => onSelect(item)}
// 											clickable={true}
// 										/>
// 									);
// 								})}
// 								{selected.location && (

// 									<InfoWindow
// 										position={selected.location}
// 										clickable={true}
// 										onCloseClick={() => setSelected({})}
// 									>
// 										<p className="location-name">{selected.name}</p>
// 									</InfoWindow>
// 								)}
// 							</GoogleMap>
// 							</div>
							
// 						</div>
// 					</LoadScript>
// 				</>
// 			)}
// 		</div>
// 	);
// };

// export default MapComponent;
