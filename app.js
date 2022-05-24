const modalOverlay = document.querySelector(".modal-overlay");
document.querySelector(".modal-btn").addEventListener("click", function() {
    if (modalOverlay.classList.contains("open-modal")) {
        modalOverlay.classList.remove("open-modal");
    } else {
        modalOverlay.classList.add("open-modal");
    }
});

document.querySelector(".close-btn").addEventListener("click", function() {
    modalOverlay.classList.remove("open-modal");
});

document.querySelectorAll(".pass").forEach((elem) => {
    elem.querySelector("i").addEventListener("click", () => {
        if (elem.querySelector("input").type === "password") {
            elem.querySelector("input").type = "text";
            elem.querySelector("i").classList.add("fa-eye-slash");
        } else {
            elem.querySelector("input").type = "password";
            elem.querySelector("i").classList.remove("fa-eye-slash");
        }
    });
});

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function() {
    links.classList.toggle("links-hidden");
});


const  main = document.querySelector(".main");
const tl = TimelineMax();

tl.fromTo(hero,1,{height: "0%"}, {height: "80%", ease: Power2.easeInOut})