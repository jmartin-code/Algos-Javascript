//Radix sort
//Special sorting algo that works on list of numbers
//this sort doesnt compare the numbers.
//radix sort is fast.


const getDigit = (num, place) =>{
    console.log( Math.floor(Math.abs(num) / Math.pow(10, place)) % 10);
}

getDigit(12345, 5)