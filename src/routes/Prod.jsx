import { useState, useEffect, Fragment } from 'react'
import { Card } from '../components/Card'
import produtos from '../constants/produtos.json'
import style from '../App.module.css'
import React, { PureComponent } from 'react';
import {Navbar} from '../components/Navbar'

import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";

export const Prod = () => {
  return (
    <Fragment>

      <Navbar/>
      
      <h2>Showroom de produtos</h2>
      <div className={style.mainBox}>
        {produtos.map((item) => {
          return (
            <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status} type={item.type} />
          )
        })}
      </div>
    </Fragment>

  );
}