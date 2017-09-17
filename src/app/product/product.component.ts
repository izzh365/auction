import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Array<Product>;

  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  ngOnInit() {
      this.products = [
          new Product(1,'第1个商品',1.99,3.5,'此商品大甩卖',['电子产品','设备1']),
          new Product(2,'第2个商品',1.99,2,'此商品大甩卖',['电子产品','设备2']),
          new Product(3,'第3个商品',1.99,2.5,'此商品大甩卖',['电子产品','设备3']),
          new Product(4,'第4个商品',1.99,3,'此商品大甩卖',['电子产品','设备4']),
          new Product(5,'第5个商品',1.99,4,'此商品大甩卖',['电子产品','设备5']),
          new Product(6,'第6个商品',1.99,4.5,'此商品大甩卖',['电子产品','设备6']),
      ]
  }
}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}

