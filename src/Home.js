import React from 'react'
import './Home.css';
import Product from './Product';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="slider">
                    <div className="slides">
                        {/* radio buttons start */}
                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />
                        {/* radio buttons end */}
                        {/* slide image start  */}
                        <div className="slide first">
                        <img src="https://m.media-amazon.com/images/I/61DmWrumyIL._SX3000_.jpg" alt="Homeimg" />
                        </div>
                        <div className="slide">
                            <img src="https://m.media-amazon.com/images/I/71D7LpKHvfL._SX3000_.jpg" alt=""/>
                        </div>
                        <div className="slide">
                            <img src="https://m.media-amazon.com/images/I/71kq2r-izfL._SX3000_.jpg" alt=""/>
                        </div>
                        <div className="slide">
                            <img src="https://m.media-amazon.com/images/I/7172EFYLBqL._SX3000_.jpg" alt=""/>
                        </div>
                        {/* slide image end */}
                        {/* automatic navigation start */}
                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>
                        {/* automatic navigation end */}
                    </div>
                    {/* manual naviagtion start */}
                    <div className="navigation-manual">
                        <label for="radio1" class="manual-btn"></label>
                        <label for="radio2" class="manual-btn"></label>
                        <label for="radio3" class="manual-btn"></label>
                        <label for="radio4" class="manual-btn"></label>
                    </div>
                    {/* manual naviagtion end */}
                </div>

                

                <div className="home__row">
                    <Product 
                        id="01"
                        title="Apple iPhone 13 Pro (128GB) - Sierra Blue"
                        price={119900}
                        image="https://m.media-amazon.com/images/I/61jLiCovxVL._SX679_.jpg"
                        />

                    <Product 
                        id="02"
                        title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={52900}
                        image="https://m.media-amazon.com/images/I/71qMIJnrhFL._SX679_.jpg"
                        />
                        
                    <Product 
                        id="03"
                        title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancellation Headphones, Alexa Voice Control (Black)"
                        price={19990}
                        image="https://m.media-amazon.com/images/I/61D4Z3yKPAL._SX466_.jpg"
                        />

                    <Product 
                        id="04"
                        title="ALAMOS Combo Pack of 2 edixo Cap"
                        price={325}
                        image="https://m.media-amazon.com/images/I/71mcY2boNVL._UL1500_.jpg"
                        />
                </div>
                <div className="home__row">
                    <Product 
                        id="05"
                        title="2019 Apple MacBook Pro (16-inch/40.65 cm, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
                        price={215990}
                        image="https://m.media-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
                        />
                        
                    <Product 
                        id="06"
                        title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
                        price={3499}
                        image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
                        />
                </div>
                <div className="home__row">
                    <Product 
                        id="07"
                        title="Try This T-Shirt for Men | Men's T-Shirt | Regular Fit T-Shirt"
                        price={399}
                        image="https://m.media-amazon.com/images/I/41FcBvUHvmL.jpg"
                        />
                </div>

            </div>
        </div>
    )
}

export default Home
