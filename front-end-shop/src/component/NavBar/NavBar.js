import React, { Component } from 'react'
import './NavBar.scss'
export default class NavBar extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <div className='wrapper'>
                    <div className='search'>
                        <input type='text' placeholder='Search...'></input>
                        <i className="fa-solid fa-magnifying-glass icon"></i>
                    </div>
                    <div className='items'>
                        <div className='item'>
                            <i className="fa-solid fa-globe icon"></i>
                            English
                        </div>
                        <div className='item'>
                            <i className="fa-solid fa-moon icon"></i>

                        </div>
                        <div className='item'>
                            <i className="fa-solid fa-compress icon"></i>

                        </div>
                        <div className='item'>
                            <i className="fa-solid fa-comment icon"></i>
                            <div className='counter'>1</div>
                        </div>
                        <div className='item'>
                            <i className="fa-solid fa-bell icon"></i>
                            <div className='counter'>2</div>
                        </div>
                        <div className='item'>
                            <i className="fa-solid fa-list icon"></i>
                        </div>
                        <div className='item'>
                            <img src='https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/273407960_435827808329813_2984693607518700331_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wPymRgO9CyIAX_VlRpg&_nc_ht=scontent.fdad2-1.fna&oh=00_AT_D8SpZH-1QIypqcJEoW9T2oLOax3twFBdO8xaHh7KP8w&oe=62632554'
                                className='avatar' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
