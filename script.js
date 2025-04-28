
  // Confetti function
  function launchConfetti() {
    var duration = 2 * 1000; // 2 seconds
    var end = Date.now() + duration;
    const isMobile = window.innerWidth <= 600;
    
    (function frame() {
      confetti({
        particleCount: isMobile ? 15 : 5,    // more particles for mobile
        spread: isMobile ? 160 : 120,              // wider spread on small screen
        scalar: isMobile ? 2 : 1,              // BIGGER pieces on mobile
        origin: { x: 0 }
      });

      confetti({
        particleCount: isMobile ? 15 : 5,    // more particles for mobile
        spread: isMobile ? 160 : 120,              // wider spread on small screen
        scalar: isMobile ? 2 : 1,              // BIGGER pieces on mobile
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // Add bounce animation to button
    const button = document.getElementById('celebrateButton');
    button.classList.add('bounce');
    setTimeout(() => {
      button.classList.remove('bounce');
    }, 1000); // remove bounce after 1 second
  }

  // Attach to button click
  document.getElementById('celebrateButton').addEventListener('click', launchConfetti);
