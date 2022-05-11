import React, { Component } from 'react';
import './AdminPage.scss'
import { Outlet } from 'react-router-dom'
import SideBar from '../../component/SideBar/SideBar'
import NavBar from '../../component/NavBar/NavBar'
class AdminPage extends Component {
    render() {
        return (
            <div className='admin-main-page'>
                <SideBar />
                <div className='main'>
                    <div className='main-content'>
                        <NavBar />
                        <Outlet />
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPage;