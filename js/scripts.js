// array pokemonList
var repository = [
  {
      var pokemon = {
      name: 'Bulbasaur',
      height: 7,
      types: ['grass','poison']
      }
  },
  {
      var pokemon = {
      name: 'Pikachu',
      height: 4,
      types: ['electric']
      }
  },
  {
      var pokemon = {
      name: 'Weedle',
      height: 3,
      types: ['bug','poison']
      }
  }
] // End of repository

var pokemonList = ['Bulbasaur (height: 7)' /* Wow, that’s big!'*/, 'Pikachu (height: 4) ', 'Weedle (height: 3) '] //workaround for DOES NOT WORK se below

for (var i = 0; i < pokemonList.length; i++) {
  if ( i == 4 ) {
		break;
  }
  if (repository.pokemon.height in repository.pokemon > 5) {  //check if the height is above the value 5
    document.write(pokemonList[i] + repository.pokemon.height + '<p>Wow, that’s big!</p>');
  }

  else {
    document.write(pokemonList[i] + repository.pokemon.height + '<p> </p>'); //+ '<p>height: </p>' + repository.height); DOES NOT WORK
  }                                              //+ '<p>height: </p>' + repository.pokemon.height); DOES NOT WORK
}
