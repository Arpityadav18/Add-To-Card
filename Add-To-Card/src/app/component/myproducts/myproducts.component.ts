import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.scss'],
})
export class MyproductsComponent implements OnInit {

  public productList : any;
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {   
    this.api.getProduct().subscribe(resp=>{
      this.productList = resp;
      

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  } 

  addtocart(item:any){
    this.cartService.addTocart(item);
  }
  
}
