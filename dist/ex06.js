"use strict";
// 6. Create a generic arrow function called `getValueFromObject` that accepts an object and a key, 
// and returns the value associated with that key from the object.
// Use the object { js: "JavaScript", ts: "TypeScript" } and retrieve the value of the key "ts".
// Log the result.
const getValueFromObject = (obj, key) => obj[key];
const languages = { js: "JavaScript", ts: "TypeScript" };
console.log(getValueFromObject(languages, "ts")); // Expected output: "TypeScript"
const setGoal = (title, description, date) => {
    let courseGoal = {};
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
};
console.log(setGoal('WAD'));
