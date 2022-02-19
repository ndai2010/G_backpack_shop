import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom"
import HomePage from "../component/HomePage/HomePage";
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