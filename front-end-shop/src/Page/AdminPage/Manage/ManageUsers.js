import React, { Component } from 'react';
import './ManageUsers.scss'
import DataTable from '../../../component/DataTable/DataTable';
class ManageUsers extends Component {
    render() {
        return (
            <div className='manage-users'>
                <DataTable />
            </div>
        );
    }
}

export default ManageUsers;