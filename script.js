// Create let functions
let btn = document.getElementById('button');

// Create Event Listener (MAKE SURE ID IS DECLARED IN HTML AND NOT CLASS)
btn.addEventListener('click', function(){
    // parseFloat allows for decimals (crucial for interest rates!)
    let housevalue = parseFloat(document.getElementById('house').value);
    let depositvalue = parseFloat(document.getElementById('deposit').value);
    let yearsvalue = parseFloat(document.getElementById('term').value);
    let interestratevalue = parseFloat(document.getElementById('rate').value);

    // Output 1: Percentage of house covered by deposit
    // Added * 100 to make it a readable percentage
    let ratio = (depositvalue / housevalue) * 100;
    document.getElementById('output').value = ratio.toFixed(2) + "%";

    // Output 2: Monthly Repayment
    let monthly = (housevalue - depositvalue) / (yearsvalue * 12) * (interestratevalue / 100 + 1);
    document.getElementById('weekly').value = monthly.toFixed(2);
})
