import { useEffect, useState } from "react";
import "./mobile.css"
import { BsHighlighter } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsLink } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsUiRadiosGrid } from "react-icons/bs";
import { BsFunnel } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsChatSquareDots } from "react-icons/bs";
import { BsFileEarmarkMinus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MobilePage=()=>{

    useEffect(()=>{
        secondfun()
    },[])

    const [userdata,setUserdata]=useState([])
    const [userdata2,setUserdata2]=useState([])
    const [userdata3,setUserdata3]=useState([])

    async function secondfun(){
       const data=await axios.get("https://upaaybackend-2.onrender.com/getuserdata")
       setUserdata(data.data)
       const data2=await axios.get("https://upaaybackend-2.onrender.com/getprogress")
       setUserdata2(data2.data)
       const data3=await axios.get("https://upaaybackend-2.onrender.com/getdonedata")
       setUserdata3(data3,data)
    }

   const nav=useNavigate()

   function navfun(){
     nav("/form")
   }

   async function progressfun(data){
        const d= await axios.post("https://upaaybackend-2.onrender.com/progressdata/",data)
        setUserdata2(d.data)
        const result= await axios.delete("https://upaaybackend-2.onrender.com/deletedata/"+data._id)
        setUserdata(result.data)
   }

   async function donefun(data){
          const d=await axios.post("https://upaaybackend-2.onrender.com/donedata/",data)
          setUserdata3(d.data)
          const result=await axios.delete("https://upaaybackend-2.onrender.com/deleteprogress/"+data._id)
          setUserdata2(result.data)
   }

    return(
        <div className="mobilemain">
            <div>
                <div className="mobileparts">
                    <div className="mobilepart">
                        <h1 className="mobilehead">Mobile App</h1>
                        <div className="mobilehead2">
                            <BsHighlighter className="mobilehead3" />
                            <BsLink className="mobilehead3"/>
                        </div>
                    </div>
                    <div className="mobileparts2">
                        <div><BsPlus className="mobilehead5"/></div>
                        <h1 className="mobilehead4">Invite</h1>
                        <img className="mobileimage" src="https://photoaid.com/en/tools/_next/static/images/young-man-using-face-id-for-unlock-mobile-phone-ou-2021-08-30-06-38-15-utc-photoaidcom-2x-ai-zoom-df16fe69a772e00c82255493e4b5966d.jpg"/>
                        <img className="mobileimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGVkrvK6W-x8zINx5YLqA-6KsDfjknXDob6oHVDM4Yy0L0cPecZHEYO4kG0nW8ORo3mo&usqp=CAU"/>
                        <img className="mobileimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPueHVIh8Vsbn3nslGm2I5GQaUSNYHs742YKVX87PN4cLmTMiveNI7eJWz_37aiZREWZA&usqp=CAU"/>
                        <img className="mobileimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjfKKG7ayQ67eENQsTyVmAJvy2vIyLaQ9Ov-gKADpkKjjRgn6Fnf57eAi5gfPlyMCx0c&usqp=CAU"/>
                        <div className="mobileimage2">+2</div>
                    </div>
                </div>
                <div className="mobileparts3">
                    <div className="mobileparts4">
                        <div className="mobileitem"><BsFunnel /> Filter <BsChevronDown /></div>
                        <div className="mobileitem"><BsCalendar2Date /> Today <BsChevronDown /></div>
                    </div>
                    <div className="mobileparts5">
                        <div className="mobileitem"><BsPeople /> Share </div>
                        <div className="mobileitem1">|</div>
                        <div className="mobileitem2">=</div>
                        <div className="mobileitem3"><BsUiRadiosGrid /></div>
                    </div>
                </div>
                <div className="mobileparts10">
                    <div className="mobileparts6">
                        <div className="mobileitems">
                            <div className="mobileitems2">
                              <div className="mobilecircle"></div>
                              <h1 className="mobilehead6"> To Do </h1>
                              <div className="number">{userdata.length}</div>
                            </div>
                             <div onClick={navfun}><BsPlus className="mobilehead5"/></div>
                        </div>
                        <hr className="mobileline"/>
                        {userdata.map(i=>(<div className="mobileparts8">
                            <div className="mobileparts7">
                                <div className="mobilelow">{i.priority}</div>
                                <div><BsThreeDots /></div>
                            </div>
                            <div>
                                <h1 className="mobilehead7">{i.title}</h1>
                                <p className="mobilehead8">{i.description}</p>
                                <p className="mobilehead8">If you want to change as Progress <span onClick={()=>progressfun(i)}>Click Here</span></p>
                            </div>
                            <div className="mobilehead9">
                                <div>
                                     <img className="mobileimage3" src="https://photoaid.com/en/tools/_next/static/images/young-man-using-face-id-for-unlock-mobile-phone-ou-2021-08-30-06-38-15-utc-photoaidcom-2x-ai-zoom-df16fe69a772e00c82255493e4b5966d.jpg"/>
                                     <img className="mobileimage3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPueHVIh8Vsbn3nslGm2I5GQaUSNYHs742YKVX87PN4cLmTMiveNI7eJWz_37aiZREWZA&usqp=CAU"/>
                                     <img className="mobileimage3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjfKKG7ayQ67eENQsTyVmAJvy2vIyLaQ9Ov-gKADpkKjjRgn6Fnf57eAi5gfPlyMCx0c&usqp=CAU"/>
                                </div>
                                <div><BsChatSquareDots /> 12 comments </div>
                                <div><BsFileEarmarkMinus /> 0 files</div>
                            </div>
                        </div>))}
                    </div>
                    <div className="mobileparts6">
                        <div className="mobileitems">
                            <div className="mobileitems2">
                              <div className="mobilecircle2"></div>
                              <h1 className="mobilehead6"> On Progress </h1>
                              <div className="number">{userdata2.length}</div>
                            </div>
                        </div>
                        <hr className="mobileline2"/>
                        {userdata2.map(i=>(<div className="mobileparts8">
                            <div className="mobileparts7">
                                <div className="mobilelow">{i.priority}</div>
                                <div><BsThreeDots /></div>
                            </div>
                            <div>
                                <h1 className="mobilehead7">{i.title}</h1>
                                <p className="mobilehead8">{i.description}</p>
                                <p className="mobilehead8">If you want to change as Done <span onClick={()=>donefun(i)}>Click Here</span></p>
                            </div>
                            <div className="mobilehead9">
                                <div>
                                     <img className="mobileimage3" src="https://photoaid.com/en/tools/_next/static/images/young-man-using-face-id-for-unlock-mobile-phone-ou-2021-08-30-06-38-15-utc-photoaidcom-2x-ai-zoom-df16fe69a772e00c82255493e4b5966d.jpg"/>
                                     <img className="mobileimage3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPueHVIh8Vsbn3nslGm2I5GQaUSNYHs742YKVX87PN4cLmTMiveNI7eJWz_37aiZREWZA&usqp=CAU"/>
                                     <img className="mobileimage3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjfKKG7ayQ67eENQsTyVmAJvy2vIyLaQ9Ov-gKADpkKjjRgn6Fnf57eAi5gfPlyMCx0c&usqp=CAU"/>
                                </div>
                                <div><BsChatSquareDots /> 12 comments </div>
                                <div><BsFileEarmarkMinus /> 0 files</div>
                            </div>
                        </div>))}
                    </div>
                    <div className="mobileparts6">
                        <div className="mobileitems">
                            <div className="mobileitems2">
                              <div className="mobilecircle3"></div>
                              <h1 className="mobilehead6"> Done </h1>
                              <div className="number">{userdata3.length}</div>
                            </div>
                        </div>
                        <hr className="mobileline3"/>
                        {userdata3.map(i=>(<div className="mobileparts8">
                            <div className="mobileparts7">
                                <div className="mobilelow">{i.priority}</div>
                                <div><BsThreeDots /></div>
                            </div>
                            <div>
                                <h1 className="mobilehead7">{i.title}</h1>
                                <p className="mobilehead8">{i.description}</p>
                            </div>
                            <div className="mobilehead9">
                                <div>
                                     <img className="mobileimage3" src="https://photoaid.com/en/tools/_next/static/images/young-man-using-face-id-for-unlock-mobile-phone-ou-2021-08-30-06-38-15-utc-photoaidcom-2x-ai-zoom-df16fe69a772e00c82255493e4b5966d.jpg"/>
                                     <img className="mobileimage3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPueHVIh8Vsbn3nslGm2I5GQaUSNYHs742YKVX87PN4cLmTMiveNI7eJWz_37aiZREWZA&usqp=CAU"/>
                                     <img className="mobileimage3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjfKKG7ayQ67eENQsTyVmAJvy2vIyLaQ9Ov-gKADpkKjjRgn6Fnf57eAi5gfPlyMCx0c&usqp=CAU"/>
                                </div>
                                <div><BsChatSquareDots /> 12 comments </div>
                                <div><BsFileEarmarkMinus /> 0 files</div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobilePage;