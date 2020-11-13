class WixDefaultCustomElement extends HTMLElement {
  constructor() {
    super();
    document.addEventListener('copy', function(e){e.preventDefault()});
    document.addEventListener('selectstart', function(e){e.preventDefault()});
    document.addEventListener('contextmenu', function(e){e.preventDefault()});  }

  connectedCallback() {
  }
}
customElements.define('wix-default-custom-element', WixDefaultCustomElement);
