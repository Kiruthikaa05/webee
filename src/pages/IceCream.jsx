import React, { useEffect } from 'react'
import {AiFillHeart,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'
import '../styles/menu.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const menus=[
  {
    id:1,
    name:'Chocalate',
    price:120,
    img:'https://images.pexels.com/photos/5925735/pexels-photo-5925735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Cake with cream',
    description:'Chocolate Cake With Cherry on White Ceramic Plate'
  },
  {
    id:2,
    name:'Chocalate Mousse',
    price:200,
    img:'hhttps://www.carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpgps://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Ice Creams',
    description:'Chocolate mousse is a staple among chocolate desserts. It is very popular for all ages. Its texture is easy to recognize'
  },
  {
    id:3,
    name:'Black Forest',
    price:500,
    img:'https://images.pexels.com/photos/12084254/pexels-photo-12084254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Cake',
    description:'Black Forest Ice Cream is a delicious ice cream made with black forest'

  },
  {
    id:4,
    name:'Orange Drink',
    price:135,
    img:'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Drinks',
    description:'Orange juice is a fruit juice obtained by squeezing, pressing or otherwise crushing the interior of an orange.'

  },
  {
    id:5,
    name:'Lime & Kiwi',
    price:165,
    img:'https://images.pexels.com/photos/3038241/pexels-photo-3038241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Drinks',
    description:'A Glass Filled With Refreshing Juice Drink With Lime And Kiwi'

  },
  {
    id:6,
    name:'Falooda ',
    price:120,
    img:'https://images.pexels.com/photos/1028420/pexels-photo-1028420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category:'Drinks',
    description:'A falooda is a Mughlai Indian version of a cold dessert made with noodles. It has origins in the Persian dish faloodeh.'

    
  },
]
function IceCream() {
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

    <h1 style={{color:'white',paddingTop:'70px'}}>IceCream & Drinks</h1>
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

export default IceCream