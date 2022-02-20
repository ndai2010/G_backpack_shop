import React from "react";
class DropDown extends React.Component {
    render() {
        return (
            <div className="navigation">
                <ul className="parent-dropdown-container">
                    <li className="parent-dropdown">
                        <div className="title">
                            <span>Balo</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className="dropdown-menu">
                            <li className="dropdown-content">
                                <ul>
                                    <li>phụ kiện balo</li>
                                    <li>balo theo loại</li>
                                    <li>balo theo thương hiệu</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="parent-dropdown">
                        <div className="title">
                            <span>Trang phục</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className="dropdown-menu">
                            <li className="dropdown-content">
                                <ul>
                                    <li>phụ kiện balo</li>
                                    <li>balo theo loại</li>
                                    <li>balo theo thương hiệu</li>
                                </ul>
                            </li>
                        </ul>

                    </li>
                    <li className="parent-dropdown">
                        <div className="title">
                            <span>Dao - dụng cụ</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className="dropdown-menu">
                            <li className="dropdown-content">
                                <ul>
                                    <li>phụ kiện balo</li>
                                    <li>balo theo loại</li>
                                    <li>balo theo thương hiệu</li>
                                </ul>
                            </li>
                        </ul>

                    </li>
                    <li className="parent-dropdown">
                        <div className="title">
                            <span>Đồ dã ngoại</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className="dropdown-menu">
                            <li className="dropdown-content">
                                <ul>
                                    <li>phụ kiện balo</li>
                                    <li>balo theo loại</li>
                                    <li>balo theo thương hiệu</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="parent-dropdown">
                        <div className="title">
                            <span>Phụ kiện</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className="dropdown-menu">
                            <li className="dropdown-content">
                                <ul>
                                    <li>phụ kiện balo</li>
                                    <li>balo theo loại</li>
                                    <li>balo theo thương hiệu</li>
                                </ul>
                            </li>
                        </ul>

                    </li>
                </ul>
            </div>
        )
    }
}

export default DropDown