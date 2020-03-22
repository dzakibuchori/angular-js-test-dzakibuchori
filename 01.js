/* GRADE */
let input = prompt('Input','');

let Output = function(input){
  return (input >= 90 ? 'A' : 
    (input >= 80 && input <= 89)  ? 'B' : 
    (input >= 70 && input <= 79)  ? 'C' : 
    (input >= 60 && input <= 69)  ? 'D' : 
    (input <= 69)  ? 'E' : 'input is not valid' );
}

console.log('Output : '+ Output(input));