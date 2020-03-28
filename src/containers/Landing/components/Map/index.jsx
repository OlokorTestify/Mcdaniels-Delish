
import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

console.log(process.env)
const mapStyles = {
    width: '100%',
    height: '100%',
};

const Maps = (props) => {
    return (
        <Map
            google={props.google}
            zoom={18}
            style={mapStyles}
            initialCenter={{ lat: 6.6778, lng: 3.1654 }}
        >
            <Marker position={{ lat: 6.6778, lng: 3.1654 }} />
        </Map>
    );
}


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
})(Maps);