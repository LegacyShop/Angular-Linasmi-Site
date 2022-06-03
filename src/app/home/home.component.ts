import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Array<any> = [
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card10.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card9.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card5.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card6.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card11.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card8.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card7.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card13.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card2.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card3.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card1.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card5.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card11.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card14.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card10.jpg',
      description: 'Уникальное платье'
    },
    {
      name: 'Название',
      price: 4999,
      discount: 20,
      imgPath: 'assets/img/card13.jpg',
      description: 'Уникальное платье'
    }
  ]

  isActive = false;

  constructor() { }

  getPriceDiscount(product: any) {
    return ~~(product.price-(product.price/100)*product.discount);
  }

  ngOnInit(): void {
  }

  changeToggle(item: any) {
    this.isActive = !this.isActive;
  }
}
