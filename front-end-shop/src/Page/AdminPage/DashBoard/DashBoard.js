import React, { Component } from 'react';
import './DashBoard.scss'
import Data from './Data'
import Widget from '../../../component/Widget/Widget'
import Chart from '../../../component/Chart/Chart'
import Featured from '../../../component/Featured/Featured'
class DashBoard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <div className='widgets'>
                    {
                        Data && Data.length > 0 && Data.map((item, key) => {
                            return (
                                <Widget
                                    data={item}
                                />
                            )
                        })
                    }
                </div>
                <div className='charts'>
                    <Featured />
                    <Chart />
                </div>
                <div className='list'></div>
            </div>
        );
    }
}

export default DashBoard;