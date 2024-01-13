const inputEle = document.querySelector(".search");

// normal function
function normalFn(e) {
  console.log("Throttle", e.target.value);
}

// throttle function
function throttle(fn, delay = 500) {
  // creating this flag here as it forms closure to inner func
  let isCalled = true;
  let context = this;

  return function (...args) {
    if (isCalled) {
      fn.apply(context, args);
      isCalled = false;
      setTimeout(() => {
        isCalled = true;
      }, delay);
    }
  };
}
// creating throttle function i.e better function
const betterThrottleFn = throttle(normalFn, 1000);

// Throttle function with waiting arguments
function optimizedThrottle(fn, delay = 500) {
  // creating this flag here as it forms closure to inner func
  let isCalled = true;
  let waitingArgs;
  return (...args) => {
    if (!isCalled) {
      waitingArgs = args;
      return;
    }

    fn(...args);
    isCalled = false;

    setTimeout(() => {
      if (waitingArgs === null) {
        isCalled = true;
      } else {
        fn(...waitingArgs);
        waitingArgs = null;
      }
    }, delay);
  };
}
// creating throttle function i.e better function
const bestThrottleFn = optimizedThrottle(normalFn, 1000);
inputEle.addEventListener("input", (e) => {
  //   console.log("Normal fn", e.target.value);
  betterThrottleFn(e);
  //   bestThrottleFn(e);
});
