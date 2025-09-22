
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavPage from './navpage/nav';
import SideNavPage from './sidenavpage/sidenav';
import MobilePage from './mobilepage/mobile';
import FormPage from './formpage/form';


const App=()=>{

  return (
    <>
      <div>
        <BrowserRouter>
           <NavPage/>
           <SideNavPage/>
           <Routes>
              <Route path='/mobile' Component={MobilePage}/>
              <Route path='/form' Component={FormPage}/>
           </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
