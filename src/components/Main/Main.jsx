import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import initialTasks from '../../data/initialTasks.json';
import './Main.css';

const tasksWithId = initialTasks.map((task) => ({
  ...task,
  _id: uuidv4(),
}));

function Main() {
  const [tasks, setTasks] = useState(tasksWithId);

  return (
    <main className="main">
      <p>Tareas precargadas: {tasks.length}</p>
      <button onClick={() => setTasks([])}>Vaciar prueba</button>
    </main>
  );
}

export default Main;