import React, { Component } from 'react'
import './HomeNavbar.scss'
import Dropdown from '../../../component/Dropdown/Dropdown'
import { categoryDropdown } from './Data'
class HomeNavbar extends Component {
    render() {
        return (
            <div className='home-nav'>
                <div className='nav-pc container'>
                    <div className='header-left'>Logo</div>

                    <div className='site-nav'>
                        <Dropdown data={categoryDropdown} />
                    </div>

                    <div className='header-right'>
                        <div className='header search'><i className="fa-solid fa-magnifying-glass icon"></i></div>
                        <div className='account-cart'>
                            <div className='header account'><i className="fa-solid fa-user icon"></i></div>
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
