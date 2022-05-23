import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom"
import { connect } from "react-redux";
//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

//component-page
import HomePage from "./Page/HomePage/HomePage";
import LoginPage from "./Page/loginPage.js/LoginPage"
import AdminPage from './Page/AdminPage/AdminPage'
import SignUp from './Page/loginPage.js/SignUp'
import ManageUser from './Page/AdminPage/Manage/ManageUsers'
import ManageProduct from './Page/AdminPage/Manage/ManageProduct'
import ManageOders from './Page/AdminPage/Manage/ManageUsers'
import ManageDelivery from './Page/AdminPage/Manage/ManageDelivery'
import DashBoard from './Page/AdminPage/DashBoard/DashBoard'
import Profile from './component/Profile/Profile'
import NotFoundPage from "./Page/NotFoundPage/NotFoundPage";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: true
    }
  }
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<DashBoard />}></Route>
            <Route path="manage-users" element={<ManageUser />}></Route>
            <Route path="manage-products" element={<ManageProduct />}></Route>
            <Route path="manage-orders" element={<ManageOders />}></Route>
            <Route path="manage-delivery" element={<ManageDelivery />}></Route>
            <Route path="Profile" element={<Profile />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)