// SkeletonCard.jsx — Animated loading placeholder
export default function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-flag skeleton-line" />
      <div className="skeleton-body">
        <div className="skeleton-line full" />
        <div className="skeleton-line sm w-80" />
        <div className="skeleton-line sm w-60" />
        <div className="skeleton-line sm w-70" />
        <div className="skeleton-line sm w-60" />
      </div>
    </div>
  );
}
