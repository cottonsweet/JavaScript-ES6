class web extends HTMLElement {
  connectedCallback() {
    let name = this.getAttribute("name");
    this.innerHTML = `<div>${name}</div>`;
  }
  static get observedAttributes() {
    return ["name"];
  }
  attributeChangedCallback() {
    console.log(this.getAttribute["name"]);
  }
}

customElements.define("custom-input", web);
