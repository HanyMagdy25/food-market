import React from 'react'
import "./Topbar.css"
import { BsHeartFill ,BsFillCartPlusFill,BsSearch} from 'react-icons/bs';
import { FaUserAlt} from 'react-icons/fa';
import { AiOutlineGlobal} from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Topbar = () => {
  return (
    <div className='section--topbar'>
      <div className='section--topbar__container'>
        
        <div className='logo'><Link to="/">LOgo</Link></div>
        <div className='section--topbar-left'>
            <div className='icons-topbar'>
                <span className='icon-topbar topbar-cart'><BsFillCartPlusFill/></span>
                <span className='icon-topbar topbar-heart'><BsHeartFill /></span>
                <span className='icon-topbar topbar-user'><FaUserAlt/></span>
                <span className='icon-topbar topbar-global'><AiOutlineGlobal/></span>
            </div>
            <div className='input-topbar'>
                 <input type="text"/><button><BsSearch/></button>
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Topbar