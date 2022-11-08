class DynamicTitle extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    // Base
    const componentRoot = document.createElement('h1');
    componentRoot.textContent = this.getAttribute('title'); // Prop

    // Style
    const style = document.createElement('style');
    style.textContent = `
      h1 {
        color: red;
      }
    `;

    // Send to Shadow DOM.
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);

  }
}

customElements.define('dynamic-title', DynamicTitle);
