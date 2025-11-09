
// Animate only when section is visible
//const section = document.querySelector('.counter-card').parentElement;

// const observer = new IntersectionObserver(entries => {
//   if (entries[0].isIntersecting) {
//     animateCounters();
//     observer.unobserve(section);
//   }
// }, { threshold: 0.5 });

// observer.observe(section);

// Counter animation


const counters = document.querySelectorAll('[data-target]');
const speed = 200; // lower is faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Run when page loads
document.addEventListener('DOMContentLoaded', animateCounters);

document.addEventListener("DOMContentLoaded", function() {
    
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentSlide = 0;
  const slideCount = slides.length;

  // स्लाईड बदलण्यासाठी फंक्शन
  function goToSlide(slideIndex) {
      if (slideIndex < 0) {
          slideIndex = slideCount - 1; // शेवटच्या स्लाईडवर जा
      } else if (slideIndex >= slideCount) {
          slideIndex = 0; // पहिल्या स्लाईडवर परत या
      }
      
      slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
      currentSlide = slideIndex;
  }

  // पुढची स्लाईड
  function nextSlide() {
      goToSlide(currentSlide + 1);
  }

  // मागील स्लाईड
  function prevSlide() {
      goToSlide(currentSlide - 1);
  }

  // बटणांवर क्लिक इव्हेंट जोडणे
  // (HTML मध्ये onclick="" वापरल्यामुळे याला कमेंट करत आहे)
  // nextBtn.addEventListener("click", nextSlide);
  // prevBtn.addEventListener("click", prevSlide);

  // दर 5 सेकंदांनी स्लाईड आपोआप बदलण्यासाठी
  setInterval(nextSlide, 5000); 
});

// HTML मध्ये onclick="" वापरल्यामुळे हे फंक्शन्स ग्लोबल ठेवावे लागतील
let currentSlideIndex = 0;

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
  }
  updateSlidePosition();
}

function prevSlide() {
  const slides = document.querySelectorAll(".slide");
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(${-currentSlideIndex * 100}%)`;
}

// दर 5 सेकंदांनी स्लाईड आपोआप बदलण्यासाठी
setInterval(nextSlide, 5000);