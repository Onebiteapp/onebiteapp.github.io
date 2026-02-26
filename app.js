const menu = [
  {
    name: "Chicken Biryani",
    price: 199,
    image: "https://source.unsplash.com/400x300/?biryani"
  },
  {
    name: "Paneer Roll",
    price: 120,
    image: "https://source.unsplash.com/400x300/?roll"
  },
  {
    name: "Burger",
    price: 99,
    image: "https://source.unsplash.com/400x300/?burger"
  }
];

const menuDiv = document.getElementById("menu");

menu.forEach(item => {
  menuDiv.innerHTML += `
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
      <img src="${item.image}" class="w-full h-40 object-cover"/>
      <div class="p-4">
        <h2 class="text-xl font-bold">${item.name}</h2>
        <p class="text-green-600 font-semibold mt-1">₹${item.price}</p>
        <button class="bg-red-500 text-white px-4 py-2 rounded mt-3 w-full">
          Order Now
        </button>
      </div>
    </div>
  `;
});
