import  './topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
  return (
    <div className="topbar"> 
     <div className="topbarwrapper">
        <div className="topleft">
            <span className="logo">My App</span>
        </div>
        <div className="topright">
        <div className="topiconcontainer">
        <NotificationsIcon/>
        {/* <LanguageIcon/> */}
        {/* <SettingsIcon/> */}
        <span className="topiconbadge">2</span>
        </div>
     
        </div>
     </div>
    </div>
  )
}

export default Topbar
