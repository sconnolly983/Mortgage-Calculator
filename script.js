let btn = document.getElementById('button');

btn.addEventListener('click', function(){
    let housevalue = parseFloat(document.getElementById('house').value);
    let depositvalue = parseFloat(document.getElementById('deposit').value);
    let yearsvalue = parseFloat(document.getElementById('term').value);
    let interestratevalue = parseFloat(document.getElementById('rate').value);

    // Output 1: Ratio (Remains the same)
    let ratio = (depositvalue / housevalue) * 100;
    document.getElementById('output').value = ratio.toFixed(2) + "%";

    // Output 2: The Real Mortgage Formula (Amortization)
    let P = housevalue - depositvalue;           // Principal loan amount
    let r = (interestratevalue / 100) / 12;     // Monthly interest rate
    let n = yearsvalue * 12;                    // Total number of months

    // The formula: M = P [ r(1 + r)^n ] / [ (1 + r)^n – 1 ]
    let monthly = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    document.getElementById('weekly').value = "£" + monthly.toFixed(2);
});
