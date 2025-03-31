//Task 1: Creating a Customer Class
class Customer { //Creates the customer class and establishes its corresponding properties
    constructor(name, email, purchaseHistory) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = purchaseHistory;
    }
    getDetails() { //Establishes the getDetails function
        return `Name: ${this.name}, Email: ${this.email}, Purchase History: ${this.purchaseHistory}` //Establishes how customer information will be displayed in the console
    };
    addPurchase(amount) { //Creates the addPurchase function
        this.amount.push(amount); //Pushes new purchases to the console when the addPurchase method is used
    };
    getTotalSpent() { //Establishes the getTotalSpent function 
        const total = this.purchaseHistory.reduce((acc,curr) => acc + curr, 0);
        return total; //Returns Jeffs total purchases
    };
};
const jeff = new Customer("Jeff", "Jeff@biz.com", [500, 300, 100]); //Establishes Jeff as a customer
console.log(jeff.getDetails()); //Gets Jeffs Details
console.log(jeff.getTotalSpent()); //Logs Jeff's total spent to the console

//Task 2: Create a Sales Rep Class
class SalesRep { //Establishes the SalesRep class and its corresponding properties
    constructor(name, clients) {
        this.name = name;
        this.clients = clients;
    }
    getDetails() { //Establishes the getDetails function 
        return `Name: ${this.name}, Clients: ${this.clients}` //Establishes how SalesRep information will be displayed in the console
    }
    addClient(customer) { //Creates the addClient function
        this.clients.push(customer); //Pushes new customers to the console when the addClient function is used.
    }
    getClientTotal(name) { //Establishes the getClientTotal function
        for(let i=0; i<this.clients.length; i++){
            if(this.clients[i].name===name){
                return this.clients[i].getTotalSpent(); //Establishes a function for getting the Client total and returns it
            }
        }
    }
};
const tracy = new SalesRep("tracy", [jeff.getDetails(), new Customer("Jim", "Jim@fun.com", [300, 200, 50]).getDetails()]); //Establishes Tracy as a new SalesRep
console.log(tracy); //Logs Tracy's information to the console
console.log(tracy.getDetails()); //Gets Tracy's details
console.log(tracy.getClientTotal("Jim")); //Logs Jims total purchases

//Task 3: Create a VIPCustomer Class (Extends Customer)
class VIPCustomer extends Customer { //Creates the VIPCustomer Class by extending the Customer Class
    constructor(name, email, purchaseHistory, vipLevel) {
        super(name, email, purchaseHistory);
        this.vipLevel = vipLevel; 
    }
    getDetails() { //Establishes a getDetails function
        return `Name: ${this.name}, Email: ${this.email}, Purchase History: ${this.purchaseHistory}, VIP Level: ${this.vipLevel}`; //Establishes how details will be presented in the console
    }
    getTotalSpent() { //Overrides the old getTotalSpent function
        const total = super.getTotalSpent(); //Re-uses the original equation for the original getTotalSpent function
        return (total * 0.10) + total; //Creates an equation to get the new total spent with an added bonus
    }
};
const jill = new VIPCustomer("Jill", "Jill@chill.com", [100, 100, 300], "Gold"); //Establishes Jill as a new VIP Customer and gives her information
console.log(jill); //Logs Jill to the console
console.log(jill.getDetails()); //Gets Jills Details
console.log(jill.getTotalSpent()); //Gets the total amount spent by Jill

//Task 4: Build a Client Report System
calculateTotalRevenue() { //Creates a calculateTotalRevenue function to determine the total amount spent by customers
    return this.purchaseHistory.reduce((total, cus) => {
        return total + cus.calculateTotalRevenue(); //Returns the total plus a customers total purchase history revenue
    }, 0); //Returns an equation to generate the total revenue of customers
};