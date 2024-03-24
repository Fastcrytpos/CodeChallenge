This repository has three js files each holding the solutions to the three challenges of toy problems

Title: challenge1.js

The challenge here was to make a grading system that would convert student marks into their corresponding grades. To achieve this, I created a function studentGradeGenerator(), which has one parameter. The parameter of this function is a placeholder of the user input which after that will be used as the argument when the function is invoked. After getting the user input, six conditional statements will be executed one after the other to check the grade bracket of the user input. The condition that eveluates as true will then log the corresponding grade on the console. If the input is not within 0 to 100 an error message will be logged in the console.

to run this grading system;

Open terminal and run node challenge1.js;
call the studentGradeGenerator();
enter the marks inside the invocation operator eg. studentGradeGenerator(50);


Title: Challenge2.js

The challenge here was to make a speed detector logic that checks the speed of a car and logs OK when the speed is less than the speed limit and gives the driver one demerit point for every 5km/s above the speed limit. To achieve this, I created a function, speedDetector(), which takes in one parameter, speedInput. The function then executes a parent if/else block which checks if the speedInput is less than the speedLimit and logs "OK" on the console. If the speedInput has exceeded the speedLimit the elseif block is executed. Inside this block the excess speed is evaluated and divided by 5 to get the number of points per 5km/s. A second if/else block sits lexically inside the elseif block and checks whether the variable points in its parent scope exceeds 12. if it does, it prints "License suspended", else, it prints the number of points.

to run the speed detector;

Open terminal and run node challenge2.js;
call the speedDetector();
enter the speed inside the invocation operator eg. speedDetector(50);


Title: Challenge3.js
The challenge here was to design a net salary calculator that takes in the gross income and makes NHIF, NSSF, and PAYE deductions and returns the net salary. To achieve this, four functions were declared. The function nssfDeductionsCalculator() takes in one parameter, the gross income, and returns the total nssf contribution based on the amount of the gross income. The second function, nhifDeductionsCalculator(), takes in one parameter, gross income, and calculates the required NHIF deduction based on the bracket of that gross income. Thirdly, the payAsYouEarn() function takes in the taxable income as its parameter and returns the income tax based on taxable income amount. The last function, netSalaryCalculator(), recieves the user input which is the gross income as it's only parameter and invokes the three functions above passing in the necessary arguments to the function and initializing the variables with values returned from each function. This function then returns an object that is presented as a table.

to run the netSalaryCalculator();

Open terminal and run node challenge3.js;
call the netSalaryCalculator();
enter the gross income inside the invocation operator eg. netSalaryCalculator(50000);