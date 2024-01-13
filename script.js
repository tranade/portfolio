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

// document.addEventListener("DOMContentLoaded", function () {
//     // Initial animation on page load
//     animateTitle();

//     // Add event listeners to the navigation links
//     const navLinks = document.querySelectorAll('.nav-links a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             animateTitle();
//             // // Wait for a short delay before animating the title
//             // setTimeout(() => {
//             //     animateTitle();
//             // }, 500); // Adjust the timing based on your preference
//         });
//     });
// });

  
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

    // const titleElements = document.querySelectorAll(".title");

    // titleElements.forEach(titleElement => {
    //     const originalText = titleElement.innerText;
    //     const characters = originalText.split("");

    //     titleElement.innerText = "";

    //     characters.forEach((char, index) => {
    //         setTimeout(() => {
    //             titleElement.innerText += char;
    //         }, index * 100); // Adjust the timing based on your preference
    //     });
    // });
  }
  