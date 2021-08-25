import React from 'react'
import SideMenuBar from './SideMenu/SideMenuBar'
import Topbar from './Topbar/Topbar'
import { userData } from "./dummyData";
import Chart from './Chart/Chart';
import UserInfo from './UserInfo/UserInfo';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}
const AdminBoard = () => {
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2">
                    <SideMenuBar />
                </div>
                <div className="col-md-10">
                    {/* <h2>show details</h2> */}
                    <Topbar></Topbar>    
                    <UserInfo></UserInfo>              
                    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
                </div>
            </div>
        </section>
    )
}

export default AdminBoard
