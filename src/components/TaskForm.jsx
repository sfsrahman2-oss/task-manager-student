import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = title.trim();

    // Form validation: do not allow empty tasks
    if (trimmed === "") {
      setError("Task cannot be empty. Please enter a task.");
      return;
    }

    onAddTask(trimmed);
    setTitle("");
    setError("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
    if (error) setError("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          className={`task-input ${error ? "input-error" : ""}`}
          placeholder="Enter a task..."
          value={title}
          onChange={handleChange}
          aria-label="Task title"
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default TaskForm;
