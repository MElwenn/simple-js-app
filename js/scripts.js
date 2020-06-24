/* wrapping all global variables in 'Immediately Invoked Function Expression (or IIFE)' to avoid external code conflicts */

var pokemonRepository = (function () { //This is the IIFE wrap
  var pokemonList = []; // removed pokemon objects and replaced array with an empty array
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //define apiURL

  /* call pokemon API with fetch (Task 1.7) */
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150').then(function (response) { //request for list of Pokemons against API, 1st .then expecting the list within the response parameters
      return response.json(); // function returns a promise-object and parses response into JSON data
    }).then(function (pokemonList) { // if promise within response.json() resolved, all data is available in pokemonList-parameters
      console.log(pokemonList); // The actual JSON response
    }).catch(function () { // Error-handling
    });  //fetch end

  function loadList() {  // function to load the list of Pokemons
    return fetch(apiUrl).then(function (response) { //callback function to pass the list of Pokemons to the response [Object Response] IF promise resolved
      return response.json(); // function returns a promise-object and parses response into JSON data
    }).then(function (json) { // if promise resolved, all data passed in resolved function is availabe here
      json.results.forEach(function (item) { //forEach Loop to add pokemon objects instead of using the array
        var item = {       // Structure of the object "item" rather than " "Pokemon"
          name: item.name,
          detailsUrl: item.url
        };
        add(item);         //adds the object to the loadList ("item" rather than " "Pokemon")
      });                     // forEach Loop end
    }).catch(function (e) {   //ERROR handling
      console.error(e);
    });
  }  // function loadList end

  function loadDetails(item) { // function to load the details of Pokemons ("item" rather than "pokemon")
    var url = item.detailsUrl; // define url
    return fetch(url).then(function (response) {  //callback function to pass the Pokemon-details to the response [Object Response] IF promise resolved
//GET + URL + Parameters to passed inside here?
    //fetch('https://pokeapi.co/api/v2/pokemon/', {
    //  method: 'GET'
    //})
      return response.json();    // function returns a promise-object and parses response into JSON data
    }).then(function (details) { // if promise resolved, all data passed in resolved function is availabe here
/* N E W    T R Y  */
        // Good guess:
        //a) do we need a onClick eventListener that grabs at least ID or name to get required answer?
        //b) do we need to post parameters to get the detail-data we want? (ID or name of a certain pokemon?)
/* N E W    T R Y  */
      item.imageUrl = details.sprites.front_default;  // GET the Pokémon details using the URL from the Pokémon object in the parameter
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  } // function loadDetails end

//  return {
//  add: add,
//  getAll: getAll,
//  loadList: loadList,
//  loadDetails: loadDetails  //add loadDetails
//};
//})(); // Wrapping IIFE end

  //pokemonRepository.getAll().forEach(function(item){ // "item" rather than "pokemon"
  //  addListItem(item);  //function should expect a parameter with a Pokémon object // "item" rather than "pokemon"
  //}); these brackets were too much
//}); // pokemonRepository.loadList() END

  function getAll() {   //get all items from the Pokemon array using the getAll method
    return pokemonList;
  }

  function add(pokemon) {  //add pokemonList using the push method
    pokemonList.push(pokemon);
  }

  function showDetails(item) {  //show "pokemon" or show "item"? Answer "item"
    //loadDetails(item).then(function () {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);                  // ToDo: add the details URL here somehow
    });
  }

  function addListItem(item) { //add a function addListItem with parameter 'pokemon'
    var hitList = document.querySelectorAll('ul')[0];     //create a 'ul' element and assign  it to ul in HTML
    var listItem = document.createElement('li');          //create a list element
    var button = document.createElement('button');        //create a button element (syntax correct but moved here from line 57)
    button.innerHTML = item.name;                         // set button innerText to be the Pokémon's name
    button.addEventListener('click', function (event) {   //event listener to each newly created button
      showDetails(item.name);   //create function showDetails
    });
    button.classList.add('button');  //Add a class to the button using the classList.add method
    listItem.appendChild(button);  //append the button to the list item as its child
    hitList.appendChild(listItem); //append the list item to the unordered list as its child
  }; // addListItem end

  return { //ERROR: Uncaught SyntaxError: Illegal return statement //return all items from the pokemonList to make it available outside the IIFE
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadDetails: loadDetails,  //add loadDetails
    loadList: loadList
    //showDetails: showDetails   //add showDetails (enable this, if console.log is obsolete)
  };
})();// Wrapping IIFE end

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  //if (typeof(pokemonRepository) == 'undefined'){
  //  console.log('undefined');
});

// outside world
pokemonRepository.getAll().forEach(function (item) { //forEach loop to ensure only pokemons with a height > 5 are marked with ' Wow, that’s big!'
  pokemonRepository.addListItem(item); // Shan's code review 2020-06-22
});
