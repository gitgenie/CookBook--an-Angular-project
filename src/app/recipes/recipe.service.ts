import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();
private recipes: Recipe[] = [
    new Recipe('Apple Rice Pudding',
	'Traditional Ukrainian Cookery',
	'https://natashaskitchen.com/wp-content/uploads/2017/10/Apple-Rice-Pudding-4-187x187.jpg',
	[
	new Ingredient('Cheese',5),
	new Ingredient('Sugar',2)
	]),
    new Recipe('Persimmon Bread',
	'Vadim’s very popular banana bread',
	'https://natashaskitchen.com/wp-content/uploads/2015/11/Persimmon-Bread-4-187x187.jpg',
	[
	new Ingredient('Flour',4),
	new Ingredient('Banana',2)
	])
  ];

getRecipes(){
	return this.recipes.slice();	  
}
}