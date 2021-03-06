import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="whitelog.png" alt="logo" />
      </Link>
      <div className="header__nav1">
        <div className="header__option1">
        <LocationOnOutlinedIcon />
          <span className="header__optionLineone1">
            Hello {!user ? "Guest" : user.email}
          </span>
          <span className="header__optionLinetwo2">Select your address</span>
        </div>
      </div>
      <div className="header__search">
        <div className="all__option">
          <select name="url" tabindex="0" title="Search in">
            <option selected="selected" value="search-alias=aps">
              All
            </option>
            <option value="search-alias=aps">All Categories</option>
            <option value="search-alias=todays-deals">Deals</option>
            <option value="search-alias=alexa-skills">Alexa Skills</option>
            <option value="search-alias=amazon-devices">Amazon Devices</option>
            <option value="search-alias=bigbazaar">Big Bazaar</option>
            <option value="search-alias=more">More Store</option>
            <option value="search-alias=fashion">Amazon Fashion</option>
            <option value="search-alias=nowstore">Amazon Fresh</option>
            <option value="search-alias=pantry">Amazon Pantry</option>
            <option value="search-alias=appliances">Appliances</option>
            <option value="search-alias=mobile-apps">Apps &amp; Games</option>
            <option value="search-alias=baby">Baby</option>
            <option value="search-alias=beauty">Beauty</option>
            <option value="search-alias=stripbooks">Books</option>
            <option value="search-alias=automotive">Car &amp; Motorbike</option>
            <option value="search-alias=apparel">
              Clothing &amp; Accessories
            </option>
            <option value="search-alias=collectibles">Collectibles</option>
            <option value="search-alias=computers">
              Computers &amp; Accessories
            </option>
            <option value="search-alias=electronics">Electronics</option>
            <option value="search-alias=furniture">Furniture</option>
            <option value="search-alias=lawngarden">
              Garden &amp; Outdoors
            </option>
            <option value="search-alias=gift-cards">Gift Cards</option>
            <option value="search-alias=grocery">
              Grocery &amp; Gourmet Foods
            </option>
            <option value="search-alias=hpc">Health &amp; Personal Care</option>
            <option value="search-alias=kitchen">Home &amp; Kitchen</option>
            <option value="search-alias=industrial">
              Industrial &amp; Scientific
            </option>
            <option value="search-alias=jewelry">Jewellery</option>
            <option value="search-alias=digital-text">Kindle Store</option>
            <option value="search-alias=luggage">Luggage &amp; Bags</option>
            <option value="search-alias=luxury-beauty">Luxury Beauty</option>
            <option value="search-alias=dvd">Movies &amp; TV Shows</option>
            <option value="search-alias=popular">Music</option>
            <option value="search-alias=mi">Musical Instruments</option>
            <option value="search-alias=office-products">
              Office Products
            </option>
            <option value="search-alias=pets">Pet Supplies</option>
            <option value="search-alias=instant-video">Prime Video</option>
            <option value="search-alias=shoes">Shoes &amp; Handbags</option>
            <option value="search-alias=software">Software</option>
            <option value="search-alias=sporting">
              Sports, Fitness &amp; Outdoors
            </option>
            <option value="search-alias=home-improvement">
              Tools &amp; Home Improvement
            </option>
            <option value="search-alias=toys">Toys &amp; Games</option>
            <option value="search-alias=under-ten-dollars">Under ???500</option>
            <option value="search-alias=videogames">Video Games</option>
            <option value="search-alias=watches">Watches</option>
          </select>
        </div>
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="language_list">
          <div className="selected-lang"></div>
          <ul>
            <li></li>
          </ul>
        </div>

        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineone">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineone">Returns</span>
          <span className="header__optionLinetwo">&order</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineone">Your</span>
          <span className="header__optionLinetwo">Prime</span>
        </div>
      </div>

      <Link to="checkout">
        <div className="header__optionBasket">
          {/* <ShoppingCartIcon /> */}
          <LocalMallIcon />
          <img src="" alt="" />
          <span className="header__optionLinetwo header__basketcount">
            {cart.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
