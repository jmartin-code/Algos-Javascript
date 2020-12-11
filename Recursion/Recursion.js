//Recursion:
//Process that calls itself. (function that calls itself)
//The function must be called until a clear stopping point

function countdown (num){
    if(num<=0){
        console.log("All done");
        return;
    }

    console.log(num);
    num--;
    countdown(num);
}

countdown(5);


//factorial
function factorial(n){
    if(n===1) return 1;

    return n * factorial(n-1);
}

