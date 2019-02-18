import { Injectable } from "@angular/core";

import{Http,Response} from "@angular/http"

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService{

    constructor(private http:Http,private recipeService:RecipeService){

    }

    storeRecipes(){
        //this.http.send('https://udemy-ng-http-748bd.firebaseio.com/recipes.json')
        return this.http.put('https://ng-recipe-data.firebaseio.com/recipes.json',this.recipeService.getRecipe());
    }

    getRecipes(){
        return this.http.get('https://ng-recipe-data.firebaseio.com/recipes.json')
        .pipe(map(
            (response : Response) => {
                const recipes:Recipe[] = response.json();
                for(let recipe of recipes){
                   console.log("recipe.name"+recipe.name) ;
                   if(!recipe['ingredients']){
                       recipe['ingredients']=[];

                   }

                }
              return recipes;
                }
        ))


        .subscribe(
            (recipes : Recipe[]) => {
            console.log("in the data storage service .getRecipes method"+recipes[1]);
            this.recipeService.setRecipes(recipes);

            }
        );

    }

}