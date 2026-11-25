import { useState } from 'react';
import './TodoItem.css';

function TodoItem({ task, onDelete, onToggleDone, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDesc, setEditDesc] = useState(task.desc);

  const handleOpenEdit = () => {
    setEditTitle(task.title);
    setEditDesc(task.desc);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTitle(task.title);
    setEditDesc(task.desc);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const trimmedTitle = editTitle.trim();
    if (!trimmedTitle) return;

    onEditTask(task._id, {
      title: trimmedTitle,
      desc: editDesc.trim(),
    });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <article className="todo-item">
        <form className="todo-item__edit-form" onSubmit={handleSaveEdit}>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Título de la tarea"
          />

          <input
            type="text"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            placeholder="Descripción de la tarea"
          />

          <div className="todo-item__actions">
            <button type="submit">Guardar</button>
            <button type="button" onClick={handleCancelEdit}>
              Cancelar
            </button>
          </div>
        </form>
      </article>
    );
  }

  return (
    <article className="todo-item">
      <div className="todo-item__content">
        <h3 className={task.isDone ? 'todo-item__title todo-item__title--done' : 'todo-item__title'}>
          {task.title}
        </h3>
        <p className="todo-item__desc">{task.desc}</p>
      </div>

      <div className="todo-item__actions">
        <button type="button" onClick={() => onToggleDone(task._id)}>
          {task.isDone ? 'Desmarcar' : 'Completar'}
        </button>

        <button type="button" onClick={handleOpenEdit}>
          Editar
        </button>

        <button type="button" onClick={() => onDelete(task._id)}>
          BORRAR
        </button>
      </div>
    </article>
  );
}

export default TodoItem;