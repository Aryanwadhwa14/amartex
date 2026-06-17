const AppEngine = {
    cartTotal: 0,
    activeContextItem: null,
    currentActiveMenu: 'home'
};

document.addEventListener('DOMContentLoaded', () => {
    initSearchEngine();
});

function modifyCart(productId, countChange) {
    AppEngine.cartTotal += countChange;
    if(AppEngine.cartTotal < 0) AppEngine.cartTotal = 0;
    
    const cartCounterEl = document.getElementById('globalCartCount');
    cartCounterEl.innerText = AppEngine.cartTotal;
    
    const cardElement = document.querySelector(`[data-prod-id="${productId}"] .add-to-cart-btn`);
    if (cardElement) {
        cardElement.style.transform = 'scale(1.2)';
        setTimeout(() => cardElement.style.transform = 'scale(1)', 150);
    }
}

function switchNav(element, conceptualView) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    AppEngine.currentActiveMenu = conceptualView;
    console.log(`Navigation frame Context routing established to layout layer view: [${conceptualView}]`);
}

function openVariantSheet(productTitle, availableOptionsArray) {
    const sheet = document.getElementById('variantSheet');
    const titleEl = document.getElementById('variantSheetTitle');
    const listContainer = document.getElementById('variantsContainer');
    
    AppEngine.activeContextItem = event.target.closest('.weight-selector');
    
    titleEl.innerText = `Select variant for ${productTitle}`;
    listContainer.innerHTML = '';
    
    availableOptionsArray.forEach(variantString => {
        const optionNode = document.createElement('div');
        optionNode.className = 'variant-option';
        optionNode.innerText = variantString;
        optionNode.onclick = function() {
            if (AppEngine.activeContextItem) {
                AppEngine.activeContextItem.querySelector('.selected-wt').innerText = variantString;
            }
            closeVariantSheet();
        };
        listContainer.appendChild(optionNode);
    });
    
    sheet.style.display = 'flex';
    setTimeout(() => {
        sheet.querySelector('.sheet-content').style.transform = 'translateY(0)';
    }, 50);
}

function closeVariantSheet() {
    const sheet = document.getElementById('variantSheet');
    sheet.querySelector('.sheet-content').style.transform = 'translateY(100%)';
    setTimeout(() => {
        sheet.style.display = 'none';
    }, 250);
}

function toggleWishlist(buttonEl) {
    const heartIcon = buttonEl.querySelector('i');
    if (heartIcon.classList.contains('fa-regular')) {
        heartIcon.className = 'fa-solid fa-heart';
        heartIcon.style.color = '#e50012';
    } else {
        heartIcon.className = 'fa-regular fa-heart';
        heartIcon.style.color = '#ef4444';
    }
}

function initSearchEngine() {
    const inputField = document.getElementById('productSearch');
    inputField.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        document.querySelectorAll('.product-card').forEach(card => {
            const heading = card.querySelector('.prod-title').innerText.toLowerCase();
            card.style.display = heading.includes(value) ? 'flex' : 'none';
        });
    });
}

function toggleLocation() { alert("Swapping regional delivery sectors across Haryana & Punjab warehouse nodes."); }
function seeAll(shelfName) { alert(`Loading expanded page framework details for channel: ${shelfName}`); }
function selectCategory(catName) { alert(`Filtering catalog indexes explicitly targeting inventory collection: ${catName}`); }
function openSupportChannel() { alert("Launching direct communication channel with Amartex customer care dispatch desk."); }