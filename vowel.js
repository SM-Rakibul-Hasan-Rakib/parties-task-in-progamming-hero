// function countVowel(str){
//   const count = 'rakib';
//   const name = count.length;
//   return count;
// }

// const result =countVowel(str);
// console.log(result);

function isVowel(char)  {
  if (char.length === 1){
    var vowels = new Array('a', 'b', 'c', 'd',);
    var isVowel = false;

    for (e in vowel) {
      if (vowel[e] == char) {
        isVowel = true;
      }
    }
    return isVowel;
  }
}