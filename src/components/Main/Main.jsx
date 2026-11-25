import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import initialTasks from '../../data/initialTasks.json';
import TodoForm from './TodoForm';
import TodoActions from './TodoActions';
import TodoList from './TodoList';
import './Main.css';

const createInitialTasks = () =>
  initialTasks.map((task) => ({
    ...task,
    isDone: false,
    _id: uuidv4(),
  }));

function Main() {
  const [tasks, setTasks] = useState(createInitialTasks);

  const handleAddTask = (title) => {
    const newTask = {
      title,
      desc: 'Descripción de la tarea',
      isDone: false,
      _id: uuidv4(),
    };

    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task._id !== id);
    setTasks(updatedTasks);
  };

  const handleToggleDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task._id === id ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };

  const handleClearTasks = () => {
    setTasks([]);
  };

  const handleResetTasks = () => {
    setTasks(createInitialTasks());
  };
 
  const handleEditTask = (id, updatedFields) => {
  const updatedTasks = tasks.map((task) =>
    task._id === id ? { ...task, ...updatedFields } : task
  );
  setTasks(updatedTasks);
  };

  return (
    <main className="main">
      <TodoForm onAddTask={handleAddTask} />
      <TodoActions onClear={handleClearTasks} onReset={handleResetTasks} />

      <TodoList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggleDone={handleToggleDone}
        onEditTask={handleEditTask}
      />
    </main>
  );
}

export default Main;

