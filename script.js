const images = document.querySelectorAll(".thumbs");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector("#modal-image");
const close = document.querySelector(".close");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modal.style.display = "block";

        close.addEventListener("click", () => {
            modal.style.display = "none";
        })
    })
})

