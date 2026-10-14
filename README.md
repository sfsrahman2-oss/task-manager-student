# Student Task Manager

A simple React application where students can add tasks, view their task list, mark tasks as completed, and delete tasks.

Built with **React 18 + Vite**.

## Features

### Required
- Display tasks with title and status
- Add a new task (input + Add Task button)
- Mark a task as completed (checkbox)
- Delete a task
- "No tasks available" message when the list is empty
- Task statistics (total and completed)
- Form validation (empty tasks are rejected)

### Bonus
- Filter tasks by All / Completed / Pending
- Confirmation dialog before deleting
- Friendly fallback UI via an Error Boundary
- Reusable `Card` component using the `children` prop
- Remaining tasks counter

## React Concepts Used
Components, JSX, props, events, `useState`, conditional rendering, component composition, `children` prop, error handling (Error Boundary).

## Project Structure

```
student-task-manager/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    └── components/
        ├── Card.jsx
        ├── ErrorBoundary.jsx
        ├── FilterBar.jsx
        ├── TaskForm.jsx
        ├── TaskItem.jsx
        ├── TaskList.jsx
        └── TaskStats.jsx
```

## Getting Started

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for Production

```bash
npm run build
npm run preview
```
