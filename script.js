
  // Confetti function
  function launchConfetti() {
    var duration = 2 * 1000; // 2 seconds
    var end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff69b4', '#ffb6c1', '#8b008b', '#4b0082']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff69b4', '#ffb6c1', '#8b008b', '#4b0082']
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
