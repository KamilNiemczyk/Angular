"use strict";
var Status;
(function (Status) {
    Status["active"] = "active";
    Status["inactive"] = "inactive";
})(Status || (Status = {}));
var processData = function (name, age, isActive, scores, status) {
    console.log("Name: ".concat(name, ", Status: ").concat(status));
    age >= 18 ? console.log('Adult') : console.log('Minor');
    var averageScore = scores.reduce(function (a, b) { return a + b; }, 0) / scores.length;
    console.log("Average score: ".concat(averageScore));
};
processData('Pawel', 123, true, [1, 2, 3], Status.active);
