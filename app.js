/* ==========================================================================
   Best Spices and Agro Impex Pvt Ltd — Interactive B2B Trade Storefront
   ========================================================================== */

(function () {
  'use strict';

  const USD_RATE = 84; // Indicative demo conversion rate (INR -> USD)

  const SPICES = [
    {
      id: 'black-pepper',
      name: 'Tellicherry Black Pepper',
      grade: 'TGSEB · 4.75mm+ Extra Bold',
      category: 'whole',
      origin: 'Malabar, Kerala',
      hsCode: 'HS 090411',
      image: 'assets/images/black-pepper.jpg',
      description:
        'Sun-dried, single-origin Malabar peppercorns harvested at peak maturity for a deep citrus-woody aroma and high piperine bite.',
      specs: {
        'Botanical Name': 'Piper nigrum L.',
        'Origin Region': 'Wayanad & Malabar, Kerala, India',
        'Piperine Content': '5.0% – 5.8% min',
        'Moisture': 'Max 11.0%',
        'Bulk Density': '570 – 600 g/L (Garbled)',
        'Shelf Life': '24 Months (Cool, Dry Storage)'
      },
      chips: ['5%+ Piperine', '570 g/L Bold', 'Steam Sterilized'],
      packs: [
        { id: '25kg', label: '25 kg', sub: 'PP/Jute Bag', priceInr: 17250, unitNote: '₹690/kg' },
        { id: '50kg', label: '50 kg', sub: 'Export Sack', priceInr: 33250, unitNote: '₹665/kg' },
        { id: '100kg', label: '100 kg', sub: 'Master Lot', priceInr: 64500, unitNote: '₹645/kg' }
      ],
      bulkBaseInrPerKg: 615
    },
    {
      id: 'green-cardamom',
      name: 'Alleppey Green Cardamom',
      grade: 'AGEB · 8mm+ Bold Emerald',
      category: 'exotic',
      origin: 'Idukki, Kerala',
      hsCode: 'HS 090831',
      image: 'assets/images/green-cardamom.jpg',
      description:
        'Hand-picked, naturally vibrant emerald green pods from the Cardamom Hills, prized for rich essential oil and sweet-camphor fragrance.',
      specs: {
        'Botanical Name': 'Elettaria cardamomum',
        'Origin Region': 'Idukki Hills, Kerala, India',
        'Volatile Oil': '6.8% – 7.5% min',
        'Pod Size': '8mm+ Bold Export Grade',
        'Moisture': 'Max 10.5%',
        'Packaging': 'Vacuum Foil + Master Carton'
      },
      chips: ['8mm+ Bold', '7% Volatile Oil', 'Vacuum Sealed'],
      packs: [
        { id: '10kg', label: '10 kg', sub: 'Vacuum Box', priceInr: 24800, unitNote: '₹2,480/kg' },
        { id: '25kg', label: '25 kg', sub: 'Export Carton', priceInr: 60500, unitNote: '₹2,420/kg' },
        { id: '50kg', label: '50 kg', sub: 'Master Lot', priceInr: 118000, unitNote: '₹2,360/kg' }
      ],
      bulkBaseInrPerKg: 2240
    },
    {
      id: 'alleppey-turmeric',
      name: 'Alleppey Finger Turmeric',
      grade: 'High Curcumin · 5.2%+ Grade',
      category: 'ground',
      origin: 'Kerala & Erode',
      hsCode: 'HS 091030',
      image: 'assets/images/turmeric.jpg',
      description:
        'Double-polished golden rhizomes and fine 60-mesh powder with naturally elevated curcumin, ideal for spice blenders and oleoresin extraction.',
      specs: {
        'Botanical Name': 'Curcuma longa',
        'Origin Region': 'Alleppey & Erode, South India',
        'Curcumin Content': '5.0% – 5.5% Natural',
        'Form Options': 'Whole Fingers / 60-Mesh Powder',
        'Moisture': 'Max 10.0%',
        'Packaging': '25/50 kg Moisture-Lock PP Bag'
      },
      chips: ['5.2%+ Curcumin', 'Whole / Powder', 'Zero Lead Chromate'],
      packs: [
        { id: '25kg', label: '25 kg', sub: 'PP Liner Bag', priceInr: 5625, unitNote: '₹225/kg' },
        { id: '50kg', label: '50 kg', sub: 'Jute Sack', priceInr: 10750, unitNote: '₹215/kg' },
        { id: '100kg', label: '100 kg', sub: 'Master Lot', priceInr: 20600, unitNote: '₹206/kg' }
      ],
      bulkBaseInrPerKg: 192
    },
    {
      id: 'guntur-chillies',
      name: 'Guntur Sannam Red Chillies',
      grade: 'S4 Export · ASTA 55+ Crimson',
      category: 'whole',
      origin: 'Guntur, Andhra Pradesh',
      hsCode: 'HS 090421',
      image: 'assets/images/red-chillies.jpg',
      description:
        'Sun-cured crimson pods offering balanced pungent heat and vivid natural red pigment, available stemless or with stem for global food processors.',
      specs: {
        'Botanical Name': 'Capsicum annuum',
        'Origin Region': 'Guntur, Andhra Pradesh, India',
        'Pungency (SHU)': '30,000 – 40,000 SHU',
        'Color Value': '55 – 65 ASTA',
        'Moisture': 'Max 11.5%',
        'Aflatoxin': 'EU / US Compliant Lab Tested'
      },
      chips: ['35k+ SHU', 'ASTA 55+', 'Stemless Ready'],
      packs: [
        { id: '25kg', label: '25 kg', sub: 'Export Bale', priceInr: 7250, unitNote: '₹290/kg' },
        { id: '50kg', label: '50 kg', sub: 'Jute Sack', priceInr: 13900, unitNote: '₹278/kg' },
        { id: '100kg', label: '100 kg', sub: 'Master Lot', priceInr: 26800, unitNote: '₹268/kg' }
      ],
      bulkBaseInrPerKg: 248
    },
    {
      id: 'kashmiri-saffron',
      name: 'Kashmiri Mongra Saffron',
      grade: 'ISO 3632 Cat-I · Pure Crimson',
      category: 'exotic',
      origin: 'Pampore, Kashmir',
      hsCode: 'HS 091020',
      image: 'assets/images/saffron.jpg',
      description:
        'Hand-separated all-red Mongra stigmas from Pampore karewas with extraordinary crocin coloring strength and floral honey-like aroma.',
      specs: {
        'Botanical Name': 'Crocus sativus L.',
        'Origin Region': 'Pampore, Jammu & Kashmir, India',
        'Crocin (Color)': '240+ (ISO 3632 Category I)',
        'Safranal (Aroma)': '35 – 48',
        'Moisture': 'Max 9.5%',
        'Packaging': 'Airtight Food-Grade Tin / Vault'
      },
      chips: ['ISO Cat-I', 'All-Red Stigma', 'GI Origin'],
      packs: [
        { id: '100g', label: '100 g', sub: 'Sealed Tin', priceInr: 29500, unitNote: '₹295/g' },
        { id: '500g', label: '500 g', sub: 'Export Box', priceInr: 142000, unitNote: '₹284/g' },
        { id: '1kg', label: '1 kg', sub: 'Bulk Vault', priceInr: 274000, unitNote: '₹274/g' }
      ],
      bulkBaseInrPerKg: 258000
    },
    {
      id: 'unjha-cumin',
      name: 'Unjha Cumin Seeds (Jeera)',
      grade: '99.5% Purity · Europe / Singapore',
      category: 'whole',
      origin: 'Unjha, Gujarat',
      hsCode: 'HS 090931',
      image: 'assets/images/cumin-seeds.jpg',
      description:
        'Machine-cleaned and Sortex-graded bold cumin seeds from Asia’s largest spice mandi, delivering warm earthy oil richness with ultra-low admixture.',
      specs: {
        'Botanical Name': 'Cuminum cyminum',
        'Origin Region': 'Unjha, Gujarat, India',
        'Purity': '99.5% Sortex Clean',
        'Volatile Oil': '3.0% – 3.8% min',
        'Moisture': 'Max 9.0%',
        'Packaging': '25/50 kg Multi-Wall Paper / PP'
      },
      chips: ['99.5% Sortex', '3.5% Oil', 'EU MRL Ready'],
      packs: [
        { id: '25kg', label: '25 kg', sub: 'PP Export Bag', priceInr: 8250, unitNote: '₹330/kg' },
        { id: '50kg', label: '50 kg', sub: 'Export Sack', priceInr: 15900, unitNote: '₹318/kg' },
        { id: '100kg', label: '100 kg', sub: 'Master Lot', priceInr: 30800, unitNote: '₹308/kg' }
      ],
      bulkBaseInrPerKg: 288
    }
  ];

  const BULK_TIERS = {
    lcl: { label: 'LCL Pallet (1 MT / 1,000 kg)', kg: 1000, discount: 0.10 },
    fcl20: { label: '20ft FCL Container (13 MT)', kg: 13000, discount: 0.16 },
    fcl40: { label: '40ft FCL Container (25 MT)', kg: 25000, discount: 0.21 },
    oem: { label: 'Private Label / OEM (2 MT)', kg: 2000, discount: 0.12 }
  };

  // Application State
  const state = {
    currency: 'INR',
    category: 'all',
    search: '',
    selectedPack: {},
    qty: {},
    cart: [],
    bulkSpiceId: 'black-pepper',
    bulkTier: 'lcl',
    bulkRoute: 'international'
  };

  SPICES.forEach((s) => {
    state.selectedPack[s.id] = s.packs[0].id;
    state.qty[s.id] = 1;
  });

  // Restore cart safely
  try {
    const saved = localStorage.getItem('bsai_demo_cart_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) state.cart = parsed;
    }
  } catch (_) {}

  function persistCart() {
    try {
      localStorage.setItem('bsai_demo_cart_v1', JSON.stringify(state.cart));
    } catch (_) {}
  }

  function formatMoney(inrAmount) {
    if (state.currency === 'USD') {
      const usd = inrAmount / USD_RATE;
      return '$' + Math.round(usd).toLocaleString('en-US');
    }
    return '₹' + Math.round(inrAmount).toLocaleString('en-IN');
  }

  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    container.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      setTimeout(() => el.remove(), 260);
    }, 3200);
  }

  function getSelectedPack(spice) {
    const packId = state.selectedPack[spice.id] || spice.packs[0].id;
    return spice.packs.find((p) => p.id === packId) || spice.packs[0];
  }

  // Render Catalog Cards
  function renderCatalog() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const q = state.search.trim().toLowerCase();
    const filtered = SPICES.filter((s) => {
      const catMatch = state.category === 'all' || s.category === state.category;
      const textMatch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.origin.toLowerCase().includes(q) ||
        s.grade.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q);
      return catMatch && textMatch;
    });

    if (filtered.length === 0) {
      grid.innerHTML =
        '<div style="grid-column:1/-1;text-align:center;padding:3rem 1rem;color:var(--ink-muted);">No spices matched your filter. Try clearing the search or selecting "All Spices".</div>';
      return;
    }

    grid.innerHTML = filtered
      .map((spice) => {
        const activePack = getSelectedPack(spice);
        const qty = state.qty[spice.id] || 1;
        const linePrice = activePack.priceInr * qty;

        const radioHtml = spice.packs
          .map((pack) => {
            const radioId = `pack-${spice.id}-${pack.id}`;
            const checked = pack.id === activePack.id ? 'checked' : '';
            return `
              <div>
                <input type="radio" class="sr-only pack-radio-input" id="${radioId}" name="pack-${spice.id}" value="${pack.id}" data-spice="${spice.id}" ${checked}>
                <label class="radio-pill" for="${radioId}">
                  <span class="radio-pill-head">
                    <span class="radio-dot"></span>
                    <span class="radio-pill-title">${pack.label}</span>
                  </span>
                  <span class="radio-pill-sub">${pack.sub}</span>
                </label>
              </div>`;
          })
          .join('');

        return `
          <article class="product-card" data-spice-card="${spice.id}">
            <div class="product-media">
              <img src="${spice.image}" alt="${spice.name} — ${spice.origin}" loading="lazy">
              <div class="product-badges">
                <span class="badge-origin">${spice.origin}</span>
                <span class="badge-hs">${spice.hsCode}</span>
              </div>
            </div>
            <div class="product-body">
              <div class="product-grade">${spice.grade}</div>
              <h3 class="product-title">${spice.name}</h3>
              <p class="product-desc">${spice.description}</p>
              <div class="spec-chips">
                ${spice.chips.map((c) => `<span class="spec-chip">${c}</span>`).join('')}
              </div>

              <span class="radio-group-label">Select Trade Pack Size</span>
              <div class="pack-radio-grid" role="radiogroup" aria-label="Pack size for ${spice.name}">
                ${radioHtml}
              </div>

              <div class="product-footer">
                <div class="price-row">
                  <div>
                    <div class="price-main" data-price-display="${spice.id}">${formatMoney(linePrice)}</div>
                    <div class="price-unit" data-unit-display="${spice.id}">${activePack.label} (${activePack.unitNote}) × ${qty}</div>
                  </div>
                  <button type="button" class="spec-link-btn" data-open-spec="${spice.id}">Full Specs</button>
                </div>
                <div class="cart-action-row">
                  <div class="qty-stepper" aria-label="Quantity for ${spice.name}">
                    <button type="button" class="qty-btn" data-qty-dec="${spice.id}" aria-label="Decrease quantity">−</button>
                    <span class="qty-val" data-qty-val="${spice.id}">${qty}</span>
                    <button type="button" class="qty-btn" data-qty-inc="${spice.id}" aria-label="Increase quantity">+</button>
                  </div>
                  <button type="button" class="add-cart-btn" data-add-cart="${spice.id}">
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </article>`;
      })
      .join('');
  }

  function updateCardPricing(spiceId) {
    const spice = SPICES.find((s) => s.id === spiceId);
    if (!spice) return;
    const pack = getSelectedPack(spice);
    const qty = state.qty[spiceId] || 1;
    const priceEl = document.querySelector(`[data-price-display="${spiceId}"]`);
    const unitEl = document.querySelector(`[data-unit-display="${spiceId}"]`);
    const qtyEl = document.querySelector(`[data-qty-val="${spiceId}"]`);
    if (priceEl) priceEl.textContent = formatMoney(pack.priceInr * qty);
    if (unitEl) unitEl.textContent = `${pack.label} (${pack.unitNote}) × ${qty}`;
    if (qtyEl) qtyEl.textContent = String(qty);
  }

  // Cart Operations
  function addToCart(spiceId, packId, qty, customItem) {
    if (customItem) {
      const existing = state.cart.find((i) => i.key === customItem.key);
      if (existing) {
        existing.qty += customItem.qty;
      } else {
        state.cart.push(customItem);
      }
      persistCart();
      renderCart();
      bumpCartBadge();
      showToast(`Added ${customItem.name} (${customItem.packLabel}) to Trade Cart.`);
      return;
    }

    const spice = SPICES.find((s) => s.id === spiceId);
    if (!spice) return;
    const pack = spice.packs.find((p) => p.id === packId) || spice.packs[0];
    const key = `${spice.id}__${pack.id}`;
    const existing = state.cart.find((i) => i.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({
        key,
        spiceId: spice.id,
        name: spice.name,
        packLabel: `${pack.label} · ${pack.sub}`,
        unitPriceInr: pack.priceInr,
        qty,
        image: spice.image,
        isBulk: false
      });
    }
    persistCart();
    renderCart();
    bumpCartBadge();
    showToast(`Added ${qty} × ${spice.name} (${pack.label}) to cart.`);
  }

  function bumpCartBadge() {
    const badge = document.getElementById('cartCountBadge');
    if (!badge) return;
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
  }

  function getCartTotals() {
    let totalItems = 0;
    let subtotalInr = 0;
    state.cart.forEach((item) => {
      totalItems += item.qty;
      subtotalInr += item.unitPriceInr * item.qty;
    });
    return { totalItems, subtotalInr };
  }

  function renderCart() {
    const { totalItems, subtotalInr } = getCartTotals();
    const badge = document.getElementById('cartCountBadge');
    if (badge) badge.textContent = String(totalItems);

    const body = document.getElementById('cartItemsContainer');
    const subEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartGrandTotal');
    const checkoutBtn = document.getElementById('openCheckoutBtn');

    if (subEl) subEl.textContent = formatMoney(subtotalInr);
    if (totalEl) totalEl.textContent = formatMoney(subtotalInr);
    if (checkoutBtn) checkoutBtn.disabled = state.cart.length === 0;

    if (!body) return;
    if (state.cart.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <p style="font-family:var(--font-serif);font-size:1.3rem;color:var(--forest);margin-bottom:0.4rem;">Your B2B Trade Cart is empty</p>
          <p style="font-size:0.86rem;">Choose a pack size using the radio buttons on any spice card or configure a Bulk Container Lot to get started.</p>
        </div>`;
      return;
    }

    body.innerHTML = state.cart
      .map(
        (item) => `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}${item.isBulk ? ' <span style="color:var(--gold);font-size:0.72rem;">[BULK]</span>' : ''}</div>
            <div class="cart-item-meta">${item.packLabel}</div>
            <div class="cart-item-controls">
              <div class="qty-stepper" style="transform:scale(0.88);transform-origin:left;">
                <button type="button" class="qty-btn" data-cart-dec="${item.key}" aria-label="Decrease cart quantity">−</button>
                <span class="qty-val">${item.qty}</span>
                <button type="button" class="qty-btn" data-cart-inc="${item.key}" aria-label="Increase cart quantity">+</button>
              </div>
              <div style="text-align:right;">
                <div style="font-weight:700;color:var(--forest);font-size:0.9rem;">${formatMoney(item.unitPriceInr * item.qty)}</div>
                <button type="button" class="cart-remove-btn" data-cart-remove="${item.key}">Remove</button>
              </div>
            </div>
          </div>
        </div>`
      )
      .join('');
  }

  // Bulk Configurator
  function updateBulkQuote() {
    const spice = SPICES.find((s) => s.id === state.bulkSpiceId) || SPICES[0];
    const tier = BULK_TIERS[state.bulkTier] || BULK_TIERS.lcl;
    // Cap Saffron bulk calculation to realistic specialty lot (5kg / 25kg / 50kg / 10kg)
    let effectiveKg = tier.kg;
    let displayWeight = `${tier.kg.toLocaleString('en-IN')} kg`;
    if (spice.id === 'kashmiri-saffron') {
      const saffronMap = { lcl: 5, fcl20: 25, fcl40: 50, oem: 10 };
      effectiveKg = saffronMap[state.bulkTier] || 5;
      displayWeight = `${effectiveKg} kg (Air-Freight Specialty Lot)`;
    }
    const discountedRate = spice.bulkBaseInrPerKg * (1 - tier.discount);
    const totalInr = Math.round(discountedRate * effectiveKg);
    const discountPct = Math.round(tier.discount * 100);
    const routeLabel =
      state.bulkRoute === 'international'
        ? 'International Export (FOB / CIF / CFR Ready)'
        : 'Domestic Pan-India Freight (GST Invoice Ready)';

    const valEl = document.getElementById('bulkEstimateVal');
    const metaEl = document.getElementById('bulkEstimateMeta');
    if (valEl) valEl.textContent = formatMoney(totalInr);
    if (metaEl) {
      metaEl.textContent = `${spice.name} · ${displayWeight} · ${discountPct}% Bulk Rebate · ${routeLabel}`;
    }

    return { spice, tier, displayWeight, totalInr, routeLabel };
  }

  // Modals & Drawers
  function openDrawer() {
    document.getElementById('cartDrawer')?.classList.add('open');
    document.getElementById('overlayBackdrop')?.classList.add('open');
  }

  function closeAllOverlays() {
    document.getElementById('cartDrawer')?.classList.remove('open');
    document.getElementById('specModal')?.classList.remove('open');
    document.getElementById('checkoutModal')?.classList.remove('open');
    document.getElementById('overlayBackdrop')?.classList.remove('open');
  }

  function openSpecModal(spiceId) {
    const spice = SPICES.find((s) => s.id === spiceId);
    if (!spice) return;
    const titleEl = document.getElementById('specModalTitle');
    const bodyEl = document.getElementById('specModalBody');
    if (!titleEl || !bodyEl) return;

    titleEl.textContent = `${spice.name} — Export Specifications`;
    const rows = Object.entries(spice.specs)
      .map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`)
      .join('');

    const activePack = getSelectedPack(spice);
    bodyEl.innerHTML = `
      <div style="display:grid;grid-template-columns:130px 1fr;gap:1rem;align-items:center;margin-bottom:1rem;">
        <img src="${spice.image}" alt="${spice.name}" style="width:130px;height:98px;object-fit:cover;border-radius:10px;border:1px solid var(--border);">
        <div>
          <div class="product-grade">${spice.grade} · ${spice.hsCode}</div>
          <p style="font-size:0.88rem;color:var(--ink-muted);margin-top:0.25rem;">${spice.description}</p>
        </div>
      </div>
      <table class="spec-table"><tbody>${rows}</tbody></table>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;">
        <div>
          <div style="font-size:0.75rem;color:var(--ink-muted);text-transform:uppercase;letter-spacing:0.08em;">Selected Pack</div>
          <div style="font-weight:700;color:var(--forest);">${activePack.label} (${activePack.sub}) — ${formatMoney(activePack.priceInr)}</div>
        </div>
        <button type="button" class="btn btn-forest" id="specAddBtn" data-spec-add="${spice.id}">Add Selected Pack to Cart</button>
      </div>`;

    document.getElementById('specModal')?.classList.add('open');
    document.getElementById('overlayBackdrop')?.classList.add('open');
  }

  function openCheckoutModal() {
    if (state.cart.length === 0) return;
    document.getElementById('cartDrawer')?.classList.remove('open');
    const { totalItems, subtotalInr } = getCartTotals();
    const summaryEl = document.getElementById('checkoutOrderSummary');
    if (summaryEl) {
      summaryEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span><strong>${totalItems}</strong> trade lot(s) in order</span>
          <span style="font-family:var(--font-serif);font-size:1.45rem;font-weight:700;color:var(--forest);">${formatMoney(subtotalInr)}</span>
        </div>`;
    }
    const resultEl = document.getElementById('checkoutResult');
    if (resultEl) resultEl.style.display = 'none';
    const formEl = document.getElementById('checkoutForm');
    if (formEl) formEl.style.display = 'block';

    document.getElementById('checkoutModal')?.classList.add('open');
    document.getElementById('overlayBackdrop')?.classList.add('open');
  }

  // Event Wiring
  function initEvents() {
    // Sticky header shadow
    window.addEventListener(
      'scroll',
      () => {
        const header = document.getElementById('siteHeader');
        if (header) header.classList.toggle('scrolled', window.scrollY > 14);
      },
      { passive: true }
    );

    // Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('open');
        mobileBtn.setAttribute('aria-expanded', String(isOpen));
      });
      mobileDrawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => mobileDrawer.classList.remove('open'));
      });
    }

    // Currency Switcher
    document.querySelectorAll('[data-currency]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const curr = btn.getAttribute('data-currency');
        if (!curr || curr === state.currency) return;
        state.currency = curr;
        document.querySelectorAll('[data-currency]').forEach((b) => {
          b.classList.toggle('active', b.getAttribute('data-currency') === curr);
        });
        renderCatalog();
        renderCart();
        updateBulkQuote();
        showToast(`Prices updated to ${curr === 'USD' ? 'USD ($)' : 'INR (₹)'}.`);
      });
    });

    // Category Tabs
    document.querySelectorAll('[data-category]').forEach((tab) => {
      tab.addEventListener('click', () => {
        state.category = tab.getAttribute('data-category') || 'all';
        document.querySelectorAll('[data-category]').forEach((t) => {
          t.classList.toggle('active', t === tab);
        });
        renderCatalog();
      });
    });

    // Search Input
    const searchInput = document.getElementById('catalogSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.search = e.target.value;
        renderCatalog();
      });
    }

    // Delegated Product Grid Events (Radio Buttons, Qty, Add to Cart, Specs)
    const grid = document.getElementById('productGrid');
    if (grid) {
      grid.addEventListener('change', (e) => {
        const radio = e.target.closest('.pack-radio-input');
        if (radio) {
          const spiceId = radio.getAttribute('data-spice');
          state.selectedPack[spiceId] = radio.value;
          updateCardPricing(spiceId);
        }
      });

      grid.addEventListener('click', (e) => {
        const decBtn = e.target.closest('[data-qty-dec]');
        if (decBtn) {
          const id = decBtn.getAttribute('data-qty-dec');
          state.qty[id] = Math.max(1, (state.qty[id] || 1) - 1);
          updateCardPricing(id);
          return;
        }
        const incBtn = e.target.closest('[data-qty-inc]');
        if (incBtn) {
          const id = incBtn.getAttribute('data-qty-inc');
          state.qty[id] = Math.min(99, (state.qty[id] || 1) + 1);
          updateCardPricing(id);
          return;
        }
        const addBtn = e.target.closest('[data-add-cart]');
        if (addBtn) {
          const id = addBtn.getAttribute('data-add-cart');
          addToCart(id, state.selectedPack[id], state.qty[id] || 1);
          const original = addBtn.innerHTML;
          addBtn.classList.add('added');
          addBtn.innerHTML = '<span>✓ Added</span>';
          setTimeout(() => {
            addBtn.classList.remove('added');
            addBtn.innerHTML = original;
          }, 950);
          return;
        }
        const specBtn = e.target.closest('[data-open-spec]');
        if (specBtn) {
          openSpecModal(specBtn.getAttribute('data-open-spec'));
        }
      });
    }

    // Spec Modal Add to Cart
    document.getElementById('specModalBody')?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-spec-add]');
      if (!btn) return;
      const id = btn.getAttribute('data-spec-add');
      addToCart(id, state.selectedPack[id], state.qty[id] || 1);
      closeAllOverlays();
    });

    // Cart Drawer Triggers & Delegated Cart Item Actions
    document.getElementById('openCartBtn')?.addEventListener('click', openDrawer);
    document.getElementById('closeCartBtn')?.addEventListener('click', closeAllOverlays);
    document.getElementById('closeSpecModal')?.addEventListener('click', closeAllOverlays);
    document.getElementById('closeCheckoutModal')?.addEventListener('click', closeAllOverlays);
    document.getElementById('overlayBackdrop')?.addEventListener('click', closeAllOverlays);
    document.getElementById('openCheckoutBtn')?.addEventListener('click', openCheckoutModal);

    document.getElementById('cartItemsContainer')?.addEventListener('click', (e) => {
      const inc = e.target.closest('[data-cart-inc]');
      if (inc) {
        const key = inc.getAttribute('data-cart-inc');
        const item = state.cart.find((i) => i.key === key);
        if (item) {
          item.qty += 1;
          persistCart();
          renderCart();
        }
        return;
      }
      const dec = e.target.closest('[data-cart-dec]');
      if (dec) {
        const key = dec.getAttribute('data-cart-dec');
        const idx = state.cart.findIndex((i) => i.key === key);
        if (idx >= 0) {
          if (state.cart[idx].qty > 1) state.cart[idx].qty -= 1;
          else state.cart.splice(idx, 1);
          persistCart();
          renderCart();
        }
        return;
      }
      const rem = e.target.closest('[data-cart-remove]');
      if (rem) {
        const key = rem.getAttribute('data-cart-remove');
        state.cart = state.cart.filter((i) => i.key !== key);
        persistCart();
        renderCart();
      }
    });

    // Bulk Orders Controls
    const bulkSpiceSel = document.getElementById('bulkSpiceSelect');
    if (bulkSpiceSel) {
      bulkSpiceSel.innerHTML = SPICES.map(
        (s) => `<option value="${s.id}">${s.name} — ${s.grade}</option>`
      ).join('');
      bulkSpiceSel.addEventListener('change', (e) => {
        state.bulkSpiceId = e.target.value;
        updateBulkQuote();
      });
    }

    document.querySelectorAll('input[name="bulkTier"]').forEach((r) => {
      r.addEventListener('change', (e) => {
        state.bulkTier = e.target.value;
        updateBulkQuote();
      });
    });

    document.querySelectorAll('input[name="bulkRoute"]').forEach((r) => {
      r.addEventListener('change', (e) => {
        state.bulkRoute = e.target.value;
        updateBulkQuote();
      });
    });

    document.getElementById('addBulkToCartBtn')?.addEventListener('click', () => {
      const q = updateBulkQuote();
      addToCart(null, null, 1, {
        key: `bulk__${q.spice.id}__${state.bulkTier}__${state.bulkRoute}`,
        spiceId: q.spice.id,
        name: `${q.spice.name} (Bulk)`,
        packLabel: `${q.displayWeight} · ${state.bulkRoute === 'international' ? 'Export FOB/CIF' : 'Pan-India'}`,
        unitPriceInr: q.totalInr,
        qty: 1,
        image: q.spice.image,
        isBulk: true
      });
      openDrawer();
    });

    document.getElementById('scrollBulkContactBtn')?.addEventListener('click', () => {
      const q = updateBulkQuote();
      const msgEl = document.getElementById('contactMessage');
      const subjectEl = document.getElementById('contactSubject');
      if (subjectEl) subjectEl.value = 'Bulk / Full Container Order (FCL/LCL)';
      if (msgEl) {
        msgEl.value = `Bulk Quote Request: ${q.spice.name} — ${q.displayWeight} (${q.routeLabel}). Indicative value: ${formatMoney(q.totalInr)}. Please share official proforma and latest harvest lab COA.`;
      }
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      showToast('Bulk inquiry pre-filled in the Trade Contact form below.');
    });

    // Checkout Form Submit
    document.getElementById('checkoutForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const company = document.getElementById('chkCompany')?.value.trim() || 'Valued Trade Partner';
      const dest = document.getElementById('chkDestination')?.value.trim() || 'Destination Port';
      const payEl = document.querySelector('input[name="checkoutPayment"]:checked');
      const paymentMode = payEl ? payEl.value : 'L/C at Sight';
      const refNum = 'BSAI-' + String(Math.floor(100000 + Math.random() * 900000));
      const { subtotalInr } = getCartTotals();

      const resultEl = document.getElementById('checkoutResult');
      if (resultEl) {
        resultEl.innerHTML = `
          <div style="background:rgba(22,51,38,0.06);border:1.5px solid var(--forest);border-radius:14px;padding:1.35rem;text-align:center;">
            <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.14em;color:var(--gold);font-weight:700;margin-bottom:0.35rem;">Demo Proforma Confirmation</div>
            <h4 style="font-family:var(--font-serif);font-size:1.6rem;color:var(--forest);margin-bottom:0.5rem;">Reference #${refNum}</h4>
            <p style="font-size:0.88rem;color:var(--ink-muted);margin-bottom:0.85rem;">
              Thank you, <strong>${company}</strong>. Your demo trade order for <strong>${formatMoney(subtotalInr)}</strong>
              to <strong>${dest}</strong> via <strong>${paymentMode}</strong> has been logged.
            </p>
            <button type="button" class="btn btn-forest" id="checkoutDoneBtn">Return to Catalog</button>
          </div>`;
        resultEl.style.display = 'block';
        document.getElementById('checkoutForm').style.display = 'none';
        document.getElementById('checkoutDoneBtn')?.addEventListener('click', closeAllOverlays);
      }

      state.cart = [];
      persistCart();
      renderCart();
      showToast(`Demo Proforma #${refNum} generated successfully.`);
    });

    // Contact Form Submit
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim() || 'Partner';
      const status = document.getElementById('contactFormStatus');
      if (status) {
        status.textContent = `Thank you, ${name}. Your demo B2B inquiry has been recorded — our export & bulk desk typically responds within 4 business hours.`;
        status.style.display = 'block';
      }
      e.target.reset();
      showToast('Demo inquiry submitted to Best Spices & Agro Impex.');
    });

    // Escape key closes overlays
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllOverlays();
    });
  }

  // Smooth Scroll Reveal
  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );
    els.forEach((el) => io.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    renderCart();
    updateBulkQuote();
    initEvents();
    initScrollReveal();
  });
})();
