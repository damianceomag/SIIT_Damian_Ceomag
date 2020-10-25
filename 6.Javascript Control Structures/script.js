/* 
Using control structures (if, for, while), do the following:

1. display in the console the numbers from 1 to 20
2. display in the console the odd numbers from 1 to 20
3. compute the sum of the elements of an array and display it in the console
4. compute the maximum of the elements of an array and display it in the console 
5. compute how many times a certain element appears in an array 
*/

// 1. display in the console the numbers from 1 to 20:

console.log("1. Numbers 1-20:");

for (var i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("__________________________________");

// 2. display in the console the odd numbers from 1 to 20:

console.log("2. Odd Numbers 1-20:");

for (var i = 0; i < 20; i++) {
    if ((i % 2) == 0) {
    }
    else console.log(i);
}

console.log("__________________________________");

// 3. compute the sum of the elements of an array and display it in the console:

var numbers = [1, 2, 3, 4];
console.log("3. Numbers are: " + numbers);

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log("The total is: " + sum);

console.log("__________________________________");

// 4. compute the maximum of the elements of an array and display it in the console:

var numList = [1, 2, 3, 4];
console.log("4. Numbers are: " + numList);

var maxNum = 0;

for (var i = 0; i < numbers.length; i++) {
    if (maxNum < numList[i]) {
        maxNum = numList[i];
    }
}

console.log("The maximum number is: " + maxNum);

console.log("__________________________________");

//5. compute how many times a certain element appears in an array:

var list = [1, 2, 3, 4, 2, 1, 1];
var element = 1;

var count = 0;

for (var i = 0; i < list.length; i++) {
    if (element == list[i]) {
        count++;
    }
}

console.log("5. The number " + element + " appears " + count + " times.");

console.log("__________________________________");