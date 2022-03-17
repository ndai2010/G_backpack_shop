import React, { Component } from 'react'
import './ProductTab.scss'
export default class ProductTab extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='product-tab' style={{ height: '300px' }}>
                <div className='title-box container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='title'>
                                <span>Trending products</span>
                            </div>
                            <div className='tab-nav row'>
                                <div className='col-3'>
                                    bss
                                </div>
                                <div className='col-3'>
                                    bss
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
