document.addEventListener("DOMContentLoaded", () => {
    highlightActiveNavLink();
});

// Adds class to <a> tag pointing to current page
function highlightActiveNavLink() {
    let thisWebsite = `${window.location}`.split("#")[0];
    let regex = RegExp(thisWebsite);

    let navArea = document.getElementsByTagName("nav")[0];
    let links = navArea.getElementsByTagName("a");

    for (linkTag of links) {
        if (regex.test(linkTag.href)) {
            linkTag.classList.add("active-nav-link");
        }
    }
}
