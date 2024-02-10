import { content, homePage } from './homePage'
import { menuPage } from './menu'
import { aboutPage } from './about'
import { contactPage } from './contact'

const home = document.querySelector('.home')
const menu = document.querySelector('.menu')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')

menu.addEventListener('click', () => {
	menuPage()
})

about.addEventListener('click', () => {
	aboutPage()
})

contact.addEventListener('click', () => {
	contactPage()
})

home.addEventListener('click', () => {
	homePage()
})

document.addEventListener('DOMContentLoaded', () => {
	homePage()
})
