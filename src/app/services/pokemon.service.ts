import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(private httpClient: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemon: any) => {
          this.apiGetPokemons(resPokemon.url).subscribe(
            (res) => resPokemon.status = res
          );
        })
      })
    );
  }

  public apiGetPokemons (url:string):Observable<any>{
    return this.httpClient.get<any>(url).pipe(
      map (res => res)
    )
  }

  // async loadPokemons() {
  //   try {
      
  //     const requisition = await this.httpClient
  //     .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
  //     .toPromise();


  //     this.pokemons = requisition.results;
  //     console.log(this.pokemons);
  //     return this.pokemons;

  //   } catch (error) {
  //     console.error('Erro ao carregar os Pokémons:', error);
  //     return null;
  //   }
  // }


}
