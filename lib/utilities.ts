// capitalize a word
export const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Calculate Percent
export const calculatePercent = (value:number, total:number) => Math.round((value / total) * 100)

// Get a Random Element
export const getRandomItem = (items: any) =>  items[Math.floor(Math.random() * items.length)];

// Remove Duplicate Elements
// export const removeDuplicates = (arr: any) => [...new Set(arr)];

// Sort Elements By Certain Property
export const sortBy = (arr:any[], key:string) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);

// Check if Arrays/Objects are Equal
export const isEqual = (a:any, b:any) => JSON.stringify(a) === JSON.stringify(b);

//  Count Number of Occurrences
export const countOccurrences = (arr:any[], value:any) => arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

// Wait for a Certain Amount of Time
export const wait = async (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));
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
export const pluck = (objs:any, key:string) => objs.map((obj:any) => obj[key]);

// Insert an Element at a Certain Position
export const insert = (arr:any[], index:number, newItem:any) => [...arr.slice(0, index), newItem, ...arr.slice(index)];

// Calculate Percent