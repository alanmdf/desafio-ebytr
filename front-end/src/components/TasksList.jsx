/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Task from './Task';

function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    fetch('http://localhost:3001')
      .then((response) => response.json())
      .then((tasksList) => setTasks(tasksList));
  }, []);

  return (
    <section>
      {tasks.map((task) => <Task key={task._id} taskInfo={task} />)}
    </section>
  );
}

export default TasksList;
