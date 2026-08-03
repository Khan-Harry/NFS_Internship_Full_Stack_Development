// CountryCard.jsx
const formatPopulation = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
  if (num >= 1_000_000)     return (num / 1_000_000).toFixed(1) + 'M';
  if (num >= 1_000)         return (num / 1_000).toFixed(1) + 'K';
  return num?.toLocaleString() ?? '—';
};

export default function CountryCard({ country }) {
  const name       = country.name?.common ?? 'Unknown';
  const flag       = country.flags?.svg ?? country.flags?.png ?? '';
  const capital    = country.capital?.[0] ?? '—';
  const region     = country.region ?? '—';
  const subregion  = country.subregion ?? '';
  const population = country.population ?? 0;
  const independent = country.independent;
  const languages  = Object.values(country.languages ?? {}).slice(0, 2).join(', ') || '—';
  const currency   = Object.values(country.currencies ?? {})
    .map((c) => c.name)
    .slice(0, 1)
    .join('') || '—';

  return (
    <article className="country-card" aria-label={`Country: ${name}`}>
      <div className="flag-wrapper">
        <img
          src={flag}
          alt={`Flag of ${name}`}
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x160/1a1f35/6366f1?text=${encodeURIComponent(name)}`;
          }}
        />
        <div className="flag-overlay" />
      </div>
      <div className="card-body">
        <h2 className="card-country-name">{name}</h2>
        <div className="card-details">
          <div className="detail-row">
            <span className="detail-label">🏙️ Capital</span>
            <span className="detail-value">{capital}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">👥 Population</span>
            <span className="detail-value">{formatPopulation(population)}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">🗣️ Language</span>
            <span className="detail-value">{languages}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">💰 Currency</span>
            <span className="detail-value">{currency}</span>
          </div>
        </div>
        <div className="card-tags">
          {region && <span className="tag tag-region">{region}</span>}
          {subregion && <span className="tag tag-region" style={{ opacity: 0.75 }}>{subregion}</span>}
          {independent && <span className="tag tag-independent">Independent</span>}
        </div>
      </div>
    </article>
  );
}
