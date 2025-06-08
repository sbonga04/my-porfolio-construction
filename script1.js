document.addEventListener('DOMContentLoaded', function () {
  console.log("Shared script loaded");

  // Mood toggle
  const toggleBtn = document.getElementById("moodToggle");
  if (toggleBtn) {
    // Restore saved mode
    if (localStorage.getItem("light-mode") === "on") {
      document.body.classList.add("light-mode");
      toggleBtn.checked = true;
    }

    toggleBtn.addEventListener("change", () => {
      document.body.classList.toggle("light-mode");
      localStorage.setItem("light-mode", document.body.classList.contains("light-mode") ? "on" : "off");
    });
  }

  // Skills button
  const skillsBtn = document.getElementById('skillsBtn');
  if (skillsBtn) {
    skillsBtn.addEventListener('click', function () {
      window.location.href = 'main2.html';
    });
  }

  // Contact button
  const contactBtn = document.getElementById('contactBtn');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      alert("Contact button clicked");
    });
  }
});

function addHoverEffect(id) {
  const card = document.getElementById(id);

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.2) rotate(5deg)';
    card.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.7)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1) rotate(0deg)';
    card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
  });
}

// Apply to all three
addHoverEffect('javaCard');
addHoverEffect('linuxCard');
addHoverEffect('pythonCard');

const cards = document.querySelectorAll('.card-inner');

cards.forEach(card => {
  let flipped = false;
  setInterval(() => {
    flipped = !flipped;
    if (flipped) {
      card.style.transform = 'rotateY(180deg)';
    } else {
      card.style.transform = 'rotateY(0deg)';
    }
  }, 3000); // flip every 3 seconds
});
