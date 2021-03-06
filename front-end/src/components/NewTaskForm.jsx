/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function NewTaskForm(props) {
  const { setReloadList } = props;
  const [newTask, setNewTask] = useState({
    name: '',
    status: 'Pendente',
    createdAt: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    const getDate = new Date().toISOString();
    const { name, status } = newTask;
    const initOptions = {
      method: 'POST',
      body: JSON.stringify({
        name,
        createdAt: getDate,
        status,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    await fetch('http://localhost:3001', initOptions);
    setNewTask((prevState) => ({ ...prevState, name: '', status: 'Pendente' }));
    setReloadList((prevState) => !prevState);
  };

  return (
    <section className="new-task-section">
      <h3>Adicionar nova tarefa</h3>
      <form className="new-task-form">
        <div>
          <label htmlFor="name">
            Nome:
            <input type="text" name="name" onChange={handleChange} value={newTask.name} />
          </label>
        </div>
        <div>
          <label htmlFor="status">
            Status:
            <select name="status" id="new-task-status" onChange={handleChange} value={newTask.status}>
              <option value="Pendente">Pendente</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Pronto">Pronto</option>
            </select>
          </label>
        </div>
        <button type="button" onClick={handleClick}>Adicionar</button>
      </form>
    </section>
  );
}

export default NewTaskForm;
