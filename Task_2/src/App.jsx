import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import SkeletonCard from './components/SkeletonCard';
import ErrorState from './components/ErrorState';

// PokéAPI — free, no auth, highly stable
const LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150';

const TYPE_COLORS = {
  fire: '#FF6B35', water: '#4A90D9', grass: '#56C568', electric: '#F7D716',
  psychic: '#FF5E8A', ice: '#7AC8E4', dragon: '#7038F8', dark: '#705848',
  fairy: '#EE99AC', normal: '#A8A878', fighting: '#C03028', flying: '#A890F0',
  poison: '#A040A0', ground: '#E0C068', rock: '#B8A038', bug: '#A8B820',
  ghost: '#705898', steel: '#B8B8D0',
};

export default function App() {
  const [pokemons, setPokemons]         = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);
  const [searchQuery, setSearchQuery]   = useState('');
  const [typeFilter, setTypeFilter]     = useState('');
  const [simulateError, setSimulateError] = useState(false);
  const searchRef = useRef(null);

  // ── Fetch list + details in parallel batches ─────────────────────────────
  const fetchPokemons = useCallback(async (forceError = false) => {
    setLoading(true);
    setError(null);
    setPokemons([]);

    // Small delay so skeleton is always visible
    await new Promise((r) => setTimeout(r, 600));

    if (forceError) {
      setError('ERR_NETWORK — Simulated connection failure for demo purposes');
      setLoading(false);
      return;
    }

    try {
      const listRes = await fetch(LIST_URL);
      if (!listRes.ok) throw new Error(`HTTP ${listRes.status}: ${listRes.statusText}`);
      const listData = await listRes.json();

      // Fetch all detail pages in parallel (batched)
      const details = await Promise.all(
        listData.results.map((p) =>
          fetch(p.url).then((r) => {
            if (!r.ok) throw new Error(`Failed fetching ${p.name}`);
            return r.json();
          })
        )
      );

      setPokemons(details);
    } catch (err) {
      setError(err.message || 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPokemons(false);
  }, [fetchPokemons]);

  // ── All unique types for the filter dropdown ─────────────────────────────
  const allTypes = useMemo(() => {
    const types = new Set();
    pokemons.forEach((p) => p.types?.forEach((t) => types.add(t.type.name)));
    return [...types].sort();
  }, [pokemons]);

  // ── Filtered list ────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return pokemons.filter((p) => {
      const nameMatch = !q || p.name.toLowerCase().includes(q);
      const typeMatch = !typeFilter || p.types?.some((t) => t.type.name === typeFilter);
      return nameMatch && typeMatch;
    });
  }, [pokemons, searchQuery, typeFilter]);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleSimulateError = () => {
    setSimulateError(true);
    fetchPokemons(true);
  };

  const handleRetry = () => {
    setSimulateError(false);
    fetchPokemons(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setTypeFilter('');
    searchRef.current?.focus();
  };

  return (
    <div className="app">
      {/* ── HERO ── */}
      <header className="hero">
        <div className="hero-badge">
          <span className="dot" />
          Live API Data · PokéAPI v2
        </div>
        <h1 className="hero-title">
          <span className="gradient-text">Pokédex</span> Explorer
        </h1>
        <p className="hero-subtitle">
          Browse real-time data for 150 Pokémon — search by name, filter by
          type, and explore stats, abilities &amp; more.
        </p>

        {/* ── SEARCH & FILTER ── */}
        <div className="controls-bar" role="search">
          <div className="search-wrapper">
            <span className="search-icon" aria-hidden="true">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              ref={searchRef}
              id="search-input"
              type="search"
              className="search-input"
              placeholder="Search by Pokémon name…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search Pokémon"
              autoComplete="off"
            />
            {searchQuery && (
              <button
                className="clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                title="Clear"
              >×</button>
            )}
          </div>

          <select
            id="type-filter"
            className="filter-select"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            aria-label="Filter by type"
          >
            <option value="">✨ All Types</option>
            {allTypes.map((t) => (
              <option key={t} value={t} style={{ textTransform: 'capitalize' }}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* ── STATS BAR ── */}
      {!loading && !error && (
        <div className="stats-bar">
          <p className="stats-count">
            Showing <span>{filtered.length}</span> of{' '}
            <span>{pokemons.length}</span> Pokémon
          </p>
          <button
            className="simulate-error-btn"
            onClick={handleSimulateError}
            id="simulate-error-btn"
            title="Demo the error state"
          >
            ⚡ Simulate Network Error
          </button>
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <main className="main-content" id="main-content">

        {/* Loading state */}
        {loading && (
          <>
            <div className="loading-header">
              <div className="spinner" role="status" aria-label="Loading Pokémon" />
              <p>Fetching Pokémon from the API…</p>
            </div>
            <div className="cards-grid" aria-busy="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </>
        )}

        {/* Error state */}
        {!loading && error && (
          <ErrorState
            message={error}
            onRetry={handleRetry}
            onSimulate={simulateError ? handleRetry : null}
          />
        )}

        {/* Empty search result */}
        {!loading && !error && filtered.length === 0 && pokemons.length > 0 && (
          <div className="empty-state" role="status">
            <span className="empty-icon">🔍</span>
            <h2 className="empty-title">No Pokémon found</h2>
            <p className="empty-subtitle">
              No results for &ldquo;<strong>{searchQuery || typeFilter}</strong>&rdquo;.
              Try a different name or type.
            </p>
            <button className="btn-clear" onClick={clearSearch} id="clear-filters-btn">
              Clear Filters
            </button>
          </div>
        )}

        {/* Success — Pokémon cards */}
        {!loading && !error && filtered.length > 0 && (
          <div
            className="cards-grid"
            role="list"
            aria-label={`${filtered.length} Pokémon`}
          >
            {filtered.map((pokemon) => (
              <div role="listitem" key={pokemon.id}>
                <PokemonCard pokemon={pokemon} typeColors={TYPE_COLORS} />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>
          Data from{' '}
          <a href="https://pokeapi.co" target="_blank" rel="noreferrer">
            PokéAPI
          </a>{' '}
          · Built with React &amp; Vite ·{' '}
          <span className="gradient-text">Pokédex Explorer</span>
        </p>
      </footer>
    </div>
  );
}
