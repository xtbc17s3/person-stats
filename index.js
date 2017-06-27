function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const age = f.personAge.value
  const div = document.querySelector('#stats')
  
  const p = document.createElement('p')
  p.textContent = `${name}, age ${age}`

  div.appendChild(p)

  // div.innerHTML = '<p>' + name + ', age ' + age + '</p>'
  // div.innerHTML = `<p>${name}, age ${age}</p>`
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
