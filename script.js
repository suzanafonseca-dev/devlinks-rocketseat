function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light-mode')
  /* 
  if (html.classList.contains('light-mode')) {
    html.classList.remove('light-mode')
  } else {
    html.classList.add('light-mode')
  } */
  const avatar = document.querySelector('#profile img')

  if (html.classList.contains('light-mode')) {
    avatar.setAttribute('src', './assets/avatar-light.png')
    avatar.setAttribute(
      'alt',
      'Foto de Mayk Brito sorrindo, usando óculos de sol e camisa preta, com fundo azul e roxo',
    )
  } else {
    avatar.setAttribute('src', './assets/avatar.png')
    avatar.setAttribute(
      'alt',
      'Foto de Mayk Brito sorrindo, usando óculos de grau e camisa preta, com fundo azul e roxo',
    )
  }
}
