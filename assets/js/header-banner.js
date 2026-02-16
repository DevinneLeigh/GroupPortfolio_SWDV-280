class HeaderBanner extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Default Title";
    const text = this.getAttribute("text") || "Default subtitle text.";

    this.innerHTML = `
      <header class="finisher-header d-flex align-items-center justify-content-center">
        <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
                <h1>${title}</h1>
                <p class="pb-5 px-3">${text}</p>
            </div>
        </div>
      </header>
    `;
  }
}

customElements.define("header-banner", HeaderBanner);
