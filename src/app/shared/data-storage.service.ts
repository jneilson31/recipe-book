import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {


  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { 
  }

  storeRecipes() {

    // return this.httpClient.put('https://ng-recipe-book-ce0db.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: new HttpHeaders().set('Authorization', 'Bearer adfdafdasf')
    // });
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-ce0db.firebaseio.com/recipes.json',
    this.recipeService.getRecipes(), {reportProgress: true});
      return this.httpClient.request(req)
  }

  getRecipes() {

    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-ce0db.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-ce0db.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
    .map(
      (recipes) => {
        console.log(recipes)
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
