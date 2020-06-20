/* wrapping all global variables in 'Immediately Invoked Function Expression (or IIFE)' to avoid external code conflicts */
var pokemonRepository = (function () { //This is the IIFE wrap
/* removed as required for task 1.7 */
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

/* call pokemon API with fetch (Task 1.7)
  fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
    return response.json(); // This returns a promise!
  }).then(function (pokemonList) {
    console.log(pokemonList); // The actual JSON response
  }).catch(function () { // Error-handling
  });  //fetch end
*/
  function getAll() {   //get all items from the Pokemon array using the getAll method
    return pokemonList;
  }
  function add(pokemonList) {  //add pokemonList using the push method
    pokemonList.push(pokemonList);
  }

  function showDetails(pokemon) {  //create function showDetails
    console.log(pokemon);
    //console.log(pokemonList.name); MY WRONG VERSION 1
    //console.log(arguments[0]);     MY WRONG VERSION 1
  }

  pokemonList.forEach(function (pokemonList) { //forEach loop to ensure only pokemons with a height > 5 are marked with ' Wow, that’s big!'

/* Task 1.6 starts here, including function addListItem and code polishing using IIFE */
  //function addListItem('pokemon'){  //add a function addListItem with parameter 'pokemon'

  function addListItem(item) { //add a function addListItem with parameter 'pokemon'
    var hitList = document.querySelectorAll('ul')[0];        //create a 'ul' element and assign  it to ul in HTML
    //var pokemon = function(addListItem) {  MY WRONG VERSION
    //var hitList = document.querySelectorAll('ul');       //create a 'ul' element and assign  it to ul in HTML
    var listItem = document.createElement('li');          //create a list element
    var button = document.createElement('button');        //create a button element (syntax correct but moved here from line 57)
    button.innerHTML = item.name;                           // set button innerText to be the Pokémon's name
    //container.innerHTML = '<button>Bulbasaur</button>';   // set button innerText to be the Pokémon's name (MY WRONG VERSION)
    button.addEventListener('click', function (event) {  //event listener to each newly created button
    // var expandContent = function showDetails(pokemon) { event listener to each newly created button MY WRONG VERSION
      showDetails(item.name);   //create function showDetails
    });
    /*button.addEventListener('click', function (event) {   //event listener to each newly created button
      console.log(event);
      call.showDetails('pokemon');
    });  MY WRONG VERSION END */

    button.classList.add('button');  //Add a class to the button using the classList.add method
    //button.classList.add(class ='button');  MYWRONG VERSION this version works but throws a browser ERROR
    //button.classList.add('button');                              //this version doesn't throw a browser ERROR but doesn' work
    //document.getElementById('button').classList.add('.button');  //this version doesn't throw a browser ERROR but doesn' work

    listItem.appendChild(button);  //append the button to the list item as its child
    hitList.appendChild(listItem); //append the list item to the unordered list as its child
    //  var container = document.querySelector('.container'); //create a container around the button (one hitListItem within the hitList)

  };  //add listItem end
/* Task 1.6 ends here */

  }); // forEach Loop end

  return{   //return all items from the pokemonList to make it available outside the IIFE
    add: add,
    getAll: getAll,
    addListItem: addListItem // Ask Shan: What exactly do we want to return here?
  };
})();
/* Wrapping IIFE end */

pokemonRepository.getAll().forEach(function (pokemon) { //forEach loop to ensure only pokemons with a height > 5 are marked with ' Wow, that’s big!'
  pokemonRepository.addListItem(pokemon);
});
