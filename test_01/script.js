const dogImg = document.querySelector("#img-dog");
const getDog = document.querySelector("#get-dog");

const fetchDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())

    .then((data) => {
      dogImg.src = data.message;
    });
};

fetchDog();

getDog.addEventListener("click", fetchDog);
