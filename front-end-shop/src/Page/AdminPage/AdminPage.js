import React, { Component } from 'react';
import SideBar from '../../component/SideBar/SideBar'
import './AdminPage.scss'
import ManageUsers from './Manage/ManageUsers'
class AdminPage extends Component {
    render() {
        return (
            <div className='admin-page'>
                <SideBar />
                <div className='contents'>main</div>
            </div>
        );
    }
}

export default AdminPage;