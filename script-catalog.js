const backupProducts = [
    {
        id: 1,
        name: "RTX  Gamming",
        description: "Tarjeta grafica",
        detailedDescription: "Tarjeta Grafica",
        price: 1899.99,
        category: "laptops",
        brand: "asus",
        images: [
            "GFRTX.jpeg",
            "GFRTX2.jpeg", 
            "GFRTX3.jpg"
        ],
        rating: 4.8,
        featured: true,
        specifications: [
            "Procesador: Intel Core i9-13900H",
            "Tarjeta gráfica: NVIDIA GeForce RTX 4070 8GB",
            "RAM: 32GB DDR5",
            "Almacenamiento: 1TB SSD NVMe",
            "Pantalla: 15.6\" QHD 240Hz",
            "Sistema operativo: Windows 11 Home"
        ]
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        description: "El último smartphone de Apple con cámara profesional y chip A17 Pro.",
        detailedDescription: "El iPhone 15 Pro redefine lo que es posible en un smartphone. Con su revolucionario chip A17 Pro, cámara triple de 48MP y diseño de titanio, ofrece un rendimiento y durabilidad sin precedentes. La Dynamic Island proporciona una forma completamente nueva de interactuar con tu iPhone.",
        price: 1199.99,
        category: "smartphones",
        brand: "apple",
        images: [
            "I15.jpeg",
            "I152.jpeg",
            "I153.jpeg"
        ],
        rating: 4.9,
        featured: true,
        specifications: [
            "Chip: A17 Pro",
            "Pantalla: 6.1\" Super Retina XDR",
            "Cámara: Triple 48MP + 12MP + 12MP",
            "Almacenamiento: 256GB",
            "Batería: Hasta 23 horas de reproducción de video",
            "Resistencia: IP68"
        ]
    },
    {
        id: 3,
        name: "RTX 4090 Founders Edition",
        description: "Tarjeta gráfica de última generación para gaming y creación de contenido.",
        detailedDescription: "La NVIDIA GeForce RTX 4090 es la GPU más avanzada del mundo, diseñada para jugadores y creadores. Con la arquitectura NVIDIA Ada Lovelace, ofrece un salto monumental en rendimiento y eficiencia con trazado de rayos y IA. Experimentas juegos con gráficos ultrarealistas y un rendimiento increíblemente rápido.",
        price: 1599.99,
        category: "components",
        brand: "nvidia",
        images: [
            "RTX4.jpg",
            "RTX42.jpg",
            "RTX43.jpg"
        ],
        rating: 4.7,
        featured: true,
        specifications: [
            "Arquitectura: NVIDIA Ada Lovelace",
            "Memoria: 24GB GDDR6X",
            "Velocidad: 2.52 GHz",
            "Conectores: 3x DisplayPort, 1x HDMI",
            "Fuente recomendada: 850W",
            "Refrigeración: Vapor chamber avanzada"
        ]
    },
    {
        id: 4,
        name: "Samsung Galaxy S24 Ultra",
        description: "Smartphone premium con S Pen integrado y cámara de 200MP.",
        detailedDescription: "El Galaxy S24 Ultra lleva la productividad móvil al siguiente nivel con el S Pen integrado y una cámara de 200MP que captura detalles asombrosos. Su pantalla Dynamic AMOLED 2X de 6.8 pulgadas ofrece colores vibrantes y brillo excepcional, incluso bajo la luz solar directa.",
        price: 1299.99,
        category: "smartphones",
        brand: "samsung",
        images: [
            "SG24.jpeg",
            "SG243.jpeg"
        ],
        rating: 4.6,
        featured: false,
        specifications: [
            "Procesador: Snapdragon 8 Gen 3",
            "Pantalla: 6.8\" Dynamic AMOLED 2X",
            "Cámara: 200MP + 50MP + 12MP + 10MP",
            "Almacenamiento: 512GB",
            "S Pen: Integrado",
            "Batería: 5000mAh"
        ]
    },
    {
        id: 5,
        name: "MSI Katana 15",
        description: "Laptop gaming con RTX 4060 y procesador Intel i7 de 13ª generación.",
        detailedDescription: "La MSI Katana 15 combina un diseño elegante con un rendimiento gaming excepcional. Equipada con una RTX 4060 y procesador Intel Core i7, es la compañera perfecta para jugadores que buscan potencia y portabilidad. Su teclado per-key RGB personalizable completa la experiencia gaming.",
        price: 1399.99,
        category: "laptops",
        brand: "msi",
        images: [
            "MSK.jpg",
            "MSK.jpg"
        ],
        rating: 4.5,
        featured: false,
        specifications: [
            "Procesador: Intel Core i7-13620H",
            "Tarjeta gráfica: NVIDIA GeForce RTX 4060 8GB",
            "RAM: 16GB DDR5",
            "Almacenamiento: 1TB SSD NVMe",
            "Pantalla: 15.6\" FHD 144Hz",
            "Teclado: Per-key RGB"
        ]
    },
    {
        id: 6,
        name: "Teclado Mecánico Razer",
        description: "Teclado gaming mecánico con switches verdes y retroiluminación RGB.",
        detailedDescription: "El teclado mecánico Razer BlackWidow V4 ofrece la experiencia táctil y auditiva definitiva con sus switches verdes mecánicos. Con iluminación RGB Chroma personalizable y construcción duradera, es el teclado preferido por jugadores profesionales en todo el mundo.",
        price: 129.99,
        category: "accessories",
        brand: "razer",
        images: [
            "TEMR.jpeg",
            "TEMR.jpeg",
            "TEMR.jpeg"
        ],
        rating: 4.4,
        featured: false,
        specifications: [
            "Switches: Razer Green Mechanical",
            "Iluminación: RGB Chroma",
            "Teclas multimedia: Dedicadas",
            "Cable: Desmontable USB-C",
            "Construcción: Aluminio",
            "Compatibilidad: PC, PS5, Xbox Series X/S"
        ]
    },
    {
        id: 7,
        name: "Monitor Gaming 27\" 144Hz",
        description: "Monitor gaming con tasa de refresco de 144Hz y resolución QHD.",
        detailedDescription: "Este monitor gaming de 27 pulgadas ofrece una experiencia visual inmersiva con resolución QHD y tasa de refresco de 144Hz. Tecnología AMD FreeSync Premium elimina el tearing y stuttering para una jugabilidad suave. Ideal para juegos competitivos y contenido multimedia.",
        price: 349.99,
        category: "gaming",
        brand: "asus",
        images: [
            "MNG.jpg",
            "MNG.jpg"
        ],
        rating: 4.3,
        featured: false,
        specifications: [
            "Tamaño: 27\"",
            "Resolución: QHD (2560x1440)",
            "Tasa de refresco: 144Hz",
            "Tiempo de respuesta: 1ms",
            "Tecnología: AMD FreeSync Premium",
            "Conectores: 2x HDMI, 1x DisplayPort"
        ]
    },
    {
        id: 8,
        name: "MacBook Air M3",
        description: "Laptop ultradelgada con chip M3 de Apple y pantalla Retina.",
        detailedDescription: "La MacBook Air con chip M3 lleva el rendimiento y la portabilidad a nuevos niveles. Incredíblemente delgada y ligera, ofrece hasta 18 horas de batería y un rendimiento que supera a muchas laptops con procesadores Intel. Perfecta para trabajo, creatividad y entretenimiento.",
        price: 1099.99,
        category: "laptops",
        brand: "apple",
        images: [
            "MAC.jpg",
            "MAC.jpg",
            "MAC.jpg"
        ],
        rating: 4.8,
        featured: false,
        specifications: [
            "Chip: Apple M3 con CPU 8-core",
            "Pantalla: 13.6\" Liquid Retina",
            "Memoria: 8GB unificada",
            "Almacenamiento: 256GB SSD",
            "Batería: Hasta 18 horas",
            "Sistema operativo: macOS"
        ]
    }
];

// Estado de la aplicación para el catálogo
let products = [];
let cart = [];
let currentUser = null;
let activeFilters = {
    categories: [],
    price: null,
    brands: []
};

// Elementos del DOM específicos del catálogo
const categoryFiltersContainer = document.getElementById('category-filters');
const priceFiltersContainer = document.getElementById('price-filters');
const brandFiltersContainer = document.getElementById('brand-filters');
const allProductsContainer = document.getElementById('all-products');
const clearFiltersBtn = document.getElementById('clear-filters');
const resultsCount = document.getElementById('results-count');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cartModal = document.getElementById('cart-modal');
const cartIcon = document.getElementById('cart-icon');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const authModal = document.getElementById('auth-modal');
const loginBtn = document.getElementById('login-btn');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const productModal = document.getElementById('product-modal');
const closeProductModal = document.getElementById('close-product-modal');
const productDetail = document.getElementById('product-detail');

// ========== SISTEMA SIMPLIFICADO DE IMÁGENES ==========

/**
 * Función simplificada para obtener la ruta de imagen
 */
function getImagePath(imagePath, productName, category) {
    // Si no hay imagen, usar placeholder
    if (!imagePath) {
        return `https://via.placeholder.com/300x200/393E46/EAEAEA?text=${encodeURIComponent(productName)}`;
    }
    
    // Si ya es una URL completa (http/https), usarla directamente
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
    }
    
    // Si ya incluye la carpeta completa, usarla
    if (imagePath.includes('imagenes/') || imagePath.includes('/')) {
        return imagePath;
    }
    
    // Para nombres simples, construir la ruta completa
    return `imagenes/products/${imagePath}`;
}

/**
 * Manejo de errores de imagen simplificado
 */
function handleImageError(imgElement, productName) {
    console.warn(`No se pudo cargar la imagen: ${imgElement.src}`);
    
    const fallbackText = `Imagen de ${productName}`;
    imgElement.src = `https://via.placeholder.com/300x200/393E46/EAEAEA?text=${encodeURIComponent(fallbackText)}`;
    imgElement.alt = fallbackText;
    imgElement.title = `No se pudo cargar la imagen de ${productName}`;
    
    // Indicador visual de imagen no disponible
    imgElement.style.border = '2px dashed var(--rosa)';
    imgElement.style.padding = '5px';
}

/**
 * Configurar manejadores de error para imágenes
 */
function setupImageErrorHandlers() {
    document.querySelectorAll('.product-image, .cart-item-image, .product-detail-image, .thumbnail').forEach(img => {
        const productName = img.alt || 'Producto';
        img.onerror = () => handleImageError(img, productName);
    });
}

// ========== SISTEMA DE MÚLTIPLES IMÁGENES SIMPLIFICADO ==========

function setupProductImageHover() {
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.querySelector('.add-to-cart').dataset.id);
        const product = products.find(p => p.id === productId);
        
        if (!product || !product.images || product.images.length <= 1) return;
        
        const imageElement = card.querySelector('.product-image');
        let hoverInterval;
        let currentImageIndex = 0;
        
        card.addEventListener('mouseenter', () => {
            if (product.images.length > 1) {
                currentImageIndex = 0;
                hoverInterval = setInterval(() => {
                    currentImageIndex = (currentImageIndex + 1) % product.images.length;
                    const nextImagePath = getImagePath(product.images[currentImageIndex], product.name);
                    
                    // Transición suave
                    imageElement.style.opacity = '0.7';
                    setTimeout(() => {
                        imageElement.src = nextImagePath;
                        imageElement.style.opacity = '1';
                    }, 150);
                    
                }, 2000); // Cambiar cada 2 segundos
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (hoverInterval) {
                clearInterval(hoverInterval);
                // Restaurar primera imagen
                const firstImagePath = getImagePath(product.images[0], product.name);
                imageElement.style.opacity = '0.7';
                setTimeout(() => {
                    imageElement.src = firstImagePath;
                    imageElement.style.opacity = '1';
                }, 150);
            }
        });
    });
}

// ========== INICIALIZACIÓN SIMPLIFICADA ==========

document.addEventListener('DOMContentLoaded', function() {
    loadData();
    setupEventListeners();
    loadCartFromStorage();
    updateCartUI();
    setupImageErrorHandlers();
    showTestUserInfo();
    applyUrlFilters();
});

// Cargar datos
async function loadData() {
    showLoading(true);
    
    try {
        const response = await fetch('data.json');
        
        if (response.ok) {
            const data = await response.json();
            products = data.products || backupProducts;
        } else {
            throw new Error('Error al cargar datos JSON');
        }
    } catch (error) {
        console.warn('Error cargando datos JSON, usando datos de respaldo:', error);
        products = backupProducts;
    }
    
    renderAllProducts();
    renderFilters();
    updateResultsCount();
    setupProductImageHover();
    showLoading(false);
}

// ========== SISTEMA DE BÚSQUEDA PREDICTIVA ==========

let searchTimeout;
let currentSuggestions = [];

function setupPredictiveSearch() {
    const searchInput = document.getElementById('search-input');
    const searchContainer = searchInput.parentElement;
    
    // Crear contenedor de sugerencias
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';
    searchContainer.appendChild(suggestionsContainer);
    
    // Event listeners mejorados
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('focus', showSuggestions);
    searchInput.addEventListener('blur', hideSuggestions);
    
    // Navegación con teclado
    searchInput.addEventListener('keydown', handleSearchNavigation);
}

function handleSearchInput(e) {
    const query = e.target.value.trim();
    
    clearTimeout(searchTimeout);
    
    if (query.length < 2) {
        hideSuggestions();
        return;
    }
    
    searchTimeout = setTimeout(() => {
        searchProducts(query);
    }, 300);
}

function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    
    // Búsqueda en productos cargados
    const results = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        const descMatch = product.description.toLowerCase().includes(searchTerm);
        const categoryMatch = product.category.toLowerCase().includes(searchTerm);
        const brandMatch = product.brand.toLowerCase().includes(searchTerm);
        
        return nameMatch || descMatch || categoryMatch || brandMatch;
    }).slice(0, 8); // Limitar a 8 resultados
    
    currentSuggestions = results;
    displaySuggestions(results, query);
}

function displaySuggestions(suggestions, query) {
    const suggestionsContainer = document.querySelector('.search-suggestions');
    
    if (suggestions.length === 0) {
        suggestionsContainer.innerHTML = `
            <div class="suggestion-item no-results">
                <span>No se encontraron productos para "${query}"</span>
            </div>
        `;
        suggestionsContainer.classList.add('show');
        return;
    }
    
    suggestionsContainer.innerHTML = suggestions.map(product => `
        <div class="suggestion-item" data-id="${product.id}">
            <img src="${getImagePath(product.images, product.name, product.category)}" 
                 alt="${product.name}"
                 onerror="handleImageError(this, '${product.name.replace(/'/g, "\\'")}', '${product.category}')">
            <div class="suggestion-info">
                <div class="suggestion-name">${highlightText(product.name, query)}</div>
                <div class="suggestion-category">${formatCategoryName(product.category)}</div>
                <div class="suggestion-price">$${product.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
    
    // Agregar evento de clic a las sugerencias
    suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            searchInput.value = '';
            hideSuggestions();
            openProductDetail(productId);
        });
    });
    
    suggestionsContainer.classList.add('show');
}

function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function handleSearchNavigation(e) {
    const suggestions = document.querySelectorAll('.suggestion-item');
    const activeSuggestion = document.querySelector('.suggestion-item.active');
    let activeIndex = Array.from(suggestions).indexOf(activeSuggestion);
    
    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            activeIndex = (activeIndex + 1) % suggestions.length;
            setActiveSuggestion(suggestions, activeIndex);
            break;
            
        case 'ArrowUp':
            e.preventDefault();
            activeIndex = (activeIndex - 1 + suggestions.length) % suggestions.length;
            setActiveSuggestion(suggestions, activeIndex);
            break;
            
        case 'Enter':
            e.preventDefault();
            if (activeSuggestion) {
                activeSuggestion.click();
            } else {
                handleSearch();
            }
            break;
            
        case 'Escape':
            hideSuggestions();
            break;
    }
}

function setActiveSuggestion(suggestions, index) {
    suggestions.forEach(s => s.classList.remove('active'));
    if (suggestions[index]) {
        suggestions[index].classList.add('active');
        suggestions[index].scrollIntoView({ block: 'nearest' });
    }
}

function showSuggestions() {
    const query = searchInput.value.trim();
    if (query.length >= 2 && currentSuggestions.length > 0) {
        document.querySelector('.search-suggestions').classList.add('show');
    }
}

function hideSuggestions() {
    // Pequeño delay para permitir clics en las sugerencias
    setTimeout(() => {
        document.querySelector('.search-suggestions')?.classList.remove('show');
    }, 200);
}

// ========== VALIDACIÓN MEJORADA DE EMAIL ==========

// Lista de dominios de email válidos
const validDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com',
    'protonmail.com', 'aol.com', 'live.com', 'msn.com', 'yandex.com',
    'mail.com', 'zoho.com', 'gmx.com', 'hubspot.com', 'salesforce.com',
    'company.com', 'empresa.com', 'business.com', 'correo.com'
];

// Dominios de prueba para desarrollo
const testDomains = ['test.com', 'example.com', 'demo.com', 'prueba.com'];

// Usuario de prueba predefinido
const testUser = {
    email: 'usuario@test.com',
    password: 'test123',
    name: 'Usuario de Prueba'
};

function isValidEmailDomain(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        return { isValid: false, message: 'Formato de email inválido' };
    }
    
    const domain = email.split('@')[1].toLowerCase();
    
    // Permitir dominios de prueba en desarrollo
    if (testDomains.includes(domain)) {
        return { isValid: true, message: '' };
    }
    
    // Validar dominio real
    if (!validDomains.includes(domain)) {
        return { 
            isValid: false, 
            message: 'Por favor, usa un proveedor de email válido (Gmail, Yahoo, Hotmail, etc.)' 
        };
    }
    
    return { isValid: true, message: '' };
}

function validateEmailReal(e) {
    const input = e.target;
    const errorElement = document.getElementById(input.id + '-error');
    const email = input.value.trim();
    
    if (!email) {
        showValidationError(input, errorElement, 'El correo electrónico es obligatorio');
        return false;
    }
    
    const domainValidation = isValidEmailDomain(email);
    if (!domainValidation.isValid) {
        showValidationError(input, errorElement, domainValidation.message);
        return false;
    }
    
    clearValidationError(input, errorElement);
    return true;
}

// ========== INICIALIZACIÓN ==========

document.addEventListener('DOMContentLoaded', function() {
    loadData();
    setupEventListeners();
    loadCartFromStorage();
    updateCartUI();
    enhanceValidations();
    setupPredictiveSearch();
    setupImageErrorHandlers();
    showTestUserInfo();
    applyUrlFilters();
});

// Cargar datos
async function loadData() {
    showLoading(true);
    
    try {
        const response = await fetch('data.json');
        
        if (response.ok) {
            const data = await response.json();
            products = data.products || backupProducts;
        } else {
            throw new Error('Error al cargar datos JSON');
        }
    } catch (error) {
        console.warn('Error cargando datos JSON, usando datos de respaldo:', error);
        products = backupProducts;
    }
    
    renderAllProducts();
    renderFilters();
    updateResultsCount();
    setupProductImageHover(); // ← AÑADIR ESTA LÍNEA
    showLoading(false);
}

// Mostrar/ocultar indicador de carga
function showLoading(show) {
    let loadingIndicator = document.getElementById('loading-indicator');
    
    if (!loadingIndicator) {
        loadingIndicator = document.createElement('div');
        loadingIndicator.id = 'loading-indicator';
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--cyan);">Cargando productos...</div>
                <div style="width: 40px; height: 40px; border: 4px solid #2a2a35; border-top: 4px solid var(--cyan); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
            </div>
        `;
        document.body.appendChild(loadingIndicator);
    }
    
    if (show) {
        loadingIndicator.classList.add('show');
    } else {
        loadingIndicator.classList.remove('show');
    }
}

// ========== RENDERIZADO DE PRODUCTOS Y FILTROS ==========

function renderAllProducts() {
    allProductsContainer.innerHTML = '';
    
    const filteredProducts = getFilteredProducts();
    
    if (filteredProducts.length === 0) {
        allProductsContainer.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3 style="color: var(--rosa); margin-bottom: 1rem;">No se encontraron productos</h3>
                <p style="color: var(--text-light); margin-bottom: 2rem;">Intenta ajustar los filtros o realizar una búsqueda diferente.</p>
                <button class="btn btn-primary" onclick="clearAllFilters()">Limpiar todos los filtros</button>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productElement = createProductElement(product);
        allProductsContainer.appendChild(productElement);
    });
}

function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-card';
    
    const firstImage = Array.isArray(product.images) ? product.images[0] : product.image;
    const imagePath = getImagePath(firstImage, product.name, product.category);
    
    productDiv.innerHTML = `
        <div class="product-image-container">
            <img src="${imagePath}" 
                 alt="${product.name} - ${formatCategoryName(product.category)}" 
                 class="product-image"
                 onerror="handleImageError(this, '${product.name.replace(/'/g, "\\'")}', '${product.category}')"
                 title="${product.name} - ${product.description}">
            <div class="image-indicator" style="display: ${Array.isArray(product.images) && product.images.length > 1 ? 'block' : 'none'};">
                ${Array.isArray(product.images) ? product.images.length : 1} imágenes
            </div>
            <div data-category="${product.category}" style="display: none;"></div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                <span>${product.rating}</span>
            </div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <button class="add-to-cart" data-id="${product.id}">Añadir al Carrito</button>
                <button class="view-details" data-id="${product.id}">Ver más</button>
            </div>
        </div>
    `;
    
    // Event listeners
    const addToCartBtn = productDiv.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product.id);
    });
    
    const viewDetailsBtn = productDiv.querySelector('.view-details');
    viewDetailsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openProductDetail(product.id);
    });
    
    productDiv.addEventListener('click', () => openProductDetail(product.id));
    
    return productDiv;
}

function renderFilters() {
    renderCategoryFilters();
    renderPriceFilters();
    renderBrandFilters();
}

function renderCategoryFilters() {
    const categories = [...new Set(products.map(product => product.category))];
    
    categoryFiltersContainer.innerHTML = categories.map(category => `
        <label class="filter-checkbox">
            <input type="checkbox" value="${category}" 
                   ${activeFilters.categories.includes(category) ? 'checked' : ''}>
            <span class="checkmark"></span>
            ${formatCategoryName(category)}
        </label>
    `).join('');
    
    // Event listeners para checkboxes de categoría
    categoryFiltersContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryFilter);
    });
}

function renderPriceFilters() {
    const priceRanges = [
        { label: 'Menos de $500', min: 0, max: 500 },
        { label: '$500 - $1000', min: 500, max: 1000 },
        { label: '$1000 - $1500', min: 1000, max: 1500 },
        { label: 'Más de $1500', min: 1500, max: Infinity }
    ];
    
    priceFiltersContainer.innerHTML = priceRanges.map(range => `
        <label class="filter-radio">
            <input type="radio" name="price" value="${range.min}-${range.max}" 
                   ${activeFilters.price && activeFilters.price.min === range.min && activeFilters.price.max === range.max ? 'checked' : ''}>
            <span class="radiomark"></span>
            ${range.label}
        </label>
    `).join('');
    
    // Event listeners para radios de precio
    priceFiltersContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', handlePriceFilter);
    });
}

function renderBrandFilters() {
    const brands = [...new Set(products.map(product => product.brand))];
    
    brandFiltersContainer.innerHTML = brands.map(brand => `
        <label class="filter-checkbox">
            <input type="checkbox" value="${brand}" 
                   ${activeFilters.brands.includes(brand) ? 'checked' : ''}>
            <span class="checkmark"></span>
            ${formatBrandName(brand)}
        </label>
    `).join('');
    
    // Event listeners para checkboxes de marca
    brandFiltersContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleBrandFilter);
    });
}

// ========== MANEJO DE FILTROS ==========

function handleCategoryFilter(e) {
    const category = e.target.value;
    
    if (e.target.checked) {
        activeFilters.categories.push(category);
    } else {
        activeFilters.categories = activeFilters.categories.filter(c => c !== category);
    }
    
    applyFilters();
}

function handlePriceFilter(e) {
    if (e.target.checked) {
        const [min, max] = e.target.value.split('-').map(Number);
        activeFilters.price = { min, max };
    } else {
        activeFilters.price = null;
    }
    
    applyFilters();
}

function handleBrandFilter(e) {
    const brand = e.target.value;
    
    if (e.target.checked) {
        activeFilters.brands.push(brand);
    } else {
        activeFilters.brands = activeFilters.brands.filter(b => b !== brand);
    }
    
    applyFilters();
}

function applyFilters() {
    renderAllProducts();
    updateResultsCount();
    updateUrlWithFilters();
}

function getFilteredProducts() {
    return products.filter(product => {
        // Filtro por categoría
        if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(product.category)) {
            return false;
        }
        
        // Filtro por precio
        if (activeFilters.price) {
            const { min, max } = activeFilters.price;
            if (product.price < min || product.price > max) {
                return false;
            }
        }
        
        // Filtro por marca
        if (activeFilters.brands.length > 0 && !activeFilters.brands.includes(product.brand)) {
            return false;
        }
        
        return true;
    });
}

function clearAllFilters() {
    activeFilters = {
        categories: [],
        price: null,
        brands: []
    };
    
    // Actualizar UI de filtros
    document.querySelectorAll('#category-filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    document.querySelectorAll('#price-filters input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    
    document.querySelectorAll('#brand-filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    applyFilters();
}

function updateResultsCount() {
    const filteredProducts = getFilteredProducts();
    resultsCount.textContent = `${filteredProducts.length} producto${filteredProducts.length !== 1 ? 's' : ''} encontrado${filteredProducts.length !== 1 ? 's' : ''}`;
}

// ========== MANEJO DE URL Y BÚSQUEDA ==========

function applyUrlFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Aplicar búsqueda si existe
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        searchInput.value = searchQuery;
        // Simular búsqueda
        searchProducts(searchQuery);
    }
    
    // Aplicar filtros de categoría si existen
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        const categories = categoryParam.split(',');
        activeFilters.categories = categories;
        
        // Actualizar checkboxes
        categories.forEach(category => {
            const checkbox = document.querySelector(`#category-filters input[value="${category}"]`);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }
    
    // Aplicar filtros si hay algún parámetro
    if (searchQuery || categoryParam) {
        applyFilters();
    }
}

function updateUrlWithFilters() {
    const urlParams = new URLSearchParams();
    
    // Agregar búsqueda si existe
    if (searchInput.value.trim()) {
        urlParams.set('search', searchInput.value.trim());
    }
    
    // Agregar categorías si existen
    if (activeFilters.categories.length > 0) {
        urlParams.set('category', activeFilters.categories.join(','));
    }
    
    const newUrl = urlParams.toString() ? `catalogo.html?${urlParams.toString()}` : 'catalogo.html';
    window.history.replaceState({}, '', newUrl);
}

function handleSearch() {
    const query = searchInput.value.trim();
    hideSuggestions();
    
    if (!query) {
        return;
    }
    
    applyFilters();
}

// ========== CARRITO DE COMPRAS ==========

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showSuccessMessage(`${product.name} - Cantidad actualizada: ${existingItem.quantity}`);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images ? product.images[0] : product.image,
            quantity: 1
        });
        showSuccessMessage(`${product.name} añadido al carrito`);
    }
    
    updateCartUI();
    saveCartToStorage();
}

function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        cart = cart.filter(item => item.id !== productId);
        updateCartUI();
        saveCartToStorage();
        showSuccessMessage(`${item.name} eliminado del carrito`);
    }
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
        saveCartToStorage();
    }
}

function updateCartUI() {
    // Actualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Actualizar items del carrito
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Tu carrito está vacío</div>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const imagePath = getImagePath(item.image, item.name, 'producto');
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${imagePath}" alt="${item.name}" class="cart-item-image"
                 onerror="handleImageError(this, '${item.name.replace(/'/g, "\\'")}', 'producto')">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                    <button class="remove-item" data-id="${item.id}">Eliminar</button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Actualizar total
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Añadir eventos a los botones de cantidad y eliminar
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            const action = this.dataset.action;
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                if (action === 'increase') {
                    updateQuantity(productId, item.quantity + 1);
                } else if (action === 'decrease') {
                    updateQuantity(productId, item.quantity - 1);
                }
            }
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            removeFromCart(productId);
        });
    });
}

function openCart() {
    cartModal.classList.add('open');
}

function closeCartModal() {
    cartModal.classList.remove('open');
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showErrorMessage('Tu carrito está vacío');
        return;
    }
    
    if (!currentUser) {
        closeCartModal();
        openAuthModal();
        showErrorMessage('Debes iniciar sesión para proceder al pago');
        return;
    }
    
    // Simular proceso de pago
    showSuccessMessage('Compra realizada con éxito. ¡Gracias por tu compra!');
    cart = [];
    updateCartUI();
    saveCartToStorage();
    closeCartModal();
}

// ========== AUTENTICACIÓN ==========

function openAuthModal() {
    authModal.classList.add('open');
}

function closeAuthModal() {
    authModal.classList.remove('open');
    // Limpiar formularios
    loginForm.reset();
    registerForm.reset();
    clearFormErrors();
}

function switchAuthTab(tab) {
    // Actualizar pestañas activas
    authTabs.forEach(t => t.classList.remove('active'));
    authForms.forEach(f => f.classList.remove('active'));
    
    // Activar la pestaña seleccionada
    document.querySelector(`.auth-tab[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(`${tab}-form`).classList.add('active');
    
    // Limpiar errores
    clearFormErrors();
}

function handleLogin(e) {
    e.preventDefault();
    clearFormErrors();
    
    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');
    
    let isValid = true;
    
    // Validar email con dominio real
    if (!validateEmailReal({ target: email })) {
        isValid = false;
    }
    
    // Validar contraseña
    if (!validatePassword({ target: password })) {
        isValid = false;
    }
    
    // Verificar credenciales de prueba
    if (isValid && email.value === testUser.email && password.value === testUser.password) {
        currentUser = {
            name: testUser.name,
            email: testUser.email
        };
        
        showSuccessMessage('¡Inicio de sesión exitoso! (Usuario de prueba)');
        loginBtn.textContent = currentUser.name;
        closeAuthModal();
        return;
    }
    
    if (!isValid) return;
    
    // Simular inicio de sesión para otros usuarios
    currentUser = {
        name: email.value.split('@')[0],
        email: email.value
    };
    
    showSuccessMessage('¡Inicio de sesión exitoso!');
    loginBtn.textContent = currentUser.name;
    closeAuthModal();
}

function handleRegister(e) {
    e.preventDefault();
    clearFormErrors();
    
    const name = document.getElementById('register-name');
    const email = document.getElementById('register-email');
    const password = document.getElementById('register-password');
    const confirm = document.getElementById('register-confirm');
    
    let isValid = true;
    
    // Validar nombre
    if (!validateName({ target: name })) {
        isValid = false;
    }
    
    // Validar email con dominio real
    if (!validateEmailReal({ target: email })) {
        isValid = false;
    }
    
    // Validar contraseña
    if (!validatePassword({ target: password })) {
        isValid = false;
    }
    
    // Validar confirmación de contraseña
    if (!confirm.value) {
        showValidationError(confirm, document.getElementById('register-confirm-error'), 'Confirma tu contraseña');
        isValid = false;
    } else if (password.value !== confirm.value) {
        showValidationError(confirm, document.getElementById('register-confirm-error'), 'Las contraseñas no coinciden');
        isValid = false;
    } else {
        clearValidationError(confirm, document.getElementById('register-confirm-error'));
    }
    
    if (!isValid) return;
    
    // Simular registro
    currentUser = {
        name: name.value,
        email: email.value
    };
    
    showSuccessMessage('¡Registro exitoso! Bienvenido a Laboratorio de Tesla');
    loginBtn.textContent = currentUser.name;
    closeAuthModal();
}

// Mostrar información del usuario de prueba
function showTestUserInfo() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        const testInfo = document.createElement('div');
        testInfo.className = 'test-user-info';
        testInfo.innerHTML = `
            <div style="background: var(--bg-lighter); padding: 10px; border-radius: 8px; margin-top: 10px; font-size: 0.9rem;">
                <strong>Usuario de prueba:</strong><br>
                Email: ${testUser.email}<br>
                Contraseña: ${testUser.password}
            </div>
        `;
        loginForm.appendChild(testInfo);
    }
}

// ========== DETALLE DE PRODUCTO ==========

function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productImages = Array.isArray(product.images) ? product.images : [product.image];
    const mainImagePath = getImagePath(productImages[0], product.name, product.category);
    
    productDetail.innerHTML = `
        <div class="product-detail-container">
            <div class="product-detail-main">
                <div class="product-image-gallery">
                    <img src="${mainImagePath}" alt="${product.name}" class="product-detail-image active"
                         onerror="handleImageError(this, '${product.name.replace(/'/g, "\\'")}', '${product.category}')">
                    ${productImages.length > 1 ? `
                    <div class="image-thumbnails">
                        ${productImages.map((img, index) => `
                            <img src="${getImagePath(img, product.name, product.category)}" 
                                 alt="${product.name} - Vista ${index + 1}"
                                 class="thumbnail ${index === 0 ? 'active' : ''}"
                                 data-index="${index}"
                                 onerror="handleImageError(this, '${product.name.replace(/'/g, "\\'")} - Vista ${index + 1}', '${product.category}')">
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                <div class="product-detail-info">
                    <h2 class="product-detail-title">${product.name}</h2>
                    <p class="product-detail-description">${product.detailedDescription}</p>
                    <div class="product-rating">
                        <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                        <span>${product.rating}</span>
                    </div>
                    <div class="product-detail-price">$${product.price.toFixed(2)}</div>
                    <div class="product-detail-actions">
                        <button class="btn btn-primary" id="add-to-cart-detail">Añadir al Carrito</button>
                        <button class="btn btn-secondary" id="buy-now-detail">Comprar Ahora</button>
                    </div>
                </div>
            </div>
            <div class="product-detail-specs">
                <h3>Especificaciones Técnicas</h3>
                <ul>
                    ${product.specifications.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // Añadir funcionalidad a las miniaturas
    if (productImages.length > 1) {
        const thumbnails = productDetail.querySelectorAll('.thumbnail');
        const mainImage = productDetail.querySelector('.product-detail-image');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remover clase active de todas las miniaturas
                thumbnails.forEach(t => t.classList.remove('active'));
                // Añadir clase active a la miniatura clickeada
                this.classList.add('active');
                // Cambiar imagen principal
                const newImagePath = getImagePath(productImages[this.dataset.index], product.name, product.category);
                mainImage.style.opacity = '0.7';
                setTimeout(() => {
                    mainImage.src = newImagePath;
                    mainImage.style.opacity = '1';
                }, 150);
            });
        });
    }
    
    // Añadir evento al botón de añadir al carrito en el detalle
    const addToCartDetailBtn = document.getElementById('add-to-cart-detail');
    addToCartDetailBtn.addEventListener('click', () => {
        addToCart(product.id);
        showSuccessMessage('Producto añadido al carrito');
    });
    
    // Añadir evento al botón de comprar ahora
    const buyNowBtn = document.getElementById('buy-now-detail');
    buyNowBtn.addEventListener('click', () => {
        addToCart(product.id);
        showSuccessMessage('Producto añadido al carrito');
        closeProductDetail();
        openCart();
    });
    
    productModal.classList.add('open');
}

function closeProductDetail() {
    productModal.classList.remove('open');
}

// ========== NOTIFICACIONES MEJORADAS ==========

function showSuccessMessage(message) {
    // Crear mensaje de éxito temporal
    const successMsg = document.createElement('div');
    successMsg.className = 'notification-message success';
    successMsg.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>${message}</span>
    `;
    
    document.body.appendChild(successMsg);
    
    // Mostrar con animación
    setTimeout(() => {
        successMsg.classList.add('show');
    }, 10);
    
    // Ocultar y eliminar después de 3 segundos
    setTimeout(() => {
        successMsg.classList.remove('show');
        setTimeout(() => {
            if (successMsg.parentNode) {
                successMsg.parentNode.removeChild(successMsg);
            }
        }, 300);
    }, 3000);
}

function showErrorMessage(message) {
    // Crear mensaje de error temporal
    const errorMsg = document.createElement('div');
    errorMsg.className = 'notification-message error';
    errorMsg.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>${message}</span>
    `;
    
    document.body.appendChild(errorMsg);
    
    // Mostrar con animación
    setTimeout(() => {
        errorMsg.classList.add('show');
    }, 10);
    
    // Ocultar y eliminar después de 3 segundos
    setTimeout(() => {
        errorMsg.classList.remove('show');
        setTimeout(() => {
            if (errorMsg.parentNode) {
                errorMsg.parentNode.removeChild(errorMsg);
            }
        }, 300);
    }, 3000);
}

// ========== MEJORAS DE VALIDACIÓN ==========

function enhanceValidations() {
    // Mejorar validación de email
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', validateEmailReal);
        input.addEventListener('input', clearEmailError);
    });
    
    // Mejorar validación de contraseñas
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        input.addEventListener('blur', validatePassword);
        input.addEventListener('input', clearPasswordError);
    });
    
    // Mejorar validación de nombres
    const nameInputs = document.querySelectorAll('input[type="text"]');
    nameInputs.forEach(input => {
        if (input.id.includes('name')) {
            input.addEventListener('blur', validateName);
            input.addEventListener('input', clearNameError);
        }
    });
}

function validateEmail(e) {
    const input = e.target;
    const errorElement = document.getElementById(input.id + '-error');
    const email = input.value.trim();
    
    if (!email) {
        showValidationError(input, errorElement, 'El correo electrónico es obligatorio');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showValidationError(input, errorElement, 'Ingresa un correo electrónico válido');
        return false;
    }
    
    clearValidationError(input, errorElement);
    return true;
}

function validatePassword(e) {
    const input = e.target;
    const errorElement = document.getElementById(input.id + '-error');
    const password = input.value;
    
    if (!password) {
        showValidationError(input, errorElement, 'La contraseña es obligatoria');
        return false;
    }
    
    if (password.length < 6) {
        showValidationError(input, errorElement, 'La contraseña debe tener al menos 6 caracteres');
        return false;
    }
    
    clearValidationError(input, errorElement);
    return true;
}

function validateName(e) {
    const input = e.target;
    const errorElement = document.getElementById(input.id + '-error');
    const name = input.value.trim();
    
    if (!name) {
        showValidationError(input, errorElement, 'Este campo es obligatorio');
        return false;
    }
    
    if (name.length < 2) {
        showValidationError(input, errorElement, 'El nombre debe tener al menos 2 caracteres');
        return false;
    }
    
    clearValidationError(input, errorElement);
    return true;
}

function showValidationError(input, errorElement, message) {
    input.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearValidationError(input, errorElement) {
    input.classList.remove('error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

function clearEmailError(e) {
    const input = e.target;
    const errorElement = document.getElementById(input.id + '-error');
    clearValidationError(input, errorElement);
}

function clearPasswordError(e) {
    const input = e.target;
    const errorElement = document.getElementById(input.id + '-error');
    clearValidationError(input, errorElement);
}

function clearNameError(e) {
    const input = e.target;
    const errorElement = document.getElementById(input.id + '-error');
    clearValidationError(input, errorElement);
}

function clearFormErrors() {
    document.querySelectorAll('.form-error').forEach(el => {
        el.textContent = '';
        el.classList.remove('show');
    });
    
    // Limpiar clases de error de los inputs
    document.querySelectorAll('.form-group input').forEach(input => {
        input.classList.remove('error');
    });
}

// ========== UTILIDADES ==========

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function saveCartToStorage() {
    localStorage.setItem('teslaLabCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('teslaLabCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function formatCategoryName(category) {
    const names = {
        'laptops': 'Laptops',
        'smartphones': 'Smartphones',
        'components': 'Componentes',
        'accessories': 'Accesorios',
        'gaming': 'Gaming'
    };
    return names[category] || category;
}

function formatBrandName(brand) {
    const names = {
        'apple': 'Apple',
        'samsung': 'Samsung',
        'asus': 'ASUS',
        'msi': 'MSI',
        'nvidia': 'NVIDIA',
        'razer': 'Razer'
    };
    return names[brand] || brand;
}

// ========== CONFIGURACIÓN DE EVENT LISTENERS ==========

function setupEventListeners() {
    // Carrito
    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartModal);
    checkoutBtn.addEventListener('click', proceedToCheckout);
    
    // Autenticación
    loginBtn.addEventListener('click', openAuthModal);
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
    });
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    
    // Búsqueda
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Modal de producto
    closeProductModal.addEventListener('click', closeProductDetail);
    
    // Filtros
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    
    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            closeAuthModal();
        }
        if (e.target === cartModal) {
            closeCartModal();
        }
        if (e.target === productModal) {
            closeProductDetail();
        }
    });

}
