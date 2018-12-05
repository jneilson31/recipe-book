import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Bacon Noodle Soup', 'Bacon ipsum dolor amet leberkas corned.', 'https://c1.staticflickr.com/8/7048/8688987851_6603b30c22_b.jpg'),
    new Recipe('Chicken Roll Ups', 'Breaded chicken roll up description.', 'https://images-gmi-pmc.edge-generalmills.com/95733b94-0838-4a4e-81fc-ae603b2e4738.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
