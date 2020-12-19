
import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../services/Auth';
import AdminNavbar from '../layout/AdminNavbar';
import UserNavbar from '../layout/UserNavbar';

function Navbar({ onLogout }) {
    //const userEmail = window.sessionStorage.getItem('userEmail');
    const userMail = Auth.getUserMail();

    return (

        userMail.match('simba') ? <AdminNavbar onLogout={() => Auth.logout()} /> : <UserNavbar onLogout={() => Auth.logout()} />

    );
}

export default Navbar;
