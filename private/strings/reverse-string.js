// Solution 1
function reverseStr(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
} 

// Solution 2
function reverse(str){
    return str.split("").reverse().join("");
}