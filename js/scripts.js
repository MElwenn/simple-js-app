/* wrapping all global variables in 'Immediately Invoked Function Expression (or IIFE)' to avoid external code conflicts */
(function () { //This is the IIFE wrap
    var pokemonList = [ //This is the Pokemon array
    {
      name: 'Bulbasaur',
      height: 7,
      types: ['grass',' poison ']
    },
    {
      name: 'Pikachu',
      height: 4,
      types: ['electric ']
    },
    {
      name: 'Weedle',
      height: 3,
      types: ['bug',' poison ']
    }
  ];  //End of Pokemon array
    function getAll() {   //get all items from the Pokemon array using the getAll method
      return pokemonList;
    }
    function add(pokemonList) {  //add pokemonList using the push method
      pokemonList.push(pokemonList);
    }

    pokemonList.forEach(function (pokemonList) { //forEach loop to ensure only pokemons with a height > 5 are marked with ' Wow, that’s big!'
    if (pokemonList.height > 5) {              //check if the height is above the value 5 to display Wow that's big
      document.write('<p>' + pokemonList.name + ' height: ' + pokemonList.height + ' Wow, that’s big!' + '</p>' + pokemonList.types);
    }
    else {
      document.write('<p>' + pokemonList.name + ' height: ' + pokemonList.height + '</p>' + pokemonList.types);
    }
  });

    return {   //return all items from the pokemonList and all that might be added in addition
    add: add,
    getAll: getAll
  };
})();
/* Wrapping IIFE end */
