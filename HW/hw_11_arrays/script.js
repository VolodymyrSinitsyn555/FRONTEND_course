// -------- task-1

// V-1

let names = ["Мария", "Алексей", "Елена", "Дмитрий"];
let ages = [22, 31, 45, 53];
let nameAgeList = [];

nameAgeList.push(`${names[0]} ${ages[0]} года`);
nameAgeList.push(`${names[1]} ${ages[1]} год`);
nameAgeList.push(`${names[2]} ${ages[2]} лет`);
nameAgeList.push(`${names[3]} ${ages[3]} года`);

console.log(nameAgeList);

// V-2

names = ["Мария", "Алексей", "Елена", "Дмитрий"];
ages = [23, 38, 42, 51];
nameAgeList = [];

for (let i = 0; i < names.length; i++) {
  let age = ages[i];
  let ageLabel;

  if (age % 10 === 1 && age % 100 !== 11) {
    ageLabel = "год";
  } else if (
    [2, 3, 4].includes(age % 10) &&
    ![12, 13, 14].includes(age % 100)
  ) {
    ageLabel = "года";
  } else {
    ageLabel = "лет";
  }

  nameAgeList.push(`${names[i]} ${age} ${ageLabel}`);
}

console.log(nameAgeList);

// ------ task-2

console.log(`------- task-2`);
const reversedArray = nameAgeList.reverse();
console.log(reversedArray);

// ------ task-3

const countries = ["Франция", "Германия", "Италия"]
const element = countries.pop()
countries.unshift(element)
console.log('------ task-3');
console.log(countries);

// ------ task-4

const car = {
    brand: 'Tesla',
    model: `Highland`,
    year: 2024,
    isElectric: true,
    getCarInfo: () => `${car.brand} ${car.model} (${car.year})`
}
console.log('------ task-4');

console.log(`${car.brand} ${car.model} ${car.year} ${car.isElectric}`);
console.log(Object.keys(car));
console.log(car.getCarInfo());
console.log();

for (let key in car) {
    if (key !== 'getCarInfo') {
        console.log(`Ключ: ${key}, Значение: ${car[key]}`);
    }
}


