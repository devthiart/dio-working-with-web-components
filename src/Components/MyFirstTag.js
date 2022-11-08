// Creating a component using Shadow DOM.
class MyFirstTag extends HTMLElement {
  constructor() {
    super();

    // Mode open -> Elements of the shadow root are accessible from JavaScript outside the root.
    // Mode closed -> Denies access to the node(s) of a closed shadow root from JavaScript outside.
    // More details at https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
    const shadow = this.attachShadow({mode: 'open'});
    
    // Base

    // shadow.innerHTML = '<h1>My First HTML Tag using Shadow DOM</h1>';

    const componentRoot = document.createElement('h1');
    componentRoot.textContent = this.getAttribute('title'); // Prop

    // Add Style
    const style = document.createElement('style');
    style.textContent = `
      h1 {
        color: blue;
      }
    `;

    // Send to Shadow DOM.
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

// Define HTML tag to use in the HTML archive.
customElements.define('my-first-tag', MyFirstTag);
