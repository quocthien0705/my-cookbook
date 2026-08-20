import { RecipeCard } from '../features/recipes/components/RecipeCard';
import { recipes } from '../features/recipes/recipe-data';

type HomePageProps = {
  onNavigate: (page: 'recipes' | 'categories') => void;
};

export function HomePage({ onNavigate }: HomePageProps) {
  const [featured, ...latest] = recipes;

  return (
    <>
      <section className="home-intro">
        <p className="section-label">A kitchen journal</p>
        <h1>Good food for ordinary days.</h1>
        <p>Recipes worth making again, seasonal ideas, and useful notes for cooking with more ease.</p>
      </section>

      <section className="home-feature" aria-labelledby="featured-recipe">
        <img className="home-feature-image" src={featured.image} alt="" />
        <div className="home-feature-copy">
          <p className="section-label">Featured recipe</p>
          <h2 id="featured-recipe">{featured.title}</h2>
          <p>{featured.description}</p>
          <p className="recipe-card-meta">{featured.time} <span aria-hidden="true">/</span> {featured.difficulty}</p>
          <button className="text-link" type="button">Read recipe <span aria-hidden="true">→</span></button>
        </div>
      </section>

      <section className="page-section" aria-labelledby="latest-recipes">
        <div className="section-heading">
          <div>
            <p className="section-label">Fresh from the kitchen</p>
            <h2 id="latest-recipes">Latest recipes</h2>
          </div>
          <button className="text-link" type="button" onClick={() => onNavigate('recipes')}>All recipes <span aria-hidden="true">→</span></button>
        </div>
        <div className="recipe-grid">{latest.slice(0, 3).map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</div>
      </section>

      <section className="category-callout">
        <p className="section-label">Cook by mood</p>
        <h2>Start with what sounds good.</h2>
        <button className="text-link" type="button" onClick={() => onNavigate('categories')}>Browse categories <span aria-hidden="true">→</span></button>
      </section>
    </>
  );
}
