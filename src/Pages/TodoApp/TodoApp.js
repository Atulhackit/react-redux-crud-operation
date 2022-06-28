import React, { useEffect, useState } from "react";
import "./Home.css"
import TodoBody from "./TodoBody";

const TodoApp = (props) => {
    console.log(props)
    const [inputTask, setInputTask] = useState("");
    const [taskArr, setTaskArr] = useState([
        {
            title: "Wake Up",
            completed: false
        }
    ]);
    const [buttonId, setButtonId] = useState('');
    const [count, setCount] = useState(0);

    const changeHandler = (e) => {
        setInputTask(e.target.value)
    }

    useEffect(() => {
        const arrlen = taskArr.filter((task) => task.completed === false).length
        setCount(arrlen)
    })
    console.log(taskArr)


    const AddElement = () => {
        if (!inputTask){
            alert("add Item !")
        }
        else{
            setTaskArr((oldItems) => {
                return [...oldItems, {
                    title: inputTask,
                    completed: false
                }]
            });
            setInputTask('');
        }
    }


    const deleteTask = (id) => {
        setTaskArr((oldItems) => {
            return oldItems.filter((arrelement, index) => {
                return index !== id;
            })
        })
    }

    const StrikeTask = (id) => {
        const currentEle = document.getElementById(id)
        if (currentEle.style.textDecoration = "line-through") {
            for (let i = 0; i < taskArr.length; i++) {
                console.log(taskArr[id])
                taskArr[id].completed = true
            }
        }

        const comp = document.getElementsByClassName("buttonId")
        setButtonId(id + "btn")
    }


    return (
        <>
            <div className="Main-container" >
                <div className="Box-Container">
                    <h1 className="Heading">Pending Tasks ({count})</h1>
                    <section className="List-body">
                        <ul>
                            {
                                taskArr.map((Val, index) => {
                                    return (
                                        <TodoBody
                                            key={index}
                                            id={index}
                                            text={Val}
                                            onSelect={deleteTask}
                                            onStrike={StrikeTask}
                                            buttonId={buttonId}
                                           

                                        />
                                    )
                                })
                            }
                        </ul>
                    </section>
                    <section className="input-field">
                        <input type="text" placeholder="Add a New Task" value={inputTask} onChange={changeHandler} ></input>
                        <button onClick={AddElement} id="add-btn">Add Task</button>
                    </section>
                </div>
            </div>
        </>
    )
}

export default TodoApp