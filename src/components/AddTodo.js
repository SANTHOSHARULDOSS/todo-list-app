import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        placeholder="Add a new task..."
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;