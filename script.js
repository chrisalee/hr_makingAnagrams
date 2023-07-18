/*
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(s1, s2) {
    let totalDeletions = 0;
    let letterMap = {};
    // map out different letters of s1 and count of each letter
    // letter: count
    for (const val of s1) {
        letterMap[val] = letterMap[val] ? letterMap[val] + 1 : 1;
    }
    // go through s2 and subtract all letters or give negative count
    for(const val of s2) {
        letterMap[val] = letterMap[val] ? letterMap[val] - 1 : -1
    }
    console.log(letterMap);
    
    totalDeletions = Object.values(letterMap).reduce((prev, curr) => prev + Math.abs(curr), 0);
    
    console.log(totalDeletions);
    return totalDeletions;
}

////////////////////////////////////////////////
const makingAnagrams = (s1, s2) => {
  for (let i=0; i<s1.length; i++) {
        while (s2.includes(s1[i])) {
            s2 = s2.replace(s1[i], '');
            s1 = s1.replace(s1[i], '');
        }
    }

    return s1.length + s2.length;
}
