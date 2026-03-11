class CustomNavbar extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">
            <!-- Toggler -->
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <!-- Offcanvas -->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvas">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>


                <div class="offcanvas-body">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }
}

class CustomFooter extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <footer class="mt-5 p-4">
            <div class="container text-center">
                &copy; 2026 SWDV 280 Portfolio Site
            </div>
        </footer>`;
    }
}


class ProjectCard extends HTMLElement {
    constructor() {
        super();

        // Collect attributes
        const title = this.getAttribute("project-title"); 
        const description = this.getAttribute("project-description");
        
        let image = this.getAttribute("project-image");
        let link = this.getAttribute("project-link");

        const category = this.getAttribute("categories");

        // If attributes are not set, they get defaulted
        if (!link)  {link = "#";}
        if (!image) {image = "assets/images/exampleproject.png";}
        
        // The custom element gets replaced with this html
        this.outerHTML =  `
        <div class="col-lg-4 col-md-6 project-card" data-tags="${category}">
            <div class="portfolio-item shadow-sm">
                <img src="${image}" class="img-fluid w-100" alt="${title}">
                <div class="portfolio-overlay">
                    <h4 class="m-0 text-peach fw-semibold">${title}</h4>
                    <p class="mb-2 small">${description}</p>
                        <div class="d-flex gap-3">
                            <a href="${link}" class="icon-link">View Project</a>
                        </div>
                    </div>
                </div>
        </div>`
        
    }
}
customElements.define("project-card", ProjectCard);

customElements.define("custom-footer", CustomFooter);
customElements.define("custom-navbar", CustomNavbar);

