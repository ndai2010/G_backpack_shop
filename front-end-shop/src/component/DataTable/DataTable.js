import React, { Component } from 'react';
import './DataTable.scss'

import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';

import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';
class DataTable extends Component {
    data = [
        {
            id: 1,
            name: 'dai',
            email: 'dangdai2010@gmail.com',
            phone: '123',
            address: 'dn',
            status: 'pending'
        },
        {
            id: 2,
            name: 'son',
            email: 'son1122@gmail.com',
            phone: '1213',
            address: 'dn',
            status: 'active'
        }
    ];
    render() {
        return (
            <div className='datatable'>
                <div className='header'>
                    <div className='title'>Manage Users</div>
                    <div className='action-btn'>
                        <div className='delete-selected' onClick={() => this.handleDeleteSelect()}>
                            <DeleteForeverIcon className='icon' />
                        </div>
                        <div className='add-new-btn'>
                            <AddIcon className='icon' />
                            <span>Add new user</span>
                        </div>
                    </div>
                </div>
                <div className='list'>
                    <div className='header-list'>
                        <div className='search-box'>
                            <SearchIcon />
                            <input className='search' type='text'></input>
                        </div>
                        <div className='date-picker'>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <DatePicker ></DatePicker>
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className='select-user-type'>user type</div>
                        <div className='btn-filter'>filter</div>
                    </div>

                    <div className="table-card">
                        <table className="table" id="customerTable">
                            <thead className="text-muted">
                                <tr>
                                    <th scope="col" style={{ with: '50px' }}>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                        </div>
                                    </th>
                                    <th className="sort" data-sort="user-name">Name</th>
                                    <th className="sort" data-sort="email">Email</th>
                                    <th className="sort" data-sort="phone">Phone</th>
                                    <th className="sort" data-sort="date">Joining Date</th>
                                    <th className="sort" data-sort="address">Address</th>
                                    <th className="sort" data-sort="status">Status</th>
                                    <th className="sort" data-sort="action">Action</th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                <tr>
                                    <th scope="row">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                        </div>
                                    </th>
                                    <td className="customer_name">Timothy Smith</td>
                                    <td className="email">timothysmith@velzon.com</td>
                                    <td className="phone">973-277-6950</td>
                                    <td className="date">13 Dec, 2021</td>
                                    <td className="adress">Viet Nam</td>
                                    <td className="status"><span>Active</span></td>
                                    <td>
                                        <ul className="list-inline">
                                            <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                    <EditIcon />
                                                </a>
                                            </li>
                                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                    <DeleteForeverIcon />
                                                </a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="pagination-btn">
                            <div className="pagination-wrap">
                                <span className="page-item pagination-prev" >
                                    Previous
                                </span>
                                <div class="page-item list-page">
                                    <span className='page'>1</span>
                                    <span className='page'>2</span>
                                    <span className='page'>3</span>
                                </div>
                                <span class="page-item pagination-next">
                                    Next
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default DataTable;