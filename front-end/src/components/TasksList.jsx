/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import OrderList from './OrderList';
import Task from './Task';

function TasksList(props) {
  const { setReloadList, reloadList } = props;
  const tableHeaders = ['Nome', 'Data de criação', 'Status'];

  const [tasks, setTasks] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    orderBy: 'name',
    orderType: 'desc',
  });

  const handleChange = ({ target: { name, value } }) => {
    setOrderInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sortTasks = (taskA, taskB) => {
    if (orderInfo.orderBy === 'createdAt') {
      if (orderInfo.orderType === 'asc' && (Number(taskA.createdAt.substring(3, 5)) === Number(taskB.createdAt.substring(3, 5)))) {
        return Number(taskA.createdAt.substring(0, 2)) - Number(taskB.createdAt.substring(0, 2));
      }
      return Number(taskB.createdAt.substring(0, 2)) - Number(taskA.createdAt.substring(0, 2));
    }
    return (orderInfo.orderType === 'asc' ? taskA[orderInfo.orderBy].localeCompare(taskB[orderInfo.orderBy]) : taskB[orderInfo.orderBy].localeCompare(taskA[orderInfo.orderBy]));
  };

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((response) => response.json())
      .then((tasksList) => setTasks(tasksList));
  }, [reloadList]);

  const formatDate = (task) => ({
    ...task,
    createdAt: task.createdAt.substring(0, 10).split('-').reverse().join('/'),
  });

  return (
    <section>
      <OrderList handleChange={handleChange} orderInfo={orderInfo} />
      <table className="tasks-list">
        <thead>
          <tr>
            {tableHeaders.map((header) => <th key={Math.random()}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {tasks.map(formatDate).sort(sortTasks).map((task) => (
            <Task
              key={Math.random()}
              taskInfo={task}
              setReloadList={setReloadList}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TasksList;
