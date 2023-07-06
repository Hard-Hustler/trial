// // Get the typing-demo element
// const typingDemo = document.getElementById('typing-demo');

// // Function to add a class and start the new animation
// function startNewAnimation() {
//   typingDemo.classList.add('new-animation');
// }

// // Add an event listener for animationend on the typing-demo element
// typingDemo.addEventListener('animationend', startNewAnimation);

// // Trigger the animation by adding a class to the typing-demo element
// typingDemo.classList.add('typing-demo');



// Get the element
const typingDemo = document.getElementById('typing-demo');

// Function to toggle animation classes
function toggleAnimation() {
  typingDemo.classList.toggle('typing-demo');
  typingDemo.classList.toggle('reverse-typing-demo');
}

// Call the toggleAnimation function initially
toggleAnimation();

// Add event listener for animation end event
typingDemo.addEventListener('animationend', toggleAnimation);


