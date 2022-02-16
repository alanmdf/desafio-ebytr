import './App.css';
import React from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';

function App() {
  return (
    <main className="App">
      <Header />
      <TasksList />
    </main>
  );
}

export default App;
