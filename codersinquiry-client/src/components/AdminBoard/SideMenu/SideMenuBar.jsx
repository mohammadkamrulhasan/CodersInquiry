import React from 'react'
import { Link } from 'react-router-dom'
import './SideMenubar.css'
const SideMenuBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <span>Home </span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/users" className="text-white" >
                        <span>All Users</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white" >
                      <span>Manage Article</span>
                    </Link>
                </li>
                        
                       
            </ul>
        </div>
    )
}

export default SideMenuBar
