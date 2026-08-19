# 🍳 My Cookbook

> A modern digital cookbook for collecting, organizing, exploring, and understanding my favorite recipes.

**My Cookbook** is a personal recipe web application inspired by the experience of reading a beautiful cookbook, combined with modern features such as nutrition tracking, ingredient search, and recipe management.

The goal is to create something that feels like a **real digital cookbook**, rather than a traditional recipe database.

---

## ✨ Vision

Turn a collection of personal recipes into a beautiful, interactive cookbook.

The application should combine:

- 📖 A cookbook-style reading experience
- 🍝 Personal recipe management
- 🖼️ Food photography
- 🥗 Nutrition and calorie information
- 🔎 Ingredient and recipe search
- 📊 Nutrition calculations
- ✨ Smooth and natural animations
- 📱 A responsive experience across devices

---

# 📖 Core Features

## Recipe Book

Recipes are presented in a visually rich cookbook interface.

Each recipe can contain:

- Recipe name
- Description
- Cover image
- Preparation time
- Cooking time
- Total time
- Servings
- Ingredients
- Cooking instructions
- Notes
- Categories
- Tags

Example:

```text
Creamy Garlic Pasta

Preparation: 10 min
Cooking: 20 min
Servings: 2

Ingredients
- 200g pasta
- 100ml heavy cream
- 50g parmesan
- 10g butter
- 2 cloves garlic

Instructions
1. Boil the pasta.
2. Prepare the garlic cream sauce.
3. Add parmesan and butter.
4. Combine the pasta with the sauce.
5. Serve.
```

---

# 🥗 Nutrition & Calorie Tracking

The application should be able to calculate nutritional information based on the ingredients used in a recipe.

Instead of manually entering nutritional information for every ingredient, the application will eventually use a **nutrition database or API**.

### Nutrition Information

Depending on the available database, the application may track:

- Calories
- Protein
- Carbohydrates
- Fat
- Fiber
- Sugar
- Sodium
- Other available nutrients

### Example

```text
Ingredient
Chicken Breast — 200g

Nutrition
Calories       ~330 kcal
Protein         ~62 g
Carbohydrates     0 g
Fat              ~7 g
Fiber             0 g
```

---

# 🧮 Recipe Nutrition Calculation

The application should combine the nutritional information of all ingredients to calculate the total nutrition of a recipe.

```text
Chicken Breast — 200g
Rice            — 150g
Olive Oil        — 10g
Vegetables      — 100g
        │
        ▼
Nutrition Database
        │
        ▼
Calculate Nutrition
        │
        ▼
┌──────────────────────────┐
│ Total Recipe             │
│                          │
│ Calories      650 kcal   │
│ Protein        55 g      │
│ Carbohydrates  48 g      │
│ Fat            22 g      │
│ Fiber           5 g      │
└──────────────────────────┘
        │
        ▼
Calculate Per Serving
```

The system should support both:

- **Total recipe nutrition**
- **Nutrition per serving**

---

# 🔎 Ingredient Search

Users should be able to search for an ingredient and retrieve its nutritional information.

For example:

```text
Search:
chicken breast
```

Possible results:

```text
- Chicken breast, raw
- Chicken breast, roasted
- Chicken breast, grilled
- Chicken breast, skinless
```

The user can select the appropriate ingredient and specify the quantity.

```text
Ingredient: Chicken Breast
Amount:     200g

Calories:   330 kcal
Protein:     62g
Carbs:        0g
Fat:          7g
Fiber:        0g
```

---

# 📊 Nutrition Overview

Each recipe should provide a simple and understandable nutrition summary.

Example:

```text
Nutrition per Serving

🔥 520 kcal

Protein       35g
Carbohydrates 48g
Fat           18g
Fiber          6g
```

More detailed nutrition information can be added later.

---

# 🖼️ Cookbook Experience

The visual design is an important part of the project.

The application should feel more like a **modern digital cookbook or food magazine** than a traditional dashboard.

### Design Direction

- Large food photography
- Editorial typography
- Generous whitespace
- Warm and natural visual language
- Minimal interface
- Elegant recipe cards
- Smooth transitions
- Subtle micro-interactions
- Cookbook/page-inspired navigation

### Page Transitions

The recipe-reading experience may include animations inspired by turning the pages of a physical cookbook.

The animation should feel:

- Smooth
- Natural
- Subtle
- Fast enough to remain practical
- Comfortable on mobile devices

The interaction should enhance the cookbook experience without becoming distracting.

---

# 🔍 Search & Filtering

Recipes should eventually be searchable and filterable.

Possible filters:

- Recipe name
- Ingredient
- Cuisine
- Meal type
- Category
- Tags
- Cooking time
- Calories
- Protein
- Carbohydrates
- Fat

Example:

```text
Search:
chicken

Filters:
Cuisine: Asian
Calories: < 600 kcal
Protein: > 30g
Cooking time: < 30 min
```

---

# 🗂️ Recipe Categories

Recipes may be organized into categories such as:

```text
Breakfast
Lunch
Dinner
Dessert
Snack
Drinks
Soup
Salad
Pasta
Rice
Bread
```

The category system should remain flexible so that custom categories can be added later.

---

# 🧱 Data Model

A recipe will eventually follow a structure similar to:

```text
Recipe
├── id
├── name
├── description
├── image
├── category
├── tags
├── preparationTime
├── cookingTime
├── servings
├── ingredients
│   ├── name
│   ├── amount
│   ├── unit
│   └── nutrition
├── instructions
├── notes
└── nutrition
    ├── calories
    ├── protein
    ├── carbohydrates
    ├── fat
    ├── fiber
    └── other nutrients
```

---

# 🛠️ Technology

The initial technology stack is planned to be:

| Technology | Purpose |
|---|---|
| React | Frontend application |
| Vite | Development and build tooling |
| Tailwind CSS | Styling |
| shadcn/ui | Reusable UI components |
| GitHub | Source control |
| GitHub Pages | Hosting |
| JSON / Markdown | Initial recipe storage |
| Nutrition API | Ingredient nutrition data |

The technology stack may change as the project evolves.

---

# 🚀 Development Roadmap

## Phase 1 — Foundation

- [ ] Initialize the project
- [ ] Set up React + Vite
- [ ] Set up styling system
- [ ] Define visual design system
- [ ] Create application layout
- [ ] Create navigation
- [ ] Set up GitHub repository
- [ ] Deploy initial version to GitHub Pages

## Phase 2 — Cookbook

- [ ] Create homepage
- [ ] Create recipe cards
- [ ] Create recipe detail page
- [ ] Add recipe data
- [ ] Add recipe images
- [ ] Add categories
- [ ] Add tags
- [ ] Make the application responsive

## Phase 3 — Nutrition

- [ ] Research nutrition databases/APIs
- [ ] Select nutrition data source
- [ ] Implement ingredient search
- [ ] Match ingredients with nutrition data
- [ ] Support ingredient quantities
- [ ] Calculate total recipe nutrition
- [ ] Calculate nutrition per serving
- [ ] Display calories
- [ ] Display protein
- [ ] Display carbohydrates
- [ ] Display fat
- [ ] Display fiber

## Phase 4 — Search & Discovery

- [ ] Recipe search
- [ ] Ingredient search
- [ ] Category filtering
- [ ] Tag filtering
- [ ] Nutrition filtering
- [ ] Cooking-time filtering
- [ ] Favorites

## Phase 5 — Cookbook Experience

- [ ] Add smooth page transitions
- [ ] Experiment with page-turn animation
- [ ] Add micro-interactions
- [ ] Improve recipe reading experience
- [ ] Improve mobile interactions
- [ ] Optimize animations and performance

## Phase 6 — Recipe Management

- [ ] Create recipe editor
- [ ] Add recipes from the UI
- [ ] Edit recipes
- [ ] Delete recipes
- [ ] Upload recipe images
- [ ] Manage ingredients
- [ ] Manage nutrition information

## Phase 7 — Advanced Features

Potential future features:

- [ ] User accounts
- [ ] Cloud database
- [ ] Recipe synchronization
- [ ] Meal planning
- [ ] Shopping list generation
- [ ] Daily calorie tracking
- [ ] Nutrition history
- [ ] Favorite recipes
- [ ] Recipe sharing
- [ ] Import recipes
- [ ] Export cookbook

---

# 🌐 Deployment

The initial version of **My Cookbook** is intended to be hosted using **GitHub Pages**.

This allows the application to be publicly accessible without requiring traditional web hosting.

Planned deployment:

```text
Git Repository
      │
      ▼
GitHub
      │
      ▼
GitHub Pages
      │
      ▼
Public Website
```

---
