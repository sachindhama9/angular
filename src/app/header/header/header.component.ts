import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import {Response} from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ Output() featureSelected= new EventEmitter<string>();

  feature :string;
  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit() {
  }

  onSelect(feature:string){
    this.featureSelected.emit(feature)

  }

  onSaveData(){
    this.dataStorageService.storeRecipes().subscribe(
      (response :Response )=>{
        console.log(response);
        console.log('Got the response');
      }
    )
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
    console.log("this.dataStorageService.getRecipes()"+this.dataStorageService.getRecipes());
    
  }

}
