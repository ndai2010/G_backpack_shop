import React, { Component } from 'react'
import './Card.scss'
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='card-container'>
                <div className='warpper'>
                    <div className='card-img'>
                        <div className='box-list'>
                            <ul>
                                <li><i className="fa-solid fa-cart-shopping"></i></li>
                                <li><i className="fa-solid fa-eye"></i></li>
                                <li><i className="fa-solid fa-heart"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className='card-info'>
                        <div className='name'>name</div>
                        <div className='price'>price</div>
                    </div>
                </div>
            </div>
        )
    }
}
