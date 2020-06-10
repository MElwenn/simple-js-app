// array pokemonList
var pokemonList = [
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
];

// forEach Loop
pokemonList.forEach(function(pokemon) {
  if (pokemon.height > 5) {              //check if the height is above the value 5 to display Wow that's big
    document.write('<p>' + pokemon.name + ' height: ' + pokemon.height + ' Wow, that’s big!' + '</p>' + pokemon.types);
  }
  else {
    document.write('<p>' + pokemon.name + ' height: ' + pokemon.height + '</p>' + pokemon.types);
  }
});


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
