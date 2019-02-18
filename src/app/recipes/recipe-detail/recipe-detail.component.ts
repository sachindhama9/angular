import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe1:Recipe;
  id:number;

  constructor(private recipeService : RecipeService,
              private route : ActivatedRoute   ,
              private router :Router   
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params :Params)=>{
        this.id=+params['id'];
        console.log('This method is called when the params are changed in the URL :'+this.id)
        this.recipe1=this.recipeService.getRecipeData(this.id);
      }
    );
  }

  onAddToShoppingList(){
    console.log("in the onAddToShoppingList of Recipe Details compoent");
    this.recipeService.addIngredientsToShoppingList(this.recipe1.ingredients)

  }

  OnEditRecipe(){
    console.log('in the Edit Recipe Component');
    this.router.navigate(['edit'],{relativeTo:this.route});

  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
