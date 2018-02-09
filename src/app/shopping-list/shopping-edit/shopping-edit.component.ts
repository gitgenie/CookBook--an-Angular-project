import { Component,  OnInit,  OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm : NgForm;
  subscription = new Subscription();
  editMode = false;
  editIngredient: Ingredient;
  editModeIndex:number;
  
  constructor(private slService: ShoppingListService) { }
  
  ngOnInit() {
  	this.subscription = this.slService.startedEditing.subscribe(
	(index:number)=>{
		this.editModeIndex = index;
		this.editMode = true;
		this.editIngredient = this.slService.getIngredient(index);
		this.slForm.setValue({
			name: this.editIngredient.name,
			amount: this.editIngredient.amount
		})
	});
  }
  
  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }
  onAddItem(form: NgForm) {
  	const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
	if(this.editMode){
		this.slService.updateIngredients(this.editModeIndex, newIngredient);
	} else {
 		this.slService.addIngredient(newIngredient);
	}
	this.editMode = false;
	form.reset();
  }

}
