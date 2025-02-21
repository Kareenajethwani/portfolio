document.addEventListener("DOMContentLoaded", function () {
    let seeMoreBtn = document.querySelector(".see-more-btn");
    let hiddenProjects = document.querySelector(".hidden-projects");

    if (seeMoreBtn && hiddenProjects) {  // Ensure elements exist
        seeMoreBtn.addEventListener("click", function () {
            if (hiddenProjects.style.display === "flex") {
                hiddenProjects.style.display = "none";
                this.textContent = "See More";
            } else {
                hiddenProjects.style.display = "flex";
                hiddenProjects.style.justifyContent = "center";
                this.textContent = "See Less";
            }
        });
    } else {
        console.error("Button or Hidden Projects section not found!");
    }
});


function openTab(event, tabName) {
    let tabs = document.querySelectorAll(".tab-pane");
    let buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach((tab) => tab.classList.remove("active"));
    buttons.forEach((btn) => btn.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

function toggleServices() {
    const hiddenServices = document.querySelector(".hidden-services");
    const btn = document.querySelector(".see-more-btn");

    if (hiddenServices.style.display === "none" || hiddenServices.style.display === "") {
        hiddenServices.style.display = "flex";
        btn.innerText = "See Less";
    } else {
        hiddenServices.style.display = "none";
        btn.innerText = "See More";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

function sendToWhatsApp() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    let phoneNumber = "918827983891"; // Apna WhatsApp number (with country code)  
    let text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    
    let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    window.open(url, '_blank');
}