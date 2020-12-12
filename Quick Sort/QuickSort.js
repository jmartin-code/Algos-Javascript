//Quick Sort
// Works by selecting a pivot element and finding the index where the pivot
// should end up in the sorted Array. Elements lower that the pivot are placed in the screen Left
// elements higher than the pivot are placed in the right. the pivot is positioned/sorted and the 
//process is repeated.

//complexity -- same as merge, O(logn)


const quickSort = (arr, start=0, end=arr.length+1)=>{
    const swap = (array, i, j) => {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    let pivot = arr[start];
    let swapId = start;

    for(let i=start + 1; i<arr.length; i++){
        if(pivot > arr[i]){
            swapId++;
            swap(arr, swapId, i);
        }
    }
    swap(arr, start, swapId);
    return swapId;
}

function pivotQuickSort(arr, left = 0, right = arr.length-1){
    //stop
    if(left < right){
        let pivotId = quickSort(arr, left, right);
        //left side
        pivotQuickSort(arr, left, pivotId -1);
    
        //right side
        pivotQuickSort(arr, pivotId +1, right);
    }
    console.log (arr);
}

pivotQuickSort([4,8,2,1,5,7,6,3]);
