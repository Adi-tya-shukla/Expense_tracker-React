import React, { Fragment, useContext } from "react";
import { Route, Routes } from "react-router";
import Login from "../Page/Login";
import Home from "../Page/HomePage";
import About from "../Page/AboutPage";
import ContactUsPage from "../Page/ContactUsPage";
import ChangePassPage from "../Page/ChangePassPage";
import ExpnContext from "../Store/ExpnContext";
import Profile from "../Page/Profile";
import ForgotPassPage from "../Page/ForgotPassPage";

const PageRoutes = () => {
    const ctx = useContext(ExpnContext)
    return (
        <Fragment>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/forgotPassword" element={<ForgotPassPage />} />

                {!ctx.isLoggedIn && <Route path="/login" element={<Login />} />}
                {!ctx.isLoggedIn && <Route path='*' element={<Login />} />}

                {/* -----------------pages which should render when user is login ----------------*/}
                {ctx.isLoggedIn && <Route path="/*" element={<Home />} />}
              
                {ctx.isLoggedIn && <Route path="/home" element={<Home />} />}
                {ctx.isLoggedIn && <Route path="/contact" element={< ContactUsPage />} />}
                {ctx.isLoggedIn && <Route path="/user/profile" element={<Profile />} />}
                {ctx.isLoggedIn && <Route path="/user/changepassword" element={<ChangePassPage />} />}
            </Routes>
        </Fragment>
    )
}

export default PageRoutes;