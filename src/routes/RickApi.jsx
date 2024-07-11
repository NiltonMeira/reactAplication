import { useState, useEffect, Fragment } from 'react'
import { Rick } from '../components/Rick'
import style from '../App.module.css'
import { Alert } from '../components/Alert'
import React, { PureComponent } from 'react';
import { api } from "../api/rmApi"
import {Navbar} from '../components/Navbar'


import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";

export const RickApi = () => {

  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    setAlert(false);
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if (!response.data.results) {
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if (error.response.status === 404) {
        setAlert(true);
      }
      console.error(error)
    })
  }, [page, name])

  return (
    <Fragment>
      
      <Navbar/>
      
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
    </Fragment>

  );
}