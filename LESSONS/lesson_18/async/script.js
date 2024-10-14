const taskList = document.querySelector('#task-list')

async function getData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!res.ok) {
      console.log(res)
      throw new Error(`Network error: ${res.status}`)
    }
    const data = await res.json();
    const shortData = data.slice(0, 15)
    shortData.map(task => {
      const li = document.createElement('li')
      li.textContent = task.title
      if (task.completed) {
        li.classList.add('completed')
      }
      taskList.append(li)
    })
  } catch (error) {
    console.log('ошибка:', error.message)
  }
}

getData()
