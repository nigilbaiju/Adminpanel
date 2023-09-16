import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import  './App.css';

function App() {
  return (
    <div >
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        <div className='other'>
          WELCOME TO ADMINPANEL
        </div>
      </div>

    </div>
  );
}

export default App;
