/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


/*
Easy level  in js 

*/


function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = {};

    // Iterate through each transaction
    transactions.forEach(transaction => {
        const { category, price } = transaction;

        // If the category already exists, add the price to its total
        if (categoryTotals[category]) {
            categoryTotals[category] += price;
        } else {
            // Otherwise, initialize the category with the current price
            categoryTotals[category] = price;
        }
    });

    // Transform the categoryTotals object into the desired output format
    const result = Object.keys(categoryTotals).map(category => {
        return { [category]: categoryTotals[category] };
    });

    return result;
}

// Example usage:
const transactions = [
    { itemName: 'Item1', category: 'Food', price: 10, timestamp: '2024-07-15T12:00:00Z' },
    { itemName: 'Item2', category: 'Clothing', price: 50, timestamp: '2024-07-15T13:00:00Z' },
    { itemName: 'Item3', category: 'Food', price: 20, timestamp: '2024-07-15T14:00:00Z' },
    { itemName: 'Item4', category: 'Entertainment', price: 30, timestamp: '2024-07-15T15:00:00Z' },
    { itemName: 'Item5', category: 'Clothing', price: 70, timestamp: '2024-07-15T16:00:00Z' }
];

console.log(calculateTotalSpentByCategory(transactions));

