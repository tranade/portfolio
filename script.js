function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// new

document.addEventListener("DOMContentLoaded", function() {
    animateTitle();
  });
  
  function animateTitle() {
    const titleElement = document.getElementById("animatedTitle");
    const originalText = titleElement.innerText;
    const characters = originalText.split("");
  
    titleElement.innerText = "";
  
    characters.forEach((char, index) => {
      setTimeout(() => {
        titleElement.innerText += char;
      }, index * 100); // Adjust the timing based on your preference
    });
  }
  