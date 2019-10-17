import { calcWindowHeight, calcViewBound } from './util/functions';
import createStyle from './style';

const Hyperspace3D = (options, selector = '#hs') => {
  // Use options and build config
  const defaultOptions = {
    space: {
      amount: 100,
      extra: 'auto',
    },
    bound: {
      padding: 100,
    },
    blur: {
      active: true,
      amount: 10,
    },
  };
  const config = { ...defaultOptions, ...options };

  // Constants & variables
  const element = document.querySelector(selector);
  let windowHeight = calcWindowHeight();
  let viewBound = calcViewBound(element);

  // Declare functions
  const handleScroll = () => {
    const bottomOfWindow = window.pageYOffset + windowHeight;
    const topOfWindow = window.pageYOffset;

    if (
      viewBound.top - config.bound.padding <= bottomOfWindow
      && viewBound.bottom + config.bound.padding >= topOfWindow
    ) {
      updateScene();
    }
  };

  const updateScene = () => {
    const scrolledPx = window.pageYOffset - element.offsetTop;
    const scrolledVh = scrolledPx / windowHeight;
    const offsetValue = scrolledVh * 100;

    const cameraZ = scrolledVh * 100;
    const offsetY = offsetValue <= 0 ? offsetValue : 0;

    element.style.setProperty('--cameraZ', cameraZ);
    element.style.setProperty('--offsetY', offsetY);

    if (config.blur.active && config.blur.amount > 0) {
      const blur = scrolledVh * config.blur.amount;
      element.style.setProperty('--blur', blur);
    }
  };

  const handleConfigAuto = () => {
    if (config.space.extra === 'auto') {
      // Check if element is last on page
      if (element.offsetHeight + element.offsetTop >= document.body.offsetHeight) {
        config.space.extra = false;
      } else {
        config.space.extra = true;
      }
    }
  };

  // Actions
  handleConfigAuto();
  createStyle(selector, config);

  // Listen on scroll and dispatch one event to get everything loaded properly
  window.addEventListener('scroll', handleScroll);
  window.dispatchEvent(new Event('scroll'));

  // Listen on events that we need to recalculate from
  window.addEventListener('DOMContentLoaded', () => {
    viewBound = calcViewBound(element);
    updateScene();
  });
  window.addEventListener('resize', () => {
    viewBound = calcViewBound(element);
    windowHeight = Math.min(
      document.documentElement.clientHeight,
      window.innerHeight,
    );
  });
};

export default Hyperspace3D;
