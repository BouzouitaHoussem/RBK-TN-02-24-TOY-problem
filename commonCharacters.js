/**

 *

 * Write a function `f(a, b)` which takes two strings as arguments and returns a

 * string containing the characters found in both strings (without duplication), in the

 * order that they appeared in `a`. Remember to skip spaces and characters you

 * have already encountered!

 *

 * Example: commonCharacters('acexivou', 'aegihobu')

 * Returns: 'aeiou'

 * Should return null or empty string of there is no commonCharacters

 *

*/
var commonCharacters=function(string1,string2){
 var string3=""
 for(var i=0;i<string1.length;i++){
    for(var j=0;j<string2.length;j++){
        if(string1[i]===string2[j] && string1[i]!=' ' && !string3.includes(string1[i])){
            string3=string3+string1[i]
        }
    }
 }
 return string3 || ""


}
