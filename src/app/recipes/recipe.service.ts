import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pesto Pasta',
      'A delicious dish, high in protein, fiber and vitamins.',
      'http://res.publicdomainfiles.com/pdf_view/2/13494451211528.jpg',
      [
        new Ingredient('Basil', 2),
        new Ingredient('Tomatoe', 4),
        new Ingredient('Pasta', 1)
      ]
    ),
    new Recipe(
      'Rainbow Pizza',
      'A vegetarian delight.',
      'https://live.staticflickr.com/2015/2269983942_96804244fb_b.jpg',
      [
        new Ingredient('Peppers', 2),
        new Ingredient('Tomatoe Sauce', 1),
        new Ingredient('Dough', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
