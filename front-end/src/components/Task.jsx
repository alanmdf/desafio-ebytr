/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

function Task({ taskInfo }) {
  return (
    <tr className="task">
      {Object.values(taskInfo)
        .filter((info) => info !== taskInfo._id)
        .map((info, index) => <td key={index}>{info}</td>)}
      <td>
        <button type="button">Editar</button>
      </td>
      <td>
        <button type="button">Excluir</button>
      </td>
    </tr>
  );
}

export default Task;
