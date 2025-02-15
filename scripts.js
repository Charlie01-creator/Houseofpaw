// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
    navMenu.classList.remove('active');
  }
});

// Update progress bar
const donationGoal = 100000;
let amountRaised = 50000;

document.querySelector('.progress').style.width = `${(amountRaised / donationGoal) * 100}%`;
