import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Bacon Noodle Soup',
            'Bacon ipsum dolor amet leberkas corned.',
            'https://c1.staticflickr.com/8/7048/8688987851_6603b30c22_b.jpg',
            [
                new Ingredient('Bacon', 5),
                new Ingredient('Noodles', 1)
            ]),

        new Recipe('Chicken Roll Ups',
            'Breaded chicken roll up description.',
            'https://images-gmi-pmc.edge-generalmills.com/95733b94-0838-4a4e-81fc-ae603b2e4738.jpg',
            [
                new Ingredient('Chicken', 3),
                new Ingredient('Rolls', 8)
            ]),
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }


}