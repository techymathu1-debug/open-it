function openPage() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
}
const blocks = document.querySelectorAll(".block");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  blocks.forEach(block => {
    const boxTop = block.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      block.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// run once on load
//revealOnScroll();
