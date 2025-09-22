import "./nav.css"
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

const NavPage=()=>{
    return(
        <div className="navmain">
            <div className="navmain2">
                <img className="navimageicon" src="https://www.seekpng.com/png/detail/16-166081_3-circles-png-clipart-library-three-blue-circles.png"/>
                <h1 className="navhead">Project M.</h1>
                <BsChevronDoubleLeft  className="navleft"/>
                <div className="navsearch">
                    <BsSearch  className="navsearch3"/><input className="navsearch2" type="search" placeholder=" Search for anyting..."/>
                    </div>
                <div className="navicons">
                 <BsCalendar3  className="navicon1"/> 
                 <BsChatDots className="navicon1"/>
                 <BsBell className="navicon1"/>
                </div>
                <div className="navtexts">
                    <div>
                        <h1 className="navtext">Palak Jain</h1>
                        <h1 className="navtext1">Rajathan, India</h1>
                    </div>
                    <img className="navimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7C3gXrwF1bgCJ-XKXj-aemrsXUNb1rOcEEg&s"/>
                    <BsChevronDown className="navarrow"/>
                </div>
            </div>
        </div>
    )
}

export default NavPage;