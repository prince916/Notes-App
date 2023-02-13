import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';


const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }



    return (
        <>
            <nav className="navbar">
                <img src="https://cdn-icons-png.flaticon.com/128/888/888840.png" className="brand-logo" alt=""></img>
                <ul className="nav-links">
                    <li className="nav-items"><a href="#">Home</a></li>
                    <li className="nav-items"><a href="#">Contact</a></li>
                    <li className="nav-items"><a href="#">Favourite</a></li>
                    <li className="nav-items"><a href="#">Premium</a></li>

                </ul>
                <div className='right-container'>
                    <input type="text" className="search-box" placeholder="search"></input>
                    <button className="sub-button">Login</button>
                
                </div>
                
            </nav>
            <div className = "header text-center">
                <h3>Notes App</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>
                <p>Created by Prince Kumar Sharma</p>
            </div>
            <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
            
        </>
    );
};

export default TodoList;

