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

const imageSlider = () => {
  const container = document.querySelector('#image-container')
  const slideRight = document.querySelector('.img-right')
  const slideLeft = document.querySelector('.img-left')

  slideRight.addEventListener('click', e => {
    e.preventDefault()
    for (let i = 0; i < container.childElementCount; i++) {
      const slide = container.children[i];
      let j = i + 1
      const l = container.childElementCount - 1
      if (slide.classList.contains('active')) {
        slide === container.children[l] ? j = 0 : j = i + 1
        slide.classList.remove('active')
        slide.classList.add('hidden')
        container.children[j].classList.add('active')
        container.children[j].classList.remove('hidden')
        break
      }
      }
    })

    slideLeft.addEventListener('click', e => {
      e.preventDefault()
      for (let i = container.childElementCount; i > 0; i--) {
        const slide = container.children[i];
        let j = i - 1
        const l = container.childElementCount - 1
        if (slide.classList.contains('active')) {
          slide === container.children[0] ? j = container.childElementCount : j = i - 1
          slide.classList.remove('active')
          slide.classList.add('hidden')
          container.children[j].classList.add('active')
          container.children[j].classList.remove('hidden')
          break
        }
        }
      })
  }

imageSlider()
