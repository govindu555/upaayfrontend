import { useState } from "react";
import "./form.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const FormPage=()=>{

   const [userdata,setUserdata]=useState({
    title:"",
    description:"",
    priority:""
   })

   function formfun(e){
       const {name,value}=e.target;
       setUserdata({...userdata,[name]:value})
   }

   const nav=useNavigate()

   async function submitfun(e){
         e.preventDefault();
         await axios.post("https://upaaybackend-2.onrender.com/userdata/",userdata)
         nav("/mobile")
   }

    return(
        <div className="formmain">
            <form onSubmit={submitfun}>
                <div className="formitems">
                    <h1 className="formhead">Title</h1>
                    <input className="forminput" type="text" placeholder="Title" name="title" onChange={formfun} required/>
                </div>
                <div className="formitems">
                    <h1 className="formhead">description</h1>
                    <input className="forminput" type="text" placeholder="description" name="description" onChange={formfun} required/>
                </div>
                <div className="formitems">
                    <h1 className="formhead">priority</h1>
                    <select className="forminput" name="priority" onChange={formfun} required>
                        <option>Priority</option>
                        <option>Low</option>
                        <option>High</option>
                        <option>Medium</option>
                    </select>
                </div>
                <div>
                    <input className="formsubmit" type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default FormPage;