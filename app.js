// Application State & Storage
const STORAGE_KEYS = {
  RESERVATIONS: 'baby_registry_reservations_v1'
};

// Initialize State
let products = [];
let reservations = {};

function initData() {
  const savedReservations = localStorage.getItem(STORAGE_KEYS.RESERVATIONS);
  reservations = savedReservations ? JSON.parse(savedReservations) : {};

  // Clone initial products and attach reservation states
  products = initialProducts.map(p => {
    const res = reservations[p.id];
    return {
      ...p,
      isReserved: !!res,
      reservedBy: res ? res.name : null,
      reservedDate: res ? res.date : null,
      reservedMessage: res ? res.message : null
    };
  });
}

function saveData() {
  localStorage.setItem(STORAGE_KEYS.RESERVATIONS, JSON.stringify(reservations));
}

// Render Products Grid (all 14 items visible directly)
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = products.map(item => {
    const isReserved = item.isReserved;
    const hasDiscount = item.oldPrice && item.oldPrice > item.price;
    
    // Star Rating HTML
    const fullStars = Math.floor(item.rating);
    const hasHalfStar = item.rating % 1 >= 0.3;
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsHtml += '<span class="text-amber-400">★</span>';
      } else if (i === fullStars && hasHalfStar) {
        starsHtml += '<span class="text-amber-400">★</span>';
      } else {
        starsHtml += '<span class="text-gray-300">★</span>';
      }
    }

    return `
      <div class="product-card ${isReserved ? 'is-reserved' : ''}" data-id="${item.id}">
        
        <!-- Image & Badges Wrap -->
        <div class="product-image-wrap">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="product-image"
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&auto=format&fit=crop&q=60';"
          >

          <!-- Top-Left Badges -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
            ${item.isFavorite ? `
              <span class="badge-favorite text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                ❤️ Coup de cœur
              </span>
            ` : ''}
            ${hasDiscount ? `
              <span class="bg-rose-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                Offre promo
              </span>
            ` : ''}
          </div>

          <!-- Top-Right Store Badge -->
          <div class="absolute top-3 right-3">
            <span class="badge-store">
              ${item.store}
            </span>
          </div>

          ${isReserved ? `
            <div class="absolute inset-0 bg-white/75 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
              <span class="text-3xl mb-1">🎁</span>
              <span class="text-sm font-extrabold text-baby-warmDark">Cadeau déjà réservé</span>
              <span class="text-xs text-baby-peachDark font-bold mt-0.5">Offert par ${escapeHtml(item.reservedBy || 'Un proche')}</span>
            </div>
          ` : ''}
        </div>

        <!-- Card Content Body -->
        <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <!-- Category & Brand -->
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="badge-category">
                ${item.categoryLabel}
              </span>
              <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">
                ${item.brand}
              </span>
            </div>

            <!-- Title -->
            <h3 class="font-bold text-base sm:text-lg text-baby-warmDark leading-snug line-clamp-2 hover:text-baby-peachDark transition">
              ${escapeHtml(item.title)}
            </h3>

            <!-- Rating -->
            <div class="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
              <div class="flex text-sm">${starsHtml}</div>
              <span class="font-bold text-gray-700">${item.rating.toFixed(1)}</span>
              <span>(${item.reviewsCount.toLocaleString('fr-FR')})</span>
            </div>

            <!-- Description -->
            <p class="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
              ${escapeHtml(item.description)}
            </p>
          </div>

          <!-- Price & CTA Section -->
          <div class="mt-5 pt-4 border-t border-gray-100">
            <div class="flex items-baseline justify-between mb-4">
              <div>
                <span class="text-2xl font-extrabold text-baby-warmDark">${item.price.toFixed(2).replace('.', ',')} €</span>
                ${hasDiscount ? `
                  <span class="text-xs text-gray-400 line-through ml-1.5">${item.oldPrice.toFixed(2).replace('.', ',')} €</span>
                ` : ''}
              </div>
              <span class="text-xs font-semibold text-gray-500">${item.unitPrice || ''}</span>
            </div>

            <!-- Buttons -->
            <div class="flex flex-col gap-2">
              ${!isReserved ? `
                <button 
                  onclick="openReserveModal('${item.id}')" 
                  class="btn-primary w-full py-2.5 text-sm"
                >
                  <i data-lucide="gift" class="w-4 h-4"></i>
                  Offrir ce cadeau
                </button>
                <a 
                  href="${item.storeUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-store justify-center py-2 text-xs"
                >
                  <span>Voir sur ${item.store}</span>
                  <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </a>
              ` : `
                <div class="flex items-center justify-between gap-2">
                  <a 
                    href="${item.storeUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn-store flex-1 justify-center py-2 text-xs"
                  >
                    <span>Voir sur ${item.store}</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                  </a>
                  <button 
                    onclick="cancelReservation('${item.id}')" 
                    title="Annuler la réservation" 
                    class="p-2 text-gray-400 hover:text-rose-500 rounded-full hover:bg-rose-50 transition text-xs flex items-center justify-center border border-gray-200"
                  >
                    <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                  </button>
                </div>
              `}
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');

  // Refresh Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Open Reserve Modal
window.openReserveModal = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('modalProductId').value = product.id;
  document.getElementById('modalProductTitle').textContent = product.title;
  document.getElementById('modalProductCategory').textContent = product.categoryLabel;
  document.getElementById('modalProductPrice').textContent = `${product.price.toFixed(2).replace('.', ',')} €`;
  document.getElementById('modalProductStore').textContent = product.store;
  document.getElementById('modalProductImg').src = product.image;
  
  // Store direct links
  const buyBtn = document.getElementById('modalBuyBtn');
  buyBtn.href = product.storeUrl;
  buyBtn.innerHTML = `<i data-lucide="shopping-bag" class="w-4 h-4"></i> Acheter sur ${product.store}`;

  const directLink = document.getElementById('modalDirectStoreLink');
  directLink.href = product.storeUrl;

  // Reset form inputs
  document.getElementById('reserveName').value = '';
  document.getElementById('reserveEmail').value = '';
  document.getElementById('reserveMessage').value = '';

  const modal = document.getElementById('reserveModal');
  modal.classList.add('active');

  if (window.lucide) lucide.createIcons();
};

// Cancel a reservation
window.cancelReservation = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (confirm(`Souhaitez-vous annuler la réservation pour "${product.title}" ?`)) {
    delete reservations[productId];
    saveData();
    initData();
    renderProducts();
    showToast('Réservation annulée. L\'article est de nouveau disponible !', '🔄');
  }
};

// Handle Reservation Form Submit
document.getElementById('reserveForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const productId = document.getElementById('modalProductId').value;
  const name = document.getElementById('reserveName').value.trim();
  const email = document.getElementById('reserveEmail').value.trim();
  const message = document.getElementById('reserveMessage').value.trim();

  const product = products.find(p => p.id === productId);
  if (!product || !name) return;

  const now = new Date();
  const dateFormatted = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });

  reservations[productId] = {
    name,
    email,
    message,
    date: dateFormatted
  };

  saveData();
  initData();
  renderProducts();

  // Close modal
  document.getElementById('reserveModal').classList.remove('active');

  // Trigger celebration confetti
  triggerConfetti();

  showToast(`Merci mille fois ${name} pour votre cadeau ! ❤️`, '🎉');
});

// Close modals
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
  });
});

document.querySelectorAll('.modal-backdrop').forEach(modal => {
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });
});

// Confetti animation
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f28b82', '#7ba892', '#e8a87c', '#ffd166', '#ff9f1c']
    });
  }
}

// Toast helper
function showToast(message, icon = '✨') {
  const toast = document.getElementById('toast');
  document.getElementById('toastIcon').textContent = icon;
  document.getElementById('toastMessage').textContent = message;

  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 3500);
}

// Helper: escape HTML strings
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderProducts();
});
