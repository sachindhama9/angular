import { Component, OnInit,EventEmitter,Output, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

import {ShoppingListService} from '../shopping-list.service'
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') slForm:NgForm;

  subscription:Subscription;
  editMode=false;
  editedItemIndex :number;
  editedItem:Ingredient;

  @Output() ingredientAdded=new EventEmitter<Ingredient>();

  constructor(public shoppingListService:ShoppingListService ) { }

  ngOnInit() {
    this.subscription=this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
       

      }
    );

  }

  onSubmit(form :NgForm){
    console.log("in the onAdditem method");
   const value=form.value;

   console.log("amount"+value.amount)
    const newIngredient=new Ingredient(value.name,value.amount);
   // this.ingredientAdded.emit(newIngredient);
   if(this.editMode){
     this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
   }
   else{
    this.shoppingListService.addShoppingItem(newIngredient);
   }
   //here changing mode as well and reseting the form as well and setting the 
   this.editMode=false;
   form.reset();

   
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  OnClear(){
    console.log("OnClear");
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient( this.editedItemIndex);
    this.OnClear();
  }

}
