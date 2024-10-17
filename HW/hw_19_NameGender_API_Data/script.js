document
  .getElementById("nameForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const url = `https://api.genderize.io/?name=${name}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const resultDiv = document.getElementById("result");

      if (data.gender) {
        resultDiv.innerHTML = `
              <p>Имя: <strong>${data.name}</strong></p>
              <p>Пол: <strong>${data.gender}</strong></p>
              <p>Вероятность: <strong>${data.probability}</strong></p>
              <p>Количество выборок: <strong>${data.count}</strong></p>
          `;
      } else {
        resultDiv.innerHTML = `<p>Информация по имени "${name}" не найдена.</p>`;
      }
    } catch (error) {
      console.error("Ошибка:", error);
      document.getElementById("result").innerHTML =
        "<p>Произошла ошибка при получении данных.</p>";
    }
  });


