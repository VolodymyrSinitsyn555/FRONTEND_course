const starWarsHeroes = [
   { name: 'Anakin Skywalker', age: 30, isJedi: true },
   { name: 'Luke Skywalker', age: 25, isJedi: true },
   { name: 'Han Solo', age: 35, isJedi: false },
   { name: 'Princess Leia', age: 30, isJedi: false },
   { name: 'Obi-Wan Kenobi', age: 60, isJedi: true },
];

// * task-1

// const arrayNamesAndIsJedi = starWarsHeroes.map((el) => {
//    return el.name + ` ` + el.isJedi;
// });
// console.log(arrayNamesAndIsJedi);

function getNamesAndJediStatus(heroes) {
   return heroes.map(
      (el) => el.name + ' ' + el.isJedi // `${el.name} ${el.isJedi}`
   );
}
const arrayNamesAndIsJedi = getNamesAndJediStatus(starWarsHeroes);
console.log(arrayNamesAndIsJedi);

// * task-2

// const arrayYounger40Age = starWarsHeroes.filter((hero) => hero.age < 40);
// console.log(arrayYounger40Age);

function filterYoungerThan40(heroes) {
   return heroes.filter((hero) => hero.age < 40);
}
const arrayYounger40Age = filterYoungerThan40(starWarsHeroes);
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
   return heroes.map((el) => ({
      ...el,
      age: el.age + 10,
   }));
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

updateHero('Anakin Skywalker', 'Darth Vader', 50, false);
// console.log(starWarsHeroes);
