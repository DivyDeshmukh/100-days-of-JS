/*
// 1. Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = (seconds % 3600) % 60;
    
    while (minutes > 59) {
      hours++;
      minutes -= 60;
    } 
    
    while (secs > 59) {
      minutes++;
      secs -= 60;
    }
  
    return (`${hours}`.padStart(2, '0') + ':' + `${minutes}`.padStart(2, '0') + ':' + `${secs}`.padStart(2, '0')); 
    
  }
*/

/*
/* 2. Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

function int32ToIp(int32){
  
  
    const octet1 = (int32 >>> 24) & 255;
    const octet2 = (int32 >>> 16) & 255;
    const octet3 = (int32 >>> 8) & 255;
    const octet4 = int32 & 255;
    
    const ipAddress = `${octet1}.${octet2}.${octet3}.${octet4}`;
    return ipAddress;
}
*/

/*
// 3. /* The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.*/

/*
function productFib(prod){
    let fibProd = 1;
    let prev = 0;
    let curr = 1;
    let fib;
    
    while (fibProd < prod) {
      fib = prev + curr;
      fibProd = prev * curr;
      
      if (fibProd === prod) {
        return [prev, curr, true];
      }
      
      if (fibProd > prod) {
        return [prev, curr, false];
      }
      
      console.log(fibProd)
      prev = curr;
      curr = fib;
    }
    
  }

*/

/* 4Kyu, tough] In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.*/

/*
function permutations(string) {
	const result = [];
  const characters = string.split('');

  function generatePermutations(currentIndex) {
    if (currentIndex === characters.length - 1) {
      result.push(characters.join(''));
      return;
    }

    for (let i = currentIndex; i < characters.length; i++) {
      // Swap characters at currentIndex and i
      [characters[currentIndex], characters[i]] = [characters[i], characters[currentIndex]];

      // Recursively generate permutations for the rest of the characters
      generatePermutations(currentIndex + 1);

      // Undo the swap to backtrack
      [characters[currentIndex], characters[i]] = [characters[i], characters[currentIndex]];
    }
  }

  generatePermutations(0);
  
  const finalResult = result.filter ((val, i) => result.indexOf(val) === i);
  return finalResult;
}
*/





