class UI {
    constructor() {
        this.details = document.querySelector('.dog-details')
        this.dogImg = document.querySelector('.details__image')
        this.dogName = document.querySelector('.details__tile')
        this.dogAge = document.querySelector('.details__description')
        this.dogInfo = document.querySelector('.details__info')
        this.idInput = document.querySelector('#id')
        this.forState = 'view'
    }

    setStylesOnElement(element, styles) {
        Object.assign(element.style, styles)
    }

    showData(shelterDogs) {
        const list = document.querySelector('.card');
        let output = '';

    shelterDogs.forEach((dog) => {
        output += `
        <li class="card__list-item">
            <div class="card__section">
                <div class="card__image">
                    <img src="${dog.imgURL}" alt="dogo img" class="card__image"/>
                    <img src="../src/assets/background-logo/udomi-hover-img.jfif" alt="udomi me img" class="card__image--hover"/>
                </div>
                <div class="card__content">
                    <a href="../udomi-me-živim-u-azilu-details-page.html" class="card__link">
                        <h3 class="card__title" data-id="${dog.id}">${dog.name}</h3>
                    </a>
                    <p class="card__description">Born in: ${dog.age}</p>
                    <p class="details__info">${dog.description}</p>
                    <input type="hidden" id="id" value="${dog.id}">
                </div>
            </div>
        </li>
        `
    })
    list.innerHTML = output
    }

    showDetails(dogDetails) {
        let output = '';

        dogDetails.forEach((dog) => {
        output += `
        <div class="details__container">
        <div class="details__image">
            <img src="${dog.imgURL}" alt="dogo img" class="details__image--dog"/>
        </div>
        <div class="details__content">
            <h3 class="details__title" data-id="${dog.id}">${dog.name}</h3>
            <p class="details__description">${dog.age}</p>
            <p class="details__info">${dog.description}</p>
            <input type="hidden" id="id" value="${dog.id}">
        </div>
        </div>
        `
    })
    document.querySelector('.dog-details').innerHTML = output;
    document.querySelector('.details__info').style.display = 'block'
    }

    showBabies(shelterBabies) {
        const list = document.querySelector('.cards');
        let output = '';

        shelterBabies.forEach((dog) => {
        output += `
        <li class="card__list-item">
            <div class="card__section">
                <div class="card__image">
                    <img src="${dog.imgURL}" alt="dogo img" class="card__image"/>
                    <img src="../src/assets/background-logo/udomi-hover-img.jfif" alt="udomi me img" class="card__image--hover"/>
                </div>
                <div class="card__content">
                    <a href="../udomi-me-živim-u-azilu-details-page.html" class="card__link">
                        <h3 class="card__title" data-id="${dog.id}">${dog.name}</h3>
                    </a>
                    <p class="card__description">Born in: ${dog.age}</p>
                    <p class="details__info">${dog.description}</p>
                    <input type="hidden" id="id" value="${dog.id}">
                </div>
            </div>
        </li>
        `
    })
    list.innerHTML = output
    }

    showHomeCartData(dogsInHome) {
        let output = '';

        dogsInHome.forEach((dog) => {
        output += `
        <li class="home-cart__dog-item">
          <div class="home-cart__dog-img">
            <img src="${dog.imgURL}" alt="" />
          </div>

          <div class="home-cart__dog-details">
            <h3 class="home-cart__dog-name">${dog.name}</h3>
            <p class="home-cart__dog-description">${dog.age}</p>
            <input type="hidden" id="id" value="${dog.id}">
          </div>
          <div class="home-cart__icons">
            <i class="fas fa-trash"></i>
          </div>
        </li>
        `
    })
    document.querySelector('.home-cart__dog-list').innerHTML = output;
    }

    displayHomeCartData(dogsInHome) {
        let output = '';

        dogsInHome.forEach((dog) => {
        output += `
        <div class="form-cart__data">
          <div class="form-cart__dog-img">
            <img src="${dog.imgURL}" alt="" />
          </div>

          <div class="form-cart__dog-details">
            <h3 class="form-cart__dog-name">${dog.name}</h3>
            <p class="form-cart__dog-description">${dog.age}</p>
            <input type="hidden" id="id" value="${dog.id}">
          </div>
        </div>
        `
    })
    document.querySelector('.form-cart').innerHTML = output;
    }

    showBlog(blog) {
        let output = '';

        blog.forEach((article) => {
        output += `
        <section class="blog__section">
            <h2 class="blog__title" data-id="${article.id}">Kedikom po svijetu ${article.id}</h2>
            <p>${article.content}</p>
            <p class="blog__content">${article.content2}</p>
            <p class="blog__content">${article.content3}</p>
            <p class="blog__content">${article.content4}</p>
            <p class="blog__content">${article.content5}</p>
            <a href="./kedikom-po-svijetu-article.html" class="blog-link" id="${article.id}">Pročitajte više...</a>
        </section>
        `
    })
    document.querySelector('.blog').innerHTML = output;
    }

    showBlogArticle(blogArticle) {
        let output = '';

        blogArticle.forEach((article) => {
        output += `
            <h2 class="blog__title" data-id="${article.id}">Kedikom po svijetu ${article.id}</h2>
            <p class="blog--initial-content">${article.content}</p>
            <p class="blog__content">${article.content2}</p>
            <p class="blog__content">${article.content3}</p>
            <p class="blog__content">${article.content4}</p>
            <p class="blog__content">${article.content5}</p>
        `
    })
    document.querySelector('.blog-article').innerHTML = output;
    document.querySelectorAll('.blog__content').forEach(function(content) {
        content.style.display = 'block'
    })
    }

    showAlert(message, className, element1, element2) {
        this.clearAlert()
        const div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector(element1)
        const content = document.querySelector(element2)
        container.insertBefore(div, content)

        setTimeout(() => {
            this.clearAlert()
        }, 3000)
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert')
        if(currentAlert) {
            currentAlert.remove()
        }
    }
}



export const ui = new UI()