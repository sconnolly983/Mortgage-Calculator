const btn = document.getElementById('button');

btn.addEventListener('click', function() {
    // 1. Grab values (parseFloat handles decimals)
    let houseValue = parseFloat(document.getElementById('house').value);
    let depositValue = parseFloat(document.getElementById('deposit').value);
    let yearsValue = parseFloat(document.getElementById('term').value);
    let interestRate = parseFloat(document.getElementById('rate').value);

    // 2. Basic Math
    let loanAmount = houseValue - depositValue;
    let totalMonths = yearsValue * 12; // Updated from 52 to 12
    
    // 3. Simple Interest Calculation
    // (Note: This is an estimate, not a bank-standard mortgage formula)
    let interestMultiplier = (interestRate / 100) + 1;
    let monthlyPayment = (loanAmount / totalMonths) * interestMultiplier;

    // 4. Update the UI
    // I renamed the ID to 'monthly' to match your update!
    let displayElement = document.getElementById('monthly');
    
    if (displayElement) {
        displayElement.innerHTML = "£" + monthlyPayment.toFixed(2);
    } else {
        console.error("Could not find an element with id='monthly'");
    }
});
