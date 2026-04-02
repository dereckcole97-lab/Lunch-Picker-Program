//Building a Lunch Picker Program

/*n this lab, you'll build a program that helps in managing lunch options. You'll work with an array of lunches, add and remove items from the array, and randomly select a lunch option. */

//create an empty array
let lunches = [];
//create a function
//give it two arguments which one is an array and the second is a string
//this function should add the string argument to the end of the array and log it to the console
//return the updated array
function addLunchToEnd(arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}
//create a secondn function
//give it two arguments: an array as first and a string as a second
//this function should add the string argument to the beginning of the array and log it to the console
//return the updated array
function addLunchToStart(arr, lunchItem)  {
    arr.unshift(lunchItem);
    console.log(`${lunchItem} added to the beginning of the lunch menu.`);
    return arr;
}
//create a function
//give it one argument (array) 
//this function should its last element, IF successful log the message <No lunches to remove>0
//return the updaated array
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removed = arr.pop();
  console.log(`${removed} removed from the end of the lunch menu.`);
  return arr;
}

// Remove first item and IF successful, log the message <No lunches to remove>
//return updated array
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  //create a variable that removes first item and log it to the console
  //return updated array
  const removed = arr.shift();
  console.log(`${removed} removed from the start of the lunch menu.`);
  return arr;
}

// Get random item and IF successful, log the message <No lunches available>
//return value
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }
  //create a variable
  //where its needed the approximately the rounded number of the decimal method
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(`Randomly selected lunch: ${item}`);
}

// Show menu
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  console.log(`Menu items: ${arr.join(", ")}`);
}