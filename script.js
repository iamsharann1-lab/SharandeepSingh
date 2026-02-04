// PROJECT IMAGE POPUP
const projects = document.querySelectorAll(".project-card");
const modal = document.getElementById("imageModal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".modal-close");

projects.forEach(project => {
  project.addEventListener("click", () => {
    const img = project.getAttribute("data-image");
    modalImg.src = img;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
