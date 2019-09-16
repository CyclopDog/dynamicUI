let menuDrop = document.querySelectorAll('.has-submenu > a')
let subMenu = document.querySelectorAll('.has-submenu')

const dropDownMenu = () => {
  menuDrop.forEach(mdrop => {
    mdrop.addEventListener('click', e => {
      e.preventDefault()
      let subMenu = mdrop.parentNode.lastChild
      console.log(subMenu)
      subMenu.classList.toggle('hidden')
    })
  })
}

dropDownMenu()