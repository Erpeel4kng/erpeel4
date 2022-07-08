const openNavMenu = document.querySelector(".open-nav-menu");
const navMenu = document.querySelector(".nav-menu");
const mediaSize = 991;


openNavMenu.addEventListener("click", toggleNav);

openNavMenu.addEventListener("click", () => {
  openNavMenu.classList.toggle("active");
})

function toggleNav() {
  navMenu.classList.toggle("open");
}

navMenu.addEventListener("click", (event) => {
  if(event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize){
    event.preventDefault();
    const menuItemHasChildren = event.target.parentElement;
    
    if(menuItemHasChildren.classList.contains("active")){
      collapseSubMenu();
    }
    else{
      if(navMenu.querySelector(".menu-item-has-children.active")){
        collapseSubMenu();
      }
      
      menuItemHasChildren.classList.add("active");
      const subMenu = menuItemHasChildren.querySelector(".sub-menu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
});

function collapseSubMenu(){
  navMenu.querySelector(".menu-item-has-children.active .sub-menu").removeAttribute("style");
  navMenu.querySelector(".menu-item-has-children.active").classList.remove("active");
}

function resizeFix(){
  if(navMenu.classList.contains("open")){
    toggleNav();
  }
  
  if(navMenu.querySelector(".menu-item-has-children.active")){
    collapseSubMenu();
  }
}

window.addEventListener("resize", function(){
  if(this.innerWidth > mediaSize){
    resizeFix();
  }
})
