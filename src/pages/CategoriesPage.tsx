import { recipes } from '../features/recipes/recipe-data';

const categoryDescriptions: Record<string, string> = {
  Pasta: 'Comforting bowls and sauces for any night of the week.',
  Soup: 'Warm pots, broths, and good things for a rainy day.',
  Salad: 'Bright, crisp plates that put seasonal produce first.',
  Baking: 'Cakes, sweet things, and recipes for sharing.',
  Breakfast: 'Slow mornings and useful ideas for the first meal.',
  Dinner: 'Generous main dishes made to gather around.',
};

export function CategoriesPage() {
  const categories = [...new Set(recipes.map((recipe) => recipe.category))];

  return (
    <section className="archive-page">
      <div className="page-heading">
        <p className="section-label">Find your next meal</p>
        <h1>Categories</h1>
        <p>Browse the cookbook by course, craving, and the kind of day you are having.</p>
      </div>
      <div className="category-list">
        {categories.map((category, index) => (
          <article className="category-row" key={category}>
            <span className="category-index">0{index + 1}</span>
            <div><h2>{category}</h2><p>{categoryDescriptions[category]}</p></div>
            <span className="category-count">{recipes.filter((recipe) => recipe.category === category).length} recipe</span>
          </article>
        ))}
      </div>
    </section>
  );
}
