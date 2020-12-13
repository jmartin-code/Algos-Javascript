//Radix sort
//Special sorting algo that works on list of numbers
//this sort doesnt compare the numbers.
//radix sort is fast.

//method to get digits from whole number
const getDigit = (num, place) =>{
    console.log( Math.floor(Math.abs(num) / Math.pow(10, place)) % 10);
}

// count the number of digits in a number
const digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10 (Math.abs(num))) +1;
}

//
const mostDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i< nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits
}

getDigit(12345, 5)