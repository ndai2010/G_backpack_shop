import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }
    ClickTabMenu = (id, index) => {
        this.setState({
            activeIndex: index
        })
    }
    render() {
        return (
            <div className='side-bar'>
                <div className='top'>
                    <span className='logo'>Admin</span>
                </div>
                <hr />

                <div className='center'>
                    <ul>
                        <p className='title'>MAIN</p>

                        <Link to="/admin" style={{ textDecoration: "none" }}>
                            <li
                                className={this.state.activeIndex === 0 ? `active` : null}
                                onClick={() => this.ClickTabMenu('DashBoard', 0)}
                            >
                                <DashboardIcon className='icon' /><span>Dash Board</span>

                            </li>
                        </Link>
                        <p className='title'>LISTS</p>
                        <Link to="/admin/manage-users" style={{ textDecoration: "none" }}>
                            <li
                                onClick={() => this.ClickTabMenu('Users', 1)}
                                className={this.state.activeIndex === 1 ? `active` : null}
                            >
                                <PersonIcon className='icon' />
                                <span>Users</span>
                            </li>
                        </Link>
                        <Link to="/admin/manage-products" style={{ textDecoration: "none" }}>
                            <li
                                onClick={() => this.ClickTabMenu('Products', 2)}
                                className={this.state.activeIndex === 2 ? `active` : null}
                            >
                                <StoreMallDirectoryIcon className='icon' />
                                <span>Products</span>
                            </li>
                        </Link>
                        <Link to="/admin/manage-orders" style={{ textDecoration: "none" }}>
                            <li
                                onClick={() => this.ClickTabMenu('Orders', 3)}
                                className={this.state.activeIndex === 3 ? `active` : null}
                            ><PaymentIcon className='icon' /><span>Orders</span></li>
                        </Link>
                        <Link to="/admin/manage-delivery" style={{ textDecoration: "none" }}>
                            <li
                                onClick={() => this.ClickTabMenu('Delivery', 4)}
                                className={this.state.activeIndex === 4 ? `active` : null}
                            ><LocalShippingIcon className='icon' /><span>Delivery</span></li>
                        </Link>
                        <p className='title'>USER</p>
                        <Link to="/admin/profile" style={{ textDecoration: "none" }}>
                            <li
                                onClick={() => this.ClickTabMenu('Profile', 5)}
                                className={this.state.activeIndex === 5 ? `active` : null}
                            >
                                <AccountCircleIcon className='icon' /><span>Profile</span>
                            </li>
                        </Link>
                        <li><ExitToAppIcon className='icon' /><span>Logout</span></li>
                    </ul>
                </div>

                <div className='bottom'>
                    <div className='color-option'></div>
                    <div className='color-option'></div>
                    <div className='color-option'></div>
                </div>
            </div >
        )
    }
}
