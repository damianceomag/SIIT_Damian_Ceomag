/*
We’re at a nutrition center, and we have the data from our customers (name, gender, height, weight).

Write a the JS code that prints in browser console the following info for each customer:
John Doe | M | BMI: 24 | Normal
Mary Anne | F | BMI: 30 | Obese

In order to calculate the BMI use the following formula:
BMI = weight / ( height * height )

The BMI range is determined base on the following conditions;

● If your BMI is less than 18.5, it falls within the underweight range.
● If your BMI is 18.5 to 25, it falls within the normal range.
● If your BMI is 25.0 to 30, it falls within the overweight range.
● If your BMI is 30.0 or higher, it falls within the obese range.
*/

var customer1 = {
    name: "John Doe",
    gender: "M",
    height: 178,
    weight: 85
};

var customer2 = {
    name: "Mary Jane",
    gender: "F",
    height: 160,
    weight: 50
};


var customerList = [customer1, customer2];

for (var i = 0; i < customerList.length; i++) {
    customerList[i].bmi = customerList[i].weight / (customerList[i].height ** 2) * 10000;

    if (customerList[i].bmi < 18.5) {
        customerList[i].bmiCategory = "Underweight";
    } else if (customerList[i].bmi < 25) {
        customerList[i].bmiCategory = "Normal";
    } else if (customerList[i].bmi < 30) {
        customerList[i].bmiCategory = "Overweight";
    } else {
        customerList[i].bmiCategory = "Obese";
    };
    console.log(customerList[i].name + " | " + customerList[i].gender + " | " + customerList[i].bmi + " | " + customerList[i].bmiCategory);
};