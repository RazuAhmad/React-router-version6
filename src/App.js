import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderLink from "./Components/HeaderLink/HeaderLink";
import Home from "./Components/Home/Home";
import PersonalProfile from "./Components/PersonalProfile/PersonalProfile";
import SeeDetails from "./Components/SeeDetails/SeeDetails";
// import {BrowserRouter} from react-router-dom;
const App = () => {
  return (
    <>
      <HeaderLink />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/see-details" element={<SeeDetails />} />
        <Route path="/personal-profile" element={<PersonalProfile />} />
      </Routes>
    </>
  );
};

export default App;
