// Datos de respaldo
const backupProducts = [
    {
        id: 1,
        name: "Gojo Peluche",
        description: "El mas acolchonado de la actualidad.",
        detailedDescription: "Solo tenias que spammear el purpura Gojo porque :(",
        price: 1899.99,
        category: "laptops",
        brand: "asus",
        image: "gojo-peluche.jpg",
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
        image: "iphone-15-pro.jpg",
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
        detailedDescription: "La NVIDIA GeForce RTX 4090 es la GPU más avanzada del mundo, diseñada para jugadores y creadores. Con la arquitectura NVIDIA Ada Lovelace, ofrece un salto monumental en rendimiento y eficiencia con trazado de rayos y IA. Experimenta juegos con gráficos ultrarealistas y un rendimiento increíblemente rápido.",
        price: 1599.99,
        category: "components",
        brand: "nvidia",
        image: "rtx-4090.jpg",
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
        image: "samsung-s24-ultra.jpg",
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
        image: "msi-katana.jpg",
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
        image: "teclado-razer.jpg",
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
        image: "monitor-gaming.jpg",
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
        image: "macbook-air.jpg",
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

const backupNews = [
    {
        id: 1,
        title: "Espaiderman se electrucuta",
        content: "No espaiderman, no te tocaba :(",
        image: "espaiderman.jpg"
    },
    {
        id: 2,
        title: "Apple revela iOS 18 con inteligencia artificial integrada",
        content: "El nuevo sistema operativo de Apple incluye funciones de IA avanzadas que transformarán la forma en que interactuamos con nuestros dispositivos. Siri se ha rediseñado por completo con capacidades de lenguaje natural mejoradas.",
        image: "ios-18.jpg"
    },
    {
        id: 3,
        title: "Los procesadores Quantum marcan un antes y después",
        content: "La nueva arquitectura de procesadores promete revolucionar el mundo de la computación con velocidades nunca antes vistas. Empresas como Intel y AMD ya han anunciado sus primeras líneas de productos basados en esta tecnología.",
        image: "quantum-processors.jpg"
    }
];

// Estado de la aplicación para la página principal
let products = [];
let news = [];
let cart = [];
let currentUser = null;
let currentCarouselIndex = 0;
let carouselInterval;

// Elementos del DOM específicos de la página principal
const featuredProductsContainer = document.getElementById('featured-products');
const additionalProductsContainer = document.getElementById('additional-products');
const carouselInner = document.getElementById('carousel-inner');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
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

// ========== FUNCIONES PARA MANEJO DE IMÁGENES ==========

/**
 * Obtiene la ruta correcta para una imagen
 */
function getImagePath(imageName, fallbackText) {
    if (!imageName) {
        return `https://via.placeholder.com/300x200/393E46/EAEAEA?text=${encodeURIComponent(fallbackText)}`;
    }
    
    // Sistema simple: usar la ruta tal cual
    return imageName;
}

/**
 * Maneja el error de carga de imagen mostrando un placeholder
 */
function handleImageError(imgElement, fallbackText) {
    console.warn(`No se pudo cargar la imagen: ${imgElement.src}`);
    imgElement.src = `https://via.placeholder.com/300x200/393E46/EAEAEA?text=${encodeURIComponent(fallbackText)}`;
    imgElement.alt = `Imagen no disponible: ${fallbackText}`;
    imgElement.style.backgroundColor = '#393E46';
}

// ========== INICIALIZACIÓN ==========

document.addEventListener('DOMContentLoaded', function() {
    loadData();
    setupEventListeners();
    loadCartFromStorage();
    updateCartUI();
});

// Cargar datos
async function loadData() {
    showLoading(true);
    
    try {
        const response = await fetch('data.json');
        
        if (response.ok) {
            const data = await response.json();
            products = data.products || backupProducts;
            news = data.news || backupNews;
        } else {
            throw new Error('Error al cargar datos JSON');
        }
    } catch (error) {
        console.warn('Error cargando datos JSON, usando datos de respaldo:', error);
        products = backupProducts;
        news = backupNews;
    }
    
    renderFeaturedProducts();
    renderAdditionalProducts();
    renderNewsCarousel();
    startCarouselAutoPlay();
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

// ========== RENDERIZADO DE PRODUCTOS ==========

// Renderizar productos destacados
function renderFeaturedProducts() {
    const featuredProducts = products.filter(product => product.featured);
    featuredProductsContainer.innerHTML = '';
    
    if (featuredProducts.length === 0) {
        featuredProductsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem;">No hay productos destacados disponibles.</p>';
        return;
    }
    
    featuredProducts.forEach(product => {
        const productElement = createProductElement(product);
        featuredProductsContainer.appendChild(productElement);
    });
}

// Renderizar productos adicionales (no destacados)
function renderAdditionalProducts() {
    const additionalProducts = products.filter(product => !product.featured).slice(0, 4);
    additionalProductsContainer.innerHTML = '';
    
    if (additionalProducts.length === 0) {
        additionalProductsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem;">No hay productos adicionales disponibles.</p>';
        return;
    }
    
    additionalProducts.forEach(product => {
        const productElement = createProductElement(product);
        additionalProductsContainer.appendChild(productElement);
    });
}

// Crear elemento de producto
function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-card';
    
    const imagePath = getImagePath(product.image, product.name);
    
    productDiv.innerHTML = `
        <img src="${imagePath}" alt="${product.name}" class="product-image" 
             onerror="handleImageError(this, '${product.name.replace(/'/g, "\\'")}')">
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

// ========== NOTICIAS Y CARRUSEL ==========

// Renderizar carousel de noticias
function renderNewsCarousel() {
    carouselInner.innerHTML = '';
    
    news.forEach((item, index) => {
        const newsImagePath = getImagePath(item.image, item.title);
        const newsItem = document.createElement('div');
        newsItem.className = 'carousel-item';
        newsItem.style.transform = `translateX(${index * 100}%)`;
        newsItem.innerHTML = `
            <img src="${newsImagePath}" alt="${item.title}" 
                 style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;"
                 onerror="handleImageError(this, '${item.title.replace(/'/g, "\\'")}')">
            <h3 class="news-title">${item.title}</h3>
            <p class="news-content">${item.content}</p>
        `;
        
        carouselInner.appendChild(newsItem);
    });
}

// Navegación del carousel de noticias
function showPrevNews() {
    const items = document.querySelectorAll('.carousel-item');
    currentCarouselIndex = (currentCarouselIndex - 1 + items.length) % items.length;
    updateCarouselPosition();
    resetCarouselInterval();
}

function showNextNews() {
    const items = document.querySelectorAll('.carousel-item');
    currentCarouselIndex = (currentCarouselIndex + 1) % items.length;
    updateCarouselPosition();
    resetCarouselInterval();
}

function updateCarouselPosition() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentCarouselIndex) * 100}%)`;
    });
}

function startCarouselAutoPlay() {
    carouselInterval = setInterval(showNextNews, 5000);
}

function pauseCarousel() {
    clearInterval(carouselInterval);
}

function resetCarouselInterval() {
    pauseCarousel();
    startCarouselAutoPlay();
}

// ========== CARRITO DE COMPRAS ==========

// Funcionalidad del carrito
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
            image: product.image,
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
        
        const imagePath = getImagePath(item.image, item.name);
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${imagePath}" alt="${item.name}" class="cart-item-image"
                 onerror="handleImageError(this, '${item.name.replace(/'/g, "\\'")}')">
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

// Autenticación
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
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    let isValid = true;
    
    // Validaciones
    if (!email) {
        showFormError('login-email-error', 'El correo electrónico es obligatorio');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFormError('login-email-error', 'Ingresa un correo electrónico válido');
        isValid = false;
    }
    
    if (!password) {
        showFormError('login-password-error', 'La contraseña es obligatoria');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Simular inicio de sesión
    currentUser = {
        name: 'Usuario Demo',
        email: email
    };
    
    showSuccessMessage('¡Inicio de sesión exitoso!');
    loginBtn.textContent = currentUser.name;
    closeAuthModal();
}

function handleRegister(e) {
    e.preventDefault();
    clearFormErrors();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    let isValid = true;
    
    // Validaciones
    if (!name) {
        showFormError('register-name-error', 'El nombre es obligatorio');
        isValid = false;
    }
    
    if (!email) {
        showFormError('register-email-error', 'El correo electrónico es obligatorio');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFormError('register-email-error', 'Ingresa un correo electrónico válido');
        isValid = false;
    }
    
    if (!password) {
        showFormError('register-password-error', 'La contraseña es obligatoria');
        isValid = false;
    } else if (password.length < 6) {
        showFormError('register-password-error', 'La contraseña debe tener al menos 6 caracteres');
        isValid = false;
    }
    
    if (!confirm) {
        showFormError('register-confirm-error', 'Confirma tu contraseña');
        isValid = false;
    } else if (password !== confirm) {
        showFormError('register-confirm-error', 'Las contraseñas no coinciden');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Simular registro
    currentUser = {
        name: name,
        email: email
    };
    
    showSuccessMessage('¡Registro exitoso! Bienvenido a Laboratorio de Tesla');
    loginBtn.textContent = currentUser.name;
    closeAuthModal();
}

// ========== DETALLE DE PRODUCTO ==========

// Abrir detalle del producto
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const imagePath = getImagePath(product.image, product.name);
    
    productDetail.innerHTML = `
        <div class="product-detail-container">
            <div class="product-detail-main">
                <img src="${imagePath}" alt="${product.name}" class="product-detail-image"
                     onerror="handleImageError(this, '${product.name.replace(/'/g, "\\'")}')">
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

// Cerrar detalle del producto
function closeProductDetail() {
    productModal.classList.remove('open');
}

// ========== BÚSQUEDA ==========

// Búsqueda
function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        return;
    }
    
    // Redirigir al catálogo con la búsqueda
    window.location.href = `catalogo.html?search=${encodeURIComponent(query)}`;
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

// ========== UTILIDADES ==========

// Utilidades
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearFormErrors() {
    document.querySelectorAll('.form-error').forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
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
    
    // Carousel de noticias
    prevBtn.addEventListener('click', showPrevNews);
    nextBtn.addEventListener('click', showNextNews);
    
    // Búsqueda
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Modal de producto
    closeProductModal.addEventListener('click', closeProductDetail);
    
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
    
    // Pausar carousel al hacer hover
    carouselInner.addEventListener('mouseenter', pauseCarousel);
    carouselInner.addEventListener('mouseleave', startCarouselAutoPlay);
}