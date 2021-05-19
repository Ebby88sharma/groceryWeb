import React, { useState } from 'react'
import "./Header.css"
import logoGroc from "./logoGroc.PNG";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"; 
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import {useStateValue} from"./StateProvider";
import { auth } from './firebase';

function Header() {
    const [{cart,user}] = useStateValue ();
    const login =() =>{
        if(user){
            auth.signOut();
        }
    }

    return <nav className="header">
       {/*Logo */}
       <Link to="/">
       <img 
        width="200px"
        src={logoGroc} 
        alt=""></img>
       
       </Link>
       {/*Search box */}
       <div className="header__search">
       <input type="text" className="header__searchbox" />
       <SearchIcon className="header__searchIcon"/>
       </div>
       {/* 2 Links*/}
       <div className="header__nav">
                {/* 1 Link*/}
                <Link to="/login" className="header__link">
                <div className="header__option">
                <span className="header_linkFirst">Hello Ricocd</span>
                <span className="header_linkSecond">{user?'Log Out':'Log in'}</span>
                </div>
                
                </Link>

                
                {/* 2 Link*/}
                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header_linkFirst">Recent</span>
                <span className="header_linkSecond"> Orders</span>
                </div>
                
                </Link>

                 {/* Cart icon */}
                 <Link to="/checkout" className="header__link">
                     <div className="header__cartIcon">
                         {/*Cart Icon */}
                        <ShoppingCartTwoToneIcon />
                         {/*Number of items */}
                         <span className="header_linkSecond header__countItems">{cart?.length}</span>
                     </div>

                 </Link>
            </div>
       </nav>
    
}

export default Header
           
            
            {/*two links */}
            {/*Cart with number */}