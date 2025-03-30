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