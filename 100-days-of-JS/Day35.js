/*
// 1. Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digitalRoot(n) {
  
    const numArr = Array.from(String(n), Number);
    
    if (numArr.length === 1) return n;
    
    const sum = numArr.reduce((acc, curr) => acc+curr, 0);
    return digitalRoot(sum);
  }

  */

  /*
//   // 2. A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    const alphas = 'abcdefghijklmnopqrstuvwxyz';
    const delimeters = /[a-zA-Z]+/g;
    let strArr = string.toLowerCase().split('').filter(letter => letter.match(delimeters));
    
    for (let char of alphas) {
      if (!(strArr.includes(char))) return false;
    }
    
    return true;
  }
  */

  /*
// 3. However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true

var isSquare = function(n){
    let sqrt = Math.sqrt(n);
    
    if (sqrt % 1 === 0) return true;
    else {return false;}
  }
*/

/*
// 4. In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
    let convertPercent = percent / 100;
    let years = 0;
      while (p0 < p) {
        p0 = Math.floor(p0 + (p0 * convertPercent) + aug);                  // Math.floor is very important as There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.

        ++years;
      }
    
    return years;
  }
  */

  /*
  // 5. Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const mergeStr = s1.concat(s2);
    const distinct = mergeStr.split('').filter((char, i, self) => (self.indexOf(char) === i));
    const sort = distinct.sort();
    return sort.join('');
  }

  */