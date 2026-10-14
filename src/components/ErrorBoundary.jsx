import { Component } from "react";

// Error boundary: shows a friendly fallback UI if the task list crashes (bonus)
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Task list error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fallback">
          <p>😕 Oops! We couldn't display your tasks right now.</p>
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
