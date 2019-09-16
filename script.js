let menuDrop = document.querySelectorAll('.has-submenu > a')

const dropDownMenu = () => {
  menuDrop.forEach(mdrop => {
    mdrop.addEventListener('click', e => {
      e.preventDefault()
      let subMenu = mdrop.parentNode.children[1]
      subMenu.classList.toggle('hidden')
    })
  })
}

dropDownMenu()
