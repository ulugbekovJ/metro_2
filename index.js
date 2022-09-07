const categories = document.querySelector(".categories") ;
const span_group = document.querySelector(".span-group");
const all_categoriya = document.querySelector(".all-categoriya");

span_group.addEventListener('click', ()=>{
    categories.classList.toggle('show');
})
