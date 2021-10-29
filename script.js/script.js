// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

btn.addEventListener("click", () => {
  modal.classList.add("modal-display");
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
  modal.classList.remove("modal-display");
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.classList.remove("modal-display");
  }
});
