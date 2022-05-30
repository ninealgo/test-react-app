import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home Page</Link></li>
                    <li><Link to={"/users"}>Users</Link></li>
                    <li><Link to={"/users/add"}>Add User</Link></li>
                </ul>
            </nav>
        </div>
    );
}