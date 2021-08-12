function reverseStr(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
} 

// Reverse a string 
// reverseStr("hello"); // "olleh" 