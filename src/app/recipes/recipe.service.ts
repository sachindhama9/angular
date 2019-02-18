import { Recipe } from "./recipe.model";
import {  Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{

    recipesChanged=new Subject<Recipe[]>();
    

    private recipes :Recipe[]=[
        new Recipe('Test Recipe',
        'This is a First Recipe',
        'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg',
        [new Ingredient('Meat',1),
        new Ingredient('Meat1',2)]),
        new Recipe('Test Recipe','This is a Second Recipe',
        'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg',
        [new Ingredient('Meat3',1),
        new Ingredient('Meat4',2)])
      ];

      constructor(private slService : ShoppingListService){

      }

      


      getRecipe(){
         return  this.recipes.slice();
      }


      addIngredientsToShoppingList(ingredients : Ingredient[]){
          console.log("in the addIngredientsToShoppingList of recipe service")
          this.slService.addIngredients(ingredients);

      }

      getRecipeData(index:number){
          return this.recipes[index];

      }

      addRecipe(recipe : Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());

      }

      updateRecipe(index: number ,newRecipe : Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes);

      }

      setRecipes(recipes :Recipe[]){
          this.recipes=recipes;
          
          this.recipesChanged.next(this.recipes.slice());

      }

      



}