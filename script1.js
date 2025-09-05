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

    // Listen for theme changes from other tabs
    window.addEventListener('storage', function(e) {
        if (e.key === 'light-mode') {
            if (e.newValue === 'on') {
                document.body.classList.add('light-mode');
                if (document.getElementById('moodToggle')) {
                    document.getElementById('moodToggle').checked = true;
                }
            } else {
                document.body.classList.remove('light-mode');
                if (document.getElementById('moodToggle')) {
                    document.getElementById('moodToggle').checked = false;
                }
            }
        }
    });

});
  const homeBtn = document.getElementById('homeBtn'); // 
  if (homeBtn) {
    homeBtn.addEventListener('click', function() {
      window.location.href = 'main.html';
    });
  } 

  // Skills button
  const skillsBtn = document.getElementById('skillsBtn');
  if (skillsBtn) {
    skillsBtn.addEventListener('click', function () {
      window.location.href = 'main2.html';
    });
  }

  // Projects button
  const projectsBtn = document.getElementById('projectsBtn');
  if (projectsBtn) {
    projectsBtn.addEventListener('click', function () {
      window.location.href = 'main3.html';
    });
  }

  // Contact button
  const contactBtn = document.getElementById('contactBtn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      window.location.href = "main4.html";
      //alert("The programmer has not filled in this part yet.");
    });
  };

// REMOVE the auto-flipping cards - it's bad UX
// const cards = document.querySelectorAll('.card-inner');
// cards.forEach(card => {
//   let flipped = false;
//   setInterval(() => {
//     flipped = !flipped;
//     if (flipped) {
//       card.style.transform = 'rotateY(180deg)';
//     } else {
//       card.style.transform = 'rotateY(0deg)';
//     }
//   }, 3000);
// });

// Keep only the hover effects
function addHoverEffect(id) {
  const card = document.getElementById(id);
  if (!card) return;

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)'; // More subtle
    card.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.4)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
  });
}

// Apply hover effects
addHoverEffect('javaCard');
addHoverEffect('linuxCard');
addHoverEffect('pythonCard');