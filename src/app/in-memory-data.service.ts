import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    const heroes = [
      {id: 11, name: "Basava"},
      {id: 12, name: "Kuvempu"},
      {id: 13, name: "Bahubali"},
      {id: 14, name: "Shivaji"},
      {id: 15, name: "Vallabhai"},
      {id: 16, name: "Rayanna"},
      {id: 17, name: "Krishnadeva"},
      {id: 18, name: "Veerabadra"},
      {id: 19, name: "Allama"},
      {id: 20, name: "Channabasava"}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  getId(heroes: Hero[]) {
    return heroes.length > 0 ? Math.max( ...heroes.map( hero => hero.id )) + 1 : 11;
  }
}
