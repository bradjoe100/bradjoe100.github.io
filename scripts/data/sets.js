/** sets.js - handles local storage for the CyclrAI website
 * 
 *  @author Grant Zhou
 *  @since February 8, 2025
 */

let idList;
loadIdList();

function loadIdList() {
    idList = JSON.parse(localStorage.getItem('id-list')) || [];
}

function saveIdListToStorage() {
    localStorage.setItem('id-list', JSON.stringify(idList));
}

export function loadSetFromStorage(id) {
    return JSON.parse(localStorage.getItem(`set-${id}`)) || [];
}

export function saveToStorage(set) {
    let id = generateId();
    localStorage.setItem(`set-${id}`, JSON.stringify(set));
    idList.push(id);
    saveIdListToStorage();
    return id;
}

function generateId() {
    while (true) {
        let id = Math.random().toString(36).substring(2, 11);
        if (containsID(id) === false)
            return id;
    }
}

function containsID(id) {
    for (let listId in idList)
        if (listId === id)
            return true;
    return false;
}