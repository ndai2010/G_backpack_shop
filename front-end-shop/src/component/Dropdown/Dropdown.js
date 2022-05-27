import React, { Component } from 'react'
import './Dropdown.scss'
export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <nav className='dropdown'>
                <ul className='list-items'>
                    {
                        this.props.data && this.props.data.length && this.props.data.map((item, index) => {
                            return (
                                <li className='item' key={index}>
                                    <span className='title'>{item.title} <i className="fa-solid fa-chevron-down"></i></span>
                                    <div className='sub-menu-wrap'>
                                        <div className='sub-menu'>
                                            <div className='list-sub-menu'>
                                                {
                                                    item.subMenu && item.subMenu.length && item.subMenu.map(sub => {
                                                        return (
                                                            <a href={sub.pathLink} className='item'>{sub.title}</a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
        )
    }
}
