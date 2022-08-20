import React from "react";
import './rightbar.css';

export default function Leftbar() {





    return (
        <div className="leftbarContainer">
            <div className="leftbarWrapper">
                <div className="leftbarHead">
                    <h1>To Do's</h1>
                </div>
                <div className="followingsList">
                    <div className="indivTodoCont">
                        <input type="checkbox" className="checkbox" />
                        <span className="toDo">Lorem Ipsum</span>
                        <span className="time">tomorrow</span>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <div className="indivTodoCont">
                        <input type="checkbox" className="checkbox" />
                        <span className="toDo">Lorem Ipsum</span>
                        <span className="time">tomorrow</span>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <div className="indivTodoCont">
                        <input type="checkbox" className="checkbox" />
                        <span className="toDo">Lorem Ipsum</span>
                        <span className="time">tomorrow</span>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <div className="indivTodoCont">
                        <input type="checkbox" className="checkbox" />
                        <span className="toDo">Lorem Ipsum</span>
                        <span className="time">tomorrow</span>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <div className="indivTodoCont">
                        <input type="checkbox" className="checkbox" />
                        <span className="toDo">Lorem Ipsum</span>
                        <span className="time">tomorrow</span>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <div className="indivTodoCont">
                        <input type="checkbox" className="checkbox" />
                        <span className="toDo">Lorem Ipsum</span>
                        <span className="time">tomorrow</span>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <div className="indivTodoCont">
                        <input type="checkbox" className="checkbox" />
                        <span className="toDo">Lorem Ipsum</span>
                        <span className="time">tomorrow</span>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
                <div className="leftbarBottom">
                    <form className="todoform">
                        <input type="text" placeholder="task" className="toDoinput" />
                        <input type="text" placeholder="Deadline" className="toDoinput" />
                        <button type="submit" className="addbtn">Add</button>
                    </form>
                </div>
            </div>

        </div>
    )

}
