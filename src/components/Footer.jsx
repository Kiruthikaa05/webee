import React from 'react'
import {AiOutlineTwitter,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'
import '../styles/footer.css'
function Footer() {
  return (<>
    <div class="footer-basic">
    <footer  >
        <div className='icon' >
          <center>
    <img style={{borderRadius:'50%',margin:'10px'}} width={100} height={100}  src='https://i.pinimg.com/236x/5e/a8/de/5ea8decc6572bfbd47e3c1c6b0ad8bb8.jpg' alt='logo'/>
<br/>
        <a  href='https://www.twitter.com' target='_blank'><AiOutlineTwitter size={30} /></a>
        <a  href='https://www.fb.com'target='_blank'><AiFillFacebook size={30} /></a>
        <a  href='https://www.instagram.com'target='_blank'><AiFillInstagram size={30} /></a>
        </center>
        </div>
        <ul class="list-inline">
            <li class="list-inline-item"><a  href="#">Home</a></li>
            <li class="list-inline-item"><a  href="#">Services</a></li>
            <li class="list-inline-item"><a  href="#">About</a></li>
            <li class="list-inline-item"><a  href="#">Terms</a></li>
            <li class="list-inline-item"><a  href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">Laffin © 2022</p>
    </footer>
</div>


</> )
}

export default Footer