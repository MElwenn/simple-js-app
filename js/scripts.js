// array pokemonList
var pokemonList = ['Bulbasaur (height: 7) ', 'Pikachu (height: 4) ', 'Weedle (height: 3) '] //workaround for DOES NOT WORK se below
var repository = [
  {
    //  var pokemon = {
      name: 'Bulbasaur',
      height: 7,
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

repository.forEach((repository) => {
  console.log(repository);
});

/*
}
document.write(element));
*/

//Object.keys(repository).forEach(function(name) {
//  document.write(repository['name', 'height']);
//});




/* pokemonList.forEach(function(repository){
  document.write (repository.name + repository.height + 'hello');
});  DOES NOT WORK */

/* var pokemonList = ['Bulbasaur (height: 7)' /* Wow, that’s big!'*/ //, 'Pikachu (height: 4) ', 'Weedle (height: 3) '] //workaround for DOES NOT WORK se below



/*

function printArrayDetails(list){
  /*for (var i = 0; i < pokemonList.length; i++) { // this line MUST be correct */
  /*for (var i = 0; i < list.length; i++) { */       // FOR-loop used in task 1.3
//  list.forEach(function(pokemonList){
  /*  if ( i == 4 ) {   */                           // this line MUST be correct
  /*		break;          */                           // this line MUST be correct
  /*  }                 */                           // this line MUST be correct
  /*  if (repository[i].height > 5) { */ //check if the height is above the value 5
//    if (repository.height > 5) {
      /* document.write("<p>" + repository[i].name + "<p> height: </p>" + repository[i].height + "<p> Wow, that’s big!</p>"); */
      /* document.write('<p>' + list[i].name + '<p> height: </p>' + repository[i].height + '<p> Wow, that’s big!</p>'); */
//      return (repository.name + repository.height + '<p> Wow, that’s big!</p>');
//    }

//    else {
      /* document.write('<p>' + repository[i].name + '<p> height: </p>' + repository[i].height + '</p>'); */
      /* document.write('<p>' pokemonList[i] + repository.pokemon.height + '</p>');*/ //+ '<p>height: </p>' + repository.height); DOES NOT WORK
//      return (repository.name + repository.height);
//    }                                              //+ '<p>height: </p>' + repository.pokemon.height); DOES NOT WORK
//  }
//}

//printArrayDetails(pokemonList); // function call

/* calculations are done here */
function divide(dividend, divisor) { //divide function
  if (divisor === 0) {
    return 'You are trying to divide by zero.'
  }
  else {
    var divisionResult = dividend / divisor;
    return divisionResult;
  }
}

console.log(divide(4, 2)); // Testing the divide function
console.log(divide(7, 0)); // Testing the divide function
console.log(divide(1, 4)); // Testing the divide function
console.log(divide(12, -3)); // Testing the divide function
