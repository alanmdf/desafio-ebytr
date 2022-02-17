/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

function Task(props) {
  const { taskInfo } = props;
  const { setReloadList } = props;
  const handleClick = async (id) => {
    const initOptions = {
      method: 'DELETE',
    };
    await fetch(`http://localhost:3001/${id}`, initOptions);
    setReloadList((prevState) => !prevState);
  };

  return (
    <tr className="task">
      {Object.values(taskInfo)
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
