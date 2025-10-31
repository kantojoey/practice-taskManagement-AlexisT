import React from "react";
import { Link, useParams } from "react-router";

const TaskDetails = ({tasks}) => {
    const {id} = useParams();

    // Have to use Number() because value pulled from URL will be a string
    const task = tasks.find((task) => task.id === Number(id));

    if (!task){
        return(
            <div>
                <h2>Error: Task not found! Please try again,</h2>
                <Link to = "/">↵ Return to task list</Link>
            </div>
        )
    };

    return (
        <div>
            <h2>Task: {task.title}</h2>
            <p>{task.description}</p>
            <Link to = "/">↵ Return to task list</Link>
        </div>
    );
};

export default TaskDetails;
