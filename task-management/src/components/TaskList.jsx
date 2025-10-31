import React from "react";
import { Link } from "react-router";


const TaskList = ({ tasks }) => {
    return (
        <div>
            <h2 className = "list-title">Task List:</h2>
            <div className = "task-list">
                <ul>
                    {tasks.map((task) =>
                        <li key={task.id}>
                            <Link to={`/task/${task.id}`}>
                                {task.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
