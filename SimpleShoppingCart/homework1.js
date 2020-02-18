function calcTotalCost(){

    
    var onionQuantity = document.getElementById("onionQuantity").value;
    var brinjalQuantity = document.getElementById("brinjalQuantity").value;
    // var onionUnitPrice = document.getElementById("onionUnitPrice").value;
    const onionUnitPrice = 300;
    var brinjalUnitPrice = document.getElementById("brinjalUnitPrice").value;
    
    var onionPrice = parseInt(onionQuantity) * parseInt(onionUnitPrice);
    var brinjalPrice = parseInt(brinjalQuantity) * parseInt(brinjalUnitPrice);

    var totalShoppingCost = onionPrice + brinjalPrice;


    document.getElementById("onionPrice").innerHTML = onionPrice;
    document.getElementById("brinjalPrice").innerHTML = brinjalPrice;

    document.getElementById("totalShoppingCost").innerHTML = totalShoppingCost;

}

function clearNumbers(){
    document.getElementById("onionQuantity").value = '';
    document.getElementById("brinjalQuantity").value = '';
    document.getElementById("onionUnitPrice").value = '';
    document.getElementById("brinjalUnitPrice").value = '';
    document.getElementById("onionPrice").innerHTML = '';
    document.getElementById("brinjalPrice").innerHTML = '';
    document.getElementById("totalShoppingCost").innerHTML = '';


}