import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { Rick } from './components/Rick'
import produtos from './constants/produtos.json'
import style from './App.module.css'
import { Alert } from './components/Alert'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";


function App() {
  const [show, setShow] = useState("")
  
  const dataGraph = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


 

  return (
    <>
      <div className={style.wrapBtns}>
        <a href="/">Produtos</a>
        <a href="/rick">Rick</a>
        <a href="/map">Mapa</a>
        <a href="/graph">Graficos</a>
      </div>
      <div className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
        {show === "prod" &&
          <>
            <h2>Showroom de produtos</h2>
            <div className={style.mainBox}>
              {produtos.map((item) => {
                return (
                  <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status} type={item.type} />
                )
              })}
            </div>
          </>
        }
        {show === "api" &&
          <>
            <h2>Rick and Morty API</h2>
            {alert && <Alert />}
            <div>
              <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} />
            </div>
            <div>
              <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>

            <div className={style.rickBox}>
              {data.map((item) => {
                return (
                  <div key={item.id}>
                    <Rick name={item.name} species={item.species} gender={item.gender} image={item.image} status={item.status} />
                    {/* <button onClick={() => {}}>Info</button> */}
                  </div>

                )
              })}
            </div>


          </>
        }
        {show === "map" &&
          <>
            <h2>Mapa</h2>

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
          </>
        }
        {
          show === "graphics" &&
          <>
            <h2>Graphics</h2>

            <div>

              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={dataGraph}>
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>

            </div>
          </>

        }
      </div>
    </>
  )
}

export default App
