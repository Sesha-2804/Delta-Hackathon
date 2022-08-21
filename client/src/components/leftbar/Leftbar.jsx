
import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import './leftbar.css';

export default function Leftbar(props) {
    const [tt, setTt] = useState([])
    const [updated,setUpdated]=useState(false)
    const sub=useRef()
    const prof=useRef()
    const timings=useRef()
    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log("fetching data");
                const res=await axios.get("/auth/currentuser", {
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                console.log(res)
                setTt(res.data.timetable)

            } catch (err) {
                console.log(err);
            }
        }
        fetchUser()
    },[updated])
    
    
    const handleSubmit=async(event)=>{

        event.preventDefault()
        setUpdated(false)
        const ttobj={
            sub:sub.current.value,
            prof:prof.current.value,
            timings:timings.current.value
        }
        try{
            const res= await axios.put("auth/updateTT",ttobj,{
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setUpdated(true)
        }
        catch(err){
            
        }
        
        
        
        
    }
    



    return (
        
        <div className="leftbarContainer">
            <div className="leftbarWrapper">
                <div className="leftbarHead">
                    <h1>Time Table</h1>
                </div>
                <div className="ttList">
                    {
                        
                        tt.map((clas)=>(
                                <div key={clas.timings} className="indivClassCont">
                                    <div className="indivClassContleft">
                                        <span className="subject">{clas.sub}</span>
                                        <span className="profName">{clas.prof}</span>
                                    </div>
                                    <div className="indivClassContright">
                                        <span className="timings">{clas.timings}</span>
                                    </div>
                                </div>
                    ))
                    }
                </div>
                <div className="leftbarBottom">
                    <form className="ttform" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Sub" className="toDoinput" ref={sub} />
                        <input type="text" placeholder="Prof" className="toDoinput" ref={prof} />
                        <input type="text" placeholder="Timings" className="toDoinput" ref={timings} />

                        <button type="submit" className="addbtn">Add</button>
                    </form>
                </div>
            </div>

        </div>
    )

}
