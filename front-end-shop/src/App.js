import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./Page/HomePage/HomePage";
import LoginPage from "./Page/loginPage.js/LoginPage"
// import ShopPage from "../component/Shop/ShopPage";
import AdminPage from './Page/AdminPage/AdminPage'
import ManageUser from './Page/AdminPage/Manage/ManageUsers'
import ManageProduct from './Page/AdminPage/Manage/ManageProduct'
import SideBar from "./component/SideBar/SideBar";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin">
            <Route index element={<AdminPage />}></Route>
            <Route path="manage-users" element={<ManageUser />}></Route>
            <Route path="manage-product" element={<ManageProduct />}></Route>
          </Route>
        </Routes>
      </Fragment>
    )
  }
}

export default App