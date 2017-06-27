function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const stats = document.querySelector('#stats')
  // stats.textContent = name
  stats.innerHTML = '<p>' + name + '</p>'
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
