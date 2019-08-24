import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private client: HttpClient) { }
  public async getProducts(order,page){
    const response = await this.get(`${environment.api}/products?sortBy=${order}&page=${page}`);
    return response;
  }
  private get(url){
    return new Promise((res,rej)=>{
      this.client.get(url).subscribe(data =>{
        res(data);
      });
    });
  }
}
