
import React from 'react';
import './AddNewUserModal.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import Select from 'react-select'

class AddNewUserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    toggle() {
        this.props.toggleModal();
    }

    render() {
        return (
            <div className='modal'>
                <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }}>
                    <ModalHeader className='header' toggle={() => { this.toggle() }}>Add User</ModalHeader>
                    <ModalBody>
                        <form className='form-group'>
                            <div className='mb-3'>
                                <label class="form-label">User Name</label>
                                <input type="text" class="form-control" />
                            </div>

                            <div className='mb-3'>
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div className='mb-3'>
                                <label class="form-label">Phone</label>
                                <input type="tel" class="form-control" />
                            </div>
                            <div className='mb-3'>
                                <label class="form-label">Address</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div className='select-group'>
                                <div className='mb-3 select'>
                                    <label class="form-label">Gender</label>
                                    <Select />
                                </div>
                                <div className='mb-3 select'>
                                    <label class="form-label">Role</label>
                                    <Select />
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='close-btn' onClick={() => { this.toggle() }}>Close</Button>
                        <Button className='add-btn' onClick={() => { this.handleClickAdd() }}>Add User</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AddNewUserModal;