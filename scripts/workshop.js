import { idList, loadSetFromStorage } from './data/sets.js';

function loadItems() {
    let itemsHTML = '';
    console.log(idList);
    for (let id of idList) {
        console.log(id);
        const set = loadSetFromStorage(id);
        console.log(id);
        console.log(set);
        const { items } = set;
        itemsHTML +=
        `
            <div class="file">
                <div class="file-title">Recycling List</div>
                <div class="file-bottom">
                    <div class="items-tag">
                        <img src="images/item.png" class="items-tag-icon">
                        <div class="items-tag-text">${items.length} items left</div>
                    </div>
                </div>
            </div>
        `
        document.querySelector('.file-grid').innerHTML = itemsHTML;
    }
}

loadItems();