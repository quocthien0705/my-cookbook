import { useState } from 'react';
import { RecipeCard } from '../features/recipes/components/RecipeCard';
import { recipes } from '../features/recipes/recipe-data';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery
    ? recipes.filter((recipe) => `${recipe.title} ${recipe.category} ${recipe.description}`.toLowerCase().includes(normalizedQuery))
    : [];

  return (
    <section className="archive-page search-page">
      <div className="page-heading">
        <p className="section-label">Search the collection</p>
        <h1>What would you like to cook?</h1>
      </div>
      <label className="search-field">
        <span className="sr-only">Search recipes</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try pasta, lemon, salad..." type="search" autoFocus />
        <span aria-hidden="true">Search</span>
      </label>
      {normalizedQuery ? (
        <div className="search-results">
          <p className="search-summary">{results.length} result{results.length === 1 ? '' : 's'} for “{query}”</p>
          {results.length > 0 ? <div className="recipe-grid recipe-grid-archive">{results.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</div> : <p className="empty-state">No recipes yet. Try a different ingredient or category.</p>}
        </div>
      ) : <p className="empty-state">Search by dish, ingredient, or category.</p>}
    </section>
  );
}
