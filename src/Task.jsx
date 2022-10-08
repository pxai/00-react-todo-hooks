import { useState } from "react";

const Task = ({task, handleUpdate, handleDelete}) => {
    const [edit, setEdit] = useState(false);
    const [taskValue, setTaskValue] = useState(task.name);

    const handleEdit = () => {
        setEdit(true);
    };

    const save = () => {
        handleUpdate({id: task.id, name: taskValue});
        setEdit(false);
    };

    const deleteTask = () => {
        handleDelete(task.id);
    };

    const setTask = (event) => {
        setTaskValue(event.target.value);
    };

    return (
        edit ?
            <div>
                <input type="text" value={taskValue} onChange={setTask}/>
                <button onClick={save}>Save</button>
            </div>
        :   <div aria-label="task">
                {task.id}
                {task.name}
                <button onClick={handleEdit}>Edit</button>
                <button onClick={deleteTask}>Delete</button>
            </div>
    )
};

export default Task;