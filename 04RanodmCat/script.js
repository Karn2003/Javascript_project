const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector(".btn")
const imgContainer = document.querySelector('.container')

async function fetchImg(){
  const data = await fetch(url)
  return data.json()
}



btn.addEventListener('click',async () => {

  const data = await fetchImg()
  console.log(data)
  const element = document.createElement('img')
  element.width = data[0].width
  element.height = data[0].height
  element.src = data[0].url
  //console.log(imgContainer.hasChildNodes())

  if(imgContainer.hasChildNodes()){
    imgContainer.replaceChild(element)
  }
  else{
  imgContainer.appendChild(element)
  }

})

