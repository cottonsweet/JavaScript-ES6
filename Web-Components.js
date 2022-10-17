// // class web extends HTMLElement {
// //   connectedCallback() {
// //     let name = this.getAttribute("name");
// //     this.innerHTML = `<div>${name}</div>`;
// //   }
// //   static get observedAttributes() {
// //     return ["name"];
// //   }
// //   attributeChangedCallback() {
// //     console.log(this.getAttribute["name"]);
// //   }
// // }

// // customElements.define("custom-input", web);

// class 클래스 extends HTMLElement {
//   connectedCallback() {
//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.append(template1.content.cloneNode(true));
//     let el = this.shadowRoot.querySelector("label");
//     el.addEventListener("click", function () {
//       console.log("클릭함");
//     });
//   }
// }
// customElements.define("custom-input", 클래스);
