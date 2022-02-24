const baselineSnackbar = document.querySelector(".baseline")
const leadingSnackbar = document.querySelector(".leading")
const stackedSnackbar = document.querySelector(".stacked")
const baselineBtn = document.querySelector("#btn-baseline");
const leadingBtn = document.querySelector("#btn-leading");
const stackedBtn = document.querySelector("#btn-stacked");
const snackBar = document.querySelector(".snackbar")
const closeIcon = document.querySelector(".snackbar__close")


baselineBtn.addEventListener('click',()=>{
    baselineSnackbar.style.display = "block";
    setTimeout(()=>{
       baselineSnackbar.style.display="none"
    },2000)
})
leadingBtn.addEventListener('click',()=>{
    leadingSnackbar.style.display = "block";
    setTimeout(()=>{
       leadingSnackbar.style.display="none"
    },2000)
})
stackedBtn.addEventListener('click',()=>{
    stackedSnackbar.style.display = "block";
    setTimeout(()=>{
       stackedSnackbar.style.display="none"
    },2000)
})

closeIcon.addEventListener("click",()=>{
   if(baselineSnackbar.className === "baseline"){
    baselineSnackbar.style.display="none"
   }
})