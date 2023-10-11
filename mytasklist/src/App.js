import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState({ id: null, name: '' });

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), name: newTask }]);
      setNewTask('');
    }
  };

  const editTaskName = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: editTask.name } : task
    );
    setTasks(updatedTasks);
    setEditTask({ id: null, name: '' });
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (

    <div className='main'>
      <h1> TASK LIST </h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.id === editTask.id ? (
              <>
                <input
                  className='taskField'
                  type="text"
                  value={editTask.name}
                  onChange={(e) => setEditTask({ id: task.id, name: e.target.value })}
                />
                <button className='btnSave' onClick={() => editTaskName(task.id)}> SAVE </button>
              </>
            ) : (
              <>
                {task.name}
                <button className='btnEdit' onClick={() => setEditTask({ id: task.id, name: task.name })}>
                  EDIT 
                </button>
                <button className='btnDelete' onClick={() => deleteTask(task.id)}> DELETE </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className='taskAdder'>
        <input
          className='inputBox'
          type="text"
          placeholder="ADD NEW TASK"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='taskAdderButton' onClick={addTask}> 
        ADD TASK 
        </button>
      </div>

    </div>
  );
}

export default TaskList;
