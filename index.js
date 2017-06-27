function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const age = f.age.value
  const stats = document.querySelector('#stats')
  // stats.innerHTML = '<p>' + name + ', age ' + age + '</p>'
  // stats.innerHTML = `<p>${name}, age ${age}</p>`

  const p = document.createElement('p')
  p.textContent = `${name}, age ${age}`

  stats.appendChild(p)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
