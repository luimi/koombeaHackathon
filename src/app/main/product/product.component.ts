import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product;
  localFavorite='favorites';
  constructor() { }

  ngOnInit() {
  }
  addFavorite(){
    const favorites = this.getFavorites();
    favorites.push(this.product.id);
    localStorage.setItem(this.localFavorite,JSON.stringify(favorites));
  }
  removeFavorite(){
    const favorites = this.getFavorites();
    const index = favorites.indexOf(this.product.id);
    favorites.splice(index,1);
    localStorage.setItem(this.localFavorite,JSON.stringify(favorites));
  }
  isFavorite(){
    const favorites = this.getFavorites();
    return favorites.indexOf(this.product.id) >= 0;
  }
  getFavorites(){
    let favorites;
    if(localStorage.getItem(this.localFavorite)){
      favorites = JSON.parse(localStorage.getItem(this.localFavorite));
    }else{
      favorites=[];
    }
    return favorites;
  }

}
