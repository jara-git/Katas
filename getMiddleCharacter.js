/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

function getMiddle(str) {
    
    const middleLocation = Math.floor(str.length/2);
    
    if(str.length % 2 === 0){
      return str[middleLocation-1] + str[middleLocation];
    }
    else {
      return str[middleLocation];
    }
  
}
