import React from 'react'
import  './sidebar.css';
import {AvTimer,Timeline,Timelapse} from '@mui/icons-material';
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="sidebarwrapper">
    <div className="sidebarmenu">
            <h3 className="sidebartitle">Dashboard</h3>
            <ul className="sidebarlist">
                <li className="sidebarlistitem active">
                    <AvTimer/>
                    Student
                </li>
                <li className="sidebarlistitem">
                    <Timelapse/>
                    Course
                </li>
                <li className="sidebarlistitem">
                    <Timeline/>
                    Mark
                </li>
            </ul>
            
        </div>
        <div className="sidebarmenu">
            <h3 className="sidebartitle">Dashboard</h3>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">
                    <AvTimer/>
                    Student
                </li>
                <li className="sidebarlistitem">
                    <Timelapse/>
                    Course
                </li>
                <li className="sidebarlistitem">
                    <Timeline/>
                    Mark
                </li>
            </ul>
            
        </div>
    </div>
    </div>
  )
}

export default Sidebar
