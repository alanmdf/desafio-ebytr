/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useCallback } from 'react';
// import OrderList from './OrderList';
import Task from './Task';

function TasksList() {
  const tableHeaders = ['Nome', 'Data de criação', 'Status'];
  const [tasks, setTasks] = useState([]);

  const fetchFromAPI = useCallback(async () => {
    const response = await fetch('http://localhost:3001');
    const tasksList = await response.json();
    setTasks(tasksList);
  });

  useEffect(async () => {
    await fetchFromAPI();
  }, [tasks]);

  return (
    <section>
      {/* <OrderList
        handleChange={handleChange}
        orderInfo={orderInfo}
      /> */}
      <table className="tasks-list">
        <thead>
          <tr>
            {tableHeaders.map((header) => <th key={Math.random()}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {/* <Task /> */}
          {tasks
            .map((task) => (<Task key={Math.random()} taskInfo={task} />
            ))}
        </tbody>
      </table>
    </section>

  );
}

export default TasksList;
