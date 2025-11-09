const menuData = {
    starters: [
        { name: "Crispy Corn", price: 100 },
        { name: "Veg Manchurian Dry/Gravy", price: 100 },
        { name: "Paneer Chilly Dry", price: 120/200 },
        { name: "Chilly Potato", price: 80 },
        { name: "Honey Chilly Potato", price: 120 }
    ],
    noodles: [
        { name: "Veg Chowmein", price: 80 },
        { name: "Veg Chilly Garlic", price: 120 },
        { name: "Paneer Chowmein", price: 120 },
        { name: "Hakka Veg Noodles", price: 120 },
        { name: "Schezwan Noodles", price: 120 }
    ],
    rice: [
        { name: "Veg Fried Rice", price: 80 },
        { name: "Paneer Fried Rice", price: 120 },
        { name: "Schezwan Fried Rice", price: 120 },
        { name: "Chilly Garlic Rice", price: 110 },
        { name: "Paneer Manchurian Gravy", price: 130},
        { name: "Veg Manchurian Gravy", price: 110}
    ],
    pizza: [
        { name: "Tomato Pizza", sizes: { R: 69, M: 149, L: 249 } },
        { name: "Cheese Pizza", sizes: { R: 79, M: 129, L: 219 } },
        { name: "Corn Pizza", sizes: { R: 79, M: 159, L: 259 } },
        { name: "Onion Pizza", sizes: { R: 69, M: 149, L: 249 } },
        { name: "Paneer Makhni Pizza", sizes: { R: 129, M: 169, L: 269 } },
        { name: "Special Pizza", sizes: { R: 129, M: 179, L: 279 } }
    ],
    burgers: [
        { name: "Cheese Burger", price: 70 },
        { name: "Paneer Burger", price: 90 },
        { name: "Classy Veggie Burger", price: 50 }
    ],
    momos: [
        { name: "Veg Momos", price: 50 },
        { name: "Paneer Momos", price: 75 },
        { name: "Veg Fried Momos", price: 70 },
        { name: "Paneer Fried Momos", price: 95 }
    ],
    thali: [
        { name: "Veg Thali (Dal Fry, Dry Veg, 4-Roti, Rice, Salad)", price: 80 },
        { name: "Veg Special Thali (Dal, Matar Paneer, Dry Veg, Raita, Rice, 4-Roti, Sweet, Salad)", price: 175 }
    ],
    addons: [
        { name: "Cheese Maggie", price: 70 },
        { name: "Vegetable Maggie", price: 50 },
        { name: "French Fries", price: 69 }
        // Note: Addon sizes (R/M/L) are now integrated into Pizza; removed duplicates
    ]
};

function showCategory(category) {
    document.querySelectorAll('.category').forEach(cat => cat.style.display = 'none');
    document.getElementById(category).style.display = 'block';
}

function searchItems() {
    const query = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.item').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
    });
}

// Populate menu on load
window.onload = () => {
    const menuDiv = document.getElementById('menu');
    for (const [cat, items] of Object.entries(menuData)) {
        const catDiv = document.createElement('div');
        catDiv.id = cat;
        catDiv.className = 'category';
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            if (item.sizes) {
                // For items with sizes (e.g., pizzas)
                const sizeText = Object.entries(item.sizes).map(([size, price]) => `${size}: ₹${price}`).join(', ');
                itemDiv.textContent = `${item.name} - ${sizeText}`;
            } else {
                // For single-price items
                itemDiv.textContent = `${item.name} - ₹${item.price}`;
            }
            catDiv.appendChild(itemDiv);
        });
        menuDiv.appendChild(catDiv);
    }
};

// Order form submission
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const item = e.target[1].value;
    const qty = e.target[2].value;
    const message = `Order: ${qty} x ${item} for ${name}`;
    window.open(`https://wa.me/917991206654?text=${encodeURIComponent(message)}`);
});