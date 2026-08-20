# Product Brief

## Vision

My Cookbook should feel like a modern digital cookbook or food magazine rather than a conventional
recipe database. It should make personal recipes pleasant to collect, browse, read, and cook.

## Core capabilities

### Recipe book

Recipes will eventually include a name, description, cover image, preparation and cooking time,
servings, ingredients, instructions, notes, categories, and tags. The reading experience should
make these details easy to scan while keeping the dish and photography central.

### Nutrition and calories

The app will calculate nutrition from a nutrition database or API instead of requiring manual entry
for every ingredient. Supported information may include calories, protein, carbohydrates, fat,
fiber, sugar, sodium, and other nutrients offered by the selected provider.

The application should show nutrition for the full recipe and per serving.

### Ingredient search

Users should be able to search for an ingredient, select the appropriate database result, enter a
quantity and unit, then use that information in a recipe nutrition calculation.

### Search and discovery

Recipes should be discoverable by recipe name, ingredient, cuisine, meal type, category, tags,
cooking time, and nutrition values. Favorites can be added once recipe persistence exists.

### Cookbook experience

The interface should use large food photography, editorial typography, generous whitespace, a warm
natural palette, and subtle motion. Page-turn-like effects may be explored later, but must remain
fast and comfortable on mobile devices.

## Initial recipe shape

```text
Recipe
  id
  name
  description
  image
  category
  tags
  preparationTime
  cookingTime
  servings
  ingredients
    name
    amount
    unit
    nutrition
  instructions
  notes
  nutrition
    calories
    protein
    carbohydrates
    fat
    fiber
```
