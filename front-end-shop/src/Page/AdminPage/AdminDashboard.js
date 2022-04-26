import React, { Component } from 'react'
import './AdminDashboard.scss'
import NavBar from '../../component/NavBar/NavBar'
import SideBar from "../../component/SideBar/SideBar"
import Widget from '../../component/Widget/Widget'
import Featured from '../../component/Featured/Featured'
import Chart from '../../component/Chart/Chart'
import Table from '../../component/Tables/Table'
class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    data = [
        {
            title: "users",
            isMoney: false,
            link: "See all users",
            icon: <i className="fa-solid fa-user icon" style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}></i>
        },
        {
            title: "order",
            isMoney: false,
            link: "See all orders",
            icon: <i className="fa-solid fa-cart-shopping icon" style={{ color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)" }}></i>
        },
        {
            title: "earnings",
            isMoney: true,
            link: "See net earnings ",
            icon: <i className="fa-solid fa-coins icon" style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}></i>
        },
        {
            title: "balance",
            isMoney: true,
            link: "See details",
            icon: <i className="fa-solid fa-wallet icon" style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}></i>
        }
    ]
    render() {
        return (
            <div className='admin-page'>
                <div className='nav-side'>
                    <SideBar />
                </div>
                <div className='content'>
                    <NavBar />
                    <div className='widgets'>
                        {
                            this.data.map((item, key) => {
                                return (
                                    <Widget key={key} data={item} />
                                )
                            })
                        }
                    </div>
                    <div className='charts'>
                        <Featured />
                        <Chart />
                    </div>
                    <div className='list-container'>
                        <div className='list-title'>Laster Transactions</div>
                        <Table />
                    </div>
                </div>
            </div>
        )
    }

}
export default AdminDashboard
