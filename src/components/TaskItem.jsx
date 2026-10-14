function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-title">{task.title}</span>
      </label>

      <span
        className={`status-badge ${task.completed ? "done" : "pending"}`}
      >
        {task.completed ? "Completed" : "Pending"}
      </span>

      <button
        className="btn btn-danger"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task ${task.title}`}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
