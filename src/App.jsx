import { useState } from "react";
import Card from "./components/Card";
import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Add a new task (validation happens in TaskForm)
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  // Toggle completed status
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task (with confirmation - bonus)
  const deleteTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    const confirmed = window.confirm(
      `Are you sure you want to delete "${task?.title}"?`
    );
    if (confirmed) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
  };

  // Statistics
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  // Filtered tasks (bonus)
  const visibleTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1 className="app-title">📚 Student Task Manager</h1>

      <Card title="Add a New Task">
        <TaskForm onAddTask={addTask} />
      </Card>

      <Card title="Statistics">
        <TaskStats total={total} completed={completed} remaining={remaining} />
      </Card>

      <Card title="My Tasks">
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />
        <ErrorBoundary>
          <TaskList
            tasks={visibleTasks}
            totalTasks={total}
            filter={filter}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </ErrorBoundary>
      </Card>
    </div>
  );
}

export default App;
