function displayCartItems() {
    var cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    var cartItemsContainer = document.getElementById('cartItemsContainer');
    cartItemsContainer.innerHTML = '';
  
    var totalAmount = 0;
  
    cartItems.forEach(function(item, index) {
      var itemName = item.name;
      var itemPrice = item.price;
      var itemQuantity = item.quantity;
  
      var itemElement = document.createElement('div');
  
      var itemInfo = document.createElement('p');
      itemInfo.textContent = itemName + ' - $' + itemPrice + ' x ' + itemQuantity;
      itemElement.appendChild(itemInfo);
  
      var removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', function() {
        removeItemFromCart(index);
      });
      itemElement.appendChild(removeButton);
  
      cartItemsContainer.appendChild(itemElement);
  
      totalAmount += itemPrice * itemQuantity;
    });
  
    var totalAmountElement = document.createElement('p');
    totalAmountElement.textContent = 'Total Cart Amount: $' + totalAmount.toFixed(2);
    cartItemsContainer.appendChild(totalAmountElement);
  }
  
  function addToCart(itemName, itemPrice, quantityFieldId) {
    var cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    var quantity = parseInt(document.getElementById(quantityFieldId).value);
    var newItem = {
      name: itemName,
      price: itemPrice,
      quantity: quantity
    };
    cartItems.push(newItem);
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    displayCartItems();
  }
  
  function removeItemFromCart(index) {
    var cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    displayCartItems();
  }
  
  function clearCart() {
    sessionStorage.removeItem('cartItems');
    displayCartItems();
  }
  
  // Clear the quantity field values and cart items on page load or refresh
  window.onload = function() {
    document.getElementById('appleQuantity').value = 1;
    document.getElementById('bananaQuantity').value = 1;
    document.getElementById('orangeQuantity').value = 1;
    document.getElementById('kiwiQuantity').value = 1;
    document.getElementById('mangoQuantity').value = 1;
    document.getElementById('grapesQuantity').value = 1;
    document.getElementById('watermelonQuantity').value = 1;
    document.getElementById('melonQuantity').value = 1;
    document.getElementById('guavaQuantity').value = 1;
    document.getElementById('strawberryQuantity').value = 1;
    document.getElementById('pomogranatesQuantity').value = 1;
    document.getElementById('papayaQuantity').value = 1;
    document.getElementById('potatpQuantity').value = 1;
    document.getElementById('okraQuantity').value = 1;
    document.getElementById('eggplantQuantity').value = 1;
    document.getElementById('onionQuantity').value = 1;
    document.getElementById('tomatoQuantity').value = 1;
    document.getElementById('carrotQuantity').value = 1;
    document.getElementById('peasQuantity').value = 1;
    document.getElementById('bellpepperQuantity').value = 1;
    document.getElementById('garlicQuantity').value = 1;
    document.getElementById('spinachQuantity').value = 1;
    document.getElementById('pumkinQuantity').value = 1;
    document.getElementById('cauliflowerQuantity').value = 1;
    document.getElementById('milkQuantity').value = 1;
    document.getElementById('desigheeQuantity').value = 1;
    document.getElementById('butterQuantity').value = 1;
    document.getElementById('khoyaQuantity').value = 1;
    document.getElementById('curdQuantity').value = 1;
    document.getElementById('lassiQuantity').value = 1;
    document.getElementById('brownbreadQunatity').value = 1;
    document.getElementById('whitebreadQuantity').value = 1;
    document.getElementById('pizzabaseQuantity').value = 1;
    document.getElementById('bunQuantity').value = 1;
    document.getElementById('pavQuantity').value = 1;
    document.getElementById('sweetbunQuantity').value = 1;
    document.getElementById('biscuitsQunatity').value = 1;
    document.getElementById('maggiQuantity').value = 1;
    document.getElementById('namkeenQuantity').value = 1;
    document.getElementById('chocolatesQuantity').value = 1;
    document.getElementById('saucesQuantity').value = 1;
    document.getElementById('pickelQuantity').value = 1;
    document.getElementById('aataQunatity').value = 1;
    document.getElementById('dalQuantity').value = 1;
    document.getElementById('riceQuantity').value = 1;
    document.getElementById('edibleoilQuantity').value = 1;
    document.getElementById('saltQuantity').value = 1;
    document.getElementById('dryfruitsQuantity').value = 1;
    document.getElementById('teaQunatity').value = 1;
    document.getElementById('coffeeQuantity').value = 1;
    document.getElementById('fruitjuiceQuantity').value = 1;
    document.getElementById('energydrinksQuantity').value = 1;
    document.getElementById('supplementsQuantity').value = 1;
    document.getElementById('flavouredmilkQuantity').value = 1;
    document.getElementById('detergentQunatity').value = 1;
    document.getElementById('dishwasherQuantity').value = 1;
    document.getElementById('freshnersQuantity').value = 1;
    document.getElementById('mopsQuantity').value = 1;
    document.getElementById('poojaQuantity').value = 1;
    document.getElementById('stationaryQuantity').value = 1;
    document.getElementById('eggsQunatity').value = 1;
    document.getElementById('fishQuantity').value = 1;
    document.getElementById('chickenQuantity').value = 1;
    document.getElementById('baconQuantity').value = 1;
    document.getElementById('sausagesQuantity').value = 1;
    document.getElementById('muttonQuantity').value = 1;
    document.getElementById('shampooQunatity').value = 1;
    document.getElementById('hairoilQuantity').value = 1;
    document.getElementById('toothpasteQuantity').value = 1;
    document.getElementById('soapQuantity').value = 1;
    document.getElementById('perfumeQuantity').value = 1;
    document.getElementById('covidQuantity').value = 1;

  
    clearCart();
  };
  
  // Call the displayCartItems function to show the cart items
  displayCartItems();
  
  
  function proceedToPay() {
    var cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    var totalAmount = 0;
  
    cartItems.forEach(function(item) {
      var itemPrice = parseFloat(item.price);
      var itemQuantity = parseInt(item.quantity);
      totalAmount += itemPrice * itemQuantity;
    });
  
    // Redirect to the payment page with the current total amount
    window.location.href = 'paynow.html?amount=' + totalAmount.toFixed(2);
  }
  