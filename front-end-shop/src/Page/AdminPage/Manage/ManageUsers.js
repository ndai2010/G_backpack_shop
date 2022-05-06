import React, { Component } from 'react';
import './ManageUsers.scss'
import SideBar from '../../../component/SideBar/SideBar'
class ManageUsers extends Component {
    render() {
        return (
            <div className='manage-users'>
                <SideBar />
                <div className='contents'>ManageUsers</div>
            </div>
        );
    }
}

export default ManageUsers;