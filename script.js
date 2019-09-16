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
        const dots = document.querySelector('.dots')
        dots.children[j].classList.add('selected')
        dots.children[i].classList.remove('selected')
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
          const dots = document.querySelector('.dots')
          dots.children[j].classList.add('selected')
          dots.children[i].classList.remove('selected')
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
    if (index === 0){a.classList.add('selected');}
    dotCtn.appendChild(a)
    a.addEventListener('click', (e) => {
      document.querySelector('.selected').classList.remove('selected')
      e.target.classList.add('selected')
      const actImg = document.querySelector('.active')
      actImg.classList.remove('active')
      actImg.classList.add('hidden')
      container.children[index].classList.add('active')
      container.children[index].classList.remove('hidden')

    })
  }

}

const form_validate = () => {
  const form = document.querySelector('form')
  const email = document.querySelector('#email')
  const emailConfirm = document.querySelector('#email-confirmation')
  const country = document.querySelector('#country')
  const zip = document.querySelector('#zip')
  const pass = document.querySelector('#password')
  const passConfirm = document.querySelector('#pass-confirm')

  form.addEventListener("submit", function (event) {
  // Each time the user tries to send the data, we check
  // if the email field is valid.
  if (!email.validity.valid) {

    // If the field is not valid, we display a custom
    // error message.
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
}, false);

email.addEventListener('focusout', () => {
  if (!email.checkValidity()) {
    email.classList.add('invalInput')
    document.querySelector('#email-error').innerHTML = email.validationMessage
  } else {
    email.classList.remove('invalInput')
    document.querySelector('#email-error').innerHTML = ""
  }
})

emailConfirm.addEventListener('focusout', () => {
  if (emailConfirm.value != email.value) {
    emailConfirm.classList.add('invalInput')
    emailConfirm.setCustomValidity("Need to match email above")
    document.querySelector('#emailconfirm-error').innerHTML = emailConfirm.validationMessage
  } else {
    emailConfirm.classList.remove('invalInput')
    document.querySelector('#emailconfirm-error').innerHTML = ""
  }
})

country.addEventListener('focusout', () => {
  if (!country.checkValidity()) {
    country.classList.add('invalInput')
    document.querySelector('#country-error').innerHTML = country.validationMessage
  } else {
    country.classList.remove('invalInput')
    document.querySelector('#country-error').innerHTML = ""
  }
})

zip.addEventListener('focusout', () => {
  if (!zip.checkValidity()) {
    zip.classList.add('invalInput')
    document.querySelector('#zip-error').innerHTML = zip.validationMessage
  } else {
    zip.classList.remove('invalInput')
    document.querySelector('#zip-error').innerHTML = ""
  }
})

pass.addEventListener('focusout', () => {
  if (!pass.checkValidity()) {
    pass.classList.add('invalInput')
    document.querySelector('#password-error').innerHTML = pass.validationMessage
  } else {
    pass.classList.remove('invalInput')
    document.querySelector('#password-error').innerHTML = ""
  }
})

passConfirm.addEventListener('focusout', () => {
  if ( passConfirm.value === pass.value ) {
    passConfirm.classList.remove('invalInput')
    document.querySelector('#passwordconfirm-error').innerHTML = ""
  } else {
    passConfirm.classList.add('invalInput')
    passConfirm.setCustomValidity("Need to match password")
    document.querySelector('#passwordconfirm-error').innerHTML = passConfirm.validationMessage
  }
})

}

dropDownMenu()
imageSlider()
imgDots()
form_validate()
//auto()
