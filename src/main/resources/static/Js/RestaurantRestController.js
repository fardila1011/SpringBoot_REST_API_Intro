var OrdersModule = (function () {
    var getOrders = function () {
        axios.get('/orders')
            .then(function (response) {
                console.log(response);
                //loadOrders(Object.entries(response['data']));
                Orders.showOrdersByTable(Object.entries(response['data']));
            })
            .catch(function (error) {
                console.log(error);
                alert("There is a problem with our servers. We apologize for the inconvince, please try again later.    ");
            });
    };
    
    var updateOrder = function () {
        
    };
    
    var deleteOrder = function () {
        
    };
    
    return {
        getOrders: getOrders
    };
})();