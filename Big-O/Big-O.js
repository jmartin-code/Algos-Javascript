//Big-O notation 
//It is a way to formalize fuzzy counting.  
//how the runtime change as the function input value is changed.

function addUpOne(n){
    let total =0;
    
    for (let i=0; i<=n; i++){
        total += i;
    }
    return total;
}

function addUpTwo(n){
    return n * (n+1)/2;
}

console.time();
console.log('add One = ', addUpOne(1000));
console.timeEnd();

console.log("------------------")

console.time();
console.log('add Two = ', addUpTwo(1000));
console.timeEnd();

//Space/Memory Complexity:
//primitive are constant space
//String is o(n)
//reference are O(n)

//Objects:
//Unordered data structure with key-value pair format
//Searching is linear O(n)
//Object.key - linear
//Object.value - linear
//Object.entries - linear
//hasOwnProperty - constant


//Arrays:
//insertion - depends
//insertin at the begnining of the array has to reassign the index values.
//removal - depends
//insertin at the begnining of the array has to reassign the index values.
//search - linear
//access - constant


// loops
// Nested loops are not efficient. it is better to have two separate loops instead of nested loops.