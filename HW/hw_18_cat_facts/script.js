const textCatFact = document.querySelector("#text-cat-fact");
const catPhoto = document.querySelector("#cat-photo");
const btnUpdate = document.querySelector("#btn-update");

async function getData() {
  try {
    const [res1, res2] = await Promise.all([
      fetch(`https://catfact.ninja/fact`),
      fetch(
        `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`
      ),
    ]);

    if (!res1.ok) {
      throw new Error(`Error on request catfact.ninja: ${res1.status}`);
    }

    if (!res2.ok) {
      throw new Error(`Error on request thecatapi.com: ${res2.status}`);
    }

    const data1 = await res1.json();
    const data2 = await res2.json();

    console.log("Cat fact:", data1);
    console.log("Cat image:", data2);

    textCatFact.textContent = data1.fact;
    catPhoto.src = data2[0].url;
  } catch (error) {
    console.log(error.message);
  }
}
getData();
btnUpdate.addEventListener(`click`, getData)