import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {Navbar,Container,Nav,NavDropdown,Form,FormControl, Button  } from 'react-bootstrap'
function Navbars(){ 

 
  //react-router-dom-->navigate

  const navigate=useNavigate()
  const handleLogout=()=>{
    alert("Logged out! Thank you Come Again")
    navigate('/')
  }
  
  return(
   <> 
  {/* navbar in bootstrap */}
   
<Navbar fixed='top' style={{backgroundColor:'rgba(0,0,0,.1)',height:'60px'}} variant='dark' expand="lg">
  <Container fluid>
  <img style={{borderRadius:'50%'}} width={45} height={45} src='https://i.pinimg.com/236x/5e/a8/de/5ea8decc6572bfbd47e3c1c6b0ad8bb8.jpg' alt='logo'/>
    <Navbar.Brand href="#">Laffin</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link  onClick={()=>navigate('/home')}>Home</Nav.Link>
        <NavDropdown title="Menu" id="navbarScrollingDropdown">
          <NavDropdown.Item  onClick={()=>navigate('/menu')}>Main Dishes</NavDropdown.Item>
          <NavDropdown.Item  onClick={()=>navigate('/starters')}>Starters</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  onClick={()=>navigate('/ice-drinks')}>
            Ice Creams & Drinks
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link  onClick={()=>navigate('/contact')}>Contact</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          style={{marginTop:'20px'}}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      <AiOutlineSearch size={35} color="green" style={{marginTop:'25px' ,cursor:'pointer'}} className='search'/>        
      </Form>
      <Nav.Link  style={{color:'gray'}} onClick={()=>navigate('/about')}>User Profile</Nav.Link>
      <Button variant='outline-danger' onClick={handleLogout}>Logout</Button >

    </Navbar.Collapse>
  </Container>
</Navbar>
</>
)}
export default Navbars