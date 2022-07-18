//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  let array1 = str.split(' ');
  let newArray = [];
    
  for(let x = 0; x < array1.length; x++){
      newArray.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newArray.join(' ');
}

console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  let strSplit = str.split(' ');
  let longestWord = ""

  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord.length){
	longestWord = strSplit[i];
     }
  }
  return longestWord;
}


console.log(find_longest_word("Web Development Tutorial"));


// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {

  let longestCountry = "";
  for (let i = 0; i < country_name.length; i++) {
    if (country_name[i].length > longestCountry.length) {
      longestCountry = country_name[i];
    }
  }
  return longestCountry;
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
