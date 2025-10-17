const sections = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.2 }
);

sections.forEach((sec) => observer.observe(sec));
const items = document.querySelectorAll(".accordion .item h3");
items.forEach((title) => {
  title.addEventListener("click", () => {
    title.parentElement.classList.toggle("open");
  });
});

document.querySelectorAll("#analisis h2[data-url]").forEach((h2) => {
  h2.style.cursor = "pointer";
  h2.addEventListener("click", () => {
    window.open(h2.dataset.url, "_blank");
  });
});
