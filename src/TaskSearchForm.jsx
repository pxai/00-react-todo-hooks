import { useState } from "react";

const TaskSearchForm = ({handleSearch}) => {
    const [taskValue, setTaskValue] = useState('');
    const onSearch = () => {
        handleSearch(taskValue);
    };

    const onReset = () => {
        setTaskValue('');
        handleSearch('');
    };

    const handleSave = (e) => {
        setTaskValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleSave} />
            <button onClick={onSearch}>Search for task</button>
            <button onClick={onReset}>Reset</button>
        </div>  
    );
};

export default TaskSearchForm;