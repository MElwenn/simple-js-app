/* wrapping all global variables in IIFE to avoid external code conflicts */
var pokemonRepository = (function() { //This is the IIFE wrap

    var pokemonList = [ //This is the Pokemon array
        {
            name: 'Bulbasaur',
            height: 7,
            types: ['grass', ' poison ']
        },
        {
            name: 'Pikachu',
            height: 4,
            types: ['electric ']
        },
        {
            name: 'Weedle',
            height: 3,
            types: ['bug', ' poison ']
        }
    ]; //End of Pokemon array


    function getAll() { //get all items from the Pokemon array using the getAll method
        return pokemonList;
    }

    function add(pokemonList) { //add pokemonList using the push method
        pokemonList.push(pokemonList);
    }

    function showDetails(item) { //create function showDetails
        console.log(pokemon);
    }

    pokemonList.forEach(function(pokemonList) { //forEach loop to ensure only pokemons with a height > 5 are marked with ' Wow, that’s big!'

        function addListItem(item) {
            var hitList = document.querySelectorAll('ul')[0]; //create a 'ul' element and assign  it to ul in HTML
            var listItem = document.createElement('li'); //create a list element
            var button = document.createElement('button'); //create a button element (syntax correct but moved here from line 57)
            button.innerHTML = item.name; // set button innerText to be the Pokémon's name

            button.addEventListener('click', function(event) { //event listener to each newly created button
                showDetails(item.name); //create function showDetails
            });

            button.classList.add('button'); //Add a class to the button using the classList.add method

            listItem.appendChild(button); //append the button to the list item as its child
            hitList.appendChild(listItem); //append the list item to the unordered list as its child

        }; //add listItem end

    // hier hin zurück (forEach Loop end)

    return { //return all items from the pokemonList to make it available outside the IIFE
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
    }); // forEach Loop end
})();
/* Wrapping IIFE end */
