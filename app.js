//Initial animation
const tl = gsap.timeline({ default: { duration: 0.7, ease: 'power1.out' } })

tl.fromTo(
  '.cookie-container',
  { scale: 0 },
  { scale: 1, ease: 'elastic.out(1, 0.5)', duration: 1.5 }
)

tl.fromTo(
  '.cookie',
  { opacity: 0, x: -50, rotation: '-60deg' },
  { opacity: 1, x: 0, rotation: '0deg', duration: 0.6 },
  '<50%'
)

tl.fromTo('.text', { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '<')

//Cookie jump
tl.fromTo(
  '.cookie',
  { y: 0, rotation: '0deg' },
  { y: -20, rotation: '-20deg', yoyo: true, repeat: -1, duration: 0.5 }
)
tl.fromTo(
  '#crumbs',
  { y: 0 },
  { y: -20, yoyo: true, repeat: -1, duration: 0.5 },
  '<'
)

//Fading button
const button = document.querySelector('button')
button.addEventListener('click', () => {
  gsap.to('.cookie-container', {
    opacity: 0,
    y: 200,
    duration: 0.5,
    ease: 'power1.out'
  })
})
