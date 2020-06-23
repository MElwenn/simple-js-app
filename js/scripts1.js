/* wrapping all global variables in 'Immediately Invoked Function Expression (or IIFE)' to avoid external code conflicts */
var pokemonRepository = (function () { //This is the IIFE wrap

  var pokemonList = []; // removed pokemon objects and replaced array with an empty array
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //define apiURL

  function loadList() {  // function to load the list of Pokemons
    return fetch(apiUrl).then(function (response) { //callback function to pass the list of Pokemons to the response [Object Response] IF promise resolved
      return response.json(); // function returns a promise-object and parses response into JSON data
    }).then(function (json) { // if promise resolved, all data passed in resolved function is availabe here
      json.results.forEach(function (item) {
        var pokemon = {      // Structure of the object "Pokemon"
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);       //adds the object to the loadList
      });
    }).catch(function (e) { //ERROR handling
      console.error(e);
    })
  }

  function loadDetails(item) { // function to load the details of Pokemons
    var url = item.detailsUrl; // define url
    return fetch(url).then(function (response) {  //callback function to pass the Pokemon-details to the response [Object Response] IF promise resolved
      return response.json();    // function returns a promise-object and parses response into JSON data
    }).then(function (details) { // if promise resolved, all data passed in resolved function is availabe here
/* N E W    T R Y  */
        // something additional needs to happen inside here
/* N E W    T R Y  */
      item.imageUrl = details.sprites.front_default;  // GET the Pokémon details using the URL from the Pokémon object in the parameter
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
  add: add,
  getAll: getAll,
  loadList: loadList,
  loadDetails: loadDetails  //add loadDetails
};
})(); // Wrapping IIFE end

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    addListItem(pokemon);  //function should expect a parameter with a Pokémon object
  });
});
/* call pokemon API with fetch (Task 1.7) */
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=150').then(function (response) { //request for list of Pokemons against API, 1st .then expecting the list within the response parameters
    return response.json(); // function returns a promise-object and parses response into JSON data
  }).then(function (pokemonList) { // if promise within response.json() resolved, all data is available in pokemonList-parameters
    console.log(pokemonList); // The actual JSON response
  }).catch(function () { // Error-handling
  });  //fetch end

  function getAll() {   //get all items from the Pokemon array using the getAll method
    return pokemonList;
  }
  function add(pokemonList) {  //add pokemonList using the push method
    pokemonList.push(pokemonList);
  }

  function showDetails(pokemon) {  //create function showDetails
  }
  function showDetails(item) {  //show "pokemon" or show "item"?
    loadDetails(item).then(function () {
      console.log(item);
    });
  }
  pokemonList.forEach(function (pokemonList) { //forEach loop to ensure only pokemons with a height > 5 are marked with ' Wow, that’s big!'

/* Task 1.6 starts here, including function addListItem and code polishing using IIFE */
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

    };  //add listItem end
/* Task 1.6 ends here */

  }); // forEach Loop end
/* this is potentially obsolete code from Task 1.6
  return{   //return all items from the pokemonList to make it available outside the IIFE
    add: add,
    getAll: getAll,
    loadList: loadList // Ask Shan: What exactly do we want to return here?
  };
})();
/* Wrapping IIFE end

pokemonRepository.getAll().forEach(function (pokemon) { //forEach loop to ensure only pokemons with a height > 5 are marked with ' Wow, that’s big!'
  pokemonRepository.addListItem(pokemon);
});
potentially obsolete code from Task 1.6 end */
