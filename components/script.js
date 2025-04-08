
  $(document).ready(function(){
    $("#owl-carousel-testimonial").owlCarousel({
      loop: true,
      items: 1,               // Enables infinite looping
      margin: 10,              // Space between items
      nav: true,               // Show navigation arrows
      autoplayHoverPause: true,
      autoplay: true,          // Enables autoplay
      autoplayTimeout: 3000,   // Time between slides (5 seconds)
      responsive: {            // Configure responsive behavior
        0: {
          items: 1             // 1 item on small screens
        },
        600: {
          items: 1             // 2 items on medium screens
        },
        1000: {
          items: 1             // 3 items on large screens
        }
      }
    });
  });



document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const itemHeight = items[0].offsetHeight;
  const visibleItems = 3; // Number of visible items at a time

  // Clone items for seamless looping
  for (let i = 0; i < visibleItems; i++) {
      const cloneFirst = items[i].cloneNode(true);
      const cloneLast = items[items.length - 1 - i].cloneNode(true);
      carousel.appendChild(cloneFirst);
      carousel.insertBefore(cloneLast, items[0]);
  }

  const totalItems = carousel.children.length;
  let currentIndex = visibleItems;

  // Initialize position
  carousel.style.transform = `translateY(-${currentIndex * itemHeight}px)`;

  function autoScroll() {
      currentIndex++;
      carousel.style.transition = "transform 1s linear";
      carousel.style.transform = `translateY(-${currentIndex * itemHeight}px)`;

      // Reset position when reaching the end of clones
      if (currentIndex >= totalItems - visibleItems) {
          setTimeout(() => {
              carousel.style.transition = "none";
              currentIndex = visibleItems;
              carousel.style.transform = `translateY(-${currentIndex * itemHeight}px)`;
          }, 1000); // Matches the transition duration
      }
  }

  // Start auto-scroll
  setInterval(autoScroll, 3000); // Change item every 3 seconds
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix"); // Get the suffix from data-suffix attribute
      const speed = 200; // Adjust speed here

      const updateCount = () => {
          const current = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (current < target) {
              counter.innerText = current + increment;
              setTimeout(updateCount, 10);
          } else {
              // If it's the last counter (satisfaction rate), just add the suffix
              counter.innerText = target + suffix;
          }
      };

      updateCount();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.scroll_image');

  const applyScrollEffect = () => {
    // Check if the screen width is for desktop
    if (window.innerWidth > 992) { // Adjust breakpoint as needed
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
      resetImages(); // Reset image positions for non-desktop views
    }
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight; // Viewport height
    const scrollPosition = window.scrollY;

    images.forEach((image) => {
      const container = image.closest('.scroll_image_container');
      const rect = container.getBoundingClientRect(); // Get container position relative to viewport

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Only apply the effect if the container is visible in the viewport
        const speed = parseFloat(image.getAttribute('data-speed')) || 0.5;
        const move = (rect.top - windowHeight / 2) * speed;
        image.style.transform = `translateY(${move}px)`;
      } else {
        // Reset position if the container is out of view
        image.style.transform = `translateY(0)`;
      }
    });
  };

  const resetImages = () => {
    images.forEach((image) => {
      image.style.transform = 'translateY(0)';
    });
  };

  // Apply the scroll effect on load and on window resize
  applyScrollEffect();
  window.addEventListener('resize', applyScrollEffect);
});




