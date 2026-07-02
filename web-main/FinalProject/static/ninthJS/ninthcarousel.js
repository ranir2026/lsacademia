function toggleSlide(slideCounter) {
    for (let i=0; i<slides.length; i++) {
        if (slides[i].classList.contains("modal-slide-hidden")) {
            slides[i].classList.remove("modal-slide-hidden")
        }

        if (i !== slideCounter) {
            slides[i].classList.add("modal-slide-hidden")
        }

        if (slides[i].classList.contains("modal-slide-visible")) {
            slides[i].classList.remove("modal-slide-visible")

        }
    }

    slides[slideCounter].classList.add("modal-slide-visible")
}

let slides = [
    document.getElementById("modalSlide1"),
    document.getElementById("modalSlide2"),
    document.getElementById("modalSlide3"),
    document.getElementById("modalSlide4"),
    document.getElementById("modalSlide5"),
    document.getElementById("modalSlide6"),
    document.getElementById("modalSlide7")
];


for (let i=0; i<slides.length; i++) {
    let navigationButtons = document.createElement("div")
    navigationButtons.className = "navigation-buttons";

    let nextBtn = document.createElement("button");
    nextBtn.id = 'nextClass'
    nextBtn.innerText = ">"
    nextBtn.type = "button" // to prevent default POST action since its within a form
    nextBtn.className = 'button1'
    if (i===6) {
        nextBtn.style = "display:none;opacity:0;"
    }

    let prevBtn = document.createElement("button");
    prevBtn.id = 'prevClass'
    prevBtn.type = "button" // to prevent default POST action since its within a form
    prevBtn.innerText = '<'
    prevBtn.className = 'button1'
    if (i===0) {
        prevBtn.style = "opacity:0;cursor:default;"
    }

    navigationButtons.appendChild(prevBtn)
    navigationButtons.appendChild(nextBtn)

    prevBtn.addEventListener("mouseup", function() {
        if (slideCounter > 0) {
            slideCounter--;
            toggleSlide(slideCounter)
        }
    })

    nextBtn.addEventListener("mouseup", function() {
        if (slideCounter < 6) {
            slideCounter++;
            toggleSlide(slideCounter)
        }
    })

    slides[i].insertBefore(navigationButtons, slides[i].firstChild)

}

let slideCounter = 0;
toggleSlide(0)
