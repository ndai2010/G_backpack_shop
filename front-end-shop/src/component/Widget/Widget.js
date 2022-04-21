import React, { Component } from 'react'
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
        console.log(this.props.data);
        return (
            <div className='widget'>
                <div className='left'>
                    <span className='title'>{this.props.data.title}</span>
                    <span className='counter'>
                        {this.props.data.isMoney && "$"} {this.state.amount}
                    </span>
                    <span className='link'>{this.props.data.link}</span>
                </div>
                <div className='right'>
                    <div className='percentage positive'><i className="fa-solid fa-angle-up"></i>{this.state.diff} %</div>
                    {this.props.data.icon}
                </div>
            </div>
        )
    }
}
