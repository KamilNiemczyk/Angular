class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    getDetails(){
        return {name : this.name,  email: this.email};
    }
}

class Admin extends User{
    constructor(name, email, permissions){
        super(name, email);
        this.permissions = permissions;
    }
    getDetails(){
        return {name : this.name,  email: this.email, permissions: this.permissions};
    }
}

class Guest extends User{
    constructor(name, email){
        super(name, email);
    }
    getDetails(){
        return "Guest" + this.name + " " + this.email + " ";
    }
}

const printUserDetails = (cl) => {
    console.log(cl.getDetails());
}

const user = new User("Jan", "jan@gmail.com");
const admin = new Admin("Pan Paweł", "panpaweł@gmail.com", "none");
const guest = new Guest("Tomek", "tomek@gmail.com");

printUserDetails(user);
printUserDetails(admin);
printUserDetails(guest);