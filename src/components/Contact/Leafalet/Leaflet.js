import React, { Fragment } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Leaflet = () => {

    const position = [41.374892, 69.273198]

    return (
        <Fragment>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </Fragment>
    )
}

export default Leaflet
