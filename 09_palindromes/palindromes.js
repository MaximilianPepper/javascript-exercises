const palindromes = function (string) {
    string = string.trim().replaceAll(/[^a-z-Z0-9]/gi,"").toLowerCase();
    let reverse = "";
    for (let i = 0; i < string.length; i++){
        reverse += string[string.length-i-1];
    }
    if (reverse === string){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
