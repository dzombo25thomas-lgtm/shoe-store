// Product Data
const products = [
    // SNEAKERS
    {
        id: 1,
        name: "Air Max Pro",
        category: "sneakers",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Premium comfort with advanced cushioning technology for all-day wear.",
        features: ["Memory Foam", "Breathable Mesh", "Non-slip Sole"]
    },
    {
        id: 2,
        name: "Classic White Sneakers",
        category: "sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Timeless design perfect for casual outings and everyday wear.",
        features: ["Leather Upper", "Rubber Sole", "Lace-up Design"]
    },
    {
        id: 3,
        name: "Retro Runner",
        category: "sneakers",
        price: 109.99,
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Vintage style with modern comfort features.",
        features: ["Vintage Design", "Cushioned Insole", "Durable Construction"]
    },
    {
        id: 4,
        name: "Ultra Boost",
        category: "sneakers",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Maximum energy return with responsive cushioning.",
        features: ["Boost Technology", "Primeknit Upper", "Continental Rubber"]
    },

    // SANDALS
    {
        id: 5,
        name: "Leather Strappy Sandals",
        category: "sandals",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Elegant leather sandals with adjustable straps for perfect fit.",
        features: ["Genuine Leather", "Adjustable Straps", "Cushioned Footbed"]
    },
    {
        id: 6,
        name: "Comfort Flip Flops",
        category: "sandals",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Perfect for beach days and casual summer outfits.",
        features: ["Water-resistant", "Arch Support", "Quick-dry Material"]
    },
    {
        id: 7,
        name: "Platform Sandals",
        category: "sandals",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1531310197835-7d26ae6e6b46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Chunky platform sandals with comfortable cushioning.",
        features: ["2-inch Platform", "Padded Insole", "Secure Buckle"]
    },
    {
        id: 8,
        name: "Sport Sandals",
        category: "sandals",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1562273138-1c6fd1b46c7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Perfect for hiking and outdoor activities.",
        features: ["Quick-dry Webbing", "Traction Sole", "Adjustable Fit"]
    },

    // HEELS
    {
        id: 9,
        name: "Classic Black Pumps",
        category: "heels",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Timeless elegance for formal occasions and office wear.",
        features: ["3-inch Heel", "Leather Upper", "Padded Insole"]
    },
    {
        id: 10,
        name: "Stiletto Heels",
        category: "heels",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Sophisticated design with a slender heel for special events.",
        features: ["4-inch Heel", "Pointed Toe", "Suede Material"]
    },
    {
        id: 11,
        name: "Wedges Heels",
        category: "heels",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Comfortable wedges with stable platform for extended wear.",
        features: ["Wedge Heel", "Platform Sole", "Ankle Strap"]
    },
    {
        id: 12,
        name: "Block Heel Sandals",
        category: "heels",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Modern design with chunky heel for style and comfort.",
        features: ["Block Heel", "Strappy Design", "Cushioned Footbed"]
    },

    // SPORT SHOES
    {
        id: 13,
        name: "Running Pro 2024",
        category: "sports",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Professional running shoes with enhanced support and cushioning.",
        features: ["Shock Absorption", "Breathable Upper", "Traction Outsole"]
    },
    {
        id: 14,
        name: "Basketball Elite",
        category: "sports",
        price: 139.99,
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "High-performance basketball shoes with ankle support.",
        features: ["Ankle Support", "Responsive Cushioning", "Court Grip"]
    },
    {
        id: 15,
        name: "Training Crossfit",
        category: "sports",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Versatile training shoes for gym workouts and cross-training.",
        features: ["Stable Base", "Flexible Sole", "Durable Construction"]
    },
    {
        id: 16,
        name: "Trail Hiking",
        category: "sports",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Waterproof hiking shoes with excellent traction for trails.",
        features: ["Waterproof", "Vibram Sole", "Ankle Support"]
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
}

// Search functionality
function setupSearch() {
    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBar && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchBar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
}

function performSearch() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    if (searchTerm.trim()) {
        alert(Searching for: ${searchTerm}\n(In a real site, this would filter products));
        // In a real implementation, you would filter products here
    }
}

// Products page functionality
function renderProducts(category = 'all') {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="whatsapp-btn" onclick="orderViaWhatsApp(${product.id})">
                    <i class="fab fa-whatsapp"></i> Order via WhatsApp
                </button>
                <button class="quick-view" onclick="showProductDetails(${product.id})">
                    View Details
                </button>
            </div>
        </div>
    `).join('');
}

function setupCategoryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromUrl = urlParams.get('category');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            renderProducts(category);
            updateCategoryHeader(category);
        });
        
        // Activate based on URL parameter
        if (categoryFromUrl && btn.dataset.category === categoryFromUrl) {
            btn.click();
        }
    });
    
    // Activate "All" if no category in URL
    if (!categoryFromUrl) {
        document.querySelector('.filter-btn[data-category="all"]').click();
    }
}

function updateCategoryHeader(category) {
    const title = document.getElementById('category-title');
    const description = document.getElementById('category-description');
    const breadcrumb = document.getElementById('current-category');
    
    if (!title) return;
    
    const categoryNames = {
        'all': 'All Products',
        'sneakers': 'Sneakers Collection',
        'sandals': 'Classic Sandals',
        'heels': 'Elegant Heels',
        'sports': 'Sport Shoes'
    };
    
    const categoryDescriptions = {
        'all': 'Browse our complete collection',
        'sneakers': 'Comfort and style for everyday wear',
        'sandals': 'Perfect for casual and warm days',
        'heels': 'Elegance for special occasions',
        'sports': 'Performance footwear for active lifestyles'
    };
    
    title.textContent = categoryNames[category];
    if (description) description.textContent = categoryDescriptions[category];
    if (breadcrumb) breadcrumb.textContent = categoryNames[category];
}

function orderViaWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const phoneNumber = "15551234567"; // Replace with your WhatsApp number
    const message = Hello! I would like to order:\n\n*${product.name}*\nPrice: $${product.price.toFixed(2)}\n\nPlease contact me for details.;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = https://wa.me/${phoneNumber}?text=${encodedMessage};
    
    window.open(whatsappURL, '_blank');
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="product-details">
            <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:10px; margin-bottom:20px;">
            <h2>${product.name}</h2>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <h3>Features:</h3>
            <ul>
                ${product.features.map(feature => <li>${feature}</li>).join('')}
            </ul>
            <button class="whatsapp-btn" onclick="orderViaWhatsApp(${product.id})" style="margin-top:20px; padding:15px;">
                <i class="fab fa-whatsapp"></i> Order via WhatsApp
            </button>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    // Close modal when clicking X
    document.querySelector('.close-modal').onclick = () => {
        modal.style.display = 'none';
    };
    
    // Close modal when clicking outside
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Sort functionality
function setupSorting() {
    const sortSelect = document.getElementById('sort-by');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const container = document.getElementById('products-container');
            if (!container) return;
            
            const productsArray = Array.from(container.children);
            
            productsArray.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
                const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
                const nameA = a.querySelector('h3').textContent;
                const nameB = b.querySelector('h3').textContent;
                
                switch (e.target.value) {
                    case 'price-low':
                        return priceA - priceB;
                    case 'price-high':
                        return priceB - priceA;
                    case 'name':
                        return nameA.localeCompare(nameB);
                    default:
                        return 0;
                }
            });
            
            // Reappend sorted products
            productsArray.forEach(product => container.appendChild(product));
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    setupSearch();
    
    // Only run on products page
    if (window.location.pathname.includes('products.html')) {
        renderProducts();
        setupCategoryFilter();
        setupSorting();
        
        // Handle quick view buttons on homepage
        const quickViewBtns = document.querySelectorAll('.quick-view');
        quickViewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // Simulate showing a random product
                const randomProduct = products[Math.floor(Math.random() * products.length)];
                showProductDetails(randomProduct.id);
            });
        });
    }
    
    // Handle category clicks on homepage
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Animation effect
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            });
        });
    }
});