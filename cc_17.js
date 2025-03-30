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
    getDetails() {
        return `Name: ${this.name}, Clients: ${this.clients}`
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
const tracy = new SalesRep("tracy", [jeff.getDetails(), new Customer("Jim", "Jim@fun.com", [300, 200, 50]).getDetails()]);
console.log(tracy);
console.log(tracy.getDetails());
console.log(tracy.getClientTotal("Jim"));

//Task 3: Create a VIPCustomer Class (Extends Customer)
class VIPCustomer extends Customer {
    constructor(name, email, purchaseHistory, vipLevel) {
        super(name, email, purchaseHistory);
        this.vipLevel = vipLevel;
    }
    getDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Purchase History: ${this.purchaseHistory}, VIP Level: ${this.vipLevel}`;
    }
    getTotalSpent() {
        const total = super.getTotalSpent();
        return (total * 0.10) + total;
    }
};
const jill = new VIPCustomer("Jill", "Jill@chill.com", [100, 100, 300], "Gold");
console.log(jill);
console.log(jill.getDetails());
console.log(jill.getTotalSpent());