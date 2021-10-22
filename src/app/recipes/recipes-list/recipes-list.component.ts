import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-recipe-israel.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a Test 2', 'https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-recipe-israel.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
