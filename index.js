function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  const name = f.personName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${name}`
  list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  list.appendChild(ageItem)

  const colorItem = document.createElement('li')
  colorItem.textContent = favoriteColor
  colorItem.style.backgroundColor = favoriteColor
  list.appendChild(colorItem)

  const stats = document.querySelector('#stats')
  stats.appendChild(list)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
