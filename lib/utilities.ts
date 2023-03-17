// capitalize a word
export const capitalize = (str: string) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Calculate Percent
export const calculatePercent = (value: number, total: number) =>
  Math.round((value / total) * 100);

// Get a Random Element
export const getRandomItem = (items: any) =>
  items[Math.floor(Math.random() * items.length)];

// Remove Duplicate Elements
// export const removeDuplicates = (arr: any) => [...new Set(arr)];

// Sort Elements By Certain Property
export const sortBy = (arr: any[], key: string) =>
  arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

// Check if Arrays/Objects are Equal
export const isEqual = (a: any, b: any) =>
  JSON.stringify(a) === JSON.stringify(b);

//  Count Number of Occurrences
export const countOccurrences = (arr: any[], value: any) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

// Wait for a Certain Amount of Time
export const wait = async (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
// wait(2000).then(() => goToSignupPage());

// Use the Pluck Property from Array of Objects
/**
 * If you need to extract data from an array of objects and are not interested in getting 
 * all the data that is returned, use the pluck function.
It takes an array of objects and a property that each of the objects contains. 
The function maps over this array and returns an array with only the values of the property that we specified.

USAGE: 
const users = [{ name: "Abe", age: 45 }, { name: "Jennifer", age: 27 }];

pluck(users, 'name'); // ['Abe', 'Jennifer']
 */
export const pluck = (objs: any, key: string) =>
  objs.map((obj: any) => obj[key]);

// Insert an Element at a Certain Position
export const insert = (arr: any[], index: number, newItem: any) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];

// Get the difference between two dates
export const dateDiff = (date1: any, date2: any) => {
  let fdate: any = new Date(date1);
  let sdate: any = new Date(date2);
  return Math.abs(fdate - sdate);
};

// Open a new tab with a given URL
export const openTab = (url: string) => {
  window.open(url, "_blank");
};

// Ascending
export const sortAscending = (array: any[]) => array.sort((a: any, b: any) => a - b);

// Descending
export const sortDescending = (array: any[]) => array.sort((a: any, b: any) => b - a);

// Quickly shuffle an array
export const shuffle = (array: any[]) => array.sort(() => Math.random() - 0.5);

// Check if a value is a valid URL:
export const isURL = (url: string) => {
    const regex = /(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+/;
    return regex.test(url);
  }

// Check if a value is a valid email address:
export const isEmail = (email: string) => {
    const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return regex.test(email);
  }
// Check if a value is a valid credit card number:
export const isCreditCard = (cc: any) => {
    const regex = /(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})/;
    return regex.test(cc);
  }

// Check if a value is null or undefined: 
export const isNil = (value: any) => value === null || value === undefined

// Check if a value is a truthy value:
export const isTruthy = (value: any) => !!value

// Check if a value is a falsy value: 
export const isFalsy = (value:  any) => !value

// Calculate Percent
// Calculate Percent
