import React from 'react';

function NewTaskForm() {
  return (
    <section className="new-task-section">
      <h3>Adicionar nova tarefa</h3>
      <form className="new-task-form">
        <div>
          <label htmlFor="new-task-name">
            Nome:
            <input type="text" name="new-task-name" />
          </label>
        </div>
        <div>
          <label htmlFor="new-task-status">
            Status:
            <select name="new-task-status" id="new-task-status">
              <option value="pendente">Pendente</option>
              <option value="em_andamento">Em andamento</option>
              <option value="pronto">Pronto</option>
            </select>
          </label>
        </div>
        <button type="button">Adicionar</button>
      </form>
    </section>
  );
}

export default NewTaskForm;
