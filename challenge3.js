//declare all variables in the global scope and leave them undefined
let grossIncome;
let nssfDeductions;
let nhifDeductions;
let payAsYouEarn;
let taxableIncome;
let netSalary;
//this function calculates the nssf payable based on the gross income and tier
function nssfDeductionsCalculator(grossPayInput) {
    //a gross income of less than  KSH 18,000 is charged at a rate of 6%
    const nssfRates = 0.06;
    //any amount higher than 18000 is deducted KSH 1080
    if (grossPayInput >= 18000) {
        nssfDeductions = 1080;
        return nssfDeductions

    } else {
        nssfDeductions = nssfRates * grossPayInput;
        return nssfDeductions;
    }
}

function nhifDeductionsCalculator(grossPayInput) {
    //NHIF deductions are done according to gross income brackets
    switch (true) { // checks gross income bracket and returns the total deductions
        case grossPayInput <= 5999:
            return 150;
        case grossPayInput <= 7999:
            return 300;
        case grossPayInput <= 7999:
            return 300;
        case grossPayInput <= 11999:
            return 400;
        case grossPayInput <= 14999:
            return 500; 
        case grossPayInput <= 19999:
            return 600;
        case grossPayInput <= 24999:
            return 750;
        case grossPayInput <= 29999:
            return 850;
        case grossPayInput <= 34999:
            return 900;
        case grossPayInput <= 39999:
            return 950;
        case grossPayInput <= 44999:
            return 1000;
        case grossPayInput <= 49999:
            return 1100;
        case grossPayInput <= 59999:
            return 1200;
        case grossPayInput <= 69999:
            return 1300;
        case grossPayInput <= 79999:
            return 1400;
        case grossPayInput <= 89999:
            return 1500;
        case grossPayInput <= 99999:
            return 1600;
        case grossPayInput >= 100000:
            return 1700;            
        default:// returns undefined for an invalid case
            return; 
    }
}

function payAsYouEarnCalculator(taxableIncomeInput) {
    //set tax as zero
    let tax = 0
    let newTaxableAmount;
    if (taxableIncomeInput <= 24000) { //if taxable income is less than KSH 24000, income tax is zero
        tax;
    } else {
        newTaxableAmount = taxableIncomeInput - 24000; //newTaxableAmount is the remainder after the first tax bracket amount is deducted
        if (newTaxableAmount >= 8333) {
            newTaxableAmount -= 8333;
            //add KSH 2083 to tax
            tax += 2083;
            if (newTaxableAmount <= 467667) {
                // a tax rate of 30% for the remaing amount
                tax += (0.3 * newTaxableAmount);
            }else if (newTaxableAmount > 467667) { //checks if the NewTaxableAmount surpasses the second tier boundary
                newTaxableAmount -= 467667;
                //adds total tax for the second tax bracket 
                tax += 140300;
                if (newTaxableAmount <= 300000) {
                    tax += (0.325 * newTaxableAmount)
                }else if (newTaxableAmount > 300000) { // if remaining amount exceeds the third tier the total payable tax is added
                    tax += 97500;
                    newTaxableAmount -= 300000;
        
                    if (newTaxableAmount >= 1 ) { // any amount remaining is charged at a rate of 35%
                        tax += (newTaxableAmount * 0.35) 
                    }
                }
            }
        }else if (newTaxableAmount < 8333) { //a tax rate of 25% is applied for any amount that does not exceed ksh 8333
            tax = 0.25 * newTaxableAmount; 
        }
    }
    return Math.round(tax); // return a whole number
}

function netSalaryCalculator(grossPayInput) {
    //user input validation
    if (typeof grossPayInput !== 'number') {
       return 'Please enter a number'        
    }
    //initializing variable with values returned from their respective functions
    grossIncome = grossPayInput;
    nssfDeductions = nssfDeductionsCalculator(grossIncome);
    nhifDeductions = nhifDeductionsCalculator(grossIncome);
    //calculate taxable income
    taxableIncome = grossIncome - (nssfDeductions + nhifDeductions);
    payAsYouEarn = payAsYouEarnCalculator(taxableIncome);  //taxable income is passed as the argument
    //net salary calculation
    netSalary = grossIncome - (nssfDeductions + nhifDeductions + payAsYouEarn)

    
    return { //returns an object
        'Gross Income': grossIncome,
        'NSSF Deductions': nssfDeductions,
        'NHIF Deductions': nhifDeductions,
        'Taxable Income': taxableIncome,
        'PAYE': payAsYouEarn,
        'Net Salary': netSalary,
    }
}

//Enter input here
console.table(netSalaryCalculator(880000));