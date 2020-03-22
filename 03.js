/* MIRROR */
let i = prompt('Input','');

let mirror = i => i + i.split("").reverse().join("");

console.log('Input : mirror(' + i + ')');
console.log('Output : ' + mirror(i));