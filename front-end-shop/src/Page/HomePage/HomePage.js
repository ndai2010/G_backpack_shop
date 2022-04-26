import React, { Component } from 'react'
import "./HomePage.scss"
import HomeNavbar from "./HomeNavBar/HomeNavbar"
class HomePage extends Component {
    render() {
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
                    <div className='slide-banner'>slide</div>
                </div>
                <div className='home-body'></div>
                <div className='home-footer'></div>
            </div>
        )
    }
}
export default HomePage
