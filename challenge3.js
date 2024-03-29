
let grossIncome;
let nssfDeductions;
let nhifDeductions;
let pAYE;
let taxableIncome;
let netSalary;
//TO calculate nssf
function nssfDeductionsCalculator(grossPayInput) {
    //a gross income of less than  KSH 18,000 is charged at a rate of 6%
    const nssfRates = 0.06;
    //any amount higher than 18000 is minus KSH 1080
    if (grossPayInput >= 18000) {
        nssfDeductions = 1080;
        return nssfDeductions

    } else {
        nssfDeductions = nssfRates * grossPayInput;
        return nssfDeductions;
    }
}
//TO calculate nHIF
function nhifDeductionsCalculator(grossPayInput) {
    
    switch (true) {
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
        default:
            return; 
    }
}

function pAYECalculator(taxableIncomeInput) {
    
    let tax = 0
    let newTaxableAmount;
    if (taxableIncomeInput <= 24000) { // KSH 24000==zero
        tax=0;
    } else {
        newTaxableAmount = taxableIncomeInput - 24000; // deduct

        if (newTaxableAmount >= 8333) {

            newTaxableAmount -= 8333;
            
            tax += 2083;

            if (newTaxableAmount <= 467667) {
                
                tax += (0.3 * newTaxableAmount);

            }else if (newTaxableAmount > 467667) { 
                newTaxableAmount -= 467667;
                
                tax += 140300;
                
                if (newTaxableAmount <= 300000) {
                    tax += (0.325 * newTaxableAmount)
                }else if (newTaxableAmount > 300000) { 
                    tax += 97500;
                    newTaxableAmount -= 300000;
        
                    if (newTaxableAmount >= 1 ) { 
                        tax += (newTaxableAmount * 0.35) 
                    }
                }
            }
        }else if (newTaxableAmount < 8333) { 
            tax = 0.25 * newTaxableAmount; 
        }
    }
    return Math.round(tax); 
}

function netSalaryCalculator(grossPayInput) {
   
    grossIncome = grossPayInput;
    nssfDeductions = nssfDeductionsCalculator(grossIncome);
    nhifDeductions = nhifDeductionsCalculator(grossIncome);
    taxableIncome = grossIncome - (nssfDeductions);
    pAYE = pAYECalculator(taxableIncome);  
    netSalary = grossIncome - (nssfDeductions + nhifDeductions + pAYE)

    
    return { 
        'Gross Income': grossIncome,
        'NSSF Deductions': nssfDeductions,
        'Taxable Income': taxableIncome,
        'PAYE': pAYE,
        'NHIF Deductions': nhifDeductions,
        'Net Salary': netSalary,
    }
}


console.table(netSalaryCalculator(80000));

let hung = 0;

document.getElementById("mysibmit").onclick = function(){
  hung = parseFloat(document.getElementById("mytixt").value); 
  console.table("mytixt", hung);
  document.getElementById("inswer").tableContent = netSalaryCalculator(hung);
};