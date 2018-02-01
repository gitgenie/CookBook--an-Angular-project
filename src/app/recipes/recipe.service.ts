import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
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

constructor(private slService:ShoppingListService ){

}
getRecipes(){
	return this.recipes.slice();	  
}

getRecipe(index:number){
	return this.recipes[index];
}

addIngredientsToShoppingList(ingredients:Ingredient[]){
	this.slService.addIngredients(ingredients);
}
}