function updateHeading(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const heading = document.querySelector('h1')
  heading.textContent = name
  // heading.innerHTML = name
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)
