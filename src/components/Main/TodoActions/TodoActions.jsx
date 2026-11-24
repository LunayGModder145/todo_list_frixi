import './TodoActions.css';

function TodoActions({ onClear, onReset }) {
  return (
    <div className="todo-actions">
      <button type="button" onClick={onClear}>
        CLEAR
      </button>

      <button type="button" onClick={onReset}>
        RESET
      </button>
    </div>
  );
}

export default TodoActions;