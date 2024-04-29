const removeFromArray = function(array, ...theArgs) {
    for (let i=0;i < array.length;i++)
    {
        for (const arg of theArgs)
        {
            if (arg === array[i])
            {
                array.splice(i,1);
                i--;
            }
        }     
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
