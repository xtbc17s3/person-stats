function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const age = f.personAge.value
  const color = f.favoriteColor.value

  const div = document.querySelector('#stats')
  
  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${name}`
  list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  list.appendChild(ageItem)

  const colorItem = document.createElement('li')
  colorItem.textContent = `Favorite Color: ${color}`
  colorItem.style.backgroundColor = color
  list.appendChild(colorItem)

  div.appendChild(list)

  // div.innerHTML = '<p>' + name + ', age ' + age + '</p>'
  // div.innerHTML = `<p style="background-color: ${color}">${name}, age ${age}</p>`
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
