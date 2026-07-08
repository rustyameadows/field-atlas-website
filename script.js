const year = document.querySelector("#year");
const status = document.querySelector("#cta-status");
const ctaLinks = document.querySelectorAll("[data-cta]");
const inviteOpenLink = document.querySelector("[data-invite-open]");

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

if (inviteOpenLink) {
  const token = new URLSearchParams(window.location.search).get("token");

  if (token) {
    inviteOpenLink.href = `fieldatlas://invite/${encodeURIComponent(token)}`;
  }
}
