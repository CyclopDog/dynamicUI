let menuDrop = document.querySelectorAll('.has-submenu > a')

const dropDownMenu = () => {
  menuDrop.forEach(mdrop => {
    mdrop.addEventListener('click', e => {
      e.preventDefault()
      let subMenu = mdrop.parentNode.children[1]
      subMenu.classList.toggle('hidden-menu')
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
      for (let i = container.childElementCount-1; i >= 0; i--) {
        const slide = container.children[i];
        let j = i - 1
        const l = container.childElementCount - 1
        if (slide.classList.contains('active')) {
          slide === container.children[0] ? j = l : j = i - 1
          slide.classList.remove('active')
          slide.classList.add('hidden')
          container.children[j].classList.add('active')
          container.children[j].classList.remove('hidden')
          break
        }
        }
      })

  }

const auto = () => {
    setInterval(() => {
      document.querySelector('.img-right').click()
    }, 5000)
}

const imgDots = () => {
  const dotCtn = document.querySelector('.dots')
  const container = document.querySelector('#image-container')
  const amount = container.childElementCount
  
  for (let index = 0; index < amount; index++) {
    const a = document.createElement('a')
    dotCtn.appendChild(a)
    a.addEventListener('click', () => {
      const actImg = document.querySelector('.active')
      actImg.classList.remove('active')
      actImg.classList.add('hidden')
      container.children[index].classList.add('active')
      container.children[index].classList.remove('hidden')

    })
  }
  
}

imageSlider()
imgDots()
auto()
