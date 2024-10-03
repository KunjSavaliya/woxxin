import React, { useEffect, useRef } from 'react';

const BubbleText = () => {
  const canvasRef = useRef(null);
  const text = 'JOIN WOXXIN TODAY'; // The text you want to render with bubbles
  const textColor = '#6C63FF'; // Text color

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return; // Check if canvas is available
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const setCanvasSize = () => {
      const canvasWidth = canvas.parentElement.offsetWidth; // Responsive width
      const canvasHeight = canvas.parentElement.offsetHeight; // Responsive height
      if (canvasWidth && canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }
    };

    setCanvasSize();

    let mouse = { x: null, y: null, radius: 100 }; // Adjust the radius for repulsion effect
    let particles = [];
    const particleSize = 1.5; // Size of particles

    // Adjust text size based on canvas width and height
    const getTextSize = () => Math.min(canvas.width * 0.15, canvas.height * 0.4); // Text size
    const getTextOffsetY = (textSize) => (canvas.height + textSize * 0.35) / 2; // Adjust vertical position

    // Capture mouse movement
    window.addEventListener('mousemove', (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    // Draw text to canvas and map particles to it
    function drawText() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const textSize = getTextSize();
      const textOffsetY = getTextOffsetY(textSize);
      ctx.fillStyle = textColor;
      ctx.font = `bold ${textSize}px Arial`;

      // Measure text width and calculate the horizontal offset to center it
      const textWidth = ctx.measureText(text).width;
      const textOffsetX = (canvas.width - textWidth) / 2; // Center the text horizontally

      ctx.fillText(text, textOffsetX, textOffsetY);

      if (canvas.width === 0 || canvas.height === 0) return;

      // Get image data from the canvas where the text was drawn
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      particles = [];
      for (let y = 0; y < canvas.height; y += 4) { // Adjust spacing for denser particles
        for (let x = 0; x < canvas.width; x += 4) {
          const alpha = imageData[(y * canvas.width + x) * 4 + 3]; // Alpha value
          if (alpha > 128) {
            particles.push(new Particle(x, y));
          }
        }
      }
    }

    // Particle class with mouse interaction
    class Particle {
      constructor(x, y) {
        this.x = x + Math.random() * 20 - 10; // Randomize initial positions
        this.y = y + Math.random() * 20 - 10;
        this.targetX = x;
        this.targetY = y;
        this.color = 'rgba(108, 99, 255, 0.5)'; // Particles in matching color to text
        this.dx = (Math.random() - 0.5) * 5;
        this.dy = (Math.random() - 0.5) * 5;
        this.speed = 0.03; // Speed for returning to the original position
      }

      // Method to update particle position and apply mouse interaction
      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          let angle = Math.atan2(dy, dx);
          let force = (mouse.radius - distance) / mouse.radius;
          let repulseX = Math.cos(angle) * force * 8; // Increased repulsion force
          let repulseY = Math.sin(angle) * force * 8;

          this.x -= repulseX;
          this.y -= repulseY;
        } else {
          this.x += (this.targetX - this.x) * this.speed;
          this.y += (this.targetY - this.y) * this.speed;
        }

        this.draw();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, particleSize, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update());
      requestAnimationFrame(animate);
    }

    // Initialize particles and animation
    drawText();
    animate();

    // Handle window resize with debounce to prevent rapid resizing issues
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
        drawText();
      }, 200); // Debounce times
    });

    return () => {
      // Clean up the event listeners on unmount
      window.removeEventListener('mousemove', () => {});
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className="w-full h-full "> {/* Add background color here */}
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

export default BubbleText;
