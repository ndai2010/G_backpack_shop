import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Widget.scss'
export default class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: "10000",
            diff: "20"
        }
    }
    render() {
        return (
            <div className='widget'>
                <div className='left'>
                    <span className='title'>{this.props.data.title}</span>
                    <span className='counter'>
                        {this.props.data.isMoney && "$"} {this.state.amount}
                    </span>
                    <Link to={this.props.data.path} style={{ textDecoration: "none" }}>
                        <span className='link'>{this.props.data.link}</span>
                    </Link>
                </div>
                <div className='right'>
                    <div className='percentage positive'><i className="fa-solid fa-angle-up"></i>{this.state.diff} %</div>
                    {this.props.data.icon}
                </div>
            </div>
        )
    }
}
