// Data: เมนูทั้งหมดของร้านร่มรื่นคาเฟ่
const menuData = [
  {
    id: 'americano',
    name: 'อเมริกาโน่',
    nameEn: 'Americano',
    category: 'coffee',
    price: 60,
    tags: ['ขายดี', 'เข้มข้น'],
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=700&q=80',
    description: 'กาแฟคั่วกลาง-เข้ม คัดสรรเมล็ดอาราบิก้าแท้ รสชาติเข้มข้น หอมกรุ่น ดื่มง่ายสดชื่น',
    type: 'drink',
    allowSweetness: true,
    allowMilk: false,
    allowTopping: true,
    allowRoast: true
  },
  {
    id: 'matcha-latte',
    name: 'มัทฉะลาเต้',
    nameEn: 'Uji Matcha Latte',
    category: 'tea',
    price: 80,
    tags: ['ซิกเนเจอร์', 'แนะนำ'],
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=700&q=80',
    description: 'ผงมัทฉะเกรดพรีเมียมจากเมืองอูจิ ชงผสมนมสดอย่างพิถีพิถัน หอมชาเขียวแท้ กลมกล่อมละมุนลิ้น',
    type: 'drink',
    allowSweetness: true,
    allowMilk: true,
    allowTopping: true,
    allowRoast: false
  },
  {
    id: 'butter-croissant',
    name: 'ครัวซองต์เนยสด',
    nameEn: 'French Butter Croissant',
    category: 'bakery',
    price: 75,
    tags: ['อบสดใหม่', 'ซิกเนเจอร์'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80',
    description: 'ครัวซองต์สไตล์ฝรั่งเศสแท้ กรอบนอกนุ่มใน เลเยอร์สวยงาม หอมเนยสดแท้เกรดพรีเมียม อบใหม่ทุกเช้า',
    type: 'bakery',
    allowSweetness: false,
    allowMilk: false,
    allowTopping: false,
    allowRoast: false
  },
  {
    id: 'latte',
    name: 'คาเฟ่ลาเต้',
    nameEn: 'Caffe Latte',
    category: 'coffee',
    price: 70,
    tags: ['นุ่มละมุน'],
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=700&q=80',
    description: 'เอสเพรสโซ่ช็อตเข้มข้น ผสานนมสดสตีมนุ่มละมุน ท็อปด้วยโฟมนมนุ่มบางเบา',
    type: 'drink',
    allowSweetness: true,
    allowMilk: true,
    allowTopping: true,
    allowRoast: true
  },
  {
    id: 'caramel-macchiato',
    name: 'คาราเมลมัคคิอาโต้',
    nameEn: 'Caramel Macchiato',
    category: 'coffee',
    price: 80,
    tags: ['หอมหวาน'],
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=700&q=80',
    description: 'นมสดวานิลลา ราดด้วยเอสเพรสโซ่ช็อตเข้มข้น และซอสคาราเมลโฮมเมดหอมหวาน',
    type: 'drink',
    allowSweetness: true,
    allowMilk: true,
    allowTopping: true,
    allowRoast: true
  },
  {
    id: 'thai-tea',
    name: 'ชาไทยร่มรื่น',
    nameEn: 'Signature Thai Milk Tea',
    category: 'tea',
    price: 65,
    tags: ['สูตรโบราณ'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80',
    description: 'ใบชาคัดพิเศษเบลนด์สูตรเฉพาะร้าน กลิ่นหอมชาชัดเจน หวานมันกลมกล่อม',
    type: 'drink',
    allowSweetness: true,
    allowMilk: true,
    allowTopping: true,
    allowRoast: false
  },
  {
    id: 'dark-cocoa',
    name: 'ดาร์กโกโก้พรีเมียม',
    nameEn: 'Rich Dark Cocoa',
    category: 'tea',
    price: 75,
    tags: ['เข้มข้น'],
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=700&q=80',
    description: 'ผงโกโก้นำเข้าเข้มข้น รสชาติดาร์กสะใจ ไม่หวานเลี่ยน สัมผัสนุ่มลึก',
    type: 'drink',
    allowSweetness: true,
    allowMilk: true,
    allowTopping: true,
    allowRoast: false
  },
  {
    id: 'yuzu-sparkling',
    name: 'ยูซุฮันนี่สปาร์กลิง',
    nameEn: 'Yuzu Honey Sparkling Soda',
    category: 'refreshing',
    price: 85,
    tags: ['สดชื่น', 'ดับร้อน'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    description: 'น้ำส้มยูซุแท้ผสานน้ำผึ้งป่าเดือนห้า ท็อปด้วยโซดาซ่า ดื่มแล้วสดชื่นมีชีวิตชีวา',
    type: 'drink',
    allowSweetness: true,
    allowMilk: false,
    allowTopping: true,
    allowRoast: false
  },
  {
    id: 'almond-croissant',
    name: 'ครัวซองต์อัลมอนด์',
    nameEn: 'Almond Cream Croissant',
    category: 'bakery',
    price: 95,
    tags: ['ยอดฮิต'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    description: 'สอดไส้ครีมอัลมอนด์หอมมัน โรยหน้าด้วยอัลมอนด์สไลซ์กรุบกรอบและไอซิ่งบางๆ',
    type: 'bakery',
    allowSweetness: false,
    allowMilk: false,
    allowTopping: false,
    allowRoast: false
  },
  {
    id: 'basque-cheesecake',
    name: 'บาสก์ชีสเค้กหน้าไหม้',
    nameEn: 'Basque Burnt Cheesecake',
    category: 'bakery',
    price: 90,
    tags: ['โฮมเมด'],
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
    description: 'ชีสเค้กสูตรดั้งเดิม ผิวหน้าคาราเมลไหม้หอม ด้านในเนื้อเนียนนุ่มละลายในปาก',
    type: 'bakery',
    allowSweetness: false,
    allowMilk: false,
    allowTopping: false,
    allowRoast: false
  }
];

// Topping & Milk Options data
const milkOptions = [
  { id: 'fresh', name: 'นมสดพรีเมียม (ปกติ)', price: 0 },
  { id: 'oat', name: 'นมโอ๊ต Oatly', price: 15 },
  { id: 'soy', name: 'นมถั่วเหลืองธรรมชาติ', price: 10 },
  { id: 'almond', name: 'นมอัลมอนด์', price: 15 }
];

const toppingOptions = [
  { id: 'brown-sugar-boba', name: 'ไข่มุกบราวน์ชูการ์', price: 10 },
  { id: 'crystal-boba', name: 'บุกคริสตัลใส', price: 10 },
  { id: 'whipped-cream', name: 'วิปครีมสดแท้', price: 15 },
  { id: 'extra-espresso', name: 'เพิ่มช็อตกาแฟ (+1 Shot)', price: 15 }
];

const bakeryAddons = [
  { id: 'extra-butter', name: 'เนยสดฝรั่งเศสเพิ่ม', price: 15 },
  { id: 'strawberry-jam', name: 'แยมสตรอว์เบอร์รีโฮมเมด', price: 15 }
];

// App State
let currentCategory = 'all';
let cart = [];
let activeModalItem = null;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  setupFilterButtons();
  checkStoreStatus();
  setupCartDrawer();
  setupCustomizationModal();
  setupSmoothScroll();
});

// Render Menu Cards
function renderMenu() {
  const container = document.getElementById('menu-grid');
  container.innerHTML = '';

  const filtered = currentCategory === 'all'
    ? menuData
    : menuData.filter(item => item.category === currentCategory);

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'vintage-card rounded-2xl overflow-hidden flex flex-col group';

    const tagsHtml = item.tags.map(tag => `
      <span class="text-xs px-2.5 py-0.5 rounded-full font-medium ${
        tag === 'ซิกเนเจอร์' || tag === 'แนะนำ' 
          ? 'bg-amber-100 text-amber-800 border border-amber-300' 
          : 'bg-[#EBF2EE] text-[#2C4A3E] border border-[#C5DDD0]'
      }">
        ${tag}
      </span>
    `).join(' ');

    card.innerHTML = `
      <div class="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
          ${tagsHtml}
        </div>
        <div class="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm border border-stone-200">
          <span class="text-xs text-stone-500 font-medium">เริ่มต้น</span>
          <span class="text-base font-bold text-[#2C4A3E] ml-1">฿${item.price}</span>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-baseline justify-between mb-1">
            <h3 class="text-lg font-bold text-[#2C4A3E] font-serif-vintage tracking-wide">${item.name}</h3>
          </div>
          <p class="text-xs text-stone-400 font-sans tracking-wider mb-2 uppercase">${item.nameEn}</p>
          <p class="text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">${item.description}</p>
        </div>

        <div class="pt-3 border-t border-stone-100 flex items-center justify-between mt-auto">
          <div class="text-xs text-stone-500">
            ${item.type === 'drink' ? '🧋 ปรับระดับหวาน/นม/ท็อปปิ้งได้' : '🥐 เลือกอบร้อน/แยมเพิ่มได้'}
          </div>
          <button 
            onclick="openCustomizeModal('${item.id}')"
            class="px-4 py-2 bg-[#2C4A3E] hover:bg-[#3D6655] text-white text-sm font-medium rounded-xl shadow-sm transition-all duration-200 flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <span>เลือกปรับแต่ง</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Setup Category Filter Buttons
function setupFilterButtons() {
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-[#2C4A3E]', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-stone-700', 'hover:bg-stone-50');
      });
      btn.classList.remove('bg-white', 'text-stone-700', 'hover:bg-stone-50');
      btn.classList.add('bg-[#2C4A3E]', 'text-white', 'shadow-md');

      currentCategory = btn.getAttribute('data-category');
      renderMenu();
    });
  });
}

// Check Store Open/Closed Live Status
function checkStoreStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour + minute / 60;

  const statusBadge = document.getElementById('store-status-badge');
  const statusDetail = document.getElementById('store-status-detail');
  const statusDot = document.getElementById('store-status-dot');

  // Closed on Tuesday (day === 2)
  if (day === 2) {
    statusBadge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200';
    statusDot.className = 'w-2 h-2 rounded-full bg-red-600';
    statusDetail.textContent = 'วันนี้ร้านหยุด (หยุดทุกวันอังคาร) • เปิดบริการพรุ่งนี้ 08:00 น.';
    return;
  }

  // Open 08:00 - 17:00
  if (currentTime >= 8 && currentTime < 17) {
    statusBadge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-300';
    statusDot.className = 'w-2.5 h-2.5 rounded-full bg-emerald-600 pulse-open';
    statusDetail.textContent = 'เปิดให้บริการอยู่ตอนนี้ (08:00 - 17:00 น.) ยินดีต้อนรับครับ!';
  } else {
    statusBadge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-300';
    statusDot.className = 'w-2 h-2 rounded-full bg-amber-600';
    statusDetail.textContent = 'ขณะนี้ร้านปิดให้บริการ • เปิดบริการ 08:00 - 17:00 น.';
  }
}

// Customization Modal Logic
function setupCustomizationModal() {
  const modal = document.getElementById('customize-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

function closeModal() {
  const modal = document.getElementById('customize-modal');
  modal.classList.add('hidden');
  activeModalItem = null;
}

window.openCustomizeModal = function(itemId) {
  const item = menuData.find(i => i.id === itemId);
  if (!item) return;

  activeModalItem = item;
  const modal = document.getElementById('customize-modal');

  // Fill item details
  document.getElementById('modal-item-img').src = item.image;
  document.getElementById('modal-item-name').textContent = item.name;
  document.getElementById('modal-item-name-en').textContent = item.nameEn;
  document.getElementById('modal-item-desc').textContent = item.description;
  document.getElementById('modal-item-base-price').textContent = `฿${item.price}`;
  document.getElementById('modal-qty').textContent = '1';

  // Containers
  const drinkOptionsSection = document.getElementById('drink-options-section');
  const bakeryOptionsSection = document.getElementById('bakery-options-section');

  if (item.type === 'drink') {
    drinkOptionsSection.classList.remove('hidden');
    bakeryOptionsSection.classList.add('hidden');

    // Sweetness options
    const sweetnessSection = document.getElementById('sweetness-section');
    if (item.allowSweetness) {
      sweetnessSection.classList.remove('hidden');
      document.querySelector('input[name="sweetness"][value="50%"]').checked = true;
    } else {
      sweetnessSection.classList.add('hidden');
    }

    // Milk options
    const milkSection = document.getElementById('milk-section');
    const milkContainer = document.getElementById('milk-options-container');
    if (item.allowMilk) {
      milkSection.classList.remove('hidden');
      milkContainer.innerHTML = milkOptions.map((milk, idx) => `
        <label class="cursor-pointer">
          <input type="radio" name="milk" value="${milk.id}" data-price="${milk.price}" data-name="${milk.name}" ${idx === 0 ? 'checked' : ''} class="sr-only peer custom-radio">
          <div class="px-3 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm font-medium peer-checked:border-[#2C4A3E] peer-checked:bg-[#2C4A3E] peer-checked:text-white hover:border-stone-400 transition-all flex justify-between items-center bg-white">
            <span>${milk.name}</span>
            <span class="font-bold ml-1">${milk.price > 0 ? `+฿${milk.price}` : 'ฟรี'}</span>
          </div>
        </label>
      `).join('');
    } else {
      milkSection.classList.add('hidden');
    }

    // Roast options (if coffee)
    const roastSection = document.getElementById('roast-section');
    if (item.allowRoast) {
      roastSection.classList.remove('hidden');
      document.querySelector('input[name="roast"][value="คั่วกลาง-เข้ม (Medium-Dark)"]').checked = true;
    } else {
      roastSection.classList.add('hidden');
    }

    // Toppings
    const toppingSection = document.getElementById('topping-section');
    const toppingContainer = document.getElementById('topping-options-container');
    if (item.allowTopping) {
      toppingSection.classList.remove('hidden');
      toppingContainer.innerHTML = toppingOptions.map(top => `
        <label class="cursor-pointer">
          <input type="checkbox" name="topping" value="${top.id}" data-price="${top.price}" data-name="${top.name}" class="sr-only peer custom-checkbox">
          <div class="px-3 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm font-medium peer-checked:border-[#2C4A3E] peer-checked:bg-[#2C4A3E] peer-checked:text-white hover:border-stone-400 transition-all flex justify-between items-center bg-white">
            <span>${top.name}</span>
            <span class="font-bold ml-1">+฿${top.price}</span>
          </div>
        </label>
      `).join('');
    } else {
      toppingSection.classList.add('hidden');
    }

  } else {
    // Bakery
    drinkOptionsSection.classList.add('hidden');
    bakeryOptionsSection.classList.remove('hidden');

    const addonContainer = document.getElementById('bakery-addons-container');
    addonContainer.innerHTML = bakeryAddons.map(addon => `
      <label class="cursor-pointer">
        <input type="checkbox" name="bakeryAddon" value="${addon.id}" data-price="${addon.price}" data-name="${addon.name}" class="sr-only peer custom-checkbox">
        <div class="px-3 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm font-medium peer-checked:border-[#2C4A3E] peer-checked:bg-[#2C4A3E] peer-checked:text-white hover:border-stone-400 transition-all flex justify-between items-center bg-white">
          <span>${addon.name}</span>
          <span class="font-bold ml-1">+฿${addon.price}</span>
        </div>
      </label>
    `).join('');
  }

  // Bind change listeners to re-calculate price
  modal.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', updateModalTotal);
  });

  updateModalTotal();
  modal.classList.remove('hidden');
};

function updateModalTotal() {
  if (!activeModalItem) return;

  let unitPrice = activeModalItem.price;

  if (activeModalItem.type === 'drink') {
    // Type (เย็น / ร้อน / ปั่น)
    const typeInput = document.querySelector('input[name="drinkType"]:checked');
    if (typeInput) unitPrice += parseInt(typeInput.dataset.price || 0);

    // Milk
    const milkInput = document.querySelector('input[name="milk"]:checked');
    if (milkInput) unitPrice += parseInt(milkInput.dataset.price || 0);

    // Toppings
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    toppings.forEach(t => unitPrice += parseInt(t.dataset.price || 0));
  } else {
    // Bakery addons
    const addons = document.querySelectorAll('input[name="bakeryAddon"]:checked');
    addons.forEach(a => unitPrice += parseInt(a.dataset.price || 0));
  }

  const qty = parseInt(document.getElementById('modal-qty').textContent || '1');
  const totalPrice = unitPrice * qty;

  document.getElementById('modal-total-price').textContent = `฿${totalPrice}`;
}

// Quantity adjusters in modal
window.adjustModalQty = function(delta) {
  const qtyEl = document.getElementById('modal-qty');
  let qty = parseInt(qtyEl.textContent) + delta;
  if (qty < 1) qty = 1;
  qtyEl.textContent = qty;
  updateModalTotal();
};

// Add to Cart
window.confirmAddToCart = function() {
  if (!activeModalItem) return;

  const qty = parseInt(document.getElementById('modal-qty').textContent);
  let customizations = [];
  let unitPrice = activeModalItem.price;

  if (activeModalItem.type === 'drink') {
    const drinkType = document.querySelector('input[name="drinkType"]:checked');
    if (drinkType) {
      customizations.push(drinkType.value);
      unitPrice += parseInt(drinkType.dataset.price || 0);
    }

    if (activeModalItem.allowSweetness) {
      const sweet = document.querySelector('input[name="sweetness"]:checked');
      if (sweet) customizations.push(`หวาน ${sweet.value}`);
    }

    if (activeModalItem.allowRoast) {
      const roast = document.querySelector('input[name="roast"]:checked');
      if (roast) customizations.push(roast.value);
    }

    if (activeModalItem.allowMilk) {
      const milk = document.querySelector('input[name="milk"]:checked');
      if (milk && milk.value !== 'fresh') {
        customizations.push(`${milk.dataset.name} (+฿${milk.dataset.price})`);
        unitPrice += parseInt(milk.dataset.price || 0);
      }
    }

    if (activeModalItem.allowTopping) {
      const toppings = document.querySelectorAll('input[name="topping"]:checked');
      toppings.forEach(t => {
        customizations.push(`${t.dataset.name} (+฿${t.dataset.price})`);
        unitPrice += parseInt(t.dataset.price || 0);
      });
    }
  } else {
    const warmOption = document.querySelector('input[name="warmOption"]:checked');
    if (warmOption) {
      customizations.push(warmOption.value);
    }

    const addons = document.querySelectorAll('input[name="bakeryAddon"]:checked');
    addons.forEach(a => {
      customizations.push(`${a.dataset.name} (+฿${a.dataset.price})`);
      unitPrice += parseInt(a.dataset.price || 0);
    });
  }

  // Create order item
  const orderItem = {
    cartId: Date.now() + Math.random().toString(36).substring(2, 6),
    itemId: activeModalItem.id,
    name: activeModalItem.name,
    nameEn: activeModalItem.nameEn,
    customizations: customizations,
    unitPrice: unitPrice,
    quantity: qty,
    totalPrice: unitPrice * qty
  };

  cart.push(orderItem);
  updateCartUI();
  closeModal();

  // Show Toast
  showToast(`เพิ่ม "${activeModalItem.name}" ลงในถาดแล้ว`);
};

// Cart Drawer & UI
function setupCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const openBtn = document.getElementById('floating-cart-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const backdrop = document.getElementById('cart-backdrop');

  const openDrawer = () => {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
  };

  const closeDrawer = () => {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
  };

  openBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
}

function updateCartUI() {
  const countBadge = document.getElementById('cart-badge-count');
  const floatingCount = document.getElementById('floating-cart-count');
  const floatingTotal = document.getElementById('floating-cart-total');
  const cartList = document.getElementById('cart-items-list');
  const emptyCartView = document.getElementById('cart-empty-view');
  const summarySection = document.getElementById('cart-summary-section');
  const cartGrandTotal = document.getElementById('cart-grand-total');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  // Update badges
  countBadge.textContent = totalCount;
  floatingCount.textContent = totalCount;
  floatingTotal.textContent = `฿${grandTotal}`;

  const floatingBtn = document.getElementById('floating-cart-btn');
  if (totalCount > 0) {
    floatingBtn.classList.remove('scale-0');
    floatingBtn.classList.add('scale-100');
  } else {
    floatingBtn.classList.add('scale-0');
    floatingBtn.classList.remove('scale-100');
  }

  // Update item list
  if (cart.length === 0) {
    emptyCartView.classList.remove('hidden');
    cartList.classList.add('hidden');
    summarySection.classList.add('hidden');
  } else {
    emptyCartView.classList.add('hidden');
    cartList.classList.remove('hidden');
    summarySection.classList.remove('hidden');

    cartList.innerHTML = cart.map(item => `
      <div class="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex flex-col gap-2">
        <div class="flex items-start justify-between">
          <div>
            <h4 class="font-bold text-[#2C4A3E] text-sm">${item.name}</h4>
            <span class="text-xs text-stone-400">${item.nameEn}</span>
          </div>
          <span class="font-bold text-stone-800 text-sm">฿${item.totalPrice}</span>
        </div>

        ${item.customizations.length > 0 ? `
          <div class="text-xs text-stone-500 bg-white p-2 rounded-lg border border-stone-100 space-y-0.5">
            ${item.customizations.map(c => `<div>• ${c}</div>`).join('')}
          </div>
        ` : ''}

        <div class="flex items-center justify-between pt-1 border-t border-stone-200/60 text-xs">
          <div class="flex items-center gap-2">
            <button onclick="changeCartQty('${item.cartId}', -1)" class="w-6 h-6 rounded-md bg-white border border-stone-300 flex items-center justify-center font-bold text-stone-700 hover:bg-stone-100 active:scale-95 cursor-pointer">-</button>
            <span class="font-bold text-sm text-stone-800 px-1">${item.quantity}</span>
            <button onclick="changeCartQty('${item.cartId}', 1)" class="w-6 h-6 rounded-md bg-white border border-stone-300 flex items-center justify-center font-bold text-stone-700 hover:bg-stone-100 active:scale-95 cursor-pointer">+</button>
          </div>
          <button onclick="removeCartItem('${item.cartId}')" class="text-red-500 hover:text-red-700 text-xs flex items-center gap-1 cursor-pointer">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            <span>ลบ</span>
          </button>
        </div>
      </div>
    `).join('');

    cartGrandTotal.textContent = `฿${grandTotal}`;
  }
}

window.changeCartQty = function(cartId, delta) {
  const item = cart.find(i => i.cartId === cartId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.cartId !== cartId);
  } else {
    item.totalPrice = item.unitPrice * item.quantity;
  }

  updateCartUI();
};

window.removeCartItem = function(cartId) {
  cart = cart.filter(i => i.cartId !== cartId);
  updateCartUI();
  showToast('ลบรายการเรียบร้อย');
};

window.clearCart = function() {
  if (confirm('ต้องการล้างรายการทั้งหมดในถาดใช่หรือไม่?')) {
    cart = [];
    updateCartUI();
    showToast('ล้างถาดรายการเรียบร้อย');
  }
};

// Generate Order Text for Copy / LINE
function generateOrderText() {
  if (cart.length === 0) return '';

  const grandTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const now = new Date();
  const dateStr = now.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  let text = `🌿 รายการสั่ง - ร่มรื่นคาเฟ่ 🌿\n`;
  text += `📅 เวลา: ${dateStr}\n`;
  text += `------------------------------------\n`;

  cart.forEach((item, idx) => {
    text += `${idx + 1}. ${item.name} (${item.nameEn}) x ${item.quantity}\n`;
    if (item.customizations.length > 0) {
      text += `   - ${item.customizations.join('\n   - ')}\n`;
    }
    text += `   ราคา: ฿${item.totalPrice}\n`;
  });

  text += `------------------------------------\n`;
  text += `💵 ยอดรวมทั้งหมด: ฿${grandTotal}\n`;
  text += `🙏 ขอบคุณที่เลือกความร่มรื่นครับ`;

  return text;
}

window.copyOrderToClipboard = function() {
  const text = generateOrderText();
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 คัดลอกรายการสั่งลงคลิปบอร์ดแล้ว!');
  }).catch(() => {
    showToast('เกิดข้อผิดพลาดในการคัดลอก');
  });
};

window.sendOrderToLine = function() {
  const text = generateOrderText();
  if (!text) return;

  // Encode for LINE URL scheme or direct share
  const encoded = encodeURIComponent(text);
  window.open(`https://line.me/R/msg/text/?${encoded}`, '_blank');
};

// Toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  toastMsg.textContent = message;
  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
  }, 2600);
}

// Smooth scroll for nav links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
