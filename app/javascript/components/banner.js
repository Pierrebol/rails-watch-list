import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["salut", "T BO", "Ptite bière?"],
    typeSpeed: 90,
    loop: true
  });
}

export { loadDynamicBannerText };
