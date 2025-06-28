document.querySelectorAll('button.toggle-details').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    if (details.style.display === "block") {
      details.style.display = "none";
      button.textContent = "Show Details";
    } else {
      details.style.display = "block";
      button.textContent = "Hide Details";
    }
  });
});
