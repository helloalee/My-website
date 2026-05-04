// typing effect
const text = ["Full Stack Developer", "MERN Stack Dev", "Freelancer"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];
  
  if (!isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });

document.onmousemove = function(e){
  document.querySelector(".cursor").style.cssText =
    "left:" + e.clientX + "px; top:" + e.clientY + "px;";
}
