// PokemonCard.jsx
const capitalize = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';

export default function PokemonCard({ pokemon, typeColors }) {
  const id       = pokemon.id;
  const name     = capitalize(pokemon.name);
  const sprite   =
    pokemon.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.sprites?.front_default ||
    '';
  const types    = pokemon.types?.map((t) => t.type.name) ?? [];
  const hp       = pokemon.stats?.find((s) => s.stat.name === 'hp')?.base_stat ?? 0;
  const attack   = pokemon.stats?.find((s) => s.stat.name === 'attack')?.base_stat ?? 0;
  const defense  = pokemon.stats?.find((s) => s.stat.name === 'defense')?.base_stat ?? 0;
  const speed    = pokemon.stats?.find((s) => s.stat.name === 'speed')?.base_stat ?? 0;
  const weight   = ((pokemon.weight ?? 0) / 10).toFixed(1); // hg → kg
  const height   = ((pokemon.height ?? 0) / 10).toFixed(1); // dm → m
  const abilities = pokemon.abilities
    ?.slice(0, 2)
    .map((a) => capitalize(a.ability.name.replace('-', ' ')))
    .join(', ') ?? '—';

  // Primary type color for card accent
  const primaryColor = typeColors[types[0]] ?? '#6366f1';

  return (
    <article
      className="pokemon-card"
      aria-label={`Pokémon: ${name}`}
      style={{ '--type-color': primaryColor }}
    >
      {/* Pokédex number */}
      <div className="pokemon-id">#{String(id).padStart(3, '0')}</div>

      {/* Sprite */}
      <div className="pokemon-sprite-wrapper">
        <div className="pokemon-sprite-bg" />
        {sprite ? (
          <img
            src={sprite}
            alt={`${name} artwork`}
            className="pokemon-sprite"
            loading="lazy"
            onError={(e) => { e.target.style.opacity = '0.3'; }}
          />
        ) : (
          <div className="pokemon-sprite-placeholder">?</div>
        )}
      </div>

      {/* Name & Types */}
      <div className="pokemon-card-body">
        <h2 className="pokemon-name">{name}</h2>

        <div className="type-badges">
          {types.map((type) => (
            <span
              key={type}
              className="type-badge"
              style={{ backgroundColor: typeColors[type] ?? '#6366f1' }}
            >
              {capitalize(type)}
            </span>
          ))}
        </div>

        {/* Stats bars */}
        <div className="stats-grid">
          <StatBar label="HP" value={hp} max={255} color={primaryColor} />
          <StatBar label="ATK" value={attack} max={200} color={primaryColor} />
          <StatBar label="DEF" value={defense} max={200} color={primaryColor} />
          <StatBar label="SPD" value={speed} max={200} color={primaryColor} />
        </div>

        {/* Info row */}
        <div className="pokemon-info-row">
          <div className="pokemon-info-item">
            <span className="info-label">⚖️ Weight</span>
            <span className="info-value">{weight} kg</span>
          </div>
          <div className="pokemon-info-item">
            <span className="info-label">📏 Height</span>
            <span className="info-value">{height} m</span>
          </div>
        </div>
        <div className="pokemon-ability-row">
          <span className="info-label">⚡ Abilities</span>
          <span className="info-value ability-value">{abilities}</span>
        </div>
      </div>
    </article>
  );
}

function StatBar({ label, value, max, color }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="stat-row">
      <span className="stat-label">{label}</span>
      <div className="stat-bar-track">
        <div
          className="stat-bar-fill"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="stat-value">{value}</span>
    </div>
  );
}
