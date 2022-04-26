import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./Page/HomePage/HomePage";
import LoginPage from "./Page/loginPage.js/LoginPage"
import AdminDashboard from "./Page/AdminPage/AdminDashboard";
import ManageUser from "./Page/AdminPage/Manager/ManageUser";
// import ShopPage from "../component/Shop/ShopPage";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin">
            <Route index element={<AdminDashboard />}></Route>
            <Route path="users" element={<ManageUser />}></Route>
          </Route>
        </Routes>
      </Fragment>
    )
  }
}

export default App