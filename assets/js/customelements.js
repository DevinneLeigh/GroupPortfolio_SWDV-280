class CustomNavbar extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <nav class="navbar navbar-expand-sm navbar-dark bg-mocha">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
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
        <footer class="bg-dark text-white mt-5 p-4">
            <div class="container text-center">
                &copy; 2026 SWDV 280 Portfolio Site
            </div>
        </footer>`;
    }
}

customElements.define("custom-footer", CustomFooter);
customElements.define("custom-navbar", CustomNavbar);
