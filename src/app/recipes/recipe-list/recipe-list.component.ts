import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Bacon Noodle Soup', 'Bacon ipsum dolor amet leberkas corned.', 'https://c1.staticflickr.com/8/7048/8688987851_6603b30c22_b.jpg'),
    new Recipe('Bacon Noodle Soup', 'Bacon ipsum dolor amet leberkas corned.', 'https://c1.staticflickr.com/8/7048/8688987851_6603b30c22_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
