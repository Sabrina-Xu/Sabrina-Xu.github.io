// Nav

const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})



// Incrementing Counter

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 300

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})


//Scroll Animation

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}



// Clock

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];




function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)
setInterval(setTime, 1000)

// Expanding Cards

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// Double Vertical Slider

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}



// Auto Text Effect

const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "Let's fight Climate Change together!"
let idx = 2
let speed = 300 / 2

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 2
    }

    setTimeout(writeText, speed)
}




//Image Carousel

const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let ICidx = 0

let interval = setInterval(run, 3000)

function run() {
    ICidx++
    changeImage()
}

function changeImage() {
    if(ICidx > img.length - 1) {
        ICidx = 0
    } else if(idx < 0) {
        ICidx = img.length - 1
    }

    imgs.style.transform = `translateX(${-ICidx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    ICidx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    ICidx--
    changeImage()
    resetInterval()
})





// FAQ collapse

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})





// Testimonial Box


const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')


const testimonials = [

    
    
  {
    name: 'Naomi Klein',
    
    photo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Naomi_Klein_at_Berkeley%2C_California%2C_in_2014_%28cropped%29.jpg',
    text:
      "Change or be changed, right? And what we mean by that is that climate change, if we don't change course, if we don't change our political and economic system, is going to change everything about our physical world.",
  },
  {
    name: 'Barack Obama',
    
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAeozXa12VMqZj6PqPdwQSQoTaUi9l4Dx8Cg&usqp=CAU',
    text:'The world must come together to confront climate change. There is little scientific dispute that if we do nothing, we will face more drought, famine and mass displacement that will fuel more conflict for decades.',
  },
  {
    name: 'Elon Musk',
    
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9O6gSISQomNFB2L14dzebjJKpTBS0CbmBuA&usqp=CAU',
    text:"We are running the most dangerous experiment in history right now, which is to see how much carbon dioxide the atmosphere can handle before there is an environmental catastrophe.",
  },
  {
    name: 'Matt Gaetz',
    
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRazXUyf2MYAnay_D6ha5cL9V4z9CWf9fPA&usqp=CAU',
    text:"Climate change isn't something people get to choose to believe or not: it's happening.",
  }
  
    
]

let Tidx = 1

function updateTestimonial() {
  const { name, photo, text } = testimonials[Tidx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name


  Tidx++

  if (Tidx > testimonials.length - 1) {
    Tidx = 0
  }
}

setInterval(updateTestimonial, 10000)
