class Employee {
    constructor(
        protected _name: string,
        protected _salary: number
    ) {}
    public get getDetails() {
        return {name : this._name, salary : this._salary};
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        salary: number,
        public department: string
    ) {
        super(name, salary);
    }
    public get getDetails() {
        return {name : this._name, salary : this._salary, department : this.department};
    }
}

class Developer extends Employee {
    constructor(
        name: string,
        salary: number,
        public programmingLanguages: string[]
    ) {
        super(name, salary);
    }

    public get getDetails() {
        return {name : this._name, salary : this._salary, programmingLanguages : this.programmingLanguages};
    }
}

const printEmployeeDetails = (employee: Employee) => {
    console.log(employee.getDetails);
}

const emp = new Employee("Employee", 1);
const man = new Manager("Manager", 2, "Department");
const dev = new Developer("Developer", 3, ["JS", "TS"]);

printEmployeeDetails(emp);
printEmployeeDetails(man);
printEmployeeDetails(dev);