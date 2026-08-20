import { RecipeCard } from '../features/recipes/components/RecipeCard';
import { recipes } from '../features/recipes/recipe-data';

export function RecipesPage() {
  return (
    <section className="archive-page">
      <div className="page-heading">
        <p className="section-label">The complete collection</p>
        <h1>Recipes</h1>
        <p>Simple things to make often, and ambitious things to make when the afternoon is yours.</p>
      </div>
      <div className="archive-toolbar"><span>{recipes.length} recipes</span><span>All seasons</span></div>
      <div className="recipe-grid recipe-grid-archive">{recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</div>
    </section>
  );
}
