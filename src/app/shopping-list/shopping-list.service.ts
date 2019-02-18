import { Ingredient } from "../shared/Ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientsChanged= new Subject<Ingredient[]>();
    ingredients :Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomotatoes',10),
    
      ];

      startedEditing =new Subject<number>();

      

      addShoppingItem(ingredient :Ingredient ){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());

      }

      getIngredient(index:number){
          return this.ingredients[index];
      }

      addIngredients(ingredient :Ingredient[]){
          console.log("in the addIngredients of shopping list service");
          this.ingredients.push(...ingredient);
          console.log("size of ingredients array"+this.ingredients.length);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      updateIngredient(index:number,newIngredient:Ingredient){
          this.ingredients[index]=newIngredient;
          this.ingredientsChanged.next(this.ingredients.slice());

      }

      deleteIngredient(index:number){
          this.ingredients.splice(index,1);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      onEditItem(index: number){

    }
}