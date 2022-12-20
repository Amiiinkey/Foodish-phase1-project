const CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/categories.php'

document.addEventListener('DOMContentLoaded', () => {


    // ROWS DATA
    const mealCategoryRow = document.getElementById('meal-categories')
    const hide = document.querySelector(".Landing-page")

    // LINKS DATA
    const categoriesLink = document.getElementById('category-link')
    const homeLink = document.getElementById('home-link')
    const contactLink = document.getElementById('contact-link')

   

    // CLICK EVENTS FOR LINKS
    categoriesLink.addEventListener('click', () => {

        hide.style.display = "none"
       
        // show categories
        mealCategoryRow.removeAttribute('hidden')
        mealCategoryRow.style.display = "flex"

    })

    homeLink.addEventListener("click", () => {
        hide.style.display = "block"
        mealCategoryRow.style.display = "none"

    })

   
    })

      // create category element
      const createCategory = (image, name) => {

        const rootDiv = document.createElement('div')
        rootDiv.classList.add('col-4', 'p-1')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'p-2')

        const categoryImg = document.createElement('img')
        categoryImg.classList.add('card-img-top')
        categoryImg.src = image

        const categoryTitle = document.createElement('h4')
        categoryTitle.classList.add('card-title')
        categoryTitle.innerText = name

        // append title and image to card
        cardDiv.appendChild(categoryImg)
        cardDiv.appendChild(categoryTitle)

        rootDiv.appendChild(cardDiv)

        return rootDiv

    }

    const loadCategories = () => {
        fetch(CATEGORIES)
            .then((response) => response.json())
            .then((data) => {
                const categoriesData = data.categories
                const categoryElems = categoriesData.map(
                    cat => createCategory(cat.strCategoryThumb, cat.strCategory)
                )
                mealCategoryRow.append(...categoryElems)
            })
    }
    loadCategories()
})
