import React from "react";
import './Nav.css';
import logo from './assets/NetflixLogoSvg.png';
import search from './assets/Search.png';
import gift from './assets/GiftBox.png';
import notify from './assets/NotificationBell.png';
import profile from './assets/ProfileIMG.png';
import down from './assets/DownArrow.png';
class Nav extends React.Component {
    render(){
        return (
            <div className="nav-bar">
               <div className="left">
                    <img src={logo} alt="l" className="nav-logo"/>
                    <a className="nav-menu" href="https://www.google.com/">Start</a>
                    <a className="nav-menu" href="https://www.google.com/">Shows</a>
                    <a className="nav-menu" href="https://www.google.com/">Movies</a>
                    <a className="nav-menu" href="https://www.google.com/">New</a>
                    <a className="nav-menu" href="https://www.google.com/">My List</a>
               </div>
               <div className="right">
                <img src={search} alt="s" className="nav-option"/>
                <img src={gift} alt="g" className="nav-option"/>
                <img src={notify} alt="n" className="nav-option"/>
                <img src={profile} alt="p" className="nav-option"/>
                <img src={down} alt="d" className="nav-option"/>
               </div>
            </div>
        );
    }
}
export default Nav;