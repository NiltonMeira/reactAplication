import { useState, useEffect, Fragment } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { PureComponent } from 'react';
import style from '../App.module.css'
import { Navbar } from '../components/Navbar'

import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";

export const Map = () => {

    const position = [-25.4249647, -49.2748779]

    return (
        <Fragment>
            <div>

                <Navbar />
            </div>
            <div className={style.wrapPage}>
                <div>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "600px" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                <a href="https://maps.app.goo.gl/ZaXLuZiu1BRtxuJJA" target='_blank'>Abrir google maps</a>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>


        </Fragment>

    );
}