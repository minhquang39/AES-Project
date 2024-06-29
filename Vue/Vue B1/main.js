function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) || {};
  return (storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
    },
    remove(key) {
      delete store[key];
    },
  });
}

console.log(createStorage);
