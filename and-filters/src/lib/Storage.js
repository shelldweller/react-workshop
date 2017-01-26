class DataStorage {
    get(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    set(key, data) {
        window.localStorage[key] = JSON.stringify(data);
    }
}

export default DataStorage;
