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
   calculateRemainingBudget();
   // update DOM
   displayPurchases();
}

function calculateRemainingBudget() {
   // loop through purchases array
   let totalPrices = 0;
   for (let i = 0; i < purchases.length; i++) {
      // for each purchase, add up total of all prices
      totalPrices += Number(purchases[i].price);
   }
   console.log(totalPrices);
   // subtract total prices from budget for remainingBudget
   const remainingBudget = budget - totalPrices;
   // display remainingBudget
   let el = $('#remainingBudgetOut');
   el.empty();
   el.append(remainingBudget);
}

function displayPurchases() {
   // Target output by ID
   let el = $('#purchasesOut');
   // Empty
   el.empty();
   // loop through purchases array
   for (purchase of purchases) {
      // for each purchase, create a list item
      el.append(`<li>` + purchase.name + `: $` + purchase.price +`</li>`);
   }
}

function readyNow() {
   // Display Budget
   // target budgetOut by id
   let el = $('#budgetOut');
   el.empty();
   el.append(budget);

   // Handle Click Event
   $('#addPurchaseButton').on('click', addPurchase);

   // Initialize display
   calculateRemainingBudget();
}
