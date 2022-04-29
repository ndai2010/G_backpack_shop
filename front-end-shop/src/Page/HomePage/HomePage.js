import React, { Component } from 'react'
import Slide from "react-slick"
import "./HomePage.scss"
import HomeNavbar from "./HomeNavBar/HomeNavbar"
import Data from "./HomeNavBar/Data"
import Bn1 from "../../asset/Banner/bn1.jpg"
class HomePage extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        console.log(Data.Bn);
        return (

            <div className='home-page'>
                <div className='home-header'>
                    <div className='top-bar container'>
                        <div className='left'>
                            <span className='text'>Get 30% Off On Selected Items</span>
                            <i className="fa-solid fa-envelope icon"></i>
                            <span className='text'>dangdai2010@gmail.com</span>
                        </div>
                        <div className='right'>
                            <div className='menu-link'>
                                <div className='wishlist-menu'>wishlist</div>
                                <div className='currency-menu'>
                                    <select>
                                        <option value='USD'>USD</option>
                                        <option value='VND'>VND</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='home-navbar'><HomeNavbar /></div>
                    <div className='slide-banner'>
                        <Slide {...settings}>
                            <div className='slide-banner' style={{ backgroundImage: `url(${Bn1})` }}></div>
                        </Slide>
                    </div>
                </div>
                <div className='home-body'></div>
                <div className='home-footer'></div>
            </div >
        )
    }
}
export default HomePage
