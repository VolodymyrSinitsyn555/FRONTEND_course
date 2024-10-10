// Пример 1: Проверка email-адреса с использованием test()
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = "example@example.com";
const isValidEmail = emailPattern.test(email);
console.log(isValidEmail); // true

// Пример 2: Извлечение всех чисел из строки с использованием match()
const text = "Сегодня 15 градусов, завтра будет 18 градусов.";
const numbers = text.match(/\d+/g); // ищем все числа
console.log(numbers); // ["15", "18"]

// Пример 3: Замена всех пробелов на дефисы с использованием replace()
const sentence = "Замена всех пробелов на дефисы";
const result = sentence.replace(/\s/g, "-");
console.log(result); // "Замена-всех-пробелов-на-дефисы"

// Пример 4: Проверка, содержит ли строка только буквы
const namePattern = /^[a-zA-Z]+$/;
const name = "JohnDoe";
const isValidName = namePattern.test(name);
console.log(isValidName); // true

// Пример 5: Проверка номера телефона
const phonePattern = /^\d{10}$/;
const phone = "1234567890";
const isValidPhone = phonePattern.test(phone);
console.log(isValidPhone); // true
