/* STRING REVERSE */
let i = prompt('Input','');

let reverse = i => i.split("").reverse().join("");

console.log('Input : reverse(' + i + ')');
console.log('Output : ' + reverse(i));