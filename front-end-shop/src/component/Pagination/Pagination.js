import React, { Component } from 'react';
import './Pagination.scss'
class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='pagination-container'>
                <div className='prev-btn btn item'>prev</div>
                <div className='list-page-number item'>
                    <span className='page-number'>1</span>
                    <span className='page-number'>2</span>
                    <span className='page-number'>3</span>
                </div>
                <div className='next-btn btn item'>next</div>
            </div>
        );
    }
}

export default Pagination;