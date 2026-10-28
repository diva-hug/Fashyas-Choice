
/* Fashya's Choice — Website interactions */

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for links to sections on this page
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Display the current year in the footer, if a year element exists
  const yearElement = document.querySelector("[data-current-year]");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
