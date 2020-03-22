/* FILTERING AGE */
const people = [
  { id: 1, name: 'Udin', age: 12 },
  { id: 2, name: 'Wati', age: 51 },
  { id: 3, name: 'Budi', age: 34 },
  { id: 4, name: 'Agus', age: 16 },
  { id: 5, name: 'Sari', age: 19 },
  { id: 6, name: 'Ririn', age: 21 },
]

let filteringAge = (i,c,v) => i.filter( x => ({
    '<=' : x.age <= v 
    //add another case here
  })[c]);

console.log('Input : filteringAge(people)');
console.log(JSON.stringify(filteringAge(people,"<=",21), undefined, 2));