import React, { Component } from 'react'
import SideBar from "../../../../component/SideBar/SideBar"
import NavBar from "../../../../component/NavBar/NavBar"
export default class List extends Component {
    render() {
        return (
            <div className='list'>
                <SideBar />
                <div className='list-container'>
                    <NavBar />
                </div>
            </div>
        )
    }
}
