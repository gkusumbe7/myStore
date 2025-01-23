import { Component } from '@angular/core';
import { FormBuilder  , FormGroup  , Validators} from '@angular/forms';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrl: './stock-management.component.css'
})
export class StockManagementComponent {
  
  saveProductDetails : FormGroup;
  categoryies = ['Fruits & Vegetables' , 'Dairy Products' , 'Personal Care' , 'Grains' ]
  
  constructor(private FormBuilder:FormBuilder){
    this.saveProductDetails = this.FormBuilder.group({
        name:['',[Validators.required , Validators.minLength(10)]],
        category:['',[Validators.required]],
        price:['',[Validators.required]],
        quantity:['',[Validators.required]]
    })  
  }


  saveProduct(){
    if(this.saveProductDetails.valid){
      console.log(this.saveProductDetails.value);
    }else{
      console.log('Invalid form');
    }
  }
}
