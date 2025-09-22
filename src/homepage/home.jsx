import { useNavigate } from "react-router-dom";
import "./home.css"


const HomePage=()=>{

    const nav=useNavigate()

   function homefun(){
       nav("/mobile")
   }

    return(
        <div className="homemain">
            <div>
                <h1 className="homehead">HII, Every One Welcome to this...</h1>
                <button className="homebutton" onClick={homefun}>Mobile app</button>
            </div>
        </div>
    )
}

export default HomePage;