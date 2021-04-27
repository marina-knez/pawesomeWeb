import { http } from '../src/js/http'
import { ui } from '../src/js/ui'
import { form } from '../src/js/form-validation';

const cartIcon = document.querySelector('.fa-home');
const menuIcon = document.querySelector('.fa-paw');
const closeMenuBtn = document.querySelector('.close-navigation');
const closeCartBtn = document.querySelector('.home-cart__close-button');
const cart = document.querySelector('.home-cart');
const menu = document.querySelector('.menu-nav');
let index = 0;

cartIcon.addEventListener('click', openCart);
menuIcon.addEventListener('click', openMenu);

closeMenuBtn.addEventListener('click', closeMenu);
closeCartBtn.addEventListener('click', closeCart);

function openCart() {
    ui.setStylesOnElement(cart, {'right': '0'})
}

function openMenu() {
    ui.setStylesOnElement(menu, {'left': '0'})
}

function closeMenu() {
    ui.setStylesOnElement(menu, {'left': '-100%'})
}

function closeCart() {
    ui.setStylesOnElement(cart, {'right': '-100%'})
}

document.addEventListener('DOMContentLoaded', displayData)

document.querySelector('.home-cart').addEventListener('DOMContentLoaded', getHomeCartData)

document.querySelector('.home-cart__dog-list').addEventListener('click', deleteDogFromHomeCart)

if(window.location.href === 'http://localhost:8080/pristupnica.html') {
  document.querySelector('#fullName').addEventListener('blur', nameValidation2)
  document.querySelector('#DOB').addEventListener('keyup', ageValidation2)
  document.querySelector('#PIN').addEventListener('blur', oibValidation2)
  document.querySelector('#yourAddress').addEventListener('blur', addressValidation2)
  document.querySelector('#yourCity').addEventListener('blur', cityValidation2)
  document.querySelector('#zipCode').addEventListener('blur', zipValidation2)
  document.querySelector('#e-mail').addEventListener('blur', emailValidation2)
  document.querySelector('#phoneNo').addEventListener('blur', phoneValidation2)
  document.querySelector('.membership-form').addEventListener('input', formValidation2)
  document.querySelector('.submit-data').addEventListener('click', collectMembershipData)

} else if(window.location.href === 'http://localhost:8080/checkout.html') {
  document.querySelector('#name').addEventListener('blur', nameValidation)
  document.querySelector('#surname').addEventListener('blur', surnameValidation)
  document.querySelector('#date').addEventListener('keyup', ageValidation)
  document.querySelector('#oib').addEventListener('blur', oibValidation)
  document.querySelector('#address').addEventListener('blur', addressValidation)
  document.querySelector('#city').addEventListener('blur', cityValidation)
  document.querySelector('#zip').addEventListener('blur', zipValidation)
  document.querySelector('#email').addEventListener('blur', emailValidation)
  document.querySelector('#phone').addEventListener('blur', phoneValidation)
  document.querySelector('.adoption-form').addEventListener('input', formValidation)
  document.querySelector('.submit-btn').addEventListener('click', collectAdoptionData)
}

function displayData() {
  getHomeCartData()

  if(window.location.href === 'http://localhost:8080/udomi-me-%C5%BEivim-u-azilu.html') {
    getData()

    document.querySelector('.card').addEventListener('click', displayDetails)

  } else if(window.location.href === 'http://localhost:8080/udomi-me-%C5%BEivim-u-azilu-details-page.html') {
    getDetails()

    document.querySelector('.back-button').addEventListener('click', clearDetailsPage)

    document.querySelector('.add-button').addEventListener('click', submitDataToHomeCart)

  } else if (window.location.href === 'http://localhost:8080/bebe-azila.html') {
    getBabies()

    document.querySelector('.cards').addEventListener('click', displayDetails)

  } else if (window.location.href === 'http://localhost:8080/blog.html') {
    getBlogs()

    document.querySelector('.blog').addEventListener('click', displayBlogContent)

  } else if (window.location.href === 'http://localhost:8080/kedikom-po-svijetu-article.html') {
    getBlogArticle()

    document.querySelector('.article--back-btn').addEventListener('click', clearBlogArticlePage)
  } 
}

function getData() {
  http.get('http://localhost:3000/shelterDogs')
    .then(data => ui.showData(data))
    .catch(err => console.log(err));
}

function getDetails() {
  http.get('http://localhost:3000/dogDetails')
    .then(data => ui.showDetails(data))
    .catch(err => console.log(err))
}

function getBabies() {
  http.get('http://localhost:3000/shelterBabies')
    .then(data => ui.showBabies(data))
    .catch(err => console.log(err))
}

function getBlogs() {
  http.get('http://localhost:3000/blog')
    .then(data => ui.showBlog(data))
    .catch(err => console.log(err))
}

function getBlogArticle() {
  http.get('http://localhost:3000/blogArticle')
    .then(data => ui.showBlogArticle(data))
    .catch(err => console.log(err))
}

function getHomeCartData() {
  http.get('http://localhost:3000/dogsInHome')
    .then(data => ui.showHomeCartData(data))
    .catch(err => console.log(err))
}

function displayDetails(e) {
    if(e.target.classList.contains('card__title')) {
      const id = e.target.dataset.id
      const name = e.target.textContent
      const age = e.target.parentElement.nextElementSibling.textContent
      const imgURL = e.target.parentElement.parentElement.previousElementSibling.children[0].src
      const description = e.target.parentElement.nextElementSibling.nextElementSibling.textContent
    
      const data = {
        id,
        name,
        age,
        imgURL,
        description
      }
  
      http.post('http://localhost:3000/dogDetails', data)
          .then(data => {
            getDetails()
            
          })
          .catch(err => console.log(err))
    }
}

function clearDetailsPage(e) {
  const backBtn = document.querySelector('.back-button')
  const id = backBtn.nextElementSibling.children[0].children[1].children[0].dataset.id
      http.delete(`http://localhost:3000/dogDetails/${id}`)
        .then(data => {
          getDetails()
        })
        .then( window.location.href = 'http://localhost:8080/udomi-me-%C5%BEivim-u-azilu.html')
        .catch(err => console.log(err));
  e.preventDefault()
}

function submitDataToHomeCart(e) {
  const id = e.target.previousElementSibling.children[0].children[1].children[0].dataset.id
  const name = e.target.previousElementSibling.children[0].children[1].children[0].textContent
  const age = e.target.previousElementSibling.children[0].children[1].children[1].textContent
  const imgURL = e.target.previousElementSibling.children[0].children[0].children[0].src

  const data = {
    id,
    name,
    age,
    imgURL
  }

  http.post('http://localhost:3000/dogsInHome', data)
      .then(data => {
        ui.showAlert('Pas je dodan u kućicu!', 'alert alert-success', '.dog-details', '.details__container')
        getHomeCartData()
        
      })
      .catch(err => console.log(err))

  e.preventDefault()
}

function deleteDogFromHomeCart(e) {
  if(e.target.classList.contains('fa-trash')) {
    const id = e.target.parentElement.previousElementSibling.children[2].value
    if(confirm('Are You sure?')) {
      http.delete(`http://localhost:3000/dogsInHome/${id}`)
        .then(data => {
          ui.showAlert('Pas je uklonjen iz kućice!', 'alert alert-error', '.home-cart', '.home-cart__dog-list')
          getHomeCartData()
        })
        .catch(err => console.log(err))
    }
  }
  e.preventDefault()
}

function displayBlogContent(e) {
  if(e.target.classList.contains('blog-link')) {
    const id = e.target.id
    const title = e.target.parentElement.children[0].textContent
    const content = e.target.parentElement.children[1].textContent
    const content2 = e.target.parentElement.children[2].textContent
    const content3 = e.target.parentElement.children[3].textContent
    const content4 = e.target.parentElement.children[4].textContent
    const content5 = e.target.parentElement.children[5].textContent
  
    const data = {
      id,
      title,
      content,
      content2,
      content3,
      content4,
      content5
    }

    http.post('http://localhost:3000/blogArticle', data)
        .then(data => {
          getBlogArticle()
        })
        .catch(err => console.log(err))
  }
}

function clearBlogArticlePage() {
  const backBtn = document.querySelector('.article--back-btn')
  const id = backBtn.nextElementSibling.children[0].dataset.id
      http.delete(`http://localhost:3000/blogArticle/${id}`)
        .then(data => {
          getDetails()
        })
        .then( window.location.href = 'http://localhost:8080/blog.html')
        .catch(err => console.log(err));
  e.preventDefault()
}

function nameValidation() {
  form.validateName()
}

function nameValidation2() {
  form.validateName2()
}

function surnameValidation() {
  form.validateSurname()
}

function ageValidation() {
  form.calculateAge()
}

function ageValidation2() {
  form.calculateAge2()
}

function oibValidation() {
  form.validateOIB()
}

function oibValidation2() {
  form.validateOIB2()
}

function addressValidation() {
  form.validateAddress()
}

function addressValidation2() {
  form.validateAddress2()
}

function cityValidation() {
  form.validateCity()
}

function cityValidation2() {
  form.validateCity2()
}

function zipValidation() {
  form.validateZip()
}

function zipValidation2() {
  form.validateZip2()
}

function emailValidation() {
  form.validateEmail()
}

function emailValidation2() {
  form.validateEmail2()
}

function phoneValidation() {
  form.validatePhone()
}

function phoneValidation2() {
  form.validatePhone2()
}

function formValidation() {
  form.validateForm()
}

function formValidation2() {
  form.validateForm2()
}

function displayHomeCartDataWithAdoptionForm() {
  http.get('http://localhost:3000/dogsInHome')
    .then(data => ui.displayHomeCartData(data))
    .catch(err => console.log(err))
}

displayHomeCartDataWithAdoptionForm()

function collectAdoptionData(e) {
  const formData = document.querySelector('.adoption-form')
  const firstName = formData.children[0].children[0].value
  const lastName = formData.children[1].children[0].value
  const DOB = formData.children[2].children[0].value
  const OIB = formData.children[3].children[0].value
  const address = formData.children[4].children[0].value
  const city = formData.children[5].children[0].value
  const zipCode = formData.children[6].children[0].value
  const email = formData.children[7].children[0].value
  const phoneNo = formData.children[8].children[0].value

  const formCartData = document.querySelector('.form-cart')
  const id = formCartData.children[0].children[1].children[2].value
  const dogName = formCartData.children[0].children[1].children[0].textContent
  const dogAge = formCartData.children[0].children[1].children[1].textContent
  
    const data = {
      firstName,
      lastName,
      DOB,
      OIB,
      address,
      city,
      zipCode,
      email,
      phoneNo,
      dog: {
        id,
        dogName,
        dogAge
      }
    }
  
    http.post('http://localhost:3000/adoptionData', data)
        .then(data => {
          console.log(data)
          ui.showAlert('Vaš je zahtjev zaprimljen. Kontaktirat ćemo Vas u najkraćem mogućem roku. Hvala Vam!', 'alert alert-success', '.form-page')
        })
        .then (clearDetailsPage())
        .catch(err => console.log(err))
  
    e.preventDefault()
}

function collectMembershipData(e) {
  const membershipFormData = document.querySelector('.membership-form')
  const fullName = membershipFormData.children[0].children[0].value
  const DOB = membershipFormData.children[1].children[0].value
  const OIB = membershipFormData.children[2].children[0].value
  const address = membershipFormData.children[3].children[0].value
  const city = membershipFormData.children[4].children[0].value
  const zipCode = membershipFormData.children[5].children[0].value
  const email = membershipFormData.children[6].children[0].value
  const phoneNo = membershipFormData.children[7].children[0].value

    const data = {
      fullName,
      DOB,
      OIB,
      address,
      city,
      zipCode,
      email,
      phoneNo
    }
  
    http.post('http://localhost:3000/membershipData', data)
        .then(data => {
          console.log(data)
          ui.showAlert('Vaš je zahtjev zaprimljen. Kontaktirat ćemo Vas u najkraćem mogućem roku. Hvala Vam!', 'alert alert-success', '.form-page')
        })
        .catch(err => console.log(err))
  
    e.preventDefault()
}