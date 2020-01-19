/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
 */

function noOdds( values ){
    const newArr = [];
    values.forEach(elem =>{
        if(elem % 2 === 0) newArr.push(elem);
    });
    return newArr;
}
