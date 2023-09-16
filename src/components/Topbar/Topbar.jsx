import  './topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import img from '../../images/img10.jpg'
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
                <span className="topiconbadge">2</span>
                </div>
                <div className="topiconcontainer">
                     <LanguageIcon/>
         
                </div>
                <div className="topiconcontainer">
                     <SettingsIcon/>
                </div>
               <img src={img} alt="" className="topimage" />
            </div>
       </div>
     </div>

  )
}

export default Topbar
