class Navbar extends HTMLElement {
    connectedCallback() {
        const homeHref = this.getAttribute('home-href') || 'index.html';
        const biographyHref = this.getAttribute('biography-href') || '#Biography';
        const galleryHref = this.getAttribute('gallery-href') || '#Gallery';
        const contactHref = this.getAttribute('contact-href') || '#contact';

        this.innerHTML = `
            <nav id="nav" class="navegacion">
            <ul>
                <li><a href="${homeHref}">Home</a></li>
                <li><a href="${biographyHref}">Biography</a></li>
                <li><a href="${galleryHref}">Gallery</a></li>
                <li><a href="${contactHref}">Contact</a></li>
            </ul>
            </nav>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="Contact" class="pie-pagina">
            <div class="contenido-footer">
                <div class="contactos">
                    <h2 class="titulo-banda">PARAMORE OFICIAL</h2>
                    <p>FOLLOW US ON OUR SOCIAL NETWORKS</p>
                </div>
                <div class="redes-sociales">
                    <a href="https://www.facebook.com/paramore/?locale=es_LA" class="social-media-icons">
                        <i class='bx bxl-facebook-square'></i>
                    </a>
                    <a href="https://www.instagram.com/paramore/?hl=es" class="social-media-icons">
                        <i class='bx bxl-instagram-alt'></i>
                    </a>
                    <a href="https://twitter.com/paramore?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                        class="social-media-icons">
                        <i class='bx bxl-twitter'></i>
                    </a>
                </div>
                <div class="boton-footer">
                    <p>Copyright &copy; 2023 Paramore. designed by <span>GRUPO7</span></p>

                </div>
            </footer>
        `;
    }
}

customElements.define('custom-navbar', Navbar)
customElements.define('custom-footer', Footer)