/* MIRROR */
let i = prompt('Input','');

let mirror = function(i){
  return i+i.split("").reverse().join("");
}
console.log('Input : mirror(' + i + ')');
console.log('Output : ' + mirror(i));