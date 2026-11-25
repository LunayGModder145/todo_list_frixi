import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ tasks, onDelete, onToggleDone, onEditTask }) {
  if (tasks.length === 0) {
    return <p className="todo-list__empty">No hay tareas en la lista.</p>;
  }

  return (
    <section className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task._id}
          task={task}
          onDelete={onDelete}
          onToggleDone={onToggleDone}
          onEditTask={onEditTask}
        />
      ))}
    </section>
  );
}

export default TodoList;