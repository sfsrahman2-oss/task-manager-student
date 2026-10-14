function TaskStats({ total, completed, remaining }) {
  return (
    <div className="stats">
      <div className="stat">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Total Tasks</span>
      </div>
      <div className="stat">
        <span className="stat-number stat-done">{completed}</span>
        <span className="stat-label">Completed</span>
      </div>
      <div className="stat">
        <span className="stat-number stat-remaining">{remaining}</span>
        <span className="stat-label">Remaining</span>
      </div>
    </div>
  );
}

export default TaskStats;
