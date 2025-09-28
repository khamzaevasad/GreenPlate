const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  sidebar.style.left = "0";
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-250px";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  sidebar.style.left = "-250px";
  overlay.style.display = "none";
});

// search function
const searchInput = document.getElementById("search");
const title = document.querySelectorAll(".card-heading");

searchInput.addEventListener("input", () => {
  const inputVal = searchInput.value.toLocaleLowerCase();
  title.forEach((item) => {
    if (item.textContent.toLocaleLowerCase().includes(inputVal)) {
      item.closest(".card").style.display = "flex";
    } else {
      item.closest(".card").style.display = "none";
    }
  });
});
