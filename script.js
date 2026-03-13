// Create let functions
let btn = document.getElementById('button');

// Create Event Listener (MAKE SURE ID IS DECLARED IN HTML AND NOT CLASS)
btn.addEventListener('click', function(){
    // parseInt tells interpreter that the input is a number and not a string and value is added for same reason
    let housevalue = parseFloat(document.getElementById('house').value);
    let depositvalue = parseFloat(document.getElementById('deposit').value);
    let yearsvalue = parseFloat(document.getElementById('term').value);
      let interestratevalue = parseFloat(document.getElementById('rate').value);
    document.getElementById('output').value = housevalue / depositvalue;
  document.getElementById('weekly').value = (housevalue - depositvalue) / (yearsvalue * 12) * (interestratevalue / 100 + 1) 
})
btn.addEventListener('click', function(){
    let outputInt = parseFloat(document.getElementById('output').value);

})
