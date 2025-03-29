document.addEventListener('DOMContentLoaded', function() {
    const restaurants = {
        'Pasta': {
            title: 'Pasta Carbonara',
            description: 'A rich and creamy Roman pasta dish made with pancetta, eggs, Parmesan cheese, and black pepper, creating a perfect harmony of flavors.',
            address: 'Via della Pasta, Rome, Italy',
            phone: '+39 06 1234 5678',
            hours: '12:00 PM - 10:00 PM',
            price: 'PRICE: €12.50',
            image: 'img/pasta.jpg'
        },
        'Pizza': {
            title: 'Margherita Pizza',
            description: 'A classic Neapolitan pizza topped with San Marzano tomatoes, fresh mozzarella, basil leaves, and a drizzle of extra virgin olive oil.',
            address: 'Piazza del Duomo, Naples, Italy',
            phone: '+39 081 234 5678',
            hours: '11:00 AM - 11:00 PM',
            price: 'PRICE: €10.00',
            image: 'img/margherita.jpg'
        },
        'Risotto': {
            title: 'Mushroom Risotto',
            description: 'A creamy Italian rice dish cooked to perfection with Arborio rice, wild mushrooms, white wine, and Parmesan cheese.',
            address: 'Corso Vittorio Emanuele, Milan, Italy',
            phone: '+39 02 3456 7890',
            hours: '1:00 PM - 9:30 PM',
            price: 'PRICE: €14.00',
            image: 'img/risotto.jpg'
        },
        'Tiramisu': {
            title: 'Tiramisu',
            description: 'An iconic Italian dessert made with layers of espresso-soaked ladyfingers, mascarpone cheese, cocoa powder, and a touch of coffee liqueur.',
            address: 'Via Veneto, Rome, Italy',
            phone: '+39 06 9876 5432',
            hours: '3:00 PM - 11:00 PM',
            price: 'PRICE: €7.50',
            image: 'img/tiramisu.jpg'
        }
    };

    const mainMenu = document.getElementById('mainMenu');
    const detailScreen = document.getElementById('detailScreen');
    const detailContent = document.getElementById('restaurantDetailContent');
    const mainMenuButton = document.getElementById("mainMenuButton");
    const overlay = document.getElementById("overlay"); // Fix: Define overlay properly

    document.querySelectorAll('.restaurant-card').forEach(card => {
        card.addEventListener('click', function() {
            const restaurantId = this.getAttribute('data-restaurant');
            showRestaurantDetails(restaurantId);
        });
    });

    function showRestaurantDetails(restaurantId) {
        const restaurant = restaurants[restaurantId];
    
        detailContent.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.title}" class="img-fluid mb-4">
            <h2 class="mb-3">${restaurant.title}</h2>
            <p class="mb-3">${restaurant.description}</p>
            <hr>
            <p><strong>${restaurant.hours}</strong> | <strong>${restaurant.price}</strong></p>
            <p>${restaurant.address}<br>${restaurant.phone}</p>
        `;
    
        detailScreen.style.display = "block";
    
        // Delay adding the 'show' class to trigger fade-in
        setTimeout(() => {
            detailScreen.classList.add("show");
            overlay.classList.add("show");
            overlay.style.display = "block";
        }, 10);
    }
    
    mainMenuButton.addEventListener("click", function () {
        detailScreen.classList.remove("show");
        overlay.classList.remove("show");
    
        setTimeout(() => {
            detailScreen.style.display = "none";
            overlay.style.display = "none";
        }, 300); // Matches fade-out transition
    });
});    