//Radix sort
//Special sorting algo that works on list of numbers
//this sort doesnt compare the numbers.
//radix sort is fast.
//time complexity is O(nk). If k is large, complexity is O(nlogn)



//method to get digits from whole number
const getDigit = (num, place) =>{
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
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

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
     //create 10 empty arrays
        let digitBuckets = Array.from({length : 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        //concat the digitnbuckets
        nums = [].concat(...digitBuckets);
        console.log(nums);

    }
}

radixSort([23, 345, 5467, 12, 2345,9852])