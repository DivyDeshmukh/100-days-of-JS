// 1. The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
/*
// function rgb(r, g, b) {
//     let rgbArr = [r, g, b];
//     let hexaCode = {
//       10: 'A',
//       11: 'B',
//       12: 'C',
//       13: 'D',
//       14: 'E',
//       15: 'F'
//     }
    
//     let hexa = rgbArr.map((val) => {
//       if (val <= 0) return '00';
//       else if (val >= 255) return 'FF';
      
//       let quot = Math.floor(val / 16);
//       let rem = val % 16;
      
//       (quot > 15) ? quot = 15 : quot;
//       (rem > 15) ? rem = 15 : rem;
      
//       if (quot > 9) {
//         quot = hexaCode[`${quot}`];
//       }
      
//       if (rem > 9) {
//         rem = hexaCode[`${rem}`];
//       }
      
//       return `${quot}${rem}`;
      
//     });
    
//     return hexa.join('')
//   }

function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

  */

/*

  // 2. Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array)
{
  let alphas = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  let fullArr = alphas.slice (alphas.indexOf(array[0]), array.length+1);
  console.log(array, fullArr);
  
  for (let i of fullArr) {
    if (!(array.includes(i))) {
       console.log('running', i)
      return i;
    }
  }
}
*/

/*
// 3. Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// function expandedForm(num) {
//   let numArr = Array.from (String(num), Number);
//   let newArr = [];
  
//   for (var i = numArr.length-1; i >= 0; i--) {
//     let val = numArr[i] * Math.pow(10, numArr.length - (i+1));
//     newArr.push(val);
//   }
  
//   let finalArr = newArr.filter ((val) => (val !== 0));
//   return finalArr.reverse().join(' + ');
// }

function expandedForm(num) {
  let numStr = String(num);
  let newArr = [];

  for (let i = numStr.length - 1; i >= 0; i--) {
    let val = parseInt(numStr[i]) * Math.pow(10, numStr.length - (i + 1));
    newArr.push(val);
  }

  let finalArr = newArr.filter((val) => val !== 0);
  return finalArr.reverse().join(' + ');
}
*/

/*
// 4. Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end){
  let ipArr1 = start.split('.');
  let ipArr2 = end.split('.');
  
  let sum1 = 0;
  let sum2 = 0;
  
  for (var i = 0; i < ipArr1.length; i++) {
    sum1 += (ipArr1[i] * Math.pow(256, (ipArr1.length-(i+1))));
    sum2 += (ipArr2[i] * Math.pow(256, (ipArr2.length - (i+1))));
  }
  
  return (sum2 - sum1);
}
*/

/*
// 5. 

// function zeros (n) {
  
//   let fact; 
  
//   if (n === 0) {
//     fact = 1;
//   }else {
//     fact = n;
  
//     for (var i = 1; i < n; i++) {
//       fact = fact * (n-i);
//     }
//   }

//   console.log(fact);
  
//   let factStr = `${fact}`;
//   let count = 0;
//   let check = 0;
  
//   for (let i = 0; i < factStr.length; i++) {

//     if (factStr[i] === '0') {
//       // check = factStr.slice(i, factStr.length).split('').filter (val => (val !== 0)).length;
//       check = factStr.slice(i, factStr.length).split('').filter(val => val !== '0').length;             // beware we are comparing string values with '0' so not write 0;
     
//       if (!check) {
//         ++count;
//       }
//     }
//   }
  
//   return count;
  
// }

// the above code will not work properly for larger numbers so prefer using BigInt for larger factorials

// function zeros(n) {
//   let fact = 1n;

//   // Calculate factorial using BigInt
//   for (let i = 2n; i <= n; i++) {
//     fact *= i;
//   }

//   console.log(fact);

//   let count = 0;

//   // Count trailing zeros
//   while (fact % 10n === 0n) {             // basically, here if I divide it by 10 then if there are only zeros present in the end with be zero and if not then some decimal value.
//     fact /= 10n;
//     count++;
//   }

//   return count;
// }

// more efficient
function zeros(n) {
  let count = 0;

  // Count the number of factors of 5 in the factorial
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }

  return count;
}

// console.log(zeros(5));
console.log(zeros(30));
// console.log(zeros(0));

*/
