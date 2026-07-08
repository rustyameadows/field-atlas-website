const year = document.querySelector("#year");
const status = document.querySelector("#cta-status");
const ctaLinks = document.querySelectorAll("[data-cta]");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

ctaLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!status) return;

    const label = link.getAttribute("data-cta") || "Email";
    status.textContent = `${label}: opening your email app.`;
  });
});
