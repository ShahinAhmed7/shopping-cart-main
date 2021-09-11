
// increase decrease phone case number in function
function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;

    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber) + 1;
    } 
    
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber;
    
    // Update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;

}

// Increase case input value
document.getElementById('case-plus').addEventListener('click', function(){
 updateCaseNumber(true);

});

// Decrease case input value
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
});




// This code for increase phone value
document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneNumber = document.getElementById('phone-number');
    let phoneValue = phoneNumber.value;
    phoneNumber.value = parseInt(phoneValue) + 1;

    // Increase total price
    const phoneTotal = document.getElementById('phone-total');
    let phoneTotalValue = phoneTotal.innerText;
    phoneTotal.innerText = parseInt(phoneTotalValue) + 1259;

});


// this code for decrease phone value
document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneNumber = document.getElementById('phone-number');
    const phoneValue = phoneNumber.value;
    if(phoneValue > 0){
        phoneNumber.value = parseInt(phoneValue) - 1;
    }


    // decrease total price
    const phoneTotal = document.getElementById('phone-total');
    let phoneTotalValue = phoneTotal.innerText;
    if(phoneTotalValue > 0){
        phoneTotal.innerText = parseInt(phoneTotalValue) - 1259;
    }
});



// Total price update


