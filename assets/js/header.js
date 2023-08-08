hamburger = document.querySelector(".hamburger");

hamburger.onclick= function(){
    navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
}

document.getElementById("button").addEventListener("click", function(){
    window.location.href = "views/login.html"
})



