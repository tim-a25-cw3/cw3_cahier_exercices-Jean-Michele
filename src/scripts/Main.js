import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';
class Main {
  constructor() {
    this.init();
    this.initSwiperBase();
  }

  init() {
    Icons.load();
    const swiper = new Swiper('.js-swiper', {
      speed: 400,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
new Main();
