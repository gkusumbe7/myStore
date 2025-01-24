import { Component } from '@angular/core';
import { FormBuilder  , FormGroup  , Validators} from '@angular/forms';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrl: './stock-management.component.css'
})
export class StockManagementComponent {
  
  // For ADD PRODUT
  saveProductDetails : FormGroup;
  categoryies = ['Fruits & Vegetables' , 'Dairy Products' , 'Personal Care' , 'Grains' ]
  productstore : any[] = [];  

  constructor(private FormBuilder:FormBuilder){

    this.saveProductDetails = this.FormBuilder.group({
        name:['',[Validators.required , Validators.minLength(3)]],
        category:['',[Validators.required]],
        price:['',[Validators.required]],
        quantity:['',[Validators.required]]
    });

  
    this.addProductsEntry = this.FormBuilder.group({
        itemCategory:['',[Validators.required]],
        itemName:['',[Validators.required]],
        itemPrice:['',[Validators.required]],
        itemQuantity:['',[Validators.required]]
    })


  }

  saveProduct(){
    if(this.saveProductDetails.valid){
      console.log(this.saveProductDetails.value);
        this.productstore.push(this.saveProductDetails.value);
        console.log(this.productstore);
        this.saveProductDetails.reset();
     }else{
      console.log('Invalid form');
    }
  }

  activeEntry:string = 'addProductEntry';

  showAddProductorProductEntry(entryType:string){
        this.activeEntry = entryType;
  }

  // For Production Entry 
  addProductsEntry : FormGroup;
  addProductEntry(){}

  

}
