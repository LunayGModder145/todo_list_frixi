import { useState, useEffect } from 'react';
import './TodoForm.css';

function TodoForm({ onAddTask }) {
  const [text, setText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [addedMsg, setAddedMsg] = useState('');

  // Si pasan 20 segundos con texto en el input sin enviarlo, se vacía y desaparece ADD
  useEffect(() => {
    if (!text) return;

    const idleTimer = setTimeout(() => {
      setText('');
      setErrorMsg('');
    }, 20000);

    // Limpiamos el timer si el usuario sigue escribiendo o envía antes de los 20s
    return () => clearTimeout(idleTimer);
  }, [text]);

  // Cuando haya mensaje de "tarea añadida", ocultarlo tras 5 segundos
  useEffect(() => {
    if (!addedMsg) return;

    const noticeTimer = setTimeout(() => {
      setAddedMsg('');
    }, 5000);

    return () => clearTimeout(noticeTimer);
  }, [addedMsg]);

  const handleChange = (e) => {
    setText(e.target.value);
    if (errorMsg) {
      setErrorMsg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();

    if (trimmed.length < 6) {
      setErrorMsg('La tarea debe tener al menos 6 caracteres.');
      return;
    }

    onAddTask(trimmed);
    setText('');
    setErrorMsg('');
    setAddedMsg('tarea añadida');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={text}
        onChange={handleChange}
      />

      {text.length > 0 && (
        <button type="submit">
          ADD
        </button>
      )}

      {errorMsg && <p className="todo-form__error">{errorMsg}</p>}
      {addedMsg && <p className="todo-form__success">{addedMsg}</p>}
    </form>
  );
}

export default TodoForm;