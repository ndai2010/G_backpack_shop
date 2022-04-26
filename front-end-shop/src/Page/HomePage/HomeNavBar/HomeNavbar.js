import React, { Component } from 'react'
import './HomeNavbar.scss'
class HomeNavbar extends Component {
    render() {
        return (
            <div className='home-nav'>
                <div className='nav-pc container'>
                    <div className='header-left'>Logo</div>
                    <div className='site-nav'>List category</div>
                    <div className='header-right'>
                        <div className='header search'>search</div>
                        <div className='account-cart'>
                            <div className='header account'>account</div>
                            <div className='header cart'>cart</div>
                        </div>
                    </div>
                </div>
                <div className='nav-tablet container'>
                </div>
                <div className='nav-mobie container'>Navmobi</div>
            </div>
        )
    }
}
export default HomeNavbar
