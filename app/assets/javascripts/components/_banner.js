import Typed from 'typed.js';

function loadDynamicBannerText() {
var typed = new Typed('.element', {
  strings: ["First sentence.", "Second sentence."],
  typeSpeed: 30
});
}

export { loadDynamicBannerText };
