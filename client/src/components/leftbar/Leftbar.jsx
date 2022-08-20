
import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import './leftbar.css';

export default function Leftbar(props) {
    const [tt, setTt] = useState([])
    const sub=useRef()
    const prof=useRef()
    const timings=useRef()
    useEffect(() => {
        setTt(props.deets.timetable)
    }, [props.deets.timetable])
    const handleSubmit=async()=>{
        
        const ttobj={
            sub:sub.current.value,
            prof:prof.current.value,
            timings:timings.current.value
        }
        await axios.put("auth/updateTT",ttobj,{
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        
    }
    



    return (
        <div className="leftbarContainer">
            <div className="leftbarWrapper">
                <div className="leftbarHead">
                    <h1>Time Table</h1>
                </div>
                <div className="followingsList">
                    {
                    //     tt.map((clas)=>(
                    // <div className="indivClassCont">
                    //     <div className="indivClassContleft">
                    //         <span className="subject">{clas.sub}</span>
                    //         <span className="profName">{clas.prof}</span>
                    //     </div>
                    //     <div className="indivClassContright">
                    //         <span className="timings">{clas.timings}</span>
                    //     </div>
                    // </div>
                    // ))
                    }

                    <div className="indivClassCont">
                        <div className="indivClassContleft">
                            <span className="subject">Maths</span>
                            <span className="profName">Harris</span>
                        </div>
                        <div className="indivClassContright">
                            <span className="timings">08:00-11:00</span>
                        </div>
                    </div>
                    <div className="indivClassCont">
                        <div className="indivClassContleft">
                            <span className="subject">Maths</span>
                            <span className="profName">Harris</span>
                        </div>
                        <div className="indivClassContright">
                            <span className="timings">08:00-11:00</span>
                        </div>
                    </div>
                    <div className="indivClassCont">
                        <div className="indivClassContleft">
                            <span className="subject">Maths</span>
                            <span className="profName">Harris</span>
                        </div>
                        <div className="indivClassContright">
                            <span className="timings">08:00-11:00</span>
                        </div>
                    </div>
                    <div className="indivClassCont">
                        <div className="indivClassContleft">
                            <span className="subject">Maths</span>
                            <span className="profName">Harris</span>
                        </div>
                        <div className="indivClassContright">
                            <span className="timings">08:00-11:00</span>
                        </div>
                    </div>
                    <div className="indivClassCont">
                        <div className="indivClassContleft">
                            <span className="subject">Maths</span>
                            <span className="profName">Harris</span>
                        </div>
                        <div className="indivClassContright">
                            <span className="timings">08:00-11:00</span>
                        </div>
                    </div>
                    <div className="indivClassCont">
                        <div className="indivClassContleft">
                            <span className="subject">Maths</span>
                            <span className="profName">Harris</span>
                        </div>
                        <div className="indivClassContright">
                            <span className="timings">08:00-11:00</span>
                        </div>
                    </div>
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
