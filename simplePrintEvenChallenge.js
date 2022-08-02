//Problem: Print all even number from 0-10

/**
    There are two ways to solve this problem.
    1. starting from 2 till 10: add 2;
    2. check for each number with x % 2. If is required to check the modulus condition. 
*/

let printEvenNumbersMethodOne = (start, end) => {
    let numbers = [];
    let i = start;
    while(i !== end){
        numbers.push(i);
        i = i + 2;
    }
    console.log(numbers);
}

let printEvenNumbersMethodTwo = (start,end) => {
    let numbers = [];
    for(let i = start; i <= end; i++) {
            if(i%2 === 0) {
                numbers.push(i)
            }
        
    }
    
    console.log(numbers);
}



printEvenNumbersMethodOne(2,20);
printEvenNumbersMethodTwo(0,50);