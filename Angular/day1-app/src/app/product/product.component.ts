import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiscountOffers, ICategory, IProduct } from '../Shared Classes and types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {


      Discount : DiscountOffers
      storeName : string
      storeLogo : string
      ProductList : IProduct[];
      CategoryList : ICategory[] ;
      ClientName : string
      IsPurshased : boolean = false
      totalPrice: number;
      @Input() receivedCategoryID: number = 0;

      @Output() PriceChange: EventEmitter<number>;





      hide(){
        this.IsPurshased=!this.IsPurshased
      }
      showing(){
        this.IsPurshased=this.IsPurshased
      }

      updateTotalPrice(id: number, price: number) {
        if (this.ProductList[id - 1].quantity > 0) {
          this.ProductList[id - 1].quantity--;
          console.log(this.ProductList[id - 1].quantity);
          this.totalPrice += 1 * price;
        } else {
          this.ProductList[id - 1].quantity = 0;
          console.log('Out Of Stock');
        }
      }


      constructor(){
        this.Discount= 10 ;
        this.storeName= " VEGA";
        this.storeLogo= "../../assets/logo.jpg";
        this.ProductList= [
          {
              id: 1,
              name: "Lenvo thinpad X230",
              price: 100,
              quantity: 10,
              categoryID: 1,
              imgURL: "https://picsum.photos/200"
            },
          {
              id: 2,
              name: "Dell",
              price: 200,
              quantity: 20,
              categoryID: 1,
              imgURL: "https://picsum.photos/200"
            },
            {
              id: 3,
              name: "Lenovo Tab",
              price: 100,
              quantity: 10,
              categoryID: 2,
              imgURL: "https://picsum.photos/200"
          },
          {
              id: 4,
              name: "Samsung Tab",
              price: 100,
              quantity: 10,
              categoryID: 2,
              imgURL: "https://picsum.photos/200"
          },
          {
              id: 5,
              name: "Samsung note 10",
              price: 100,
              quantity: 10,
              categoryID: 3,
              imgURL: "https://picsum.photos/200"
          },
          {
              id: 6,
              name: "Samsung S10",
              price: 100,
              quantity: 10,
              categoryID: 3,
              imgURL: "https://picsum.photos/200"
          },
          {
              id: 7,
              name: "tochiba Utlra",
              price: 60000,
              quantity: 14,
              imgURL: "https://fakeimg.pl/200x100",
              categoryID: 4
          },
          {
              id: 8,
              name: "Apple Utlra",
              price: 7800060,
              quantity: 6,
              imgURL: "https://fakeimg.pl/200x100",
              categoryID: 4
          },
          {
              id: 9,
              name: "test Utlra",
              price: 7800060,
              quantity: 3,
              imgURL: "https://fakeimg.pl/200x100",
              categoryID: 4
          },
          {
              id: 10,
              name: "jhgfjxz",
              imgURL: "http://xgcbmxgvnbx",
              quantity: 33,
              price: 44444444,
              categoryID: 1
          },
          {
              name: "fsdjhfgsdjhkgfsh",
              price: 7800060,
              quantity: 3,
              imgURL: "https://fakeimg.pl/200x100",
              categoryID: 4,
              id: 11
          }
      ];
        this.CategoryList= [
          {
            "id": 1,
            "name": "Laptops",
            "desciption": "This is description"
          },
          {
            "id": 2,
            "name": "Tablets",
            "desciption": "This is description"
          },
          {
            "id": 3,
            "name": "Mobiles",
            "desciption": "This is description"
          }
        ];
        this.ClientName="clientA";
        this.IsPurshased= true;
        this.totalPrice = 0;
        this.PriceChange = new EventEmitter<number>();


      }
      addToCart(itemsCount: number, item: IProduct): void {
        if (item.quantity >= itemsCount) {
          item.quantity -= itemsCount;
          this.updateTotalPrice(itemsCount, item.price);
        }
      }}
