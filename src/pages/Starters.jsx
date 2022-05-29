import React, { useEffect } from 'react'
import {AiFillHeart,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'
import '../styles/menu.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const menus=[
  {
    id:1,
    name:'Meat & French fries',
    price:250,
    img:'https://images.pexels.com/photos/2960569/pexels-photo-2960569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Non-veg',
    description:'Plates with deep fried meat and french fries'
  },
  {
    id:2,
    name:'Sausage',
    price:200,
    img:'https://images.pexels.com/photos/5695877/pexels-photo-5695877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Non-veg',
    description:'Toothsome dish of fried sausages served with rice'
  },
  {
    id:3,
    name:'Tartare',
    price:50,
    img:'https://images.pexels.com/photos/7474108/pexels-photo-7474108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Non-Veg',
    description:'Tartare and croutons on plate'

  },
  {
    id:4,
    name:'Irish Soda Bread.',
    price:35,
    img:'https://images.pexels.com/photos/103676/pexels-photo-103676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Veg',
    description:'The essential ingredients in a traditional Irish soda bread are flour, baking soda, salt, and buttermilk. '

  },
  {
    id:5,
    name:'Pani Puri',
    price:25,
    img:'https://images.pexels.com/photos/5577879/pexels-photo-5577879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Veg',
    description:'Crispy-fried puffed ball that is filled with potato, chickpeas, onions, spices, and flavoured water, usually tamarind or mint.'

  },
  {
    id:6,
    name:'Fitil Lokum ',
    price:120,
    img:'https://images.pexels.com/photos/5336700/pexels-photo-5336700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Veg & Non-veg',
    description:'Turkish Delights in Tray'

    
  },
]
function Starters() {
  const [counter,setCounter]=React.useState(0)
  function handleCounterInc()
  {
    setCounter(counter+1)
  }
  function handleCounterDec(){
    setCounter(counter-1)
  }
  useEffect(()=>{
    console.log(`You ordered ${counter} items to the cart`)
  })
  return (
    <>
    <Navbar/>

    <h1 style={{color:'white',paddingTop:'70px'}}>Starters</h1>
    <div className='menu'> 
    {menus.map((menu,index)=>(
    <div key={index}>
    <div className='card middle'>
      <div className='front'> 
          <img className='menuimg' src={menu.img} alt='menu'/>
      </div>
      <div className='back'>
        <div className='back-content middles'>
        <h2 style={{color:'#4CAF50'}}>{menu.name} </h2>
        <p style={{color:'black'}}>{menu.category}</p>
        <p style={{color:'gray'}}>₹{menu.price}</p>
        <span style={{color:'gray'}}>{menu.description}</span><br/>
        <button className='cartbtn' onClick={handleCounterInc} style={{backgroundColor:'gray',marginRight:'3px'}}>+</button>
          <span style={{color:'black',marginRight:'3px'}}>{counter}</span>
        <button className='cartbtn' onClick={handleCounterDec} style={{backgroundColor:'gray'}}>-</button>

      <div className='icons' >
       <AiFillHeart size={40}style={{backgroundColor:'gray',borderRadius:'50%',padding:'10px',marginRight:'5px'}}   />
        <AiFillFacebook size={40}style={{backgroundColor:'gray',borderRadius:'50%',padding:'10px',marginRight:'5px'}} />
        <AiFillInstagram size={40}style={{backgroundColor:'gray',borderRadius:'50%',padding:'10px',marginRight:'5px'}} />
      </div>
      </div>
      </div>
    </div>
    </div>
      ))}

    </div>
    <Footer/>
    </>
  )
}

export default Starters