const url = 'https://api.chucknorris.io/jokes/random';
const button = document.querySelector(".btn")
const input = document.querySelector("#display-joke")

async function fetchdata() {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

button.addEventListener('click',async () => {
  const data = await fetchdata()
  console.log(data)
  input.innerHTML = data.value
})



