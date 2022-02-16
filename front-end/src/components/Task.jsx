/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

function Task({ taskInfo }) {
  return (
    <tr className="task">
      {Object.values(taskInfo)
        .filter((info) => info !== taskInfo._id)
        .map((info) => <td>{info}</td>)}
      <button type="button">Editar</button>
      <button type="button">Excluir</button>
    </tr>
  );
}

export default Task;
