const openAlert = document.querySelector("#open-alert");
const closeAlerts = document.querySelectorAll("#close-alert");
const openSimple = document.querySelector("#open-simple");
const closeSimple = document.querySelectorAll(".nav-item");
const openConf = document.querySelector("#open-confirmation");
const closeConf = document.querySelectorAll("#close-conf-alert");
const modalAlert = document.querySelector(".modal-alert");
const modalSimple = document.querySelector(".modal-simple");
const modalConf = document.querySelector(".modal-confirmation");
const modalContainer = document.querySelector(".modal-container");

openAlert.addEventListener("click", () => {
  modalContainer.classList.add("show");
  modalAlert.style.display = "block";
});
openSimple.addEventListener("click", () => {
  modalContainer.classList.add("show");
  modalSimple.style.display = "block";
});
openConf.addEventListener("click", () => {
  modalContainer.classList.add("show");
  modalConf.style.display = "block";
});

closeSimple.forEach((item) => {
  item.addEventListener("click", () => {
    modalContainer.classList.remove("show");
    modalSimple.style.display = "none";
  });
});

closeAlerts.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
    modalAlert.style.display = "none";
  });
});
closeConf.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
    modalConf.style.display = "none";
  });
});