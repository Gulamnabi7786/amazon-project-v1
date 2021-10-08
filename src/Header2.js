import React, { Component } from 'react';
import './Header2.css';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

export class Header2 extends Component {
    render() {
        return (
            <div className="header2">
                <div className="header__nav2">
                    <div className="header__option">
                        <span className='header__optionLine1'>
                        <FormatListBulletedOutlinedIcon className="list__img"/>
                        All
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                        Mobiles
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                        Best Sellers
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                        Customer Service
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                        Fashion
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                        Electronics
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                        Prime
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                        Amazon Pay
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                        Today's Deals
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                        Computers
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                        New Releases
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine2'>
                           <img className="add__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JupiterT1/SWM_1day._CB639891554_.jpg" alt="Add__logo"/>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header2
