import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import './rightbar.css';
import axios from "axios";

export default function Leftbar() {
    const [todo, setTodo] = useState([])
    const [updated,setUpdated]=useState(false)
    
    const task=useRef()
    const deadline=useRef()
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
                setTodo(res.data.todos)

            } catch (err) {
                console.log(err);
            }
        }
        fetchUser()
    },[updated])
    const handleSubmit=async(event)=>{

        event.preventDefault()
        setUpdated(false)
        const todoobj={
            task:task.current.value,
            deadline:deadline.current.value,
            
        }
        try{
            const res= await axios.put("auth/updateTodo",todoobj,{
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
                    <h1>To Do's</h1>
                </div>
                <div className="todoList">
                {
                        
                        todo.map((each)=>(
                            <div key={each.task} className="indivTodoCont">
                            <input type="checkbox" className="checkbox" />
                            <span className="toDo">{each.task}</span>
                            <span className="time">{each.deadline}</span>
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    ))
                    }
                    
                    
                </div>
                <div className="leftbarBottom">
                    <form className="todoform" onSubmit={handleSubmit}>
                        <input type="text" placeholder="task" className="toDoinput" ref={task} />
                        <input type="text" placeholder="Deadline" className="toDoinput" ref={deadline} />
                        <button type="submit" className="addbtn">Add</button>
                    </form>
                </div>
            </div>

        </div>
    )

}
