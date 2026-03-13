let btn = document.getElementById('button');

btn.addEventListener('click', function(){
    let housevalue = parseFloat(document.getElementById('house').value);
    let depositvalue = parseFloat(document.getElementById('deposit').value);
    let yearsvalue = parseFloat(document.getElementById('term').value);
    let interestratevalue = parseFloat(document.getElementById('rate').value);

    // 1. Calculate the Loan Amount (Principal)
    let P = housevalue - depositvalue; 

    // 2. Monthly Interest Rate (Annual rate / 100 / 12 months)
    let r = (interestratevalue / 100) / 12;

    // 3. Total number of payments (Years * 12)
    let n = yearsvalue * 12;

    // 4. The Amortization Formula 
    // This is the standard formula used by banks worldwide
    let x = Math.pow(1 + r, n); // This calculates (1 + r) to the power of n
    let monthly = (P * x * r) / (x - 1);

    // Output results
    let ratio = (depositvalue / housevalue) * 100;
    document.getElementById('output').value = ratio.toFixed(2) + "%";
    document.getElementById('weekly').value = "£" + monthly.toFixed(2);
});
