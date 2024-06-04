/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 */
//for loop
const firstNonRepeatedCharacter = function (string) {
  for(var i=0;i<string.length;i++){
    if(string.indexOf(string[i])===string.lastIndexOf(string[i])){
      return string[i]
    }
    
  }
  for(var j=0;j<string.length;j++){
      if(string.indexOf(string[j])!==string.lastIndexOf(string[j])){
          return null
      }
  }
  
}
//recursion : it only works for the first example
const firstNonRepeatedCharacter2 = function (string) {
  if(string.length===0){
    return null
  }
  var index=string[0]
  var leastString=string.slice(1)
  if(leastString.includes(index)){
    return firstNonRepeatedCharacter2(leastString)
  }
  return index
}
