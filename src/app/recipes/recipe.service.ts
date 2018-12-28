import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Bacon Noodle Soup', 'Bacon ipsum dolor amet leberkas corned.', 'https://c1.staticflickr.com/8/7048/8688987851_6603b30c22_b.jpg'),
        new Recipe('Chicken Roll Ups', 'Breaded chicken roll up description.', 'https://images-gmi-pmc.edge-generalmills.com/95733b94-0838-4a4e-81fc-ae603b2e4738.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }


}