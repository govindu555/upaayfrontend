import "./sidenav.css"
import { BsGrid } from "react-icons/bs";
import { BsChatSquareDots } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { BsPlusSquare } from "react-icons/bs";
import {useNavigate} from "react-router-dom"

const SideNavPage=()=>{

    const nav=useNavigate()

   function navfun(){
        nav("/mobile")
   }

   function taskfun(){
      nav("/form")
   }


   function homefun(){
      nav("/")
   }

    return(
        <div className="sidenavmain">
            <div>
                <div className="sideitems">
                    <BsGrid className="sideicon"/>
                    <label className="sideitem" onClick={homefun}>Home</label>
                </div>
                <div className="sideitems">
                    <BsChatSquareDots className="sideicon"/>
                    <label className="sideitem">Messages</label>
                </div>
                <div className="sideitems">
                    <BsCardChecklist className="sideicon"/>
                    <label className="sideitem" onClick={taskfun}>Tasks</label>
                </div>
                <div className="sideitems">
                    <BsPeople className="sideicon"/>
                    <label className="sideitem">Members</label>
                </div>
                <div className="sideitems">
                    <BsGear className="sideicon"/>
                    <label className="sideitem">Settings</label>
                </div>
                <hr className="line"/>
                <div className="sideproject">
                    <label>MY PROJECTS</label>
                    <BsPlusSquare className="sideicon1"/>
                </div>
                <div className="sideitems sideitems2">
                    <div className="sidecircle1"></div>
                    <label className="sideitem" onClick={navfun}>Mobile App</label>
                </div>
                <div className="sideitems sideitems2">
                    <div className="sidecircle2"></div>
                    <label className="sideitem">Website Redesign</label>
                </div>
                <div className="sideitems sideitems2">
                    <div className="sidecircle3"></div>
                    <label className="sideitem">Design System</label>
                </div>
                <div className="sideitems sideitems2">
                    <div className="sidecircle4"></div>
                    <label className="sideitem">Wireframes</label>
                </div>
                <div className="sidebox">
                    <div className="sideimg">
                        <img  className="sideimage" src="https://png.pngtree.com/png-vector/20230530/ourmid/pngtree-the-light-bulb-glows-yellow-vector-png-image_7112350.png"/>
                    </div>
                    <h1 className="sidetext">Thoughts Time</h1>
                    <p className="sidepara">We don't have any notice for <br/>you, till then you can share <br/>your thoughts with your <br/>peers.</p>
                    <button className="sidebutton">Write a message</button>
                </div>
            </div>
        </div>
    )
}

export default SideNavPage;