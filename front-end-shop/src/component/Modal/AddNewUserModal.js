
import React from 'react';
import './AddNewUserModal.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import Select from 'react-select'

class AddNewUserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            phone: '',
            gender: '',
            role: ''
        };
    }

    toggle() {
        this.props.toggleModal();
    }
    optionsGender = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ]
    optionsRole = [
        { label: 'Admin', value: 'Admin' },
        { label: 'Customer', value: 'Customer' },
    ]

    onChangeInput = (event, id) => {
        let coppyState = { ...this.state }
        coppyState[id] = event.target.value
        this.setState({
            ...coppyState
        })
    }
    onChangeSelect = (value, id) => {
        let coppyState = { ...this.state }
        coppyState[id] = value
        this.setState({
            ...coppyState
        })
    }

    onClickCreate = () => {
        console.log(this.state);
    }
    render() {
        return (
            <div className='modal'>
                <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }}>
                    <ModalHeader className='header' toggle={() => { this.toggle() }}>Add User</ModalHeader>
                    <ModalBody>
                        <form className='form-group'>
                            <div className='mb-3'>
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.firstName}
                                    onChange={(event) => this.onChangeInput(event, 'firstName')}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.lastName}
                                    onChange={(event) => this.onChangeInput(event, 'lastName')}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={(event) => this.onChangeInput(event, 'email')}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={(event) => this.onChangeInput(event, 'password')}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Phone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={this.state.phone}
                                    onChange={(event) => this.onChangeInput(event, 'phone')}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.address}
                                    onChange={(event) => this.onChangeInput(event, 'address')}
                                />
                            </div>
                            <div className='select-group'>
                                <div className='mb-3 select'>
                                    <label className="form-label">Gender</label>
                                    <Select
                                        options={this.optionsGender}
                                        onChange={(event) => this.onChangeSelect(event.value, 'gender')}
                                    />
                                </div>
                                <div className='mb-3 select'>
                                    <label className="form-label">Role</label>
                                    <Select
                                        options={this.optionsRole}
                                        onChange={(event) => this.onChangeSelect(event.value, 'role')}
                                    />
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='close-btn' onClick={() => { this.toggle() }}>Close</Button>
                        <Button className='add-btn' onClick={() => { this.onClickCreate() }}>Add User</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AddNewUserModal;