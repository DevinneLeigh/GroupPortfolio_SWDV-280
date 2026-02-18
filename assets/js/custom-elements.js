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

customElements.define("custom-footer", CustomFooter);
customElements.define("custom-navbar", CustomNavbar);
