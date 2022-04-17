import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "../component/HomePage/HomePage";
import LoginPage from "../component/loginPage.js/LoginPage"
import AdminDashboard from "../component/AdminPage/AdminDashboard";
// import ShopPage from "../component/Shop/ShopPage";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/Shop" element={<ShopPage/>}/> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Fragment>
    )
  }
}

export default App