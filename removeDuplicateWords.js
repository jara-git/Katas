function removeDuplicateWords (s) {
  // your perfect code...
let str = s.split(" ");
let result = [];
for(let i =0; i < str.length ; i++){
    if(result.indexOf(str[i]) === -1){
      result.push(str[i]);
    } 
}
 return result.join(" ");
}


 /* Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:
Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta' */
