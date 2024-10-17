"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(_name, _salary) {
        this._name = _name;
        this._salary = _salary;
    }
    Object.defineProperty(Employee.prototype, "getDetails", {
        get: function () {
            return { name: this._name, salary: this._salary };
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary, department) {
        var _this = _super.call(this, name, salary) || this;
        _this.department = department;
        return _this;
    }
    Object.defineProperty(Manager.prototype, "getDetails", {
        get: function () {
            return { name: this._name, salary: this._salary, department: this.department };
        },
        enumerable: false,
        configurable: true
    });
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary, programmingLanguages) {
        var _this = _super.call(this, name, salary) || this;
        _this.programmingLanguages = programmingLanguages;
        return _this;
    }
    Object.defineProperty(Developer.prototype, "getDetails", {
        get: function () {
            return { name: this._name, salary: this._salary, programmingLanguages: this.programmingLanguages };
        },
        enumerable: false,
        configurable: true
    });
    return Developer;
}(Employee));
var printEmployeeDetails = function (employee) {
    console.log(employee.getDetails);
};
var emp = new Employee("Employee", 1);
var man = new Manager("Manager", 2, "Department");
var dev = new Developer("Developer", 3, ["JS", "TS"]);
printEmployeeDetails(emp);
printEmployeeDetails(man);
printEmployeeDetails(dev);
