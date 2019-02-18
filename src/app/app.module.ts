import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { HeaderComponent } from './header/header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { RecipesComponent } from './recipes/recipes.component';
import {ShoppingListComponent } from './shopping-list/shopping-list.component';
import {DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service'
import { RecipeService } from './recipes/recipe.service';
import { AppRouteModule } from './app-route.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DataStorageService } from './shared/data-storage.service';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    HeaderComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouteModule,
    HttpModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
