

import { defineCustomElement, use } from 'vue'
import App from './App.ce.vue'
// import the entire component library and specific directives
import VlUiVueComponents, {
  VlModalToggle,
} from '@govflanders/vl-ui-vue-components';

// configuration of the built-in validator
const validatorConfig = {
  inject: true,
  locale: 'nl',
};

// install the component library with config
use(VlUiVueComponents, {
  validation: validatorConfig,
});

// mandatory if you're using the vl-modal component
Vue.directive('vl-modal-toggle', VlModalToggle);

// import "style.css"

console.log(App.styles) // ["/* inlined css */"]

// convert into custom element constructor
const AppElement = defineCustomElement(App)

// register
customElements.define('my-app', AppElement)