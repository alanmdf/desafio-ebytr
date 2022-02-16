/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function Task({ taskInfo }) {
  const [tasksValues, setTasksValues] = useState([]);
  const handleClick = async (id) => {
    const initOptions = {
      method: 'DELETE',
    };
    await fetch(`http://localhost:3001/${id}`, initOptions);
  };

  useEffect(() => {
    setTasksValues(Object.values(taskInfo));
  }, []);

  return (
    <tr className="task">
      {tasksValues
        .filter((info) => info !== taskInfo._id)
        .map((info) => <td key={Math.random()}>{info}</td>)}
      <td>
        <button type="button">Editar</button>
      </td>
      <td>
        <button type="button" onClick={() => handleClick(taskInfo._id)}>Excluir</button>
      </td>
    </tr>
  );
}

export default Task;
