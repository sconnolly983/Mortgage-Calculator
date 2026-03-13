let btn = document.getElementById('button');

btn.addEventListener('click', function(){
    let housevalue = parseFloat(document.getElementById('house').value);
    let depositvalue = parseFloat(document.getElementById('deposit').value);
    let yearsvalue = parseFloat(document.getElementById('term').value);
    let interestratevalue = parseFloat(document.getElementById('rate').value);

    // Output 1: Percentage of house covered by deposit
    let ratio = (depositvalue / housevalue) * 100;
    document.getElementById('output').value = ratio.toFixed(2) + "%";

    // Output 2: Monthly Repayment (Sent to the 'weekly' ID)
    let monthly = (housevalue - depositvalue) / (yearsvalue * 12) * (interestratevalue / 100 + 1);
    document.getElementById('weekly').value = "£" + monthly.toFixed(2);
});
