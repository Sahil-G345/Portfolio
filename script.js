window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 500); // Wait for fade-out
});
