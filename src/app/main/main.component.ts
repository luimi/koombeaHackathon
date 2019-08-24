import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  protected products;
  private sort = 'rating';
  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.getProducts();
  }
  async getProducts(page?){
    this.products = await this.rest.getProducts(this.sort,page?page:1);
  }
  getArrayOfPages(){
    let pages=[];
    if(this.products){
      for(let i = 0;i<this.products.numberOfPages;i++){
        pages.push(i+1);
      }
    }
    return pages;
  }
}
