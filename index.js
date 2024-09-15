/* Make sidebar links change color*/
const sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach(link => {
    link.addEventListener("mouseenter", function() {
        link.style.color = "gray";
    });
    link.addEventListener("mouseleave", function() {
        link.style.color = "white";
    });
})

/* Make content links change color*/
const bodyLinks = document.querySelectorAll('.page-text a');
bodyLinks.forEach(link => {
    link.addEventListener("mouseenter", function() {
        link.style.color = "blue";
    });
    link.addEventListener("mouseleave", function() {
        link.style.color = "#0077B5";
    });
})