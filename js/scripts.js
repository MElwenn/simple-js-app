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
    // H I E R ?} // function loadDetails end

    function getAll() { // get all items from the Pokemon array using the getAll method
        return pokemonList;
    }

    function add(pokemon) { // add pokemonList using the push method
        pokemonList.push(pokemon);
        addListItem(pokemon);
    } // add pokemonList end

    function showDetails(item) { // function show details "item" (the pokemon)
        loadDetails(item).then(function() {
            //console.log(item); THIS is to be replaced in task 1.8
            showModal(id='show-modal', 'Modal title', 'This is the modal content!');
        })  // function show details "item" (the pokemon) end
  // H I E R ?  } // loadDetails(item).then(function() end


    // function modalContainer to display pokemon details
    (function() {
      var $modalContainer = document.querySelector('#modal-container');

      function showModal(title, text) {
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
        titleElement.innerText = title;

        var contentElement = document.createElement('p');
        contentElement.innerText = text;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        $modalContainer.appendChild(modal);

        $modalContainer.classList.add('is-visible');
      }

      function hideModal() {
        $modalContainer.classList.remove('is-visible');
      }
      // ==> T H I S  seems to "call" the hard coded HTML-show-details-button ==> has to be done by the pokempn buttons then
      document.querySelector('#show-modal').addEventListener('click', () => { // display pokemon details on button click
        showModal('Modal title', 'This is the modal content!'); // include the pokemon name, pokemon-height somehow and pokemonImgUrl somehow
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
          hideModal();
        }
      });

      $modalContainer.addEventListener('click', (e) => { // don't close when user clicks OTUSIDE overlay
            var target = e.target;
        if (target === $modalContainer) { // close only if user clicks directly on the overlay,
          hideModal();
        }
      }); // addEventListener end

    })(); // function modalContainer to display pokemon details end

 } // loadDetails(item).then(function() end


        /* make sure the code responsible for add the buttons from the array is being called correctly. (Point #4 and 5 in the 'Directions' section of the task) */
       function addListItem(item) { //add a function addListItem with parameter 'pokemon'
            var hitList = document.querySelectorAll('ul')[0]; // create a 'ul' element and assign  it to ul in HTML
            var listItem = document.createElement('li'); // create a list element
            listItem.classList.add('container'); // Add a class to the listItem using the classList.add method

            var button = document.createElement('button'); // create a button element (syntax correct but moved here from line57)
            button.innerHTML = item.name; // set button innerText to be the Pokémon's name
                button.addEventListener('click', function(event) { // event listener to each newly created button
                    showDetails(item); //create function showDetails
                });

            button.classList.add('button'); // Add a class to the button using the classList.add method
            listItem.appendChild(button); // append the button to the list item as its child
            hitList.appendChild(listItem); // append the list item to the unordered list as its child
        }; // addListItem end
    //} // function show details "item" (the pokemon) end

    return { //ERROR: Uncaught SyntaxError: Illegal return statement //return all items from the pokemonList to make it available outside the IIFE
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails, //add loadDetails
        showDetails: showDetails //add showDetails
    }; // return end
})(); // Wrapping IIFE end

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
});

// outside IIFE-Wrap
pokemonRepository.getAll().forEach(function(item) { // forEach loop to make data accessable outside IIFE Wrap
    pokemonRepository.addListItem(item); // make data accessable outside IIFE Wrap
});
