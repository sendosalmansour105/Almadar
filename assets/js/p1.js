// show items .................................................................................


const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-items')
    }
    else {
      entry.target.classList.remove('show-items')
    }
  })
})

const scrollscale = document.querySelectorAll('.scroll-scale')
scrollscale.forEach((el) => observe.observe(el))

// filter ----------------------------------


const filterButton = document.querySelectorAll(".filter_button button")
const filterableCard = document.querySelectorAll(".filterable_cards .card")

const filterCard = e => {

    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    

    filterableCard.forEach(card =>{
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
             card.classList.remove("hide");
        }
    } )
}

filterButton.forEach(button => button.addEventListener("click" ,  filterCard))