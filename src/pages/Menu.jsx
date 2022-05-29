import React, { useEffect } from 'react'
import {AiFillHeart,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'
import '../styles/menu.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const menus=[
  {
    id:1,
    name:'Mutton biryani',
    price:200,
    img:'https://images.pexels.com/photos/4224305/pexels-photo-4224305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Non-veg',
    description:'Mutton biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot.'
  },
  {
    id:2,
    name:'Chicken biryani',
    price:200,
    img:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Non-veg',
    description:'Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together.'

  },
  {
    id:3,
    name:'Chapathi',
    price:50,
    img:'https://img-global.cpcdn.com/recipes/3e2633ca4b86525f/400x400cq70/photo.jpg',
    category:'Veg',
    description:'The word chapat which describes the traditional method of forming rounds of thin dough by slapping the dough between the wetted palms of the hands.'

  },
  {
    id:4,
    name:'Dosa',
    price:35,
    img:'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Veg',
    description:'Dosa is a South Indian rice dish with a savoury filling. It is a staple food of the Indian subcontinent and the world over.'

  },
  {
    id:5,
    name:'Idli',
    price:25,
    img:'https://images.pexels.com/photos/4331491/pexels-photo-4331491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Veg',
    description:'Idli is a South Indian rice dish with a savoury filling. It is a staple food of the Indian subcontinent and the world over.'

  },
  {
    id:6,
    name:'Noodles',
    price:120,
    img:'https://images.pexels.com/photos/9077237/pexels-photo-9077237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category:'Veg & Non-veg',
    description:'Noodles is a type of food made from unleavened dough which is rolled flat and cut into long strips.'

    
  },
]
function Menu() {
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

    <h1 style={{color:'white',paddingTop:'70px'}}>Main Dishes</h1>
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

export default Menu