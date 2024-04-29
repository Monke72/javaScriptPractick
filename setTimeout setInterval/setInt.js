const printHello = (text) => {
  console.log(text);
};

const customSetInterval = (func, interval, ...params) => {
  setTimeout(() => {
    func(...params);
    customSetInterval(func, interval, ...params);
  }, interval);
};

customSetInterval(printHello, 1000, "text");
