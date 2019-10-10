import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private heroesUrl = 'api/heroes'; // URL to web api

  // Syncronous
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // ASyncronous-observable
  // getHeroes(): Observable<Hero[]> {
  //   // this.messageService.add("HeroService: fetched heroes");
  //   this.log("fetched heroes");
  //   return of(HEROES);
  // }

  // Get from HTTP api
  getHeroes(): Observable<Hero[]> {
    this.log("fetched heroes");
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number): Observable<Hero> {
    // this.messageService.add(`HeroService: fetched hero id ${id}`);
    this.log(`fetched hero id ${id}`);

    return of(HEROES.find(hero => hero.id === id));
  }
}
