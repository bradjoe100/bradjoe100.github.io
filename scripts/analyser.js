import { loadSetFromStorage } from "./data/sets.js";

function renderItems() {
    const id = new URLSearchParams(window.location.search).get('id');
    const set = loadSetFromStorage(id);
    const { items, image } = set;
    console.log(items);
    let columns = getComputedStyle(document.querySelector('.item-grid')).getPropertyValue('grid-template-columns').split(' ').length;
    let itemsHTML = '';
    for (let i = 0; i < columns; i++) {
        itemsHTML += `<div class="item-column">`;
        for (let j = 0; j < Math.floor((items.length - i - 1) / columns + 1); j++) {
            const item = items[j * columns + i];
            itemsHTML += `
                <div class="item">
                    <div class="item-image-box">
                        <img src="${getStatusImage(item.status)}" class="item-image">
                    </div>
                    <div class="item-right">
                        <div class="item-title">${item.item}</div>
                        <div class="item-text">${item.description}</div>
                    </div>
                </div>
            `;
        }
        itemsHTML += `</div>`;
    }
    document.querySelector('.item-grid').innerHTML = itemsHTML;
    document.querySelector('.image').src = image;

}

function getStatusImage(status) {
    switch (status) {
        case 'recyclable': /*case 'partly':*/
            return 'images/recycling-symbol.png';
        case 'special': /*case 'spec partly':*/
            return 'images/spec-recycling-symbol.png';
        default:
            return 'images/none.png'
    }
}

renderItems();