// ErrorState.jsx — Friendly error with retry
export default function ErrorState({ message, onRetry, onSimulate }) {
  return (
    <div className="error-state" role="alert" aria-live="assertive">
      <span className="error-icon">🌐</span>
      <h2 className="error-title">Something went wrong</h2>
      <p className="error-message">
        We couldn&rsquo;t load the countries data. This might be a network issue
        or the API may be temporarily unavailable. Please try again in a moment.
      </p>
      {message && <div className="error-code">{message}</div>}
      <div className="btn-group">
        <button className="btn-retry" onClick={onRetry} id="retry-btn">
          🔄 Retry Request
        </button>
        {onSimulate && (
          <button className="btn-secondary" onClick={onSimulate} id="reset-btn">
            ↩ Reset &amp; Load Data
          </button>
        )}
      </div>
    </div>
  );
}
