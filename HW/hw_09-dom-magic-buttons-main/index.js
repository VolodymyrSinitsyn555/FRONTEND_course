// // найдем первую кнопку по id
// const btn = document.getElementById("magic-btn");
// // скопируем ее - получилась вторая кнопка. Ее можно использовать.
// const clonedBtn = btn.cloneNode(true);
// // задали id
// clonedBtn.id = "magic-btn-2";

// btn.addEventListener('click', () => {
//   // при нажатии на первую кнопку
//   // работайте с clonedBtn
//   // ваш код начинается здесь
  
// })

// // здесь можете создать EventListener для второй кнопки

let btn = document.getElementById("magic-btn")
let clonedBtn = btn.cloneNode(true);
clonedBtn.className = "magic-btn-2"
clonedBtn.style.color = 'wight'
clonedBtn.style.backgroundColor = '#a78b71'
clonedBtn.innerText = 'Я изменю тебя'

btn.addEventListener('click', () => {
  document.body.append(clonedBtn)}
)

clonedBtn.addEventListener('click', () => {
  btn.style.color = 'black'
  btn.style.backgroundColor = '#9c4a1a'
})




