// Function to create a bird element
function createBird(color) {
    const bird = document.createElement('div');
    bird.classList.add('bird');
    bird.innerHTML = `
        <div class="body" style="background-color: ${color};"></div>
        <div class="wing wing-left" style="background-color: ${color};"></div>
        <div class="wing wing-right" style="background-color: ${color};"></div>
        <div class="eye eye-left"></div>
        <div class="eye eye-right"></div>
        <div class="beak"></div>
    `;

    // Append bird to the body
    document.body.appendChild(bird);

    // Move the bird to a random position on the screen
    const x = Math.random() * (window.innerWidth - bird.clientWidth);
    const y = Math.random() * (window.innerHeight - bird.clientHeight);
    bird.style.transform = `translate(${x}px, ${y}px)`;

    // Adjust the bird's position when the mouse moves
    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        bird.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
}

// Create three birds with different colors
createBird('#FFD700'); // Yellow
createBird('#FF0000'); // Red
createBird('#1E90FF'); // Blue
