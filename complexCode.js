// Filename: complexCode.js

/************ Complex Code Example *************/

// This code implements a complex banking system which includes functionality for creating accounts,
// transferring funds, calculating interest, and generating reports. It demonstrates the usage of
// advanced JavaScript concepts such as classes, closures, async/await, and more.

// Account class represents a bank account
class Account {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  // Method to deposit funds into the account
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}$ into account ${this.accountNumber}`);
  }

  // Method to withdraw funds from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}$ from account ${this.accountNumber}`);
    } else {
      console.log('Insufficient funds');
    }
  }

  // Method to calculate interest based on the account balance
  async calculateInterest() {
    return new Promise((resolve, reject) => {
      // Simulating an async API call to fetch interest rate
      setTimeout(() => {
        const interestRate = 0.05; // Assume 5% interest rate
        const interest = this.balance * interestRate;
        resolve(interest);
      }, 2000);
    });
  }
}

// Bank class represents a bank which holds multiple accounts
class Bank {
  constructor() {
    this.accounts = [];
  }

  // Method to create a new account
  createAccount(accountNumber, accountHolder, initialBalance) {
    const newAccount = new Account(accountNumber, accountHolder, initialBalance);
    this.accounts.push(newAccount);
    console.log(`Created new account: ${newAccount.accountNumber}`);
  }

  // Method to transfer funds between accounts
  async transferFunds(sourceAccountNumber, destinationAccountNumber, amount) {
    const sourceAccount = this.accounts.find(a => a.accountNumber === sourceAccountNumber);
    const destinationAccount = this.accounts.find(a => a.accountNumber === destinationAccountNumber);

    if (sourceAccount && destinationAccount) {
      if (sourceAccount.balance >= amount) {
        console.log(`Transferring ${amount}$ from account ${sourceAccountNumber} to ${destinationAccountNumber}`);
        sourceAccount.withdraw(amount);
        await sleep(1000); // Simulate network delay
        destinationAccount.deposit(amount);
        console.log('Transfer complete');
      } else {
        console.log('Source account has insufficient funds');
      }
    } else {
      console.log('Source or destination account not found');
    }
  }

  // Method to generate a report of all accounts with their balances
  generateReport() {
    console.log('Account Report:');
    this.accounts.forEach(account => {
      console.log(`Account: ${account.accountNumber}, Holder: ${account.accountHolder}, Balance: ${account.balance}$`);
    });
  }
}

// Helper function to sleep for a given duration
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Usage Example:

const myBank = new Bank();

myBank.createAccount(1001, 'John Doe', 5000);
myBank.createAccount(1002, 'Jane Smith', 2500);
myBank.createAccount(1003, 'Bob Brown', 10000);

myBank.transferFunds(1001, 1002, 2000);

(async () => {
  const interest = await myBank.accounts[0].calculateInterest();
  console.log(`Calculated interest for account ${myBank.accounts[0].accountNumber}: ${interest}$`);
})();

myBank.generateReport();

/*********************************************/