/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoriesTotal = {};

  for (const transaction of transactions) {
    const {category, price} = transaction; 

    if (categoriesTotal[category]) {
        categoriesTotal[category] += price;
    }else {
      categoriesTotal[category] = price;
    }
  }
  const result = [];
  for (const category in categoriesTotal) {
    result.push({category, totalSpent: categoriesTotal[category]})
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
