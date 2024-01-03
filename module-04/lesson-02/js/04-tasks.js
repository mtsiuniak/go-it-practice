/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],
  lastId: 0,

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.lastId++,
      type,
      amount,
    }
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance){
      console.log("Зняття такої суми не можливе, недостатньо коштів.")
    }
    else {
      this.balance -= amount
      const tr = this.createTransaction(amount, Transaction.WITHDRAW)
      this.transactions.push(tr)
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (let tr of this.transactions){
      if (tr.id === id){
        return tr
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;

    for (let tr of this.transactions){
      if (tr.type === type){
        total += tr.amount
      }
    }

    return total;
  },
};



// console.log(account.createTransaction(1000, Transaction.DEPOSIT))
// console.log(account.createTransaction(1000, Transaction.DEPOSIT))
// console.log(account.createTransaction(1000, Transaction.DEPOSIT))
// console.log(account.createTransaction(1000, Transaction.DEPOSIT))


console.log(account)
account.deposit(1000)
account.deposit(1500)
console.log(account)
account.withdraw(400)
console.log(account)

console.log(account.getTransactionDetails(2))
console.log(account.getTransactionTotal(Transaction.DEPOSIT))