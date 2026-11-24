import './TodoItem.css';

function TodoItem({ task, onDelete, onToggleDone }) {
  return (
    <article className="todo-item">
      <div className="todo-item__content">
        <h3 className={task.isDone ? 'todo-item__title todo-item__title--done' : 'todo-item__title'}>
          {task.title}
        </h3>
        <p className="todo-item__desc">{task.desc}</p>
      </div>

      <div className="todo-item__actions">
        <button
          type="button"
          onClick={() => onToggleDone(task._id)}
        >
          {task.isDone ? 'Desmarcar' : 'Completar'}
        </button>

        <button
          type="button"
          onClick={() => onDelete(task._id)}
        >
          BORRAR
        </button>
      </div>
    </article>
  );
}

export default TodoItem;