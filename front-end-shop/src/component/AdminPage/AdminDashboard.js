import React, { Component } from 'react'
import { connect } from 'react-redux';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>AdminDashboard</div>
        )
    }

}
export default connect(AdminDashboard)
