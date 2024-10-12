class titleverdeUfpso extends HTMLElement{
    constructor(){
        super();
    }

connectedCallback(){
    this.innerHTML= "<p>Bienvenidos a la UFPSO</p>";
    this.style.color="green";
    this.style.fontFamily="arial";
    this.style.fontSize="20px";
    this.style.textDecoration="underline";
    this.style.fontWeight="bold"
    
}
}

class buttonCarrito extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = "<button> Ir al carrito </button>";
    }
}

window.customElements.define("button-carrito", buttonCarrito)

window.customElements.define("titleverde-ufpso", titleverdeUfpso)