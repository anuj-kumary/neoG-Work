
const header = document.querySelector(".container");
        const btns = header.querySelectorAll(".drawer__link");
        const icon = document.querySelector("#icon")
        const sidebar = document.querySelector(".sidebar")
        const modalIcon = document.querySelector("#modal-icon");
        const modalSidebar = document.querySelector(".modal-sidebar")


        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
          });
        }

        icon.addEventListener('click',()=>{
            sidebar.classList.toggle('show')
        })
        modalIcon.addEventListener('click',()=>{
            modalSidebar.classList.toggle('modal-show')
        })