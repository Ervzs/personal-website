// Dark Mode Toggle Script
// This script handles switching between light and dark themes
// It affects global styles, header, footer, and hover effects

class DarkModeToggle {
  constructor() {
    this.darkMode = true;
    this.init();
  }

  init() {
    // Check if dark mode preference is stored
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme === "true") {
      this.darkMode = true;
      this.applyDarkMode();
    }

    // Create and setup the toggle button
    this.createToggleButton();
  }

  createToggleButton() {
    // Create toggle button if it doesn't exist
    let toggleButton = document.getElementById("darkModeToggle");
    if (!toggleButton) {
      toggleButton = document.createElement("button");
      toggleButton.id = "darkModeToggle";
      toggleButton.innerHTML = this.darkMode ? "☀️ Light" : "🌙 Dark";
      toggleButton.style.cssText = `
                position: fixed;
                bottom: 0px;
                left: 0px;
                margin-bottom: 20px;
                margin-left: 25px;
                padding: 10px 15px;
                border: #98b9ffff solid;
                border-radius: 25px;
                cursor: pointer;
                font-family: Inter, sans-serif;
                font-size: 14px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            `;

      // Add hover effects
      toggleButton.addEventListener("mouseenter", () => {
        toggleButton.style.transform = "scale(1.05)";
        toggleButton.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
      });

      toggleButton.addEventListener("mouseleave", () => {
        toggleButton.style.transform = "scale(1)";
        toggleButton.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
      });

      document.body.appendChild(toggleButton);
    }

    // Add click event listener
    toggleButton.addEventListener("click", () => this.toggleDarkMode());
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      this.applyDarkMode();
    } else {
      this.applyLightMode();
    }

    // Update button text and style
    const toggleButton = document.getElementById("darkModeToggle");
    toggleButton.innerHTML = this.darkMode ? "☀️ Light" : "🌙 Dark";
    toggleButton.style.background = this.darkMode ? "#404040" : "#f0f0f0";
    toggleButton.style.color = this.darkMode ? "#fff" : "#333";

    // Store preference
    localStorage.setItem("darkMode", this.darkMode.toString());
  }

  updateFooterIcons() {
    // GitHub
    const githubIcon = document.querySelector(
      'footer .x-logo-icon[alt="Github"]'
    );
    if (githubIcon) {
      githubIcon.src = this.darkMode
        ? "./assets/images/logo/github.png"
        : "./assets/images/logo/github-black.png";
    }
    // LinkedIn
    const linkedinIcon = document.querySelector(
      'footer .x-logo-icon[alt="Linkedin"]'
    );
    if (linkedinIcon) {
      linkedinIcon.src = this.darkMode
        ? "./assets/images/logo/linkedin.png"
        : "./assets/images/logo/linkedin-black.png";
    }
  }

  applyDarkMode() {
    this.injectDarkModeCSS();
    document.body.classList.add("dark-mode");
    this.updateFooterIcons();
  }

  applyLightMode() {
    this.removeDarkModeCSS();
    document.body.classList.remove("dark-mode");
    this.updateFooterIcons();
  }

  injectDarkModeCSS() {
    // Remove existing dark mode styles if any
    this.removeDarkModeCSS();

    const darkModeCSS = `
            <style id="darkModeStyles">
                /* Global Dark Mode Styles */
                h1, h3, p, a, b, .info, .description{
                    color: #e0e0e0 !important;
                }

                main.dark-mode {
                    background-color: #1a1a1a !important;
                }

                body.dark-mode {
                    background-color: #1a1a1a !important;
                    color: #e0e0e0 !important;
                }

                /* Header Dark Mode */
                body.dark-mode header {
                    background-color: #2d2d2d !important;
                    border-bottom-color: #404040 !important;
                }


                /* Footer Dark Mode */
                body.dark-mode footer {
                    background-color: #2d2d2d !important;
                    border-top-color: #404040 !important;
                }

                body.dark-mode .all-rights-reserved {
                    color: #e7e4e4ff !important;
                }

                /* Home Page Dark Mode */
                body.dark-mode .hero-actions {
                    background-color: #1a1a1a !important;
                    color: #e0e0e0 !important;
                }

                body.dark-mode .subtitle {
                    color: #b0b0b0 !important;
                }

                body.dark-mode .aspiring:hover {
                    color: #6ba3f5 !important;
                    text-shadow: 0 2px 4px rgba(107, 163, 245, 0.3) !important;
                }

                body.dark-mode .formal-picture-1:hover {
                    box-shadow: 0 20px 85px rgba(107, 163, 245, 0.5) !important;
                }

                
                /* Experience Page Dark Mode */
                body.dark-mode .card-grid-content-list {
                    background-color: #1a1a1a !important;
                }

                body.dark-mode .heading {
                    color: #ffffff !important;
                }

                body.dark-mode .subheading {
                    color: #b0b0b0 !important;
                }

                body.dark-mode .card {
                    background-color: #2d2d2d !important;
                    border-color: #404040 !important;
                }

                body.dark-mode .card:hover {
                    border-color: #6ba3f5 !important;
                    box-shadow: 0 10px 50px rgba(107, 163, 245, 0.3) !important;
                }

                body.dark-mode .work-title {
                    color: #e0e0e0 !important;
                }

                body.dark-mode .work-title:hover {
                    color: #6ba3f5 !important;
                }

                body.dark-mode .work-description,
                body.dark-mode .work-date {
                    color: #b0b0b0 !important;
                }

                /* Education Page Dark Mode */
                main.dark-mode, main.education-main{
                    background-color: #1a1a1a !important;
                }

                body.dark-mode .degree-program, .timeline-year p{
                    color: #6ba3f5 !important;
                }


                body.dark-mode .timeline-image-placeholder {
                    background-color: #2d2d2d !important;
                    border-color: #404040 !important;
                }

                body.dark-mode .timeline-image-placeholder:hover {
                    border-color: #6ba3f5 !important;
                    box-shadow: 0 4px 12px rgba(107, 163, 245, 0.3) !important;
                }

                body.dark-mode .timeline-line {
                    background-color: #404040 !important;
                }
                

                /* Skills Page Dark Mode */
                body.dark-mode .skills {
                    background-color: #1a1a1a !important;
                }

                body.dark-mode .skills-logo {
                    background-color: rgba(45, 45, 45, 0.8) !important;
                }

                body.dark-mode .skills-logo:hover {
                    background-color: rgba(45, 45, 45, 0.95) !important;
                    box-shadow: 0 15px 50px rgba(107, 163, 245, 0.2) !important;
                }

                /* Certification Page Dark Mode */

                main.dark-mode, main.certification-main{
                background-color: #1a1a1a !important;
                }

                /* Advocacy Page Dark Mode */
                body.dark-mode .advocacy-main {
                    background-color: #1a1a1a !important;
                }

                body.dark-mode .advocacy-title {
                    color: #e0e0e0 !important;
                }

                body.dark-mode .advocacy-title:hover {
                    color: #6ba3f5 !important;
                }

                body.dark-mode .advocacy-text {
                    color: #b0b0b0 !important;
                }


                /* Portfolio Page Dark Mode */
                body.dark-mode .portfolio {
                    background-color: #1a1a1a !important;
                }

                body.dark-mode .card {
                    background-color: rgba(45, 45, 45, 0.8) !important;
                }

                body.dark-mode .div {
                    color: #e0e0e0 !important;
                }

                body.dark-mode .fashion-app {
                    color: #b0b0b0 !important;
                }

                body.dark-mode .projects-and-practice {
                    color: #ffffff !important;
                }

                body.dark-mode .type {
                    border-color: #b0b0b0 !important;
                    color: #b0b0b0 !important;
                }

                body.dark-mode .secondary-button {
                    background-color: #404040 !important;
                    color: #e0e0e0 !important;
                }

                body.dark-mode .portfolio-child {
                    color: #e0e0e0 !important;
                }

                /* Navigation Pills Dark Mode Hover Effects */
                body.dark-mode .skills-navigation-pill:hover,
                body.dark-mode .header-navigation-pill:hover {
                    background-color: #404040 !important;
                    color: #6ba3f5 !important;
                }

                /* Smooth transitions for all elements */
                * {
                    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
                }
            </style>
        `;

    document.head.insertAdjacentHTML("beforeend", darkModeCSS);
  }

  removeDarkModeCSS() {
    const darkModeStyles = document.getElementById("darkModeStyles");
    if (darkModeStyles) {
      darkModeStyles.remove();
    }
  }
}

// Initialize the dark mode toggle when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new DarkModeToggle();
});

// Also initialize if the script is loaded after DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    new DarkModeToggle();
  });
} else {
  new DarkModeToggle();
}
