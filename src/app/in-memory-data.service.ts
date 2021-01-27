import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: '草莓蛋糕', price: 100, inventory:88, type:['new', 'daily'],
      imgUrl:"https://images.unsplash.com/photo-1473256599800-b48c7c88cd7e?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=ae0d68ab0db4ee79bdce92722b31112b&amp;auto=format&amp;fit=crop&amp;w=925&amp;q=80",},

      { id: 2, name: '巧克力蛋糕', price: 80, inventory:90, type:['hot', 'daily'],
      imgUrl:"https://images.unsplash.com/photo-1473256599800-b48c7c88cd7e?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=ae0d68ab0db4ee79bdce92722b31112b&amp;auto=format&amp;fit=crop&amp;w=925&amp;q=80",},

      { id: 3, name: '芋頭蛋糕', price: 80, inventory:54, type:['hot', 'daily'],
      imgUrl:"https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=73ed228f25bdefd2291c242f6d390fca&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",},

      { id: 4, name: '香蕉蛋糕', price: 110, inventory:69, type:['new', 'hot'],
      imgUrl:"https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=7ce5bbf66bdb4ed3b6965f0b3618aa43&amp;auto=format&amp;fit=crop&amp;w=654&amp;q=80",},

      { id: 5, name: '芭樂蛋糕', price: 95, inventory:87, type:['new', 'hot'],
      imgUrl:"https://images.unsplash.com/photo-1504473089979-b1c4993a9653?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=9db69b72e1f7d1b4e5c81cee531108ff&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",},

      { id: 6, name: '香草蛋糕', price: 60, inventory:64, type:['new', 'daily'],
      imgUrl:"https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=7ce5bbf66bdb4ed3b6965f0b3618aa43&amp;auto=format&amp;fit=crop&amp;w=654&amp;q=80",}
 ];
    return {products};
  }


}
