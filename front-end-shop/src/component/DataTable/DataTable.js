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
import { UserAction, DeleteUserAction } from '../../redux/actions/UserAction'


class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            selectedOption: '',
            isOpenModal: false,
            currentPage: 1,
            listPerPage: 8,

            listUser: []
        }
    }
    //data

    options = [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Block', value: 'block' },
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.user !== this.props.user) {
            let { user } = this.props
            this.setState({
                listUser: user
            })
        }
    }
    componentDidMount = async () => {
        this.props.UserAction('all');
        let { user } = this.props
        this.setState({
            listUser: user
        })

    }
    SeleteUser = (id) => {
        this.props.DeleteUserAction(id)
    }
    //view
    render() {
        let { listUser } = this.state
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
                                    defaultValue='all'
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
                                    {
                                        listUser && listUser.length > 0 &&
                                        listUser.map((item, index) => {
                                            let name = `${item.firstName} ${item.lastName}`
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                        </div>
                                                    </th>
                                                    <td className="customer_name">{name}</td>
                                                    <td className="email">{item.email}</td>
                                                    <td className="phone">{item.phone}</td>
                                                    <td className="date">13 Dec, 2021</td>
                                                    <td className="address">{item.address}</td>
                                                    <td className="status"><span>{item.status}</span></td>
                                                    <td>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                    <EditIcon />
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                                <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal" onClick={() => this.SeleteUser(item.id)}>

                                                                    <DeleteForeverIcon />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
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
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        UserAction: (id) => dispatch(UserAction(id)),
        DeleteUserAction: (id) => dispatch(DeleteUserAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DataTable);