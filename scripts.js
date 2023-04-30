// Question 1
//Create an array called ages that contain the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages)
//1a Programmatically subtract the value of the first element in the array from the value in the last element of the array;
console.log(ages[ages.length-1] - ages[0]);
//1b Add a new age to your array and repeat the step above to ensure it is dynamic
ages.push(45)
console.log(ages);
console.log(ages[ages.length-1] - ages[0]);
//1c Use a loop to iterate through the array and calculate the agerage age
function average(ages) {
var sum = 0;
for (var i = 0; i < ages.length; i ++) {sum += ages[i]}
return sum / ages.length}
console.log(average(ages));

//2. Create an array called names that contains the following values: 
//'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names)

//2a Use a loop to iterate through the array and calculate
//the average number of letters per name:
let letters =[3, 5, 3, 5, 4, 3]
function averages(letters){
    var sum = 0;
    for (var i = 0; i < letters.length; i ++){sum += letters[i];}return sum / letters.length;}
    console.log(averages(letters));
//2b Use a loop to iterate through the array again 
//and concatenate all the names together, separated by spaces.
console.log(names.join(' '));
//3. How do you access the last element of an array?
console.log("Use the syntax array.length -1 to compute the length of items and return with the last element")
//4. How do youa access the first element of any array?
console.log("Use the syntax array [0] to calculate the element in the first place of an array")
//5. Crete a new array called nameLengths. Write a loop to iterate over
//the previously created names array and add the length of each name 
//to the nameLengths array.
let nameLengths = [letters] + "," + [5, 3, 4];
let namesNew = [names] + "," + ["Kelly", "Sam", "Kate"];
console.log(namesNew);
console.log(nameLengths);
//6. Write a loop to iterate over the nameLengths array and 
//calculate the sum of all the elements in the array.
function sumNames(nameLengths){
    var sum = 0;
    for (var i = 0; i < nameLengths.length; i ++){sum + nameLengths[i];}
    return sum + nameLengths.length;} console.log(sumNames(nameLengths))

//7. Write a function that takes two parameters, word and n, as arguments 
//and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to 
//return 'HelloHelloHello').
function repeatWord(word, n) {
    return word.repeat(n);
}
const repeatedWord = repeatWord('Hello', 3);
console.log(repeatedWord);

//8. Write a function that takes two parameters, firstName and lastName,
//and returns a full name. The full name should be the first and the last
//name separated by a space.
function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);}
    fullName('Samantha', 'Stevens');
//9. Write a function that takes an array of numbers and returns 
//true if the sum of all the numbers in the array is greater than 100.
function funcArray(arr){
    var sum = 0; for (var i = 0; i < arr.length; i++){sum+= arr[i];}
    return sum > 100;}
    var arr1 = [10, 5, 12, 61] 
    console.log(funcArray(arr1));
    var arr2 = [70, 5, 12, 41]; 
    console.log(funcArray(arr2));
//10. Write a function that takes an array of numbers and returns 
//the average of all the elements in the array.
   function avg1(array) {
           let sum = 0;
           for(let i = 0; i < array1.length; i++) {
               sum += array1[i];} 
               return sum / array1.length;}
               var array1 = [3, 23, 23, 66, 94, 80]; 
               console.log(avg1(array1)); 
//11. Write a function that takes two arrays of numbers and returns true 
//if the average of the elements in the first array is greater than 
//the average of the elements in the second array.
function cmpAvg(arr1, arr2) {
    var sum1 = 0, sum2 = 0;
    for (var i = 0; i < arr1.length; i++) {sum1 += arr1[i];}
    for (var j = 0; j < arr2.length; j++) {sum2 += arr2[j];}
    var avg1 = sum1 / arr1.length;
    var avg2 = sum2 / arr2.length;
    return avg1 > avg2;}
    console.log(cmpAvg([3, 5, 7], [6, 3, 2]));
//12. Write a function called willBuyDrink that takes a boolean isHotOutside
//and a number moneyInPocket, and returns true if it is hot outside and if 
//moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50) {return true;}
    else{return false;}}
    console.log(willBuyDrink(true, 120.00));
    console.log(willBuyDrink(false, 15.00));
//13. Create a function of your own that solves a problem. In comments,
//in comments, write what the function does and why you created it.

function calculateMilesPerYear() {
    const milesPerDay = 5;
    const daysPerWeek = 5;
    const weeksPerYear = 52;
    const totalMiles = milesPerDay * daysPerWeek * weeksPerYear;
    return totalMiles;}
    const totalMiles = calculateMilesPerYear();
    console.log(`Total miles run per year: ${totalMiles} miles`);