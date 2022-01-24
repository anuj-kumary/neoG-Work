const scrollableTabs = document.querySelectorAll(".scrollable-tab");

function changeScrollableClass(event, tabs, tabUnderline) {
  event.preventDefault();
  tabs.forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");
  event.target.scrollIntoView({ behavior: "smooth", inline: "center" });
}

scrollableTabs.forEach((link) =>
  link.addEventListener("click", (e) =>
    changeScrollableClass(e, scrollableTabs,"scrollBottomLine")
  )
);
