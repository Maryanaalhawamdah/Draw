import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle,  BsJustify}
 from 'react-icons/bs'
 import { BsSearchHeart } from 'react-icons/bs';

//  import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
//  import { useParams, useNavigate } from 'react-router-dom';


function Header({OpenSidebar}) {

  // const navigate = useNavigate();
  // const admin = () =>{

  //   return  navigate('/admins');
  // }

  return (
    <header className='header' style={{background:'black'}}>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearchHeart  className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header