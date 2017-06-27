function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const div = document.querySelector('#stats')
  div.innerHTML = '<p>' + name + '</p>'
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
