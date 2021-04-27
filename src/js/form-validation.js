class FormValidation {
    constructor() {
        this.name = document.querySelector('#name')
        this.surname = document.querySelector('#surname')
        this.fullName = document.querySelector('#fullName')
        this.date = document.querySelector('#date')
        this.dateOfBirth = document.querySelector('#DOB')
        this.oib = document.querySelector('#oib')
        this.pin = document.querySelector('#PIN')
        this.address = document.querySelector('#address')
        this.yourAddress = document.querySelector('#yourAddress')
        this.city = document.querySelector('#city')
        this.yourCity = document.querySelector('#yourCity')
        this.zip = document.querySelector('#zip')
        this.zipCode = document.querySelector('#zipCode')
        this.email = document.querySelector('#email')
        this.eMail = document.querySelector('#e-mail')
        this.phone = document.querySelector('#phone')
        this.phoneNo = document.querySelector('#phoneNo')
        this.submitBtn = document.querySelector('.submit-btn')
        this.submitData = document.querySelector('.submit-data')
    }

    validateName() {
        const re = /^[a-z A-Z]{2,10}$/

        if(!re.test(this.name.value)) {
            this.name.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitBtn.setAttribute('disabled', 'disabled')
        } else {
            this.name.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitBtn.removeAttribute('disabled')
        }
    }

    validateName2() {
        const re = /^[a-z A-Z]{2,10}$/

        if(!re.test(this.fullName.value)) {
            this.fullName.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitData.setAttribute('disabled', 'disabled')
        } else {
            this.fullName.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitData.removeAttribute('disabled')
        }
    }

    validateSurname() {
        const re = /^[a-z A-Z]{2,10}$/

        if(!re.test(this.surname.value)) {
            this.surname.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitBtn.setAttribute('disabled', 'disabled')
        } else {
            this.surname.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitBtn.removeAttribute('disabled')
        }
    }

    calculateAge() {
        let birthDate = new Date(this.date.value)
        let birthDate_day = birthDate.getDate()
        let birthDate_month = birthDate.getMonth() + 1
        let birthDate_year = birthDate.getFullYear()

        let todayDate = new Date()
        let todayDate_day = todayDate.getDate()
        let todayDate_month = todayDate.getMonth() + 1
        let todayDate_year = todayDate.getFullYear()

        let calculatedAge = 0

        if (todayDate_month > birthDate_month) {
            calculatedAge = todayDate_year - birthDate_year
        } else if (todayDate_month == birthDate_month) {
            if(todayDate_day >= birthDate_day) {
                calculatedAge = todayDate_year - birthDate_year
            } else {
                calculatedAge = todayDate_year - birthDate_year - 1
            }
        } else {
            calculatedAge = todayDate_year - birthDate_year - 1
        }

        if (calculatedAge < 18) {
            this.date.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitBtn.setAttribute('disabled', 'disabled')
        } else {
            this.date.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitBtn.removeAttribute('disabled')
        }
    }

    calculateAge2() {
        let birthDate = new Date(this.dateOfBirth.value)
        let birthDate_day = birthDate.getDate()
        let birthDate_month = birthDate.getMonth() + 1
        let birthDate_year = birthDate.getFullYear()

        let todayDate = new Date()
        let todayDate_day = todayDate.getDate()
        let todayDate_month = todayDate.getMonth() + 1
        let todayDate_year = todayDate.getFullYear()

        let calculatedAge = 0

        if (todayDate_month > birthDate_month) {
            calculatedAge = todayDate_year - birthDate_year
        } else if (todayDate_month == birthDate_month) {
            if(todayDate_day >= birthDate_day) {
                calculatedAge = todayDate_year - birthDate_year
            } else {
                calculatedAge = todayDate_year - birthDate_year - 1
            }
        } else {
            calculatedAge = todayDate_year - birthDate_year - 1
        }

        if (calculatedAge < 18) {
            this.dateOfBirth.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitData.setAttribute('disabled', 'disabled')
        } else {
            this.dateOfBirth.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitData.removeAttribute('disabled')
        }
    }

    validateOIB() {
        const re = /^[0-9]{11}$/

        if(!re.test(this.oib.value)) {
            this.oib.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitBtn.setAttribute('disabled', 'disabled')
        } else {
            this.oib.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitBtn.removeAttribute('disabled')
        }
    }

    validateOIB2() {
        const re = /^[0-9]{11}$/

        if(!re.test(this.pin.value)) {
            this.pin.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitData.setAttribute('disabled', 'disabled')
        } else {
            this.pin.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitData.removeAttribute('disabled')
        }
    }

    validateAddress() {
        const re = /^[a-z A-Z 0-9]{2,50}$/

        if(!re.test(this.address.value)) {
            this.address.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitBtn.setAttribute('disabled', 'disabled')
        } else {
            this.address.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitBtn.removeAttribute('disabled')
        }
    }

    validateAddress2() {
        const re = /^[a-z A-Z 0-9]{2,50}$/

        if(!re.test(this.yourAddress.value)) {
            this.yourAddress.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitData.setAttribute('disabled', 'disabled')
        } else {
            this.yourAddress.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitData.removeAttribute('disabled')
        }
    }

    validateCity() {
        const re = /^[a-z A-Z]{2,20}$/

        if(!re.test(this.city.value)) {
            this.city.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitBtn.setAttribute('disabled', 'disabled')
        } else {
            this.city.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitBtn.removeAttribute('disabled')
        }
    }

    validateCity2() {
        const re = /^[a-z A-Z]{2,20}$/

        if(!re.test(this.yourCity.value)) {
            this.yourCity.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitData.setAttribute('disabled', 'disabled')
        } else {
            this.yourCity.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitData.removeAttribute('disabled')
        }
    }

    validateZip() {
        const re = /^[0-9]{5}(-[0-9]{4})?$/
    
        if(!re.test(this.zip.value)) {
            this.zip.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitBtn.setAttribute('disabled', 'disabled')
        } else {
            this.zip.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitBtn.removeAttribute('disabled')
        }
    }

    validateZip2() {
        const re = /^[0-9]{5}(-[0-9]{4})?$/
    
        if(!re.test(this.zipCode.value)) {
            this.zipCode.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitData.setAttribute('disabled', 'disabled')
        } else {
            this.zipCode.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitData.removeAttribute('disabled')
        }
    }
    
    validateEmail() {
        const re = /^([a-z A-Z 0-9 _\-\.]+)@([a-z A-Z 0-9 _\-\.]+)\.([a-z A-Z]{2,5})$/
    
        if(!re.test(this.email.value)) {
            this.email.nextElementSibling.nextElementSibling.classList.add('is-invalid')
        } else {
            this.email.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
        }
    }

    validateEmail2() {
        const re = /^([a-z A-Z 0-9 _\-\.]+)@([a-z A-Z 0-9 _\-\.]+)\.([a-z A-Z]{2,5})$/
    
        if(!re.test(this.eMail.value)) {
            this.eMail.nextElementSibling.nextElementSibling.classList.add('is-invalid')
        } else {
            this.eMail.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
        }
    }

    validatePhone() {
        const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
    
        if(!re.test(this.phone.value)) {
            this.phone.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitBtn.setAttribute('disabled', 'disabled')
        } else {
            this.phone.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitBtn.removeAttribute('disabled')
        }
    }

    validatePhone2() {
        const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
    
        if(!re.test(this.phoneNo.value)) {
            this.phoneNo.nextElementSibling.nextElementSibling.classList.add('is-invalid')
            this.submitData.setAttribute('disabled', 'disabled')
        } else {
            this.phoneNo.nextElementSibling.nextElementSibling.classList.remove('is-invalid')
            this.submitData.removeAttribute('disabled')
        }
    }

    validateForm() {
        if(this.name.value.lenght > 0 &&
            this.surname.value.lenght > 0 &&
            this.date.value.lenght > 0 &&
            this.oib.value.lenght > 0 &&
            this.address.value.lenght > 0 &&
            this.city.value.lenght > 0 && 
            this.zip.value.lenght > 0 &&
            this.phone.value.lenght > 0) {
                this.submitBtn.setAttribute('disabled', 'disabled')
        } else {
            this.submitBtn.removeAttribute('disabled')
        }
    }

    validateForm2() {
        if(this.fullName.value.lenght > 0 &&
            this.dateOfBirth.value.lenght > 0 &&
            this.pin.value.lenght > 0 &&
            this.yourAddress.value.lenght > 0 &&
            this.yourCity.value.lenght > 0 && 
            this.zipCode.value.lenght > 0 &&
            this.phoneNo.value.lenght > 0) {
                this.submitData.setAttribute('disabled', 'disabled')
        } else {
            this.submitData.removeAttribute('disabled')
        }
    }
}

export const form = new FormValidation()