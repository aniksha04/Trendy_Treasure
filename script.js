/* ==========================================================================
   TRENDY TREASURE — VANILLA JAVASCRIPT APPLICATION
   ==========================================================================
   HOW TO ADD YOUR REAL AMAZON AFFILIATE LINKS:
   1. Locate the PRODUCTS array below.
   2. Replace each placeholder `affiliateUrl` with your actual Amazon Associates
      link (e.g., "https://www.amazon.com/dp/YOUR_ASIN?tag=yourtag-20").
   3. Only set `priceVerified: true` and provide a `price` string when you have
      directly verified the current listing price on Amazon. Otherwise keep
      `priceVerified: false` and `price: null` so visitors are guided to check
      the live price on Amazon.
   ========================================================================== */

'use strict';

/**
 * Six Core Product Categories
 */
const CATEGORIES = [
  {
    id: 'Fashion and Accessories',
    label: 'Fashion & Accessories',
    iconSvg:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h12l1.5 13H4.5L6 7z"></path><path d="M9 7a3 3 0 0 1 6 0"></path></svg>',
  },
  {
    id: 'Beauty and Skincare',
    label: 'Beauty & Skincare',
    iconSvg:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h6v4H9z"></path><path d="M7 7h10l1 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L7 7z"></path></svg>',
  },
  {
    id: 'Home Decor',
    label: 'Home Decor',
    iconSvg:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10l2 7H5l2-7z"></path><path d="M12 11v6"></path></svg>',
  },
  {
    id: 'Electronics and Gadgets',
    label: 'Electronics & Gadgets',
    iconSvg:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 14a9 9 0 0 1 18 0"></path><rect x="2" y="14" width="4" height="6" rx="1.5"></rect><rect x="18" y="14" width="4" height="6" rx="1.5"></rect></svg>',
  },
  {
    id: 'Stationery',
    label: 'Stationery',
    iconSvg:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
  },
  {
    id: 'Lifestyle Products',
    label: 'Lifestyle Products',
    iconSvg:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path></svg>',
  },
];

/**
 * Sample Product Catalog
 * IMPORTANT: Replace every placeholder `affiliateUrl` below with your own
 * verified Amazon Associates URL before publishing.
 */
const PRODUCTS = [
  {
    id: 'tt-fashion-01',
    name: 'Structured Camel Leather Work Tote',
    category: 'Fashion and Accessories',
    description:
      'Full-grain pebble leather tote with brushed champagne-gold hardware and padded laptop sleeve.',
    image: './assets/images/product-fashion-tote.jpg',
    priceVerified: true,
    price: '$148.00',
    isFeatured: true,
    isTrending: true,
    isDeal: false,
    affiliateUrl: 'https://www.amazon.com/dp/PLACEHOLDER_ASIN_01?tag=YOUR-ASSOCIATE-TAG-20',
  },
  {
    id: 'tt-beauty-01',
    name: 'Botanical Amber Facial Oil & Ceramide Duo',
    category: 'Beauty and Skincare',
    description:
      'Cold-pressed rosehip botanical serum paired with a barrier-restoring ceramide night cream.',
    image: './assets/images/product-beauty-serum.jpg',
    priceVerified: false,
    price: null,
    isFeatured: true,
    isTrending: true,
    isDeal: false,
    affiliateUrl: 'https://www.amazon.com/dp/PLACEHOLDER_ASIN_02?tag=YOUR-ASSOCIATE-TAG-20',
  },
  {
    id: 'tt-home-01',
    name: 'Sculptural Cream Vase & Brushed Brass Taper',
    category: 'Home Decor',
    description:
      'Hand-finished matte stoneware vase paired with a solid brushed brass candle holder.',
    image: './assets/images/product-home-vase.jpg',
    priceVerified: true,
    price: '$64.00',
    isFeatured: true,
    isTrending: false,
    isDeal: true,
    affiliateUrl: 'https://www.amazon.com/dp/PLACEHOLDER_ASIN_03?tag=YOUR-ASSOCIATE-TAG-20',
  },
  {
    id: 'tt-tech-01',
    name: 'Studio ANC Wireless Over-Ear Headphones',
    category: 'Electronics and Gadgets',
    description:
      'Adaptive noise-cancelling acoustic drivers wrapped in charcoal leatherette and champagne trim.',
    image: './assets/images/product-tech-headphones.jpg',
    priceVerified: false,
    price: null,
    isFeatured: true,
    isTrending: true,
    isDeal: false,
    affiliateUrl: 'https://www.amazon.com/dp/PLACEHOLDER_ASIN_04?tag=YOUR-ASSOCIATE-TAG-20',
  },
  {
    id: 'tt-stationery-01',
    name: 'Linen Hardcover Journal & Brass Fountain Pen',
    category: 'Stationery',
    description:
      'Archival 120gsm cream laid paper notebook paired with a balanced matte-black fountain pen.',
    image: './assets/images/product-stationery-journal.jpg',
    priceVerified: true,
    price: '$42.00',
    isFeatured: true,
    isTrending: false,
    isDeal: true,
    affiliateUrl: 'https://www.amazon.com/dp/PLACEHOLDER_ASIN_05?tag=YOUR-ASSOCIATE-TAG-20',
  },
  {
    id: 'tt-lifestyle-01',
    name: 'Matte Charcoal Pour-Over Kettle & Ceramic Mug',
    category: 'Lifestyle Products',
    description:
      'Precision gooseneck stainless kettle with walnut grip and stoneware morning cup.',
    image: './assets/images/product-lifestyle-carafe.jpg',
    priceVerified: false,
    price: null,
    isFeatured: true,
    isTrending: false,
    isDeal: true,
    affiliateUrl: 'https://www.amazon.com/dp/PLACEHOLDER_ASIN_06?tag=YOUR-ASSOCIATE-TAG-20',
  },
  {
    id: 'tt-fashion-02',
    name: 'Champagne Gold Minimalist Leather Dress Watch',
    category: 'Fashion and Accessories',
    description:
      'Sapphire crystal timepiece with matte charcoal dial and supple espresso calfskin strap.',
    image: './assets/images/product-fashion-watch.jpg',
    priceVerified: true,
    price: '$185.00',
    isFeatured: false,
    isTrending: true,
    isDeal: false,
    affiliateUrl: 'https://www.amazon.com/dp/PLACEHOLDER_ASIN_07?tag=YOUR-ASSOCIATE-TAG-20',
  },
  {
    id: 'tt-home-02',
    name: 'Cordless Brushed Brass Ambient Table Lamp',
    category: 'Home Decor',
    description:
      'Rechargeable three-stage dimmable brass dome lamp for desks, bookshelves, and bedside tables.',
    image: './assets/images/product-home-lamp.jpg',
    priceVerified: true,
    price: '$78.00',
    isFeatured: false,
    isTrending: true,
    isDeal: true,
    affiliateUrl: 'https://www.amazon.com/dp/PLACEHOLDER_ASIN_08?tag=YOUR-ASSOCIATE-TAG-20',
  },
];

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
const state = {
  selectedCategory: 'All',
  selectedScope: 'all', // 'all' | 'featured' | 'trending' | 'deal'
  searchQuery: '',
};

/* ==========================================================================
   DOM REFERENCES
   ========================================================================== */
const dom = {
  categoryCardsGrid: document.getElementById('category-cards-grid'),
  categoryTabs: document.getElementById('category-tabs'),
  catalogGrid: document.getElementById('catalog-grid'),
  trendingGrid: document.getElementById('trending-grid'),
  dealsGrid: document.getElementById('deals-grid'),
  searchInput: document.getElementById('product-search'),
  clearSearchBtn: document.getElementById('clear-search-btn'),
  resultsSummary: document.getElementById('results-summary'),
  resetInlineBtn: document.getElementById('reset-filters-inline'),
  emptyState: document.getElementById('empty-state'),
  emptyResetBtn: document.getElementById('empty-reset-btn'),
  scopeButtons: document.querySelectorAll('.scope-btn'),
  headerSearchTrigger: document.getElementById('header-search-trigger'),
  mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
  mobileNavDrawer: document.getElementById('mobile-nav-drawer'),
  mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
  navLinks: document.querySelectorAll('.nav-link'),
  footerCategoryLinks: document.querySelectorAll('[data-footer-category]'),
  newsletterForm: document.getElementById('newsletter-form'),
  newsletterName: document.getElementById('newsletter-name'),
  newsletterEmail: document.getElementById('newsletter-email'),
  newsletterFeedback: document.getElementById('newsletter-feedback'),
  currentYear: document.getElementById('current-year'),
};

/* ==========================================================================
   SAFE DOM HELPERS
   ========================================================================== */

/**
 * Creates a reusable SVG icon for the "View on Amazon" button
 */
function createExternalArrowSvg() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('width', '15');
  svg.setAttribute('height', '15');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');

  const line = document.createElementNS(svgNS, 'line');
  line.setAttribute('x1', '7');
  line.setAttribute('y1', '17');
  line.setAttribute('x2', '17');
  line.setAttribute('y2', '7');

  const polyline = document.createElementNS(svgNS, 'polyline');
  polyline.setAttribute('points', '7 7 17 7 17 17');

  svg.appendChild(line);
  svg.appendChild(polyline);
  return svg;
}

/**
 * Builds a single Product Card element using safe DOM APIs
 */
function createProductCard(product) {
  const article = document.createElement('article');
  article.className = 'product-card';

  // Product Image Frame with Fallback
  const mediaWrap = document.createElement('div');
  mediaWrap.className = 'image-frame product-media';
  mediaWrap.dataset.fallbackLabel = product.name;

  const img = document.createElement('img');
  img.className = 'product-img';
  img.src = product.image;
  img.alt = product.name;
  img.loading = 'lazy';
  img.setAttribute('referrerpolicy', 'no-referrer');
  img.addEventListener('error', () => {
    img.style.display = 'none';
    mediaWrap.classList.add('is-fallback');
  });
  mediaWrap.appendChild(img);

  // Card Body
  const body = document.createElement('div');
  body.className = 'product-body';

  // Unboxed Metadata Row
  const meta = document.createElement('div');
  meta.className = 'product-meta';

  const catSpan = document.createElement('span');
  catSpan.textContent = product.category;
  meta.appendChild(catSpan);

  const highlightLabel = product.isDeal
    ? 'Seasonal Deal'
    : product.isTrending
      ? 'Trending Find'
      : product.isFeatured
        ? 'Featured'
        : '';

  if (highlightLabel) {
    const sep = document.createElement('span');
    sep.setAttribute('aria-hidden', 'true');
    sep.textContent = '·';
    const tagSpan = document.createElement('span');
    tagSpan.className = 'product-meta-highlight';
    tagSpan.textContent = highlightLabel;
    meta.appendChild(sep);
    meta.appendChild(tagSpan);
  }

  // Title & Short Description
  const title = document.createElement('h3');
  title.className = 'product-title';
  title.textContent = product.name;

  const desc = document.createElement('p');
  desc.className = 'product-description';
  desc.textContent = product.description;

  // Footer: Verified Price + View on Amazon Link
  const footer = document.createElement('div');
  footer.className = 'product-footer';

  const priceRow = document.createElement('div');
  priceRow.className = 'product-price-row';

  if (product.priceVerified && product.price) {
    const priceVal = document.createElement('span');
    priceVal.className = 'product-price-verified';
    priceVal.textContent = product.price;

    const priceNote = document.createElement('span');
    priceNote.className = 'product-price-status';
    priceNote.textContent = 'Verified sample price';

    priceRow.appendChild(priceVal);
    priceRow.appendChild(priceNote);
  } else {
    const unverifiedNote = document.createElement('span');
    unverifiedNote.className = 'product-price-unverified';
    unverifiedNote.textContent = 'Check live price on Amazon';
    priceRow.appendChild(unverifiedNote);
  }

  // Affiliate Button (Always opens in a new browser tab safely)
  const ctaLink = document.createElement('a');
  ctaLink.className = 'amazon-cta-btn';
  ctaLink.href = product.affiliateUrl;
  ctaLink.target = '_blank';
  ctaLink.rel = 'noopener noreferrer sponsored';
  ctaLink.setAttribute('aria-label', `View ${product.name} on Amazon (opens in a new tab)`);

  const ctaText = document.createElement('span');
  ctaText.textContent = 'View on Amazon';
  ctaLink.appendChild(ctaText);
  ctaLink.appendChild(createExternalArrowSvg());

  footer.appendChild(priceRow);
  footer.appendChild(ctaLink);

  body.appendChild(meta);
  body.appendChild(title);
  body.appendChild(desc);
  body.appendChild(footer);

  article.appendChild(mediaWrap);
  article.appendChild(body);
  return article;
}

/* ==========================================================================
   CATEGORY CARDS & FILTER TABS RENDERING
   ========================================================================== */
function renderCategoryCards() {
  if (!dom.categoryCardsGrid) return;
  dom.categoryCardsGrid.innerHTML = '';

  CATEGORIES.forEach((cat) => {
    const count = PRODUCTS.filter((item) => item.category === cat.id).length;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `category-card${state.selectedCategory === cat.id ? ' is-active' : ''}`;
    btn.setAttribute('aria-pressed', state.selectedCategory === cat.id ? 'true' : 'false');

    const iconWrap = document.createElement('span');
    iconWrap.className = 'category-card-icon';
    iconWrap.innerHTML = cat.iconSvg;

    const textWrap = document.createElement('div');
    const heading = document.createElement('h3');
    heading.className = 'category-card-title';
    heading.textContent = cat.label;

    const countEl = document.createElement('p');
    countEl.className = 'category-card-count';
    countEl.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;

    textWrap.appendChild(heading);
    textWrap.appendChild(countEl);

    btn.appendChild(iconWrap);
    btn.appendChild(textWrap);

    btn.addEventListener('click', () => {
      // Toggle category if clicked again, or select it
      state.selectedCategory = state.selectedCategory === cat.id ? 'All' : cat.id;
      updateCatalogView();
    });

    dom.categoryCardsGrid.appendChild(btn);
  });
}

function renderCategoryTabs() {
  if (!dom.categoryTabs) return;
  dom.categoryTabs.innerHTML = '';

  const tabItems = [{ id: 'All', label: 'All Categories' }, ...CATEGORIES];

  tabItems.forEach((item) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.role = 'tab';
    const isActive = state.selectedCategory === item.id;
    tab.className = `filter-tab${isActive ? ' active' : ''}`;
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    tab.textContent = item.label;

    tab.addEventListener('click', () => {
      state.selectedCategory = item.id;
      updateCatalogView();
    });

    dom.categoryTabs.appendChild(tab);
  });
}

/* ==========================================================================
   FILTERING & CATALOG RENDERING
   ========================================================================== */
function getFilteredProducts() {
  const query = state.searchQuery.trim().toLowerCase();

  return PRODUCTS.filter((product) => {
    // 1. Category Match
    const matchesCategory =
      state.selectedCategory === 'All' || product.category === state.selectedCategory;

    // 2. Highlight Scope Match
    let matchesScope = true;
    if (state.selectedScope === 'featured') matchesScope = product.isFeatured;
    if (state.selectedScope === 'trending') matchesScope = product.isTrending;
    if (state.selectedScope === 'deal') matchesScope = product.isDeal;

    // 3. Search Query Match
    const matchesQuery =
      query === '' ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return matchesCategory && matchesScope && matchesQuery;
  });
}

function updateCatalogView() {
  const filtered = getFilteredProducts();
  const hasActiveFilters =
    state.selectedCategory !== 'All' ||
    state.selectedScope !== 'all' ||
    state.searchQuery.trim() !== '';

  // Sync Category Cards & Tabs active states
  renderCategoryCards();
  renderCategoryTabs();

  // Sync Scope Buttons
  dom.scopeButtons.forEach((btn) => {
    const active = btn.dataset.scope === state.selectedScope;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  // Update Results Summary
  if (dom.resultsSummary) {
    const categoryLabel =
      state.selectedCategory === 'All' ? 'all categories' : state.selectedCategory;
    dom.resultsSummary.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} curated finds in ${categoryLabel}`;
  }

  if (dom.resetInlineBtn) {
    dom.resetInlineBtn.hidden = !hasActiveFilters;
  }

  // Render Grid or Empty State
  if (dom.catalogGrid && dom.emptyState) {
    dom.catalogGrid.innerHTML = '';
    if (filtered.length === 0) {
      dom.emptyState.hidden = false;
    } else {
      dom.emptyState.hidden = true;
      filtered.forEach((product) => {
        dom.catalogGrid.appendChild(createProductCard(product));
      });
    }
  }
}

function renderEditorialSections() {
  // Trending Finds Section
  if (dom.trendingGrid) {
    dom.trendingGrid.innerHTML = '';
    const trendingProducts = PRODUCTS.filter((p) => p.isTrending).slice(0, 3);
    trendingProducts.forEach((product) => {
      dom.trendingGrid.appendChild(createProductCard(product));
    });
  }

  // Best Deals Section
  if (dom.dealsGrid) {
    dom.dealsGrid.innerHTML = '';
    const dealProducts = PRODUCTS.filter((p) => p.isDeal).slice(0, 3);
    dealProducts.forEach((product) => {
      dom.dealsGrid.appendChild(createProductCard(product));
    });
  }
}

function resetAllFilters() {
  state.selectedCategory = 'All';
  state.selectedScope = 'all';
  state.searchQuery = '';
  if (dom.searchInput) dom.searchInput.value = '';
  if (dom.clearSearchBtn) dom.clearSearchBtn.hidden = true;
  updateCatalogView();
}

/* ==========================================================================
   MOBILE NAVIGATION & SMOOTH SCROLLING
   ========================================================================== */
function setMobileMenuOpen(isOpen) {
  if (!dom.mobileMenuToggle || !dom.mobileNavDrawer) return;
  dom.mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  dom.mobileMenuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation menu' : 'Open navigation menu'
  );
  dom.mobileNavDrawer.hidden = !isOpen;
}

function setupNavigationEvents() {
  // Mobile menu button toggle
  if (dom.mobileMenuToggle) {
    dom.mobileMenuToggle.addEventListener('click', () => {
      const currentlyOpen = dom.mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      setMobileMenuOpen(!currentlyOpen);
    });
  }

  // Close mobile drawer when a link is selected
  dom.mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMobileMenuOpen(false);
    });
  });

  // Close mobile drawer on Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMobileMenuOpen(false);
    }
  });

  // Header search shortcut scrolls to and focuses the live search bar
  if (dom.headerSearchTrigger && dom.searchInput) {
    dom.headerSearchTrigger.addEventListener('click', () => {
      setMobileMenuOpen(false);
      dom.searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.setTimeout(() => {
        dom.searchInput.focus({ preventScroll: true });
      }, 320);
    });
  }

  // Update active nav link highlight on click
  dom.navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      dom.navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Footer category shortcuts apply filter and scroll smoothly
  dom.footerCategoryLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const category = link.getAttribute('data-footer-category');
      if (category) {
        state.selectedCategory = category;
        state.selectedScope = 'all';
        updateCatalogView();
      }
    });
  });
}

/* ==========================================================================
   SEARCH & FILTER EVENT LISTENERS
   ========================================================================== */
function setupCatalogEvents() {
  if (dom.searchInput) {
    dom.searchInput.addEventListener('input', (event) => {
      state.searchQuery = event.target.value;
      if (dom.clearSearchBtn) {
        dom.clearSearchBtn.hidden = state.searchQuery.trim() === '';
      }
      updateCatalogView();
    });
  }

  if (dom.clearSearchBtn && dom.searchInput) {
    dom.clearSearchBtn.addEventListener('click', () => {
      state.searchQuery = '';
      dom.searchInput.value = '';
      dom.clearSearchBtn.hidden = true;
      dom.searchInput.focus();
      updateCatalogView();
    });
  }

  dom.scopeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.selectedScope = btn.dataset.scope || 'all';
      updateCatalogView();
    });
  });

  if (dom.resetInlineBtn) {
    dom.resetInlineBtn.addEventListener('click', resetAllFilters);
  }

  if (dom.emptyResetBtn) {
    dom.emptyResetBtn.addEventListener('click', resetAllFilters);
  }
}

/* ==========================================================================
   NEWSLETTER FORM VALIDATION
   ========================================================================== */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function setupNewsletterForm() {
  if (!dom.newsletterForm || !dom.newsletterEmail || !dom.newsletterFeedback) return;

  dom.newsletterEmail.addEventListener('input', () => {
    dom.newsletterEmail.classList.remove('is-invalid');
    if (dom.newsletterFeedback.classList.contains('is-error')) {
      dom.newsletterFeedback.textContent = '';
      dom.newsletterFeedback.className = 'newsletter-feedback';
    }
  });

  dom.newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = dom.newsletterEmail.value.trim();
    const firstName = dom.newsletterName ? dom.newsletterName.value.trim() : '';

    if (emailValue === '') {
      dom.newsletterEmail.classList.add('is-invalid');
      dom.newsletterFeedback.textContent = 'Please enter your email address to subscribe.';
      dom.newsletterFeedback.className = 'newsletter-feedback is-error';
      dom.newsletterEmail.focus();
      return;
    }

    if (!isValidEmail(emailValue)) {
      dom.newsletterEmail.classList.add('is-invalid');
      dom.newsletterFeedback.textContent =
        'Please enter a valid email address (for example, name@domain.com).';
      dom.newsletterFeedback.className = 'newsletter-feedback is-error';
      dom.newsletterEmail.focus();
      return;
    }

    // Validated cleanly on the client side
    dom.newsletterEmail.classList.remove('is-invalid');
    const greeting = firstName ? `Thank you, ${firstName}. ` : 'Thank you. ';
    dom.newsletterFeedback.textContent = `${greeting}Your subscription request for ${emailValue} has been validated.`;
    dom.newsletterFeedback.className = 'newsletter-feedback is-success';
    dom.newsletterForm.reset();
  });
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
function init() {
  if (dom.currentYear) {
    dom.currentYear.textContent = String(new Date().getFullYear());
  }

  updateCatalogView();
  renderEditorialSections();
  setupNavigationEvents();
  setupCatalogEvents();
  setupNewsletterForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
