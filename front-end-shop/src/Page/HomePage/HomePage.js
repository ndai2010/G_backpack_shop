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
                                <div className='top-title'>Free World Delivery</div>
                                <span className='bottom-title'>Orders Over $100</span>
                            </div>
                        </div>
                        <div className='wrap-fluid'>
                            <i className="fa-solid fa-headphones-simple icon"></i>
                            <div className='title'>
                                <div className='top-title'>Best Online Support</div>
                                <span className='bottom-title'>Hours: 8AM -11PM</span>
                            </div>
                        </div>
                        <div className='wrap-fluid'>
                            <i className="fa-solid fa-piggy-bank icon"></i>
                            <div className='title'>
                                <div className='top-title'>Win $100 To Shop</div>
                                <span className='bottom-title'>Enter Now</span>
                            </div>
                        </div>
                        <div className='wrap-fluid'>
                            <i className="fa-solid fa-coins icon"></i>
                            <div className='title'>
                                <div className='top-title'>Money Back Guarantee</div>
                                <span className='bottom-title'>With A 30 Day</span>
                            </div>
                        </div>
                    </div>
                    <div className='tab-product container'>
                        <TabsProduct />
                    </div>
                    <div className='sale-banner container'>
                        <div className='sale-banner layout'>
                            <div className='layout-item'>
                                <div className='layout-image'>
                                    <img className='image' alt='' src='https://img.freepik.com/free-photo/hipster-red-backpack-map-forest_1150-45024.jpg?w=740&t=st=1653745107~exp=1653745707~hmac=13df1a9f321641b9d77ecd90b52a15fe114c562c3f74c65aa64c119eea515e6a'></img>
                                </div>
                                <div className='description'></div>
                            </div>
                            <div className='layout-item'>
                                <div className='layout-image'>
                                    <img className='image' alt='' src='https://img.freepik.com/free-photo/hipster-red-backpack-map-forest_1150-45024.jpg?w=740&t=st=1653745107~exp=1653745707~hmac=13df1a9f321641b9d77ecd90b52a15fe114c562c3f74c65aa64c119eea515e6a'></img>
                                </div>
                                <div className='description'></div>
                            </div>
                        </div>
                    </div>
                    <div className='list-category container'>
                        <div className='title'>
                            <h2>Categories</h2>
                            <p>Exclusive products have just arrived. Check them out</p>
                        </div>
                        <div className='list'>
                            <div className='layout'>
                                <div className='layout-item'>
                                    <img className='layout-image' alt='' src='https://img.freepik.com/free-photo/hipster-red-backpack-map-forest_1150-45024.jpg?w=740&t=st=1653745107~exp=1653745707~hmac=13df1a9f321641b9d77ecd90b52a15fe114c562c3f74c65aa64c119eea515e6a'></img>
                                </div>
                                <div className='layout-item'>
                                    <img className='layout-image' alt='' src='https://img.freepik.com/free-photo/hipster-red-backpack-map-forest_1150-45024.jpg?w=740&t=st=1653745107~exp=1653745707~hmac=13df1a9f321641b9d77ecd90b52a15fe114c562c3f74c65aa64c119eea515e6a'></img>
                                </div>
                                <div className='layout-item'>
                                    <img className='layout-image' alt='' src='https://img.freepik.com/free-photo/hipster-red-backpack-map-forest_1150-45024.jpg?w=740&t=st=1653745107~exp=1653745707~hmac=13df1a9f321641b9d77ecd90b52a15fe114c562c3f74c65aa64c119eea515e6a'></img>
                                </div>
                                <div className='layout-item'>
                                    <img className='layout-image' alt='' src='https://img.freepik.com/free-photo/hipster-red-backpack-map-forest_1150-45024.jpg?w=740&t=st=1653745107~exp=1653745707~hmac=13df1a9f321641b9d77ecd90b52a15fe114c562c3f74c65aa64c119eea515e6a'></img>
                                </div>
                                <div className='layout-item'>
                                    <img className='layout-image' alt='' src='https://img.freepik.com/free-photo/hipster-red-backpack-map-forest_1150-45024.jpg?w=740&t=st=1653745107~exp=1653745707~hmac=13df1a9f321641b9d77ecd90b52a15fe114c562c3f74c65aa64c119eea515e6a'></img>
                                </div>
                                <div className='layout-item'>
                                    <img className='layout-image' alt='' src='https://img.freepik.com/free-photo/hipster-red-backpack-map-forest_1150-45024.jpg?w=740&t=st=1653745107~exp=1653745707~hmac=13df1a9f321641b9d77ecd90b52a15fe114c562c3f74c65aa64c119eea515e6a'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-footer'>
                    <div className='layout'>
                        <div className='layout-item'>
                            <div className='information'>
                                <h4 className='title'>Follow Us</h4>
                                <div className='description'>
                                    <p className='item'>08562052426</p>
                                    <p className='item'>dangdai2010@gmail.com</p>
                                    <p className='item'>Đà Nẵng</p>
                                </div>
                            </div>
                        </div>
                        <div className='layout-item'>
                            <div className='information'>
                                <h4 className='title'>Information</h4>
                                <div className='description'>
                                    <p className='item'>Pagination</p>
                                    <p className='item'>About Us</p>
                                    <p className='item'></p>
                                </div>
                            </div>
                        </div>
                        <div className='layout-item'>
                            <div className='information'>
                                <h4 className='title'>Information</h4>
                                <div className='description'>
                                    <p className='item'>Pagination</p>
                                    <p className='item'>About Us</p>
                                    <p className='item'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='page-footer'></div>
                </div>
            </div >
        )
    }
}
export default HomePage
