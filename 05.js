/* DUPLICATE REMOVER */
const city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung']

let duplicateRemover = i => [...new Set(i)];

console.log('Input : duplicateRemover(city)');
console.log('Output : ' + duplicateRemover(city).toString());