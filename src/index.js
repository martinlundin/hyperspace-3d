import { calcWindowHeight, calcViewBound } from './util/functions';
import createStyle from './style';

const Hyperspace3D = (options, selector = '#hs') => {
  // Use options and build config
  const defaultOptions = {
    space: {
      amount: 30, // How much the space between sections are. 1-100
      extra: 'auto', // Space after last element. 'auto' detect if element is last, then it is false, otherwise true
    },
    bound: {
      padding: 100, // Padding of bound, in pixels. This is to prevent element sticking if user scrolls away fast
    },
    blur: {
      active: true,
      amount: 100, // How much the blur is. 0-inf
      hq: true, // This solves ClearType pixel problem, makes content hq. Unfortunately it is pretty process intense
      offset: 0.9, // Offset for when hq kicks in
    },
    opacity: {
      active: true,
      amount: 1, // How much opacity between 0-1
    },
    snap: {
      active: true,
      bound: {
        front: 50, // How far infront it will snap to element.
        back: 5, // How far in the back it will snap back to element.
      },
      wait: 50, // Time in ms before snap is executed
    },
  };
  const config = { ...defaultOptions, ...options };

  // Constants & variables
  const element = document.querySelector(selector);
  let windowHeight = calcWindowHeight();
  let viewBound = calcViewBound(element);
  const scrollTimeout = [];
  let snapScrolling = false;

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

    const blur = scrolledVh * config.blur.amount;
    if (config.blur.active && config.blur.amount > 0) {
      element.style.setProperty('--blur', blur);
    }
    if (config.opacity.active && config.opacity.amount > 0) {
      const opacity = scrolledVh * config.opacity.amount;
      element.style.setProperty('--opacity', opacity);
    }

    // Do all configs that require element children loop at the same time to boost performance
    if ((config.blur.active && config.blur.amount > 0 && config.blur.hq === true) || (config.snap.active)) {
      const { children } = element.querySelector(
        `${selector} > *[hs=container] > *[hs=scene]`,
      );
      Array.from(children).forEach((child, index) => {
        // Blur HQ
        if (config.blur.active && config.blur.amount > 0 && config.blur.hq === true) {
          const blurStop = index * (config.blur.amount - config.blur.offset);
          if (blur < blurStop) {
            if (child.style.filter === 'none') {
              child.style.filter = `blur( calc( (${index} * ${config.blur.amount}px) - (var(--blur) * 1px) ) )`;
            }
          } else {
            child.style.filter = 'none';
          }
        }
        // Snap to element
        if (config.snap.active) {
          const position = index * 100;
          if (scrollTimeout[index]) clearTimeout(scrollTimeout[index]);
          if (
            position - config.snap.bound.front <= cameraZ
            && position + config.snap.bound.back >= cameraZ
            && snapScrolling !== true
          ) {
            scrollTimeout[index] = setTimeout(() => {
              scrollToIndex(index);
            }, config.snap.wait);
          }
        }
      });
    }
  };

  const scrollToIndex = (index) => {
    const top = element.offsetTop + (windowHeight * index);
    window.scroll({
      top,
      behavior: 'smooth',
    });
    if (config.snap.active) {
      // Prevent activating new snap from itself
      snapScrolling = true;
      setTimeout(() => {
        snapScrolling = false;
      }, config.snap.wait);
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
