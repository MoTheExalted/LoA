"use strict";

window.addEventListener("load", function () {
  calcCart();

  var modelQtyField = document.getElementById("modelQty");
  modelQtyField.addEventListener("change", calcCart);

  var shippingOptions = document.getElementsByName("shipping");
  for (var i = 0; i < shippingOptions.length; i++) {
    shippingOptions[i].addEventListener("click", calcCart);
  }
});

function calcCart() {
  var modelField = document.getElementById("modelCost");
  var modelQtyField = document.getElementById("modelQty");
  var orderCostField = document.getElementById("orderCost");

  var orderCost = modelField.value * 1 * modelQtyField.value;
  orderCostField.value = formatUSCurrency(orderCost);

  var shippingOption = 0;
  var shippingOptionChecked = document.querySelector("input[name='shipping']:checked");
  if (shippingOptionChecked) {
    shippingOption = shippingOptionChecked.value;
  }

  var shippingCostField = document.getElementById("shippingCost");
  var shipCost = shippingOption * 1 * modelQtyField.value;

  shippingCostField.value = formatNumber(shipCost, 2);

  document.getElementById("subTotal").value = formatNumber(shipCost + orderCost, 2);

  var salesTax = document.getElementById("salesTax");
  salesTax.value = formatNumber((shipCost + orderCost) * 0.08, 2);

  var cartTotal = document.getElementById("cartTotal");
  cartTotal.value = formatUSCurrency(salesTax.value * 1 + shipCost + orderCost);
}

function formatNumber(val, decimals) {
  return val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function formatUSCurrency(val) {
  return val.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
