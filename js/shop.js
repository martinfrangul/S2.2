// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  const foundedItemInProducts = products.find((item) => item.id === id);

  if (!foundedItemInProducts) {
    console.log("El producto no se encontró en el inventario.");
    return;
  }

  const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === id);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity++;
  } else {
    cart.push({ ...foundedItemInProducts, quantity: 1 });
  }
  console.log(cart);
}

// Exercise 2
function cleanCart() {
  cart = [];
  total = 0;
  deleteCartList = document.getElementById("cart_list");
  deleteCartList.innerHTML = "";
}

// Exercise 3
function calculateTotal() {
  for (let index = 0; index < cart.length; index++) {
    total = total + cart[index].price * cart[index].quantity;
  }

  // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function applyPromotionsCart(itemId) {
  let totalDiscount = 0;

  const cartItem = cart.find((item) => item.id === itemId);

  if (cartItem && cartItem.quantity >= cartItem.offer.number) {
    const discountAmount =
      (cartItem.price * cartItem.quantity * cartItem.offer.percent) / 100;
    totalDiscount += discountAmount;
  }

  return totalDiscount;
}

// Exercise 5
function printCart() {
  const cartTableBody = document.getElementById("cart_list");

  cartTableBody.innerHTML = "";

  cart.forEach((item) => {
    const row = document.createElement("tr");
    const productNameCell = document.createElement("td");
    productNameCell.textContent = item.name;

    const priceCell = document.createElement("td");
    priceCell.textContent = `$${item.price.toFixed(2)}`;

    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;

    totalPrice = item.price * item.quantity;

    const totalCell = document.createElement("td");

    const removeCell = document.createElement("td");

    removeCell.textContent = "botón";

    if (
      (item.id === 1 || item.id === 3) &&
      item.quantity >= item.offer.number
    ) {
      const discount = applyPromotionsCart(item.id);
      totalPrice -= discount;
    }

    totalCell.textContent = `$${totalPrice.toFixed(2)}`;

    row.appendChild(productNameCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(totalCell);
    row.appendChild(removeCell);

    if (cart.length > 0) {
      const colDel = document.getElementById('col-delete')
      colDel.classList.remove('d-none')
      colDel.classList.add('d-table-cell')
    }

    cartTableBody.appendChild(row);
  });

  const totalElement = document.getElementById("total_price");
  totalElement.textContent = total.toFixed(2);
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
