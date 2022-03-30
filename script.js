// A Ternary Operator Nested Within an Arrow Function
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

// Bills Array
const bills = [125, 555, 44];

// Tips Array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Totals Array
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// The Bill's, Tips, and Total Elements Easily Displayed Within the Console
console.log(`Bills ${bills}, Tips ${tips}, Totals ${totals}`);

// The Bill's, Tips, and Total Elements in their Original Number Data Types
console.log(bills, tips, totals);
