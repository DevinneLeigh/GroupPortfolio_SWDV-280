const filterBar = document.getElementById("projectFilters");
const cards = document.querySelectorAll(".project-card");

filterBar.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-filter]");
    if (!link) return;

    e.preventDefault();

    // active link styling
    filterBar.querySelectorAll(".nav-link").forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    const filter = link.dataset.filter;

    cards.forEach(card => {
        const tags = (card.dataset.tags || "").split(" "); // ["html","css"]
        const show = (filter === "all") || tags.includes(filter);

        card.style.display = show ? "" : "none";
    });
});