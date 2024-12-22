//#region Definitions
const userNameMsg = "User Name :"
const mainManuMsg = "Select an action:\n1 - Product List\n2 - Show Cart\n3 - Buy Product\n4 - Add Account Balance\n5 - Show Account Balance\n\nİptal - Exist";
const choice = ["1", "2", "3", "4", "5"];
const existing = "Exited The Application"
const invalidEntry = "Invalid Entry";
const successful = "Purchase successful";
const cartEmpty = "Your cart is empty!";
const balanceAddingMsg = "How much balance do you want to load?";
const balanceAddedgMsg = "Congraculation!\n\nNew Account Balance: ";
const outOfStockMsg = "More than stock was selected.\n\nPelase check puroduct stock and try again.";
const outOfBalanceMsg = "Your balance is insufficient for the transaction.";
const continueProcessMsg = "Continue the process? (Y/N)";
const cart = [];
let accountBalance = 50000;
const user = {};
let value;
//#endregion

const products = [
  { id: 1, productName: "Samsung", price: 32000, stock: 40 },
  { id: 2, productName: "Iphone", price: 76000, stock: 35 },
  { id: 3, productName: "Huawei", price: 30000, stock: 13 },
  { id: 4, productName: "Xiaomi", price: 38000, stock: 6 },
  { id: 5, productName: "Oppo", price: 20000, stock: 30 }
];

function addingUser() {
  let userName = prompt(userNameMsg);

  if (userName === null) {
    return null;
  }

  userName = userName.trim();

  if (!userName) {
    alert(invalidEntry);
    return addingUser();
  }

  user.name = userName;
  return userName;
}

function newEntry(msg, ...keys) {
  let entry = prompt(msg);

  if (entry === null) {
    return null;
  }

  entry = entry.trim();

  if (!keys.includes(entry)) {
    return newEntry(msg, ...keys);
  }

  return entry;
}

function getNumberEntry(msg) {

  let number = prompt(msg);

  if (number === null) {
    return null;
  }

  number = number.trim();

  if (!number || isNaN(Number(number)) || Number(number) < 0) {
    alert(invalidEntry);
    return getNumberEntry(`Please enter A Number\n\n ${msg}`);
  }

  return Number(number);
}

function productList() {
  const productList = products.map((p, index) => `${index + 1} - Name: ${p.productName}, Price: ${p.price}, Stock:${p.stock}`).join("\n");
  return productList;
}

function showCart() {

  if (cart.length === 0) {
    alert(cartEmpty);
    return;
  }

  const cartList = cart.map(
    (c, index) => `${index + 1} - Name: ${c.Product}, Price: ${c.Price}, Amount: ${c.Amount}, Total: ${c.Total}`
  ).join("\n");

  alert(cartList);
  return;
}

function buyProduct() {
  const selectedProduct = newEntry(`Select Product By Number:\n${productList()}`, ...choice);
  let amountOfProduct = getNumberEntry("Quantity of pieces:");

  if (amountOfProduct === null || selectedProduct === null) {
    return null;
  }

  let product = products.find(p => p.id == selectedProduct);

  if (product.stock < amountOfProduct) {
    alert(outOfStockMsg);
    return buyProduct();
  }

  let totalPrice = product.price * amountOfProduct;

  if (totalPrice > accountBalance) {
    alert(outOfBalanceMsg);

    alert(`Your Balance: ${accountBalance} `);
    return;
  }

  cart.push({
    Product: product.productName,
    Price: product.price,
    Amount: amountOfProduct,
    Total: totalPrice
  });
  product.stock = product.stock - amountOfProduct;

  accountBalance = accountBalance - totalPrice;

  alert(successful);

  return;
}

function addBalance() {
  let balance = getNumberEntry(balanceAddingMsg);

  if (balance === null) {
    return null;
  }

  accountBalance += Number(balance);

  alert(`${balanceAddedgMsg} ${accountBalance}`);
  return;
}

function showBalance() {
  alert(accountBalance);
  return;
}

function continueProcess() {
  const value = newEntry(continueProcessMsg, "y", "Y", "n", "N");

  if (value === null) {
    return;
  }

  if (value.toLowerCase() === "y") {
    return mainManu();
  }

  return;
}

function mainManu() {

  if (Object.keys(user).length === 0) {
    const userName = addingUser();

    if (!userName) {
      alert(existing);
      return;
    }
  }

  value = newEntry(mainManuMsg, ...choice);

  if (value === null) {
    alert(existing);
    return;
  }

  if (value === choice[0]) {
    const list = productList();
    alert(list);

    return continueProcess();
  }

  if (value === choice[1]) {
    showCart();
    return continueProcess();
  }

  if (value === choice[2]) {
    const buying = buyProduct();

    if (buying === null) {
      alert(existing);
      return;
    }

    return continueProcess();
  }

  if (value === choice[3]) {
    const adding = addBalance();

    if (adding === null) {
      alert(existing);
      return;
    }
    return continueProcess();
  }

  if (value === choice[4]) {
    showBalance();
    return continueProcess();
  }

}

mainManu();