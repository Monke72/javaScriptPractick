const cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let lena = { name: "elena" };
let alex = { name: " Aleks" };

cacheUser(lena);
cacheUser(alex);

lena = null; //weakMap помогает при удалении и работе с обьектами очищая полность.ю элементы вместе с ссылками

console.log(cache.has(lena));
console.log(cache.has(alex));
