const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

// * task-1

// const arrayNamesAndIsJedi = starWarsHeroes.map((el) => {
//    return el.name + ` ` + el.isJedi;
// });
// console.log(arrayNamesAndIsJedi);

// function getNamesAndJediStatus(heroes) {
//    return heroes.map(
//       (el) => el.name + ' ' + el.isJedi // `${el.name} ${el.isJedi}`
//    );
// }
// const arrayNamesAndIsJedi = getNamesAndJediStatus(starWarsHeroes);
// console.log(arrayNamesAndIsJedi);

// * task-2

const arrayYounger40Age = starWarsHeroes.filter((hero) => hero.age < 40);
console.log(arrayYounger40Age);

// function filterYoungerThan40(heroes) {
//    return heroes.filter((hero) => hero.age < 40);
// }
// const arrayYounger40Age = filterYoungerThan40(starWarsHeroes);
// console.log(arrayYounger40Age);

// * task-3

// let sumAges = starWarsHeroes.reduce((acc, current) => acc + current.age, 0);
// console.log(`The sum of the years of all the heroes is ` + sumAges);

function sumAges(heroes) {
  return heroes.reduce((acc, current) => acc + current.age, 0);
}
let totalAges = sumAges(starWarsHeroes);
// console.log(totalAges);

// * task-4

// const updatedHeroes1 = starWarsHeroes.map((el) => ({
//    ...el,
//    age: el.age + 10,
// }));
// console.log(updatedHeroes1);

function updateHeroesAge(heroes) {
  return heroes.map((el) => ({ ...el, age: el.age + 10 }));
}
const updatedHeroes = updateHeroesAge(starWarsHeroes);
// console.log(updatedHeroes);

// * task-5.1

// const hero = starWarsHeroes.find((el) => el.name === 'Anakin Skywalker');
// if (hero) {
//    hero.name = 'Darth Vader';
//    hero.age = 50;
//    hero.isJedi = false;
// }

// console.log(starWarsHeroes);

// * task-5.2

function updateHero(name, newName, newAge, isJedi) {
  const hero = starWarsHeroes.find((el) => el.name === name);
  if (hero) {
    hero.name = newName;
    hero.age = newAge;
    hero.isJedi = isJedi;
  }
}

// Задание 1.1
// const starWarsHeroes = [
//     { name: "Anakin Skywalker", age: 30, isJedi: true },
//     { name: "Luke Skywalker", age: 25, isJedi: true },
//     { name: "Han Solo", age: 35, isJedi: false },
//     { name: "Princess Leia", age: 30, isJedi: false },
//     { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
// ];

const getOutAge = (starWarsHero) => ({
  name: starWarsHero.name,
  isJedi: starWarsHero.isJedi,
});

const starWarsHeroesModified = starWarsHeroes.map(getOutAge);

console.log(starWarsHeroesModified);

// Задание 1.2
// Создайте новый массив с джедаями младше 40 лет

// if else
// const filterJedi = (jedi) => {
//     if(jedi.age < 40 && jedi.isJedi) {
//         return true
//     } else return false
// }

// с помощью тернаного оператора
const filterJedi = (jedi) => (jedi.age < 40 && jedi.isJedi ? true : false);
const filteredStarWarsHeroes = starWarsHeroes.filter(filterJedi);
console.log(filteredStarWarsHeroes);

// Задание 1.3
// Посчитайте возраст всех джедаев

const sumOfJediAges = starWarsHeroes
  .filter((starWarsHero) => starWarsHero.isJedi)
  .reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
console.log(sumOfJediAges);

// Задание 1.4
// Повысьте возраст героев на 10 лет

const starWarsHeroesPlus10Years = starWarsHeroes.map((hero) => ({
  ...hero,
  age: hero.age + 10,
}));
console.log(starWarsHeroesPlus10Years);

// спред
// const exampleArray = [1, 2, 3];
// console.log(...exampleArray);
// console.log(Math.max(...exampleArray));
// const copyOfExampleArray = [...exampleArray];
// console.log([...exampleArray, ...[5, 10, 15]]);

// Задание 1.5
// Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }

function changeHero(hero) {
  // if (hero.name === 'Anakin Skywalker') {
  //     return { name: "Darth Vader", isJedi: false, age: 50 }
  // } else {
  //     return hero
  // }

  // const res = (hero.name === 'Anakin Skywalker') ? { name: "Darth Vader", isJedi: false, age: 50 } : hero;
  // return res;

  return hero.name === "Anakin Skywalker"
    ? { name: "Darth Vader", isJedi: false, age: 50 }
    : hero;
}

const starWarsHeroesWithDarthVader = starWarsHeroes.map(changeHero);
console.log(starWarsHeroesWithDarthVader);

const JohnyDepp = {
  name: "Johny",
  surname: "Depp",
  age: 50,
  hobbies: ["cricket", "bowling", "fishing"],
  films: {
    year1999: ["Pirates1", "Edward"],
    year2003: ["Pirates2", "Pirates3"],
  },
  singing() {
    console.log("I am singing");
  },
};

const allFilms = [...JohnyDepp.films.year1999, ...JohnyDepp.films.year2003];
console.log(allFilms);
