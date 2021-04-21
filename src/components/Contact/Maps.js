import React, { Component } from 'react'
import {Map,  Marker, GoogleApiWrapper} from 'google-maps-react';
import Style from './Map.module.css'

class Maps extends Component {
    render() {



        const style = {
            width: '100%',
            height: '100%'
          }


        return (
                <div className={Style.main}>
                        <Map google={this.props.google} zoom={14}
                            initialCenter={{lat: 41.374860, lng:69.273235}}
                            className={Style.map}
                            
                            >
                    
                            <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} position={{lat: 41.374860, lng:69.273235}} />
                        </Map>
                        <Map
                            google={this.props.google}
                            style={style}
                            center={{
                                lat: 40.854885,
                                lng: -88.081807
                            }}
                            zoom={15}
                            onClick={this.onMapClicked}
                            >
                        </Map>
                </div>
        )
    }
}

// export default Maps

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBTy_eMKFPL0lFI5mTyPwr7KrS6cGX1q2A')
  })(Maps)

// import React, { useState, useEffect } from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
//   InfoWindow
// } from "react-google-maps";
// import * as parkData from "./data/skateboard-parks.json";
// import mapStyles from "./mapStyles";

// function Map() {
//   const [selectedPark, setSelectedPark] = useState(null);

//   useEffect(() => {
//     const listener = e => {
//       if (e.key === "Escape") {
//         setSelectedPark(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);

//   return (
//     <GoogleMap
//       defaultZoom={14}
//       defaultCenter={{ lat: 41.3748601, lng: 69.273235 }}
//       defaultOptions={{ styles: mapStyles }}
//     >
//       {parkData.features.map(park => (
//         <Marker
//           key={park.properties.PARK_ID}
//           position={{
//             lat: park.geometry.coordinates[1],
//             lng: park.geometry.coordinates[0]
//           }}
//           onClick={() => {
//             setSelectedPark(park);
//           }}
//           icon={{
//             url: `/skateboarding.svg`,
//             scaledSize: new window.google.maps.Size(25, 25)
//           }}
//         />
//       ))}

//       {selectedPark && (
//         <InfoWindow
//           onCloseClick={() => {
//             setSelectedPark(null);
//           }}
//           position={{
//             lat: selectedPark.geometry.coordinates[1],
//             lng: selectedPark.geometry.coordinates[0]
//           }}
//         >
//           <div>
//             <h2>{selectedPark.properties.NAME}</h2>
//             <p>{selectedPark.properties.DESCRIPTIO}</p>
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   );
// }

// const MapWrapped = withScriptjs(withGoogleMap(Map));

// export default function App() {
//   return (
//     <div style={{ width: "100%", height: "70vh" }}>
//       <MapWrapped
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
//           process.env.AIzaSyBTy_eMKFPL0lFI5mTyPwr7KrS6cGX1q2A
//         }`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//   );
// }
