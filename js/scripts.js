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

    /* Task 1.6 starts here, including function addListItem and code polishing using IIFE */
        //function addListItem('pokemon'){  //add a function addListItem with parameter 'pokemon'
        var pokemon = function(addListItem) {
          var hitList = document.querySelectorAll('ul');       //create a 'ul' element and assign  it to ul in HTML
          var listItem = document.createElement('li');          //create a list element
          var container = document.querySelector('.container'); //create a container around the button (one hitListItem within the hitList)
          var button = document.createElement('button');        //create a button element
          container.innerHTML = '<button>Bulbasaur</button>';   //set button innerText to be the Pokémon's name
          //Add a class to the button using the classList.add method...
          button.classList.add(class ='button');                         //this version works but throws a browser ERROR
          //button.classList.add('button');                              //this version doesn't throw a browser ERROR but doesn' work
          //document.getElementById('button').classList.add('.button');  //this version doesn't throw a browser ERROR but doesn' work
          listItem.appendChild(button);  //append the button to the list item as its child
          hitList.appendChild(listItem); //append the list item to the unordered list as its child
        };
        function(call.addListItem('pokemon'));
    /* Task 1.6 ends here */

  });

    return(addListItem){   //return all items from the pokemonList to make it available outside the IIFE
    add: add,
    getAll: getAll
  };
})();
/* Wrapping IIFE end */
