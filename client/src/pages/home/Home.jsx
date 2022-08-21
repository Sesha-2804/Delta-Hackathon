import React from "react";
import './home.css'
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Search from '../../components/search/Search'
import Terminal from "../../components/terminal/Terminal";
import { useEffect,useState } from "react";
import axios from "axios";





export default function Home(){
    const [user, setUser] = useState({})
    const [backgroundcolor, setBackgroundcolor] = useState('');
    const [timetablechange,setTimetablechange]=useState({})

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res=await axios.get("/auth/home", {
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                console.log(res)
                setUser(res.data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchUser()
    },[backgroundcolor,timetablechange])
    return(
        <>
            <Topbar/>
            <div className="homeContainer" style={{"background-color":backgroundcolor}}>
                <Leftbar deets={user.timetable} onchange={(arg)=>setTimetablechange(arg)}/>
                <div className="maindiv">
                    <Search/>
                    <Terminal onchange={(arg)=>setBackgroundcolor(arg)}/>
                </div>
                <Rightbar/>
                
            </div>
        </>
    )
}