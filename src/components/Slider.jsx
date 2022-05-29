import React from 'react'
import {Carousel} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Slider() {
  const navigate=useNavigate()
  return (
    <div>

      <section>
      <Carousel fade >
  
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://wallpapercave.com/wp/wp1874156.jpg
      ' height='750px' 
      />
    <Carousel.Caption>
      <h1>Laffin</h1>
      <p>One cannot think well, love well, sleep well, if one has not dined well.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://wallpapercave.com/wp/wp1874155.jpg'height='750px' 
      />

    <Carousel.Caption>
      <h1>More flavor for less.</h1>
      <p>Bringing class to cuisine. Foodies welcome here. Something hot. Something tasty.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80


      'height='750px'
      />

    <Carousel.Caption>
      <h1>People who love to eat are always the best people. </h1>
      <p>Order online,Food @ your DoorStep</p>
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
      </section>
    </div>
  )
}

export default Slider