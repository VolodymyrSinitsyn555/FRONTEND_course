// task-1

const array = [`Max`, 35, `Berlin`, `dog`];

function arrayToObject(arr) {
  const result = {};
  arr.forEach((element) => {
    result[element] = element;
  });
  return result;
}

const object = arrayToObject(array);
console.log(object);

// task-2

const array1 = [
  ["height", 170],
  ["weight", 80],
  ["sport", "regbi"],
  ["full name", "John Doe"],
  ["sing", "love"],
  ["speed", 90],
];

function arrayToObject1(arr) {
  const result = {};
  arr.forEach((pair) => {
    const key = pair[0];
    const value = pair[1];
    result[key] = value;
  });
  return result;
}

const object1 = arrayToObject1(array1)
console.log(object1);

// task-3

function objectValuesToString(obj) {
  const valuesArray = Object.values(obj);
  return valuesArray.join(', ');
}

const inputObj = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
const result = objectValuesToString(inputObj);
console.log(result);

// task-4

function transformObject(obj) {
  const transformedObj = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      transformedObj[key] = {
        value: obj[key],
        type: typeof obj[key] 
      };
    }
  }

  return transformedObj;
}

const inputObj1 = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
const result1 = transformObject(inputObj);
console.log(result1);

// task-5

// 5 задачу не успеваю сделать сегодня !
