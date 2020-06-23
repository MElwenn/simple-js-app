/* wrapping all global variables in 'Immediately Invoked Function Expression (or IIFE)' to avoid external code conflicts */
var pokemonRepository = (function () { //This is the IIFE wrap
// removed as required for task 1.7
  var pokemonList = [ //This is the Pokemon array
  {
    name: 'Bulbasaur',
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
  ]; //End of Pokemon array
  function getAll() { //get all items from the Pokemon array using the getAll method
    return pokemonList;
  }
  function add(pokemonList) { //add pokemonList using the push method
    pokemonList.push(pokemonList);
  }
  function showDetails(item) { //create function showDetails
    console.log(item);
  }

  function addListItem(item) { 
    var hitList = document.querySelectorAll('ul')[0]; 
    var listItem = document.createElement('li'); //create a list element
    var button = document.createElement('button'); //create a button element (syntax correct but moved here from line 57)
    button.innerHTML = item.name; // set button innerText to be the Pokémon's name
    button.addEventListener('click', function (event) { //event listener to each newly created button
      showDetails(item.name); //create function showDetails
    });
    button.classList.add('button'); //Add a class to the button using the classList.add method
    listItem.appendChild(button); //append the button to the list item as its child
    hitList.appendChild(listItem); //append the list item to the unordered list as its child
  };

  return{ //return all items from the pokemonList to make it available outside the IIFE
    add: add,
    getAll: getAll,
    addListItem: addListItem // Ask Shan: What exactly do we want to return here?
  };
})();

 // outside world
pokemonRepository.getAll().forEach(function (item) { //forEach loop to ensure only pokemons with a height > 5 are marked with ' Wow, that’s big!'
  pokemonRepository.addListItem(item); // Shan's code review 2020-06-22
});
