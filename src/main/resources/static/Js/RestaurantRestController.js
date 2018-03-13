var OrdersModule = (function () {
    var loadOrders = function () {
        axios.get('/orders')
            .then(function (response) {
                console.log(response);
                //loadOrders(Object.entries(response['data']));
                OrdersModule.getOrders(Object.entries(response['data']));
            })
            .catch(function (error) {
                console.log(error);
                alert("There is a problem with our servers. We apologize for the inconvince, please try again later.    ");
            });
    };

    var getOrders = function (ordersList) {
        Orders.showOrdersByTable(ordersList);
    };
    return {
        getOrders: getOrders,
        loadOrders: loadOrders
    };
})();