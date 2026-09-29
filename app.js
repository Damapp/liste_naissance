// Products List Fallback & State
const defaultProducts = (typeof initialProducts !== 'undefined' && Array.isArray(initialProducts)) ? initialProducts : [
  {
    id: "livre-contraste-noir-blanc",
    title: "Noir et Blanc : Livre Contraste Bébé – Stimulation Visuelle & Éveil (0 à 12 Mois)",
    brand: "Livre d'éveil",
    category: "eveil",
    categoryLabel: "Éveil & Jouets",
    price: 5.26,
    oldPrice: null,
    unitPrice: "5,26 € (+ 2,50 € livraison)",
    rating: 4.8,
    reviewsCount: 340,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/Noir-Blanc-Livre-Contraste-B%C3%A9b%C3%A9/dp/B0BLG1F4MN/ref=mp_s_a_1_3?crid=32R69Y1PDZPAB&dib=eyJ2IjoiMSJ9.HWNzRjE_TzyWirgP6iC78MVr-mY2d6XGsP1fnJYal9GsTlIEYqqU53T1pYcW7mxSNLTrC87LO2dZdmiUPhfC3wdtpRfY9MMx9fmNLMTZlj1h7jH2LeAAuILUUqD2YeeNNAE_djY2xKcu61tBYgoxoReoCzXsL7prKrKY7qG-jGR0EELX16s1b0fr-Ieui5UWmp86NkGhpS2Wf9sicxV9vA.jMJfxyv_GT7_KL8sZmnhVUmF9tex_lTopNwyObXmgww&dib_tag=se&keywords=livre+contraste+bebe&qid=1790348005&sprefix=livre+contraste+bebe%2Caps%2C108&sr=8-3",
    image: "images/livre-contraste-noir-blanc.png",
    description: "Images et objets en noir et blanc à contraste élevé spécialement conçus pour stimuler le développement visuel et sensoriel des nouveau-nés dès les premiers jours.",
    isFavorite: false
  },
  {
    id: "vicloon-livre-sensoriel",
    title: "Vicloon Livre Sensoriel Souple & Miroir d'Éveil Double Face (Océan & Fruits)",
    brand: "Vicloon",
    category: "eveil",
    categoryLabel: "Éveil & Jouets",
    price: 8.49,
    oldPrice: null,
    unitPrice: "8,49 €",
    rating: 4.4,
    reviewsCount: 5740,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/Vicloon-Montessori-Sensoriel-Favorise-D%C3%A9veloppement/dp/B0FH2RJDGD/ref=mp_s_a_1_8?crid=32R69Y1PDZPAB&dib=eyJ2IjoiMSJ9.HWNzRjE_TzyWirgP6iC78MVr-mY2d6XGsP1fnJYal9GsTlIEYqqU53T1pYcW7mxSNLTrC87LO2dZdmiUPhfC3wdtpRfY9MMx9fmNLMTZlj1h7jH2LeAAuILUUqD2YeeNNAE_djY2xKcu61tBYgoxoReoCzXsL7prKrKY7qG-jGR0EELX16s1b0fr-Ieui5UWmp86NkGhpS2Wf9sicxV9vA.jMJfxyv_GT7_KL8sZmnhVUmF9tex_lTopNwyObXmgww&dib_tag=se&keywords=livre+contraste+bebe&qid=1790348005&sprefix=livre+contraste+bebe%2Caps%2C108&sr=8-8&th=1",
    image: "images/vicloon-livre-sensoriel.png",
    description: "Livre accordéon d'inspiration Montessori double face avec 12 motifs contrastés et miroir d'éveil incassable. Pliable, réutilisable et lavable.",
    isFavorite: false
  },
  {
    id: "lionelo-pari-cododo",
    title: "Lionelo Pari Lit Cododo Bébé 3 en 1 avec Fonction Berceuse & Balancement (Beige)",
    brand: "Lionelo",
    category: "chambre",
    categoryLabel: "Chambre & Sommeil",
    price: 84.99,
    oldPrice: null,
    unitPrice: "84,99 €",
    rating: 4.6,
    reviewsCount: 138,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/Lionelo-Cododo-Berceau-Fonction-Berceuse/dp/B0GQ53PZSR/ref=sr_1_5?crid=3E8Y1D9APX1OG&dib=eyJ2IjoiMSJ9.W0y7BI51FBMyopiZP5s_eVg459SukTEVhwoIs-4wLkQ8ZNOkMqXSFf5LvAdir3m9fYX52DsDhY_qrStPQ0qOrQcPI3MOfIjR1QA3sKab-VyqWCwnydozqhhhit21LlsvvajQvriLjUXqCQ1eX_vGcmxgr4kWNTHycQ6Qg-L0ybemicnkfJ638iL445gHWRc2ps6Gpn4NggWDlyed4bkIc0QvIiGvv47mzKXz9ZgukTmjcbPNAtgymS2uE2TH-KeALpEH0z5miF31rFKGNgPbYSMkxarGtfqLNYVbDLjYit8.GaEKlUolm2ZmptT6iHcYNkaunfaALmtG2wTVIydN8nY&dib_tag=se&keywords=cododo%2Bbeige&qid=1790349063&sprefix=cododo%2Bbeig%2Caps%2C120&sr=8-5&th=1",
    image: "images/lionelo-pari-cododo.png",
    description: "Berceau cododo réglable en hauteur sur 6 niveaux, inclinable pour soulager le reflux, avec parois en maille respirante, fonction berceuse et roulettes avec frein.",
    isFavorite: true
  },
  {
    id: "nuby-anneau-dentition",
    title: "Nuby Teethe-eez Anneau de Dentition Souple en Silicone avec Étui (+3 Mois)",
    brand: "Nuby",
    category: "soins",
    categoryLabel: "Éveil & Soins",
    price: 6.99,
    oldPrice: null,
    unitPrice: "6,99 € (étui inclus)",
    rating: 4.7,
    reviewsCount: 18250,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/Nuby-Teethe-eez-dentition-hygi%C3%A9nique-Turquoise/dp/B00IN8OJU8/ref=mp_s_a_1_11?crid=1QFTI7A6U3GID&dib=eyJ2IjoiMSJ9.Ut-dvLIsD5yDCbQBB7iJAv9ZcLUEWSLAUA2xgYwnBR12GjWDbZgYdUPaKYBdJx8dJd8KzDnwNTZeNBl9h4J4yojvq6xbzk2dqABAdtMJs893lg3lJ8rSIb9k_4QKpkIB-V5WF7e3gzQ7QNV0Xy-LvC_ArxfauOZaSMbtQwbhrB6C2nicPZUUy7hm1CCmKafS0g1jfRN7QWCKHRUjomj03w.MNFqhSVhNFLwsnD7cWjiStlKP9NICnth6J9WKn6NYpw&dib_tag=se&keywords=anneau%2Bde%2Bdentition%2Bbebe&qid=1790347351&sprefix=anneau%2Bde%2Bdentition%2Bbebe%2Caps%2C237&sr=8-11&th=1",
    image: "images/nuby-anneau-dentition.png",
    description: "Anneau de dentition 100% silicone souple avec surface massante pour soulager les gencives lors des poussées dentaires. Fourni avec son étui hygiénique de protection.",
    isFavorite: false
  },
  {
    id: "angelcare-transat-bain",
    title: "Angelcare - Transat de Bain Ergonomique et Sécurisant (0 à 6 Mois - Bleu)",
    brand: "Angelcare",
    category: "bain",
    categoryLabel: "Bain & Toilette",
    price: 28.50,
    oldPrice: null,
    unitPrice: "28,50 €",
    rating: 4.8,
    reviewsCount: 10796,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/dp/B00AWMV9CY/?coliid=I3H7NUNGB8MG0N&colid=1JQM0H93GL2H&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    image: "images/angelcare-transat.png",
    description: "Support de bain tout doux en matière perforée hygiénique et anti-moisissures. Épouse la morphologie de bébé pour des bains sereins et sécurisés en toute liberté.",
    isFavorite: false
  },
  {
    id: "lionelo-poubelle-couches",
    title: "LIONELO Purebin Poubelle à Couches Anti-Odeur 10L avec Sacs Universels",
    brand: "Lionelo",
    category: "chambre",
    categoryLabel: "Chambre & Sommeil",
    price: 38.05,
    oldPrice: null,
    unitPrice: "38,05 €",
    rating: 4.2,
    reviewsCount: 108,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/dp/B0G49829M2/?coliid=I2ODNN2XDYQJZE&colid=1JQM0H93GL2H&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    image: "images/lionelo-poubelle.png",
    description: "Système de fermeture hermétique breveté bloquant 100% des mauvaises odeurs. Fonctionne avec des sacs poubelle standards (sans recharges coûteuses) et s'ouvre facilement d'une seule main.",
    isFavorite: true
  },
  {
    id: "molylove-brosse-bois",
    title: "Molylove Brosse Bébé en Bois Naturel & Poils de Chèvre Extra-Doux",
    brand: "Molylove",
    category: "soins",
    categoryLabel: "Soins & Hygiène",
    price: 8.99,
    oldPrice: null,
    unitPrice: "8,99 €",
    rating: 4.6,
    reviewsCount: 13983,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/dp/B07XPS253G/?coliid=I1L65FVYF6MXQ5&colid=1JQM0H93GL2H&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    image: "images/molylove-brosse.png",
    description: "Manche en bois noble et soies naturelles de chèvre d'une douceur absolue. Idéal pour coiffer bébé avec délicatesse et prévenir les croûtes de lait sans irriter le cuir chevelu.",
    isFavorite: false
  },
  {
    id: "mam-sucette-nuit",
    title: "MAM | Sucette Perfect Nuit 2-6 mois (Lot de 2 pièces)",
    brand: "MAM",
    category: "repas",
    categoryLabel: "Repas & Sucettes",
    price: 12.50,
    oldPrice: 13.90,
    unitPrice: "6,25 € / pièce",
    rating: 4.6,
    reviewsCount: 42,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/dp/B0CNY4GWG1/?coliid=I1AS9GJFOQBZME&colid=1JQM0H93GL2H&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    image: "images/mam-sucette-nuit.png",
    description: "Tétines en silicone ultra-doux phosphorescentes qui brillent dans le noir pour les retrouver facilement la nuit. Conçues pour un développement bucco-dentaire optimal.",
    isFavorite: false
  },
  {
    id: "support-babyphone-clip",
    title: "Support Universel à Clip pour Caméra Bébé & Babyphone (Baaletc)",
    brand: "Baaletc",
    category: "chambre",
    categoryLabel: "Chambre & Sommeil",
    price: 15.99,
    oldPrice: null,
    unitPrice: "15,99 €",
    rating: 4.6,
    reviewsCount: 214,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/Support-universel-babyphone-compatible-Hellobaby/dp/B0F8QSL3H1/ref=mp_s_a_1_2?crid=12BPRXP9K72GB&dib=eyJ2IjoiMSJ9.CQhhg18Ol-ya1dBpqN87L5jwy7j8mONpfj3J0hUT98clBU3k3ghPr5aA-k__Fh7hFrCe6jH-_z58nxN-ILkM3xS5VkxOMaNWQwVrpP5xHTjXKM9wJsHpL9cuuVPqo9u_xtumb9IKKRs4DOdyqQTYBH54VQjYNYvU2emHPHooZHnhQVdhQOd4JdyhKwnOz-P3vGCqCaHHAJjFu2gxeMVGVA.PJoaEqrUl6ShBvRezB6HqFZkrLwFSSaWApGUCCV89DU&dib_tag=se&keywords=support%2Buniversel%2Bbabyphone&qid=1786204352&sprefix=support%2Buni%2Caps%2C126&sr=8-2&th=1",
    image: "images/support-babyphone-clip.png",
    description: "Support flexible et robuste avec fixation à clip solide pour fixer facilement la caméra du babyphone au berceau, lit à barreaux ou étagère sans perçage.",
    isFavorite: false
  },
  {
    id: "babynova-aspirateur",
    title: "babynova Aspirateur Nasal avec Deux Embouts pour Bébés et Tout-Petits",
    brand: "BABY-NOVA",
    category: "soins",
    categoryLabel: "Soins & Hygiène",
    price: 7.90,
    oldPrice: null,
    unitPrice: "7,90 € / unité",
    rating: 3.6,
    reviewsCount: 70,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/dp/B0GTM7DT76/?coliid=I11WOJW8VGA696&colid=1JQM0H93GL2H&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    image: "images/babynova-aspirateur.png",
    description: "Aspirateur nasal manuel avec deux embouts doux en silicone sans BPA. Permet un retrait doux et efficace du mucus nasal pour aider bébé à mieux respirer.",
    isFavorite: false
  },
  {
    id: "braun-mouche-bebe",
    title: "Braun Mouche-bébé 1 Électrique BNA100 (2 vitesses & 2 embouts)",
    brand: "Braun",
    category: "soins",
    categoryLabel: "Soins & Hygiène",
    price: 28.27,
    oldPrice: null,
    unitPrice: "28,27 €",
    rating: 3.7,
    reviewsCount: 10537,
    store: "Amazon.com.be",
    storeUrl: "https://www.amazon.com.be/dp/B07LD5NYWF/?coliid=I3JT2C78MVJ5AC&colid=1JQM0H93GL2H&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    image: "images/braun-mouche-bebe.png",
    description: "Débouche le nez rapidement et en douceur grâce à une aspiration électrique continue et silencieuse. Livré avec 2 tailles d'embouts souples lavables au lave-vaisselle.",
    isFavorite: false
  }
];

let products = [];

function initData() {
  if (typeof initialProducts !== 'undefined' && Array.isArray(initialProducts) && initialProducts.length > 0) {
    products = [...initialProducts];
  } else {
    products = [...defaultProducts];
  }
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (!products || products.length === 0) {
    initData();
  }

  grid.innerHTML = products.map(item => {
    const hasDiscount = item.oldPrice && item.oldPrice > item.price;
    
    // Star Rating HTML
    const fullStars = Math.floor(item.rating || 5);
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsHtml += '<span class="text-amber-400">★</span>';
      } else {
        starsHtml += '<span class="text-gray-300">★</span>';
      }
    }

    const reviewsCountFormatted = item.reviewsCount ? Number(item.reviewsCount).toLocaleString('fr-FR') : '';

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
                ${item.categoryLabel || 'Indispensable'}
              </span>
              <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">
                ${item.brand || ''}
              </span>
            </div>

            <!-- Title -->
            <h3 class="font-bold text-base sm:text-lg text-baby-warmDark leading-snug line-clamp-2 hover:text-baby-peachDark transition">
              ${escapeHtml(item.title)}
            </h3>

            <!-- Rating -->
            <div class="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
              <div class="flex text-sm">${starsHtml}</div>
              <span class="font-bold text-gray-700">${Number(item.rating || 5).toFixed(1)}</span>
              ${reviewsCountFormatted ? `<span>(${reviewsCountFormatted})</span>` : ''}
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
                <span class="text-2xl font-extrabold text-baby-warmDark">${Number(item.price).toFixed(2).replace('.', ',')} €</span>
                ${hasDiscount ? `
                  <span class="text-xs text-gray-400 line-through ml-1.5">${Number(item.oldPrice).toFixed(2).replace('.', ',')} €</span>
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
              <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>

        </div>
      </div>
    `;
  }).join('');

  // Safe Lucide icon call if available
  if (typeof window !== 'undefined' && window.lucide && typeof window.lucide.createIcons === 'function') {
    try {
      window.lucide.createIcons();
    } catch (e) {}
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

// Immediate + DOMContentLoaded execution
initData();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderProducts);
} else {
  renderProducts();
}
window.addEventListener('load', renderProducts);
