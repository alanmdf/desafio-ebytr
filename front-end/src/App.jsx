import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const [reloadList, setReloadList] = useState(false);

  return (
    <main className="App">
      <Header />
      <NewTaskForm setReloadList={setReloadList} />
      <TasksList reloadList={reloadList} setReloadList={setReloadList} />
    </main>
  );
}

export default App;
