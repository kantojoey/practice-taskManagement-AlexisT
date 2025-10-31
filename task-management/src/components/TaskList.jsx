import React from "react";
import { Link } from "react-router";


const TaskList = ({ tasks }) => {
    return (
        <div>
            <h2>Task List:</h2>
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
    );
};

export default TaskList;
