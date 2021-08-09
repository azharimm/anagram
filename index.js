// Words to match
var words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
var temporary = {};
var results = [];

//Create a temporary object
words.forEach( function ( word, index){
  var normalizeWord = sortWord(word);
  temporary[normalizeWord] = temporary[normalizeWord] || [];
  temporary[normalizeWord].push( words[index] );
});

//Loop the temporary object
Object.keys( temporary ).forEach( function( normalizedWord ){
  var combinations = temporary[normalizedWord];
	results.push(combinations);
});

console.log(results);

//Sort Function
function sortWord(arr) {
	arr = arr.split("");
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr.length; j++) {
			if (arr[j] > arr[i]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr.join("");
}