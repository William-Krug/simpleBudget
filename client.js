$(document).ready(readyNow);

const budget = 25000;
let purchases = [];

function addPurchase() {
   console.log('in addPurchase');
   // Get user input & create a new object
   let newPurchase = {
      name: $('#purchaseNameIn').val(),
      price: $('#purchasePriceIn').val(),
   }
   // Push the new purchase into the array
   purchases.push(newPurchase);
   // Empty inputs
   $('#purchaseNameIn').val('');
   $('#purchasePriceIn').val('')
   // Calculate remainingBudget
}

function readyNow() {
   // Display Budget
   // target budgetOut by id
   let el = $('#budgetOut');
   el.empty();
   el.append(budget);

   // Handle Click Event
   $('#addPurchaseButton').on('click', addPurchase);
}
