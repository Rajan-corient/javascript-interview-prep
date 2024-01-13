const inputEle = document.querySelector(".search");

// normal function
function normalFn(e) {
  console.log(e.target.value);
}
// inputEle.addEventListener("input", normalFn);

// debounced function
function debounce(fn, delay = 500) {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      //   console.log("this", context);
      fn.apply(context, args);
    }, delay);
  };
}
// creating debounced function i.e better function
var betterFn = debounce(normalFn, 1000);
inputEle.addEventListener("input", betterFn);
