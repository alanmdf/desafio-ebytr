/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Task(props) {
  const [editInfo, setEditInfo] = useState({
    name: '',
    status: '',
  });
  const [editMode, setEditMode] = useState(false);

  const { taskInfo } = props;
  const { setReloadList } = props;

  const handleEdit = async (id) => {
    const { name, status } = editInfo;
    const initOptions = {
      method: 'PUT',
      body: JSON.stringify({
        name,
        status,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    await fetch(`http://localhost:3001/${id}`, initOptions);

    setEditMode(false);
    setReloadList((prevState) => !prevState);
  };

  const handleDelete = async (id) => {
    const initOptions = {
      method: 'DELETE',
    };
    await fetch(`http://localhost:3001/${id}`, initOptions);
    setReloadList((prevState) => !prevState);
  };

  const handleChange = ({ target: { name, value } }) => {
    setEditInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (editMode) {
    return (
      <tr>
        <td>
          <input type="text" name="name" onChange={handleChange} />
        </td>
        <td>
          {taskInfo.createdAt}
        </td>
        <td>
          <select name="status" id="edit-task-status" onChange={handleChange}>
            <option value="Pendente">Pendente</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Pronto">Pronto</option>
          </select>
        </td>
        <td>
          <button type="button" onClick={() => handleEdit(taskInfo._id)}>Finalizar edição</button>
        </td>
      </tr>
    );
  }
  return (
    <tr className="task">
      {Object.values(taskInfo)
        .filter((info) => info !== taskInfo._id)
        .map((info) => <td key={Math.random()}>{info}</td>)}
      <td>
        <button type="button" onClick={() => setEditMode(true)}>Editar</button>
      </td>
      <td>
        <button type="button" onClick={() => handleDelete(taskInfo._id)}>Excluir</button>
      </td>
    </tr>
  );
}

export default Task;
