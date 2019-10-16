import { calcWindowHeight, calcViewBound } from './util/functions';
import createStyle from './style';

const Hyperspace3D = (options, selector = '#hs') => {
  // Use options and build config
  const defaultOptions = {
    space: 100,
    startYOffset: 75,
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

    if (viewBound.top <= bottomOfWindow && viewBound.bottom >= topOfWindow) {
      console.log('show ', selector);
    }
  };

  // Actions
  createStyle(selector, config);

  // Listen on scroll and dispatch one event to get everything loaded properly
  window.addEventListener('scroll', handleScroll);
  window.dispatchEvent(new Event('scroll'));

  // Listen on events that we need to recalculate from
  window.addEventListener('DOMContentLoaded', () => {
    viewBound = calcViewBound(element);
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
