// 1. Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

/*
function spinWords(string){
    const newArr = [];
    const strArr = string.trim().split(' ');
    
    strArr.forEach((word, index) => {
      if (word.length >= 5) {
        newArr.push(word.split('').reverse().join(''));
      }else {
        newArr.push(word);
      }
    });
    
    return newArr.join(' ');
  }
  
  // 1. words with 5 or more letters must be reversed
  // 2. only include space when there are more than 1 word
*/

/*
function spinWords(string) {
    return string
      .split(' ')
      .map(word => (word.length >= 5 ? word.split('').reverse().join('') : word))
      .join(' ');
}
*/

/*
// 2. ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// function rot13(message){
//     const origAlpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const rot13Alpha = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
//     let newStr = ''
    
//     for (let char of message) {
//       let origIndex = origAlpha.indexOf (char);
//       let rot13Char = (origIndex !== -1) ? rot13Alpha.charAt (origIndex) : char;
//       newStr += rot13Char;
//     }
    
//     return newStr;
// }

function rot13(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}

*/

/*
// 3. 
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


// function duplicateEncode(word){
//     let str = '';
//     let multiple = [];
    
//       word.toLowerCase().split('')
//       .forEach((char, i) => {
//         if (i < word.lastIndexOf(char) || multiple.includes(char)) {
//           str += ')';
//           multiple.push(char);
//         }else {
//           str += '(';
//         }
//       });
    
//     return str;
//   }
  
function duplicateEncode(word) {
    const charCount = {};
    let result = '';
  
    word.toLowerCase().split('').forEach((char) => {
      charCount[char] = (charCount[char] || 0) + 1;
    });
  
    word.toLowerCase().split('').forEach((char) => {
      result += charCount[char] > 1 ? ')' : '(';
    });
  
    return result;
  }

  */

  /*
  // 4. Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []


  function inArray(array1,array2){
    let subStringArr = [];
    
    for (let string of array2) {
      for (let subStr of array1) {
        if (string.includes(subStr)) {
          subStringArr.push(subStr);
        }
      }
    }
    
    return subStringArr.filter((subStr, i, self) => self.indexOf(subStr) === i).sort();
    
  }
  */

  /*
  // 5. Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

  function persistence(num, count = 0) {
    let numArr = Array.from(String(num), Number);
   
   if (numArr.length === 1) {
     return count;
   }else {
     let prod = 1;
     for (let num of numArr) {
       prod = prod * num;
     }
     
     return persistence(prod, ++count);      // The issue in your code lies in the usage of the post-increment operator (count++). In your recursive call, you are passing the current value of count to the next recursive call, not the incremented value.
   }
 }
 
 // 1. convert the number into an array
 // 2. check num of digits present in that array, if it is one return count that is initially 0.
 // 3. If it is greater than one then multiply elements present in that array
 // 4. Now, again convert the result into an array and check the length of it by calling the function
 */
