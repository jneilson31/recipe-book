import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

    selectedRecipe = new EventEmitter<Recipe>();

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


}