import React from 'react'
import {Carousel} from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contact() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>
      <h1 style={{paddingTop:'60px',backgroundColor:'rgba(0,0,0,.1'}}>Our Branches</h1>
      <section>
      <Carousel fade >
  
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://w0.peakpx.com/wallpaper/28/561/HD-wallpaper-sunset-beach-dining-dusk-candlelight-sunset-eat-sea-beach-lagoon-sand-dining-evening-exotic-islands-food-ocean-table-for-two-candles-paradise-restaurant-dine-island-tropical.jpg' height='750px' alt='contactimg'
      />
    <Carousel.Caption>
      <h1>Bangalore</h1>
      
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>

    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfPPYJa7fF_-ajjJ1vg8Rxby_tExuN2ECpsbY9cfV34xaWWqQ7f0fsV_L8qpJlP06hMg&usqp=CAU' height='750px' alt='contactimg' 
      />

    <Carousel.Caption>
      <h1>New Delhi</h1>
      
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>

    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://w0.peakpx.com/wallpaper/281/783/HD-wallpaper-tropical-dining-at-night-polynesia-resort-lit-dusk-sunset-eat-lights-maldives-dining-evening-swimming-night-exotic-islands-romantic-romance-pool-table-for-two-paradise-restaurant-thumbnail.jpg' height='750px' alt='contactimg' 
      />

    <Carousel.Caption>
      <h1>Chennai</h1>
      <p>38, kknagar, Chennai, Tamil Nadu </p>
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact