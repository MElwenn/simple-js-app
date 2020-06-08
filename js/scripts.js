// array pokemonList
var pokemonList = ['Bulbasaur (height: 7)' /* Wow, that’s big!'*/, 'Pikachu (height: 4) ', 'Weedle (height: 3) '] //workaround for DOES NOT WORK se below
var repository = [
  {
    //  var pokemon = {
      name: 'Bulbasaur',
      height: [7, ' Wow, that’s big!'],
      types: ['grass','poison']
      //}
  },
  {
      //var pokemon = {
      name: 'Pikachu',
      height: 4,
      types: ['electric']
      //}
  },
  {
      //var pokemon = {
      name: 'Weedle',
      height: 3,
      types: ['bug','poison']
      //}
  }
]; // End of repository

/* var pokemonList = ['Bulbasaur (height: 7)' /* Wow, that’s big!'*/ //, 'Pikachu (height: 4) ', 'Weedle (height: 3) '] //workaround for DOES NOT WORK se below

//function printArrayDetails(){
  for (var i = 0; i < pokemonList.length; i++) { // this line MUST be correct
    if ( i == 4 ) {                              // this line MUST be correct
  		break;                                     // this line MUST be correct
    }                                            // this line MUST be correct
    if (repository.height > 5) {  //check if the height is above the value 5
      document.write("<p>" + repository[i].name + "<p> height: </p>" + repository[i].height + "<p> Wow, that’s big!</p>");
      /* document.write(pokemonList[i] + repository.pokemon.height + '<p>Wow, that’s big!</p>'); */
    }

    else {
      document.write("<p>" + repository[i].name + "<p> height: </p>" + repository[i].height + "</p>");
      /* document.write('<p>' pokemonList[i] + repository.pokemon.height + '</p>');*/ //+ '<p>height: </p>' + repository.height); DOES NOT WORK
    }                                              //+ '<p>height: </p>' + repository.pokemon.height); DOES NOT WORK
  }
//}
