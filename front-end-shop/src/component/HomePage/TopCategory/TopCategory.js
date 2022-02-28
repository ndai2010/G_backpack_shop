import React from 'react'
import './TopCategory.scss'

class TopCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='section-service'>
                        <div className='icon'>
                            <i className="fa-solid fa-truck"></i>
                            <span>WordWide shipping</span>
                            <p>Free devivery on all order over 500.000VND</p>
                        </div>
                        <div className='icon'>
                            <i className="fa-solid fa-headset"></i>
                            <span>Premium Support</span>
                            <p>24hhours per day, including holiday</p>
                        </div>
                        <div className='icon'>
                            <i className="fa-solid fa-tags"></i>
                            <span>Member Discount</span>
                            <p>Up to 29% discount for loyal members</p>
                        </div>
                    </div>
                    <div className='section-banner'>
                        <div className='left-content'>
                            <div className='up-content'>
                                <div className='banner-image'>
                                    <div className='content-banner'>
                                        <span className='title'>FOR ALL TRAVELLER</span>
                                        <span className='subtitle'>BACKPACK</span>
                                        <a href='/' className='btn'>Discover Now
                                            <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='down-content'>
                                <div className='banner-image'></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='banner-image'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopCategory;