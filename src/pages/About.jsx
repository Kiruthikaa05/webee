import React from 'react'
import Footer from '../components/Footer'
import {Canvas} from 'react-three-fiber';
import Stand from '../components/Stand';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Navbar from '../components/Navbar';


function About() {
  return (
    <Name name='kiruthikaa' age='21'/>
  )
}

function Name(props) {
  return (
    <div>
      <Navbar/>
      <div style={{height:'40vh',backgroundColor:'rgba(0,0,0,.6)'}}>
        
    <Canvas  >
      
      <OrbitControls enableZoom={true}/>
      
      <directionalLight intensity={0.5}  />
      <ambientLight intensity={0.2} />
      
      <Suspense fallback={null}>
        
      <Stand style={{padding:"20px"}}/>
      </Suspense>
    </Canvas>
    <div style={{backgroundColor:'rgba(0,0,0,.4)'}}>
    <center>
    <h1>{props.name}</h1>
    <p style={{color:'gray'}}>{props.age}</p>
    <span style={{color:'#4FC'}}>75 Mountainview St. italy</span>
    </center>
    </div>
      <Footer/>
    </div>
    </div>
  )
}

export default About
