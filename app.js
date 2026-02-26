import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const menuDiv = document.getElementById("menu");

async function loadMenu() {
  try {
    const querySnapshot = await getDocs(collection(db, "menu"));
    menuDiv.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const item = doc.data();
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
  } catch (error) {
    console.error("Error loading menu:", error);
  }
}

loadMenu();
