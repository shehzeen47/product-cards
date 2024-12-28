import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  return (
    <>
    <h1 style={{textAlign: 'center', color: 'blue', fontWeight: 'bold'}}>Product Cards</h1>
    <div style={{textAlign: 'center'}}>
      {
        Data.map((e, i) => {
          return (
            <Cards key={i} name={e.name} imageSrc={e.imgSrc} price={e.price} desc={e.desc} />
          )
        })
      }
      </div>
    </>
  )
}

export default App
import { Cards } from './Cards/Cards'
import { Data } from './Data'
