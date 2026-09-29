// Initialize State
let products = [];

function initData() {
  products = [...initialProducts];
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = products.map(item => {
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
      <div class="product-card" data-id="${item.id}">
        
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

            <!-- Single Store Link Button -->
            <a 
              href="${item.storeUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-primary w-full py-2.5 text-sm"
            >
              <span>Voir sur ${item.store}</span>
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
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
