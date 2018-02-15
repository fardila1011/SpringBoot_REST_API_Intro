var order = {
  "id" : 1,
  "products" : [
  {
    "id": 1,
    "name": "PIZZA",
    "quantity": 3,
    "price": 10000
  },
  {
    "id": 2,
    "name": "HOTDOG",
    "quantity": 1,
    "price": 10000
  },
  {
    "id": 3,
    "name": "COKE",
    "quantity": 4,
    "price": 10000
  }
]
};

function addOrder(order) {
  var productsTable = document.getElemenById("productOrder");
  for (var i = 0; i < order.length; i++) {
    var row = productsTable.insertRow(productsTable.rows.length);
    
    row.insertCell(0).innerHTML = order[i].name;
    row.insertCell(1).innerHTML = order[i].quantity;
    row.insertCell(2).innerHTML = order[i].price;
  }
}

addOrder(order);
