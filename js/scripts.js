//document.querySelector('#my-vid').playbackRate = 0.5;

ScrollReveal().reveal('.headline');


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is in the viewport, add Animate.css classes
      entry.target.classList.add('animate__animated', 'animate__backInLeft'); // Replace with your desired animation
      observer.unobserve(entry.target); // Stop observing after animation starts (optional, for one-time animation)
    }
  });
});

// Select all elements you want to animate
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll'); // Add this class to your target elements

elementsToAnimate.forEach((element) => {
  observer.observe(element);
});