import React, { Component } from 'react'
import './Featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
export default class Featured extends Component {
    render() {
        return (
            <div className='featured'>
                <div className='top'>
                    <h3 className='title'>Total Revenue</h3>
                    <i className="fa-solid fa-ellipsis-vertical icon"></i>
                </div>
                <div className='bottom'>
                    <div className='featured-chart'>
                        <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                    </div>
                    <p className='title'>Total sales made today</p>
                    <p className='amount'>$420</p>
                    <p className='desc'>Previous transaction progressing. Last payments may not be included</p>
                    <div className='summary'>
                        <div className='item'>
                            <div className='item-title'>Target</div>
                            <div className='item-result positive'>
                                <i className="fa-solid fa-angle-up icon"></i>
                                <div className='result-amount'>$12.4k</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item-title'>Last Week</div>
                            <div className='item-result negative'>
                                <i className="fa-solid fa-angle-down icon"></i>
                                <div className='result-amount'>$12.4k</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item-title'>Last Month</div>
                            <div className='item-result positive'>
                                <i className="fa-solid fa-angle-up icon"></i>
                                <div className='result-amount'>$12.4k</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
