/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

function Task({ taskInfo }) {
  const handleClick = (id) => {
    const initOptions = {
      method: 'DELETE',
    };
    fetch(`http://localhost:3001/${id}`, initOptions);
  };

  return (
    <tr className="task">
      {Object.values(taskInfo)
        .filter((info) => info !== taskInfo._id)
        .map((info, index) => <td key={index}>{info}</td>)}
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
