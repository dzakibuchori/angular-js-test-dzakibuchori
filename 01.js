/* GRADE */
let i = prompt('Input','');

let Grade = function(i){
  return (i >= 90 ? 'A' : 
    (i >= 80 && i <= 89)  ? 'B' : 
    (i >= 70 && i <= 79)  ? 'C' : 
    (i >= 60 && i <= 69)  ? 'D' : 
    (i <= 69)  ? 'E' : 'input is not valid' );
}

console.log('Output : '+ Grade(i));