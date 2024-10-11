console.log("Синхронный код: Начало");

setTimeout(() => {
  console.log("Макрозадача 1: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Микрозадача 1: Promise.then");
  return Promise.resolve();
}).then(() => {
  console.log("Микрозадача 2: Promise.then после микрозадачи 1");
});

queueMicrotask(() => {
  console.log("Микрозадача 3: queueMicrotask");
});

setTimeout(() => {
  console.log("Макрозадача 2: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Микрозадача 4: Promise.then");
  return Promise.resolve();
}).then(() => {
  console.log("Микрозадача 5: Promise.then после микрозадачи 4");
});

Promise.reject("Ошибка").catch((error) => {
  console.error("Promise.catch:", error);
});

Promise.resolve().finally(() => {
  console.log("Promise.finally: Выполняется после завершения промиса");
});

console.log("Синхронный код: Конец");