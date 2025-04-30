import '@/src/scss/index.scss';
import { initBootstrapLogic } from '@js/bootstrap.js';
console.log("Hello, Webpack!");

document.addEventListener('DOMContentLoaded', () => {
    initBootstrapLogic();
    initMomentsJsLogic();
});
