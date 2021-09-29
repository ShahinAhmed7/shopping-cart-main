

// Increase decrese in function
function updateProductNumber(product, price, isIncreasing){
   // case plus input number
   const productInput = document.getElementById(product + '-number');
   let productNumber = productInput.value;

   if(isIncreasing == true){
      productNumber = parseInt(productNumber) + 1;
   } 
   
   else if(productNumber > 0){
      productNumber = parseInt(productNumber) - 1;
   }
   productInput.value = productNumber;

   // Update case total
   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;

}

// Phone increase event handler
document.getElementById('phone-plus').addEventListener('click', function(){
   updateProductNumber('phone', 1259, true);
});

// Phone decrease event handler
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1259, false);
});



// Increase case value event handler
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);

});

// Decrease case value  event handler
document.getElementById('case-minus').addEventListener('click', function(){
   updateProductNumber('case', 59, false);

});