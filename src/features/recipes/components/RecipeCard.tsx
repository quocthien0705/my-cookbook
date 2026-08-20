import type { Recipe } from '../recipe.types';

type RecipeCardProps = {
  recipe: Recipe;
  featured?: boolean;
};

export function RecipeCard({ recipe, featured = false }: RecipeCardProps) {
  return (
    <article className={featured ? 'recipe-card recipe-card-featured' : 'recipe-card'}>
      <img className="recipe-card-image" src={recipe.image} alt="" />
      <div className="recipe-card-body">
        <p className="recipe-card-category">{recipe.category}</p>
        <h2>{recipe.title}</h2>
        <p className="recipe-card-description">{recipe.description}</p>
        <p className="recipe-card-meta">{recipe.time} <span aria-hidden="true">/</span> {recipe.difficulty}</p>
      </div>
    </article>
  );
}
