const btn1 = document.getElementById("large-data");

btn1.addEventListener("click", () => {
  //   const workerObj = new Worker("worker.js");
  console.log("URL", import.meta.url);
  const workerObj = new Worker(new URL("worker.js", import.meta.url));
  workerObj.postMessage("Start worker");

  workerObj.onmessage = function (e) {
    const result = e.data;
    document.querySelector(".complex-output").innerHTML = result;
  };
});

const btn2 = document.getElementById("print-hello");
btn2.addEventListener("click", () => {
  document.querySelector(".greet").innerHTML += "Hello Rajan! ";
});
