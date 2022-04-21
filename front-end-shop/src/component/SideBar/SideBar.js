import React, { Component } from 'react'
import './SideBar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export default class SideBar extends Component {
    render() {
        return (
            <div className='side-bar'>
                <div className='top'>
                    <span className='logo'> logo</span>
                </div>
                <hr />
                <div className='center'>
                    <ul>
                        <p className='title'>MAIN</p>
                        <li><DashboardIcon className='icon' /><span>Dash Board</span></li>
                        <p className='title'>LISTS</p>
                        <li><PersonIcon className='icon' /><span>Users</span></li>
                        <li><StoreMallDirectoryIcon className='icon' /><span>Products</span></li>
                        <li><PaymentIcon className='icon' /><span>Orders</span></li>
                        <li><LocalShippingIcon className='icon' /><span>Delivery</span></li>
                        <p className='title'>USEFULL</p>
                        <li><InsertChartIcon className='icon' /><span>Stats</span></li>
                        <li><NotificationsIcon className='icon' /><span>Notifications</span></li>
                        <p className='title'>SERVICE</p>
                        <li><HealthAndSafetyIcon className='icon' /><span>System health</span></li>
                        <li><PsychologyIcon className='icon' /><span>Logs</span></li>
                        <li><SettingsApplicationsIcon className='icon' /><span>Setting</span></li>
                        <p className='title'>USER</p>
                        <li><AccountCircleIcon className='icon' /><span>Profile</span></li>
                        <li><ExitToAppIcon className='icon' /><span>Logout</span></li>
                    </ul>
                </div>
                <div className='bottom'>
                    <div className='color-option'></div>
                    <div className='color-option'></div>
                    <div className='color-option'></div>
                </div>
            </div>
        )
    }
}
