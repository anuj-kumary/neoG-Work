
const btnHide = document.querySelector(".btn--hide");
const numberHide = document.querySelector(".badge--number-right")

    btnHide.addEventListener('click',()=>{
        numberHide.classList.toggle('hide')
    })