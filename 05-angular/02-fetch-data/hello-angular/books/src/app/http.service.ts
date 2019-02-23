// import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class HttpService {
//   constructor(private _http: HttpClient) {
//     this.getTasks();
//   }
//   getTasks() {
//     // our http response is an Observable, store it in a variable
//     const tempObservable = this._http.get('/tasks');
//     // subscribe to the Observable and provide the code we would like to do with our data from the response
//     tempObservable.subscribe(data => console.log('Got our tasks!', data));
//   }
// }
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getPokemonAbilities();
  }
  getPokemon() {
    const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');

    bulbasaur.subscribe(data => {
      const pokemonFact1 = data.abilities[0].ability.name;
      const pokemonFact2 = data.abilities[1].ability.name;
      console.log(`Bulbasaur's abilities are ${pokemonFact1} and ${pokemonFact2}.`);
    });
  }

  getPokemonAbilities() {
    const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      const ability = data.abilities[1].ability;
      const abilityUrl = this._http.get(`${ability.url}`);
      abilityUrl.subscribe(abilityData => {
        const pokemonObj = abilityData.pokemon;
        console.log(`${pokemonObj.length} pokemon have the ${ability.name} ability.`);
      });
    });
  }

}
