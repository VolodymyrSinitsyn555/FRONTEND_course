fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

function fetchTasks(arrayOfTasks) {
  
}