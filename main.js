

// Increas decrease in Function
function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;

    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber) + 1;
    } 
    
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;

    // Update case Total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;

};



// Increase case value
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
});



//decrease case value
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
    //caseInput.value = parseInt(caseNumber) - 1;
});