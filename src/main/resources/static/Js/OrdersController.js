var Orders = (function () {
    var showOrder = function (order) {
        var main = document.getElementById('orders');

        var cap = document.createElement('h2');
        cap.appendChild(document.createTextNode('Table ' + order.tableNumber));
        main.appendChild(cap);

        var p = document.createElement('p');

        var tbl = document.createElement('table');
        tbl.id = order.id;

        var trAttributes = document.createElement('tr');

        var th1 = document.createElement('th');
        th1.appendChild(document.createTextNode('Product'));
        var th2 = document.createElement('th');
        th2.appendChild(document.createTextNode('Quantity'));

        trAttributes.appendChild(th1);
        trAttributes.appendChild(th2);

        tbl.appendChild(trAttributes);
        console.log(order);
        for (var i = 0; i < order.orderAmountsMap.length; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < 2; j++) {
                var td = document.createElement('td');
                if (j == 0) {
                    td.appendChild(document.createTextNode(order.orderAmountsMap[i].product));
                } else {
                    td.appendChild(document.createTextNode(order.orderAmountsMap[i].quantity));
                }
                tr.appendChild(td);
            }
            tbl.appendChild(tr);
            main.appendChild(tbl);
        }
        main.appendChild(p);
        main.appendChild(tbl)
    };

    var showOrdersByTable = function (ordersList) {
        for (var i = 0; i < ordersList.length; i++) {
            showOrder(ordersList[i][1]);
        }
    };

    var removeOrderById = function (i) {
        var main = document.getElementById('orders');

        var objectToRemove = document.getElementById(i);
        console.log(objectToRemove);
        main.removeChild(objectToRemove);
    };

    return {
        showOrdersByTable: showOrdersByTable
    };
})();
