import React, { Component } from 'react'
import Slide from "react-slick"
import "./HomePage.scss"
import HomeNavbar from "./HomeNavBar/HomeNavbar"
import bn1 from "../../asset/Banner/bn1.jpg"
import bn2 from "../../asset/Banner/bn2.jpg"
import bn3 from "../../asset/Banner/bn3.jpg"

import TabsProduct from './TabsProduct/TabProduct'
class HomePage extends Component {
    render() {
        let settingBanner = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
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
                        <Slide {...settingBanner}>

                            <div className='slide'>
                                <div className='img'>
                                    <img src={bn1} alt="slide-banner" ></img>
                                </div>
                                <div className='overlay'>
                                    <div className='rs-mask-wrap'>
                                        <div className='text'>
                                            <span>halo</span>
                                            <h3>ádad</h3>
                                            <span>ádasd</span>
                                        </div>
                                        <div className='link-btn'>
                                            <button>Shop now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <div className='img'>
                                    <img src={bn2} alt="slide-banner" ></img>
                                </div>
                                <div className='overlay'>
                                    <div className='rs-mask-wrap'>
                                        <div className='text'>
                                            <span>halo</span>
                                            <h3>ádad</h3>
                                            <span>ádasd</span>
                                        </div>
                                        <div className='link-btn'>
                                            <button>Shop now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <div className='img'>
                                    <img src={bn3} alt="slide-banner" ></img>
                                </div>
                                <div className='overlay'>
                                    <div className='rs-mask-wrap'>
                                        <div className='text'>
                                            <span>halo</span>
                                            <h3>ádad</h3>
                                            <span>ádasd</span>
                                        </div>
                                        <div className='link-btn'>
                                            <button>Shop now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slide>
                    </div>
                </div>
                <div className='home-body'>
                    <div className='row-fluid container'>
                        <div className='wrap-fluid'>
                            <i className="fa-solid fa-truck icon"></i>
                            <div className='title'>
                                <div className='top-title'>áddas</div>
                                <span className='bottom-title'>ádsadd</span>
                            </div>
                        </div>
                        <div className='wrap-fluid'>
                            <i className="fa-solid fa-headphones-simple icon"></i>
                            <div className='title'>
                                <div className='top-title'>áddas</div>
                                <span className='bottom-title'>ádsadd</span>
                            </div>
                        </div>
                        <div className='wrap-fluid'>
                            <i className="fa-solid fa-piggy-bank icon"></i>
                            <div className='title'>
                                <div className='top-title'>áddas</div>
                                <span className='bottom-title'>ádsadd</span>
                            </div>
                        </div>
                        <div className='wrap-fluid'>
                            <i className="fa-solid fa-coins icon"></i>
                            <div className='title'>
                                <div className='top-title'>áddas</div>
                                <span className='bottom-title'>ádsadd</span>
                            </div>
                        </div>
                    </div>
                    <div className='tab-product container' style={{ height: '500px' }}>
                        <TabsProduct />
                    </div>
                </div>
                <div className='home-footer'></div>
            </div >
        )
    }
}
export default HomePage
