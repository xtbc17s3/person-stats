function renderColor(color) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

function renderListItem(label, value) {
  const item = document.createElement('li')
  item.textContent = `${label}: `
  try {
    item.appendChild(value)
  } catch (e) {
    item.textContent += value
  }
  return item
}

function renderList(data) {
  const list = document.createElement('ul')

  Object.keys(data).map(label => {
    const item = renderListItem(label, data[label])
    list.appendChild(item)
  })

  return list
}

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  const person = {
    name: f.personName.value,
    age: f.age.value,
    favoriteColor: renderColor(f.favoriteColor.value),
  }

  const stats = document.querySelector('#stats')
  const list = renderList(person)
  stats.appendChild(list)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
