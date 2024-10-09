//add class active for the scorlling to active the nav bar
let header = document.querySelector("header")
window.onscroll = function(){
    if (this.scrollY >= 50){
        header.classList.add("active")
       
    } else{
            header.classList.remove("active")
    }
}

//close th nav links in for responsive screen
let nav_links = document.getElementById("links_nav")
function open_close_menu(){
    nav_links.classList.toggle("active")
}