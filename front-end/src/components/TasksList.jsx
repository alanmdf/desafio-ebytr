/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Task from './Task';
// import Task from './Task';

function TasksList() {
  const [tasks, setTasks] = useState([]);

  const tableHeaders = ['Nome', 'Data de criação', 'Status'];

  useEffect(async () => {
    fetch('http://localhost:3001')
      .then((response) => response.json())
      .then((tasksList) => setTasks(tasksList));
  }, [tasks]);

  return (
    <table className="tasks-list">
      <thead>
        <tr>
          {tableHeaders.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (<Task key={index} taskInfo={task} />
        ))}
      </tbody>
    </table>
  );
}

export default TasksList;
