const createStyle = (selector, config, callback) => {
  createElementStyle(selector, config);
  createCSS(selector, config, callback);
};

const createElementStyle = (selector, config) => {
  const element = document.querySelector(selector);
  const { children } = element.querySelector(
    `${selector} > *[hs=container] > *[hs=scene]`,
  );

  Array.from(children).forEach((child, index) => {
    child.style.transform = `translateZ(calc(${index} * -100vh))`;
    child.style.zIndex = 1000 - index;

    if (config.blur.active) {
      child.style.filter = `blur( calc( (${index} * ${config.blur.amount}px) - (var(--blur) * 1px) ) )`;
      child.style.willChange = 'filter';
    }
    if (config.opacity.active) {
      child.style.opacity = `calc( 1 + (${index} * -${config.opacity.amount}) + (var(--opacity)))`;
    }
  });

  const height = children.length * 100;
  const extra = config.space.extra ? config.space.amount : 0;
  element.style.height = `calc(${height}vh + ${extra}vh)`;
};

const createCSS = (selector, config, callback) => {
  const css = `
    ${selector} *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ${selector}{
        --offsetY: -100;
        --cameraZ: 0;

        opacity:1;
        transition:opacity 0.1s;
    }

    ${selector} > *[hs=container]{
        height: 100%;
        width: 100%;
        position: fixed;
        bottom: calc(var(--offsetY) * 1%);
        left: 0;
        perspective: ${config.space.amount}vh;
        perspective-origin: 50%;
        transform: translate3d(0, 0, 0);
    }

    ${selector} > *[hs=container] > *[hs=scene]{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        transform-style: preserve-3d;
        transform: translateZ(calc(var(--cameraZ) * 1vh));
        will-change: transform;
    }

    ${selector} > *[hs=container] > *[hs=scene] > section{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;   
        border:5px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background:rgba(0,0,0,0.2)
    }
  `;

  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerHTML = css;
  document.head.appendChild(styleSheet);
  callback();
};

export default createStyle;
