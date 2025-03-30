//Task 1: Creating a Customer Class
class Customer {
    constructor(name, email, purchaseHistory) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = purchaseHistory;
    }
    getDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Purchase History: ${this.purchaseHistory}`
    };
    addPurchase(amount) {
        this.amount.push(amount);
    };
    getTotalSpent() {
        const total = this.purchaseHistory.reduce((acc,curr) => acc + curr, 0);
        return total;
    };
};
const jeff = new Customer("Jeff", "Jeff@biz.com", [500, 300, 100]);
console.log(jeff.getDetails());
console.log(jeff.getTotalSpent());

//Task 2: Create a Sales Rep Class
class SalesRep {
    constructor(name, clients) {
        this.name = name;
        this.clients = clients;
    }
    addClient(customer) {
        this.clients.push(customer);
    }
    getClientTotal(name) {
        for(let i=0; i<this.clients.length; i++){
            if(this.clients[i].name===name){
                return this.clients[i].getTotalSpent();
            }
        }
    }
};
const tracy = new SalesRep("tracy", [jeff, new Customer("Jim", "Jim@fun.com", [300, 200, 50])]);
console.log(tracy);
console.log(tracy.getClientTotal("Jim"));