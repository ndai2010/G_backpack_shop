import React, { Component } from 'react'
import './HomeNavbar.scss'
import Dropdown from '../../../component/Dropdown/Dropdown'
import { CategoryDropdown } from './Data'
import { Link } from 'react-router-dom'
class HomeNavbar extends Component {
    render() {
        return (
            <div className='home-nav'>
                <div className='nav-pc container'>
                    <div className='header-left'>Logo</div>

                    <div className='site-nav'>
                        <Dropdown data={CategoryDropdown} />
                    </div>

                    <div className='header-right'>
                        <div className='header search'><i className="fa-solid fa-magnifying-glass icon"></i></div>
                        <div className='account-cart'>
                            <div className='header account'>
                                <i className="fa-solid fa-user icon"></i>
                                <div className='menu-link'>
                                    <div className='wrapper'>
                                        <Link to={'/login'}>
                                            <div className='item'><span>Login/Sign up</span></div>
                                        </Link>
                                        <div className='item'><span>Check Out</span></div>
                                        <div className='item'><span>My Account</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='header cart'><i className="fa-solid fa-cart-shopping icon"></i></div>
                        </div>
                    </div>
                </div>
                {/* <div className='nav-tablet container'>nav-Tablet</div> */}
                {/* <div className='nav-mobile container'>Nav-mobile</div> */}
            </div>
        )
    }
}
export default HomeNavbar
