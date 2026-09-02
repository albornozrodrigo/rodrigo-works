/**
 * Mock do micro frontend `onboarding/app`.
 *
 * O remote real exporta um Custom Element gerado pelo Vue (`defineCustomElement`),
 * e não um componente React — o `VueWrapper` passa esse export direto para
 * `customElements.define()`. O mock precisa ser uma classe de elemento válida,
 * senão o registro estoura com "Constructor argument is not a constructor".
 */
export class MockVueOnboarding extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div data-testid="onboarding">
        <h1>Onboarding Renderizado</h1>
      </div>
    `;
  }
}

export default MockVueOnboarding;
