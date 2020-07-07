/* wrapping all global variables in 'Immediately Invoked Function Expression (or IIFE)' to avoid external code conflicts */
var pokemonRepository = (function() { //This is the IIFE wrap
    var pokemonList = []; // removed pokemon objects and replaced array with an empty array
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //define apiURL

    /* call pokemon API with fetch (Task 1.7) */
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150').then(function(response) { //request for list of Pokemons against API, 1st .then expecting the list within the response parameters
        return response.json(); // function returns a promise-object and parses response into JSON data
    }).then(function(pokemonList) { // if promise within response.json() resolved, all data is available in pokemonList-parameters
        console.log(pokemonList); // The actual JSON response
    }).catch(function() { // Error-handling
    }); //fetch end

    function loadList() { // function to load the list of Pokemons
        return fetch(apiUrl).then(function(response) { //callback function to pass the list of Pokemons to the response [Object Response] IF promise resolved
            return response.json(); // function returns a promise-object and parses response into JSON data
        }).then(function(json) { // if promise resolved, all data passed in resolved function is availabe here
            json.results.forEach(function(item) { //forEach Loop to add pokemon objects instead of using the array
                var item = { // Structure of the object "item" rather than " "Pokemon"
                    name: item.name, // Pokemon name returned by the API
                    detailsUrl: item.url // url that provides details through the API
                };
                add(item); // adds the object to the loadList ("item" rather than " "Pokemon")
            }); // forEach Loop end
        }).catch(function(e) { //ERROR handling
            console.error(e);
        });
    } // function loadList end

    function loadDetails(item) { // function to load the details of Pokemons (used "item" instead of "pokemon" in contrast to directions)
        var url = item.detailsUrl; // define url
        return fetch(url).then(function(response) { //callback function to pass the Pokemon-details to the response [Object Response] IF promise resolved
            return response.json(); // function returns a promise-object and parses response into JSON data
        }).then(function(details) { // if promise resolved, all data passed in resolved function is availabe here
            item.imageUrl = details.sprites.front_default; // GET the Pokémon details using the URL from the Pokémon object in the parameter
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e) { // ERROR handling
            console.error(e);
        });
    } // function loadDetails end

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
        addListItem(pokemon);
    }

    function addListItem(item) {
        var hitList = document.querySelectorAll('ul')[0]; // create a 'ul' element and assign it to ul in HTML
        var listItem = document.createElement('li'); // create a list element
        listItem.classList.add('container'); // Add a class to the listItem using the classList.add method

//            var showModal = document.getElementById('show-modal').value;
        var button = document.createElement('button', id = 'show-modal'); // create a button element (syntax correct but moved here from line57)
        button.innerHTML = item.name; // set button innerText to be the Pokémon's name

        button.addEventListener('click', function(event) { // event listener to each newly created button
//                    showDetails(item); //create function showDetails
           loadDetails(item).then(function() {
            showModal(item); //create function showDetails
           })
        });

        button.classList.add('button'); // Add a class to the button using the classList.add method
        listItem.appendChild(button); // append the button to the list item as its child
        hitList.appendChild(listItem); // append the list item to the unordered list as its child
    }; // addListItem end

    // function modalContainer to display pokemon details
    var $modalContainer = document.querySelector('#modal-container');

    function showModal(item) {
        console.log(item)
        // Clear all existing modal content
        $modalContainer.innerHTML = '';

        var modal = document.createElement('div');
        modal.classList.add('modal');

        // Add the new modal content
        var closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        var titleElement = document.createElement('h1');
        titleElement.innerText = item.name;

        var contentElement = document.createElement('p');
        contentElement.innerText = item.height;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        $modalContainer.appendChild(modal);

        $modalContainer.classList.add('is-visible');
    } // function showModal(item) end

    function hideModal() {
        $modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

//} // function show details "item" (the pokemon) end

    return { //ERROR: Uncaught SyntaxError: Illegal return statement //return all items from the pokemonList to make it available outside the IIFE
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails, //add loadDetails
    }; // return end

})(); // Wrapping IIFE end

// outside IIFE-Wrap
pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function (item) {
        pokemonRepository.addListItem(item);
    });
})
