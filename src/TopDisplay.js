import React from "react";
import './TopDisplay.css';
import symbol from './assets/Netflix_Symbol_RGB 1.png';
import play from './assets/Play.png';
import info from './assets/Vector.png';
class TopDispaly extends  React.Component{
    render(){
        return(
            <div className="top">
                <div className="show">
                    <img src = {symbol} alt="s" className="netflix-symbol"/>
                    SHOW
                </div>
                <div className="title-name">MAID</div>
                <div>
                    <button className="play">
                        <img src = {play} alt="s" className="btn-img"/>
                         Play
                    </button>
                    <button className="info">
                        <img src = {info} alt="s" className="btn-img"/>
                        More Info
                    </button>
                </div>
            </div>
        );
    }
}
export default TopDispaly;