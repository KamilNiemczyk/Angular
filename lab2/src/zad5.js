"use strict";
var validateObject = function (obj, schema) {
    for (var key in schema) {
        if (typeof obj[key] !== schema[key]) {
            return false;
        }
    }
    return true;
};
var schema = {
    name: "string",
    age: "number",
    isStudent: "boolean"
};
console.log(validateObject({ name: 'John', age: 25, isStudent: true }, schema));
console.log(validateObject({ name: 1, age: 25, isStudent: true }, schema));
