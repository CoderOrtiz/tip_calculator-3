# Tip Calculator #3

A Tip Calculator Utilizing Arrays and Their Methods

## What I Learned:

My fourth coding challenge from, "The Complete JavaScript Course 2022", was to revisit my first Tip Calculator, but this time utilizing Arrays. I felt this course has gone further in-depth into what you can do with Arrays, in comparison to the previous course I took. While not displayed within my code, I learned about Array Methods .push, & .unshift, to add an element to an Array. As well as, .pop, and .shift to remove an element from an Array. Furthermore, I learned about .indexOf(). If you use .indexOf(), you can learn what position your element is within an Array. If your element is not within the Array, then you will see -1 within the console if you Console.log the .indexOf(). Another option, as well as, a more modern ES6 Method of .indexOf() is, .includes, but with .includes, it results in a Boolean value being made. Lastly, in regards to Array Methods, I learned that you can store removed/added elements into a variable (Example: const banished = friends.pop(); console.log(banished); = Pete).

## The Code Explained:

### JavaScript File

Line 2. Within line 2, is a Ternary Operator that determines if the bill value is equal to or more than 50, as well as, if the bill value is equal to or less that 300. If so, the bill value will be multiplied by 15%, otherwise the bill value will be multiplied by 20%. Either way, this Ternary Operator's output will be stored within an Arrow Function titled, 'calcTip'.

Line 5. Within line 5, is an Array titled, 'bills'. the bills Array has three elements within it.

Line 8. Within line 8, is an Array titled 'tips'. Within the 'tips' array are three elements. The three elements Invoke the calcTip Function with the 'bills' Array within. Each of these elements Invoke a different element within the bills Array (ex. calcTip(bills[0]) ).

Line 11. Within line 11, the bills element's are concatenated with their respective tip element’s, creating its own Array titled, totals.

Line 14. Within line 14, I console.logged the results using Template Literals. That way, the results could be easily read within the console with their respected values.

Line 17. Within line 17, I console.logged the variables by themselves so they remain in their original number data types within the console.

Reference line 14, I learned once you concatenate or use Template Literals using numbered elements, the entire result turns into a String. I attempted to use Number Conversion on the bills, tips, and totals Arrays, but was unsuccessful as the console displayed Not a Number (NaN) each time, for each Array’s elements. I will be reviewing if and how I can resolve this at a later date...

