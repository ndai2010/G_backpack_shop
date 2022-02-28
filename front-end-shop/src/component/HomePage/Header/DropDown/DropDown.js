import React from "react";
import dataDropdown from './DataHeaderDropDown'
class DropDown extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data : dataDropdown
        }
    }
    componentDidMount(){
        
    }
    componentDidUpdate(prevProps , prevState, snapShot) {
       
    }
    render() {
        let {data} = this.state
        return (
            <div className="navigation">
                <ul className="parent-dropdown-container">
                    {
                        data && data.length > 0 && 
                        data.map((item, index)=>{
                            return(
                                <li className="parent-dropdown" key={index}>
                                    <div className="title">
                                        <span>{item.title}</span>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </div>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-content">
                                            <ul>
                                                {
                                                    item.dropContent && item.dropContent.length > 0 &&
                                                    item.dropContent.map((item)=>{
                                                        return(
                                                            <li>{item.name}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default DropDown