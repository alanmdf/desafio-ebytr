import './App.css';
import React from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import NewTaskForm from './components/NewTaskForm';

function App() {
  return (
    <main className="App">
      <Header />
      <NewTaskForm />
      <TasksList />
    </main>
  );
}

export default App;
