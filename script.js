let total = 0;
let delivery = 0;
let cart = [];

const kitchenLat = 22.8665;
const kitchenLng = 88.3672;

function addToCart(price, itemName){
  total += price;
  cart.push(itemName + " - ₹" + price);
  document.getElementById("total").innerText = total;
  updateFinal();
}

function updateFinal(){
  document.getElementById("delivery").innerText = delivery;
  document.getElementById("final").innerText = total + delivery;
}

function calculateDistance(userLat, userLng){
  const R = 6371;
  const dLat = (userLat - kitchenLat) * Math.PI / 180;
  const dLng = (userLng - kitchenLng) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(kitchenLat * Math.PI/180) *
    Math.cos(userLat * Math.PI/180) *
    Math.sin(dLng/2) *
    Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function placeOrder(){

  if(cart.length === 0){
    alert("Please add items first!");
    return;
  }

  navigator.geolocation.getCurrentPosition(function(position){

    let userLat = position.coords.latitude;
    let userLng = position.coords.longitude;

    let distance = calculateDistance(userLat, userLng);

    if(distance > 2){
      delivery = 20;
    } else {
      delivery = 0;
    }

    updateFinal();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let payment = document.getElementById("payment").value;

    let finalAmount = total + delivery;

    let itemsList = cart.join("\n");

    let message = `New Order - One Bite

Name: ${name}
Phone: ${phone}
Address: ${address}

Items:
${itemsList}

Distance: ${distance.toFixed(2)} km
Delivery: ₹${delivery}
Total: ₹${finalAmount}
Payment: ${payment}`;

    let whatsappURL = `https://wa.me/917003355253?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

  });
}
