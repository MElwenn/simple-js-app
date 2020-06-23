$('ul').on('submit', function(e) {
  e.preventDefault();

  var results = $('input[type = text]').val(replace(' ',''));
  results = results.split(',');
  console.log(results);
  var pokemonList = results.map(function(result){
    return $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/?limit=150' + type,
      dataType: 'json',
      method: 'GET'
    });
  });

  $.when.apply(null, pokemonList)
    .then(function(){ //passes the data
      var listItem = Array.prototype.slice.call(arguments);
      getPokemons(listItem);
    });
});


function getPokemons(listItem){
  listItem = listItem.map(function(results){
    return results[0].name; //url is missing here to provide the pic
  });
}

function displayPokemonList(listItem) {
  listItem.forEach(function(what){
    var $container = $('<ul>').addClass('listItem');
    var $image = $('https://pokeapi.co/api/v2/pokemon/?limit=150' + type.id +'png');
    var $title = $('<h1>').text(type.name);
    $container.append($image,$title);
    $('.listItem-container').append($container);
  })
}

/*
/* wrapping all global variables in 'Immediately Invoked Function Expression (or IIFE)' to avoid external code conflicts */
//var pokemonRepository = (function () { //This is the IIFE wrap
/*  var pokemonList = []; // removed pokemon objects and replaced array with an empty array
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //define apiURL

  //loadList

  //loadDetails

  //return something


})(); // Wrapping IIFE end


  // Now the data is loaded!

  //  addListItem(pokemon);

  // GET, ADD and show Details

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

  }); // forEach Loop end
*/
