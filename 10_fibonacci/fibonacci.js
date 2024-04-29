const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0){return "OOPS"}
    if (num === 0){return 0}
    let array = [1,1]
    for (let i = 2; i < num; i++){
        let value = array[i-1] + array[i-2];
        array.push(value)
    }
    return array[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
