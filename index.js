function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  const name = f.personName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const p = document.createElement('p')
  p.textContent = `${name}, age ${age} ${favoriteColor}`
  p.style.backgroundColor = favoriteColor
  // p.setAttribute('id', name)

  const stats = document.querySelector('#stats')
  stats.appendChild(p)

  // stats.innerHTML = '<p>' + name + ', age ' + age + '</p>'
  // stats.innerHTML = `
  //   <p style="background-color: ${favoriteColor}">
  //     ${name}, age ${age}
  //   </p>
  // `
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
