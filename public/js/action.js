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

// prep-time && cook-time
const prepTime = document.querySelectorAll(".prep-time");
const cookTime = document.querySelectorAll(".cook-time");

// preptime filter
const prepTimeEl = document.getElementById("prepTime");

prepTimeEl.addEventListener("change", (e) => {
  prepTime.forEach((item) => {
    if (item.textContent == e.target.value || !e.target.value) {
      item.closest(".card").style.display = "flex";
    } else {
      item.closest(".card").style.display = "none";
    }
  });
});

// cookTime filter
const cookTimeEl = document.getElementById("cookTime");
cookTimeEl.addEventListener("change", (e) => {
  cookTime.forEach((item) => {
    if (item.textContent == e.target.value || !e.target.value) {
      item.closest(".card").style.display = "flex";
    } else {
      item.closest(".card").style.display = "none";
    }
  });
});
