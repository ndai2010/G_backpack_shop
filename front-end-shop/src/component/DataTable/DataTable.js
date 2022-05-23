import React, { Component } from 'react';
import './DataTable.scss'

//icon
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';

//library
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { connect } from 'react-redux'
//component
import AddNewUserModal from '../Modal/AddNewUserModal';
import Pagination from '../Pagination/Pagination';
class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            selectedOption: '',
            isOpenModal: false,

            list: [],
            currentPage: 1,
            listPerPage: 8,
        }
    }
    //data
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
    options = [
        { label: 'All', value: 'option_1' },
        { label: 'Active', value: 'option_2' },
        { label: 'Block', value: 'option_3' },
    ]

    //hàm xử lí

    toggleModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    handleOnchange = (value) => {
        this.setState({
            selectedOption: value
        })
    }

    handleDateChange = (date) => {
        console.log(date);
        this.setState({
            selectedDate: date
        })
    }

    //view
    render() {
        return (
            <>
                <AddNewUserModal
                    isOpen={this.state.isOpenModal}
                    toggleModal={this.toggleModal}
                />
                <div className='datatable'>
                    <div className='header'>
                        <div className='title'>Manage Users</div>
                        <div className='action-btn'>
                            <div className='delete-selected' onClick={() => this.handleDeleteSelect()}>
                                <DeleteForeverIcon className='icon' />
                            </div>
                            <div className='add-new-btn' onClick={() => this.toggleModal()}>
                                <AddIcon className='icon' />
                                <span>Add new user</span>
                            </div>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='header-list-container'>
                            <div className='search-box item'>
                                <SearchIcon className='icon' />
                                <input className='search' type='text'></input>
                            </div>
                            <div className='date-picker item'>
                                <DatePicker
                                    onChange={(date) => this.handleDateChange(date)}
                                    selected={this.state.selectedDate}
                                    dateFormat='dd/MM/yyyy'
                                />
                            </div>
                            <div className='select-user-type item'>
                                < Select
                                    onChange={(value) => this.handleOnchange(value)}
                                    options={this.options}
                                />
                            </div>
                            <div className='btn-filter item'>
                                <FilterListIcon className='icon' />
                                <span>Filters</span>
                            </div>
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
                            <Pagination />
                        </div>
                    </div>
                </div >
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DataTable);