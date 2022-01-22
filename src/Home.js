import React from "react";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import "./Home.css";
import MultipleProduct from "./MultipleProduct";
import Product from "./Product";
import VideoAdd from "./VideoAdd";
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
              <img
                src="https://m.media-amazon.com/images/I/61DmWrumyIL._SX3000_.jpg"
                alt="Homeimg"
              />
            </div>
            <div className="slide">
              <img
                src="https://m.media-amazon.com/images/I/71afpk5NZvL._SX3000_.jpg"
                alt="Homeimg"
              />
            </div>
            <div className="slide">
              <img
                src="https://m.media-amazon.com/images/I/715M2O8sbbL._SX3000_.jpg"
                alt="Homeimg"
              />
            </div>
            <div className="slide">
              <img
                src="https://m.media-amazon.com/images/I/71Gb3M4kS2L._SX3000_.jpg"
                alt="Homeimg"
              />
            </div>
            {/* slide image end */}
            {/* automatic navigation start */}
            {/* <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div> */}
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

          {/* <script type="text/javascript">
                        var counter = 1;
                        setInterval(function() {
                            document.getElementById('radio' + counter).checked = true;
                            counter++;
                            if(counter > 4){
                                counter = 1;
                            }

                        }, 5000);
                    </script> */}
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
        <MultipleProduct
            id="05"
            title="Up to 70% off | Amazon Brands & more"
            price={719}
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/bhardwl/hpb_gw/xcm_banners_hpb_xgl_a_new_186x116_in-en._SY116_CB647055984_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/bhardwl/hpb_gw/xcm_banners_hpb_xgl_b_186x116_in-en._SY116_CB647056389_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/bhardwl/hpb_gw/xcm_banners_hpb_xgl_d_186x116_in-en._SY116_CB647056393_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/bhardwl/hpb_gw/xcm_banners_hpb_xgl_c_186x116_in-en._SY116_CB647056391_.jpg"
          />
          <MultipleProduct
            id="06"
            title="Up to 70% off | Restyle your home & kitchen"
            price={1990}
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/kitchen/kshrut/janart_kshrut/xcm_banners_2022_janart_qc-186x116-product-badge-yxb4b_372x232_in-en._SY116_CB648749456_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/JANART/OHLGW/DC4_1x._SY116_CB648643844_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/186x116_2._SY116_CB648692698_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/daanchan/xc/xcm_banners_-peslf_186x116_in-en._SY116_CB647097930_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="07"
            title="Try This T-Shirt for Men | Men's T-Shirt | Regular Fit T-Shirt"
            price={399}
            image="https://m.media-amazon.com/images/I/41FcBvUHvmL.jpg"
          />

          <Product
            id="08"
            title="OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)"
            price={52900}
            image="https://m.media-amazon.com/images/I/61IwksZ-DGL._SL1500_.jpg"
          />

          <Product
            id="09"
            title="OnePlus Watch Midnight Black: 46mm dial, Smartphone Music (Currently Android only)"
            price={13999}
            image="https://m.media-amazon.com/images/I/61FxsUbnavL._SL1500_.jpg"
          />

          <Product
            id="10"
            title="ASUS TUF Dash F15 (2021), 15.6-inch (39.62 cms) FHD 144Hz, Intel Core"
            price={71990}
            image="https://m.media-amazon.com/images/I/81mLxU0CcAL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <MultipleProduct
            id="11"
            title="Up to 55% off | Daily essentials"
            price={7000}
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FJanuary/JanArt/CONSNEWQC/DesktopATF/Desktop-Gateway_QuadCard_5_1x._SY116_CB647172863_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FJanuary/JanArt/CONSNEWQC/DesktopATF/Desktop-Gateway_QuadCard_2_1x._SY116_CB647172862_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FJanuary/JanArt/CONSNEWQC/DesktopATF/Desktop-Gateway_QuadCard_3_1x._SY116_CB647172863_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FJanuary/JanArt/CONSNEWQC/DesktopATF/Desktop-Gateway_QuadCard_4_1x._SY116_CB647172863_.jpg"
          />
        </div>

        <div className="home__row">
          <VideoAdd />
        </div>

        <div className="footerBackToTop">
          <Footer />
        </div>
        <div className="footer2">
          <Footer2 />
        </div>
      </div>
    </div>
  );
}

export default Home;
