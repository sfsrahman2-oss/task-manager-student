import TaskItem from "./TaskItem";

function TaskList({ tasks, totalTasks, filter, onToggle, onDelete }) {
  // Conditional rendering: no tasks at all
  if (totalTasks === 0) {
    return <p className="empty-message">No tasks available</p>;
  }

  // Conditional rendering: tasks exist, but none match the current filter
  if (tasks.length === 0) {
    return (
      <p className="empty-message">No {filter} tasks to show</p>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
