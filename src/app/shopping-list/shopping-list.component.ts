import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients :Ingredient[]=[
  ];



  private subscription :Subscription;
    


  constructor(public shoppingListService :ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.ingredients;
   this.subscription= this.shoppingListService.ingredientsChanged
    .subscribe(
      (ingredients : Ingredient[])=>{
        this.ingredients=ingredients;
      }
    )
  }

  ingredientsAdded(ingredient:Ingredient){
    //this.shoppingListService.addShoppingItem(ingredient);

    this.ingredients.push(ingredient);

  }

  getShoppingItems(){
    

  }

  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }



  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
