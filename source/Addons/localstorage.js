export function localStorageSet(name,value){
    localStorage.setItem(name, value);
    return value
}
export function localStorageGet(name){
    const item = localStorage.getItem(name);
    if (name === null) {
        return false
    } else {
        return item
    }
}