import React from "react";
import "./App.css";
import Nav from "./Nav";
import TopDispaly from "./TopDisplay";
import arrowRight from "./assets/ArrowRight.png";
import i11 from "./assets/section 1.1.png";
import i12 from "./assets/section 1.2.png";
import i13 from "./assets/section 1.3.png";
import i14 from "./assets/section 1.4.png";
import i15 from "./assets/section 1.5.png";
import i31 from "./assets/section 3.1.png";
import i32 from "./assets/section 3.2.png";
import i33 from "./assets/section 3.3.png";
import i34 from "./assets/section 3.4.png";
import i35 from "./assets/section 3.5.png";
import i41 from "./assets/section 4.1.png";
import i42 from "./assets/section 4.2.png";
import i43 from "./assets/section 4.3.png";
import i44 from "./assets/section 4.4.png";
import i45 from "./assets/section 4.5.png";
import insta from "./assets/instagram.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import youtube from "./assets/youtube.png";

function App() {
  return (
    <>
      <div className="App">
        <div className="upper-part">
          <div className="overlay">
            <Nav />
            <TopDispaly />
          </div>
        </div>
        <div className="lower-part">
          <div className="option-part">
            <div className="hrline">
              <div className="hr-title">
                See again
                <img src={arrowRight} alt="" />
              </div>
              <div className="hr-body">
                <img src={i11} alt="" />
                <img src={i12} alt="" />
                <img src={i13} alt="" />
                <img src={i14} alt="" />
                <img src={i15} alt="" />
              </div>
            </div>
            <div className="hrline">
              <div className="hr-title">
                Trending Now
                <img src={arrowRight} alt="" />
              </div>
              <div className="hr-body">
                <img src={i31} alt="" />
                <img src={i32} alt="" />
                <img src={i33} alt="" />
                <img src={i34} alt="" />
                <img src={i35} alt="" />
              </div>
            </div>
            <div className="hrline">
              <div className="hr-title">
                Sci-fi show
                <img src={arrowRight} alt="" />
              </div>
              <div className="hr-body">
                <img src={i41} alt="" />
                <img src={i42} alt="" />
                <img src={i43} alt="" />
                <img src={i44} alt="" />
                <img src={i45} alt="" />
              </div>

              {/* footer */}
              <div className="footer">
                <div className="one">
                  <div className="outer">
                    <li>
                      <div className="icons">
                        <div>
                          <img src={facebook} alt="insta" />
                        </div>
                        <div>
                          <img src={insta} alt="insta" />
                        </div>
                        <div>
                          <img src={twitter} alt="insta" />
                        </div>
                        <div>
                          <img src={youtube} alt="insta" />
                        </div>
                      </div>
                    </li>
                  </div>
                  <li>you</li>
                  <li>snowpicer</li>
                  <li>the universe</li>
                  <li>last kingdom</li>
                  <li>money hiest</li>
                  <button>Click me</button>
                  
                </div>
                <div className="two">
                  <li>explained</li>
                  <li>into the night</li>
                  <li>lock and key</li>
                  <li>Queen</li>
                  <li>Crown</li>
                </div>
                <div className="three">
                <li>explained</li>
                  <li>into the night</li>
                  <li>lock and key</li>
                  <li>Queen</li>
                  <li>Crown</li>
                </div>
                <div className="four">
                <li>explained</li>
                  <li>into the night</li>
                  <li>lock and key</li>
                  <li>Queen</li>
                  <li>Crown</li>
                </div>
                
              </div>
              <div className="copyright">@1997-2021 Netflix,Inc: i-062d673a0ee09942</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
