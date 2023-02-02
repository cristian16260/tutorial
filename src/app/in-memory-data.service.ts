import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero'; 

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes= [
    {id: 12, name: 'dr. frio'},
    {id: 13, name: 'dr. doom'},
    {id: 14, name: 'dr. fake'},
    {id: 15, name: 'hulk'},
    {id: 16, name: 'spiderman'},
    {id: 17, name: 'blade'},
    {id: 18, name: 'rex'},
    {id: 19, name: 'iroman'},
    {id: 20, name: 'zoe'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11 ;
  }

}
