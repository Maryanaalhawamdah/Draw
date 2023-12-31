import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                Magic Art
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>Art</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/ahome">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/apget">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/acategory">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/auget">
                    <BsPeopleFill className='icon'/> Users
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="/aadmin">
                    <BsPeopleFill className='icon'/> Admins
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="/aartist">
                    <BsPeopleFill className='icon'/> Artist
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="/aorder">
                    <BsPeopleFill className='icon'/> Orders
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/messages">
                    <BsPeopleFill className='icon'/> Messages
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar