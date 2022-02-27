import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom"
import HomePage from "../component/HomePage/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Fragment>
    )
  }
}

export default App