//Binary Search
// binary works by dividing the data in half each time. 
// but the data has to be in order for binary search to work.
//divide and conquer

function binarySearch(arr, value){
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = arr.length-1;
    let middle = Math.floor((left+right)/2);
    
    while(arr[middle] !== value && left<=right){
        if(value > arr[middle]) left = middle + 1;
        else right = middle - 1;
        middle = Math.floor((left+right)/2);
    }
    if(arr[middle] === value){
    return middle;    
    }else{
        return -1;
    }
    
  }