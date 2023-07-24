import React,{useState, useEffect} from 'react'
import './App.css'
import {Prod } from './components/Producto'
import Header from './components/Header'
import Footer from './components/Footer'
import DataProvider from './components/Contex/ContextData'

function App() {
  return (
    <>
      <DataProvider>
        <Header/>
        <h1>Artículos</h1>
        <div className='container'>
          <Prod/>
        </div>
        <Footer/>
      </DataProvider>

     
      
    </>
  )
}

export default App
