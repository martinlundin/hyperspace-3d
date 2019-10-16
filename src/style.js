const createStyle = (selector, config) => {
  createCSS(selector, config);
  createElementStyle(selector, config);
};

const createElementStyle = (selector, config) => {
  const element = document.querySelector(selector);
  const { children } = element.querySelector(
    `${selector} > *[hs=container] > *[hs=scene]`,
  );

  Array.from(children).forEach((child, index) => {
    child.style.transform = `translateZ(calc(${index} * -${config.space.amount}vh))`;
    child.style.zIndex = 1000 - index;
  });

  const height = children.length * config.space.amount;
  const extra = config.space.extra ? `${config.space.amount}` : '0';
  element.style.height = `calc(${height}vh + ${extra}vh)`;
};

const createCSS = (selector) => {
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
        perspective: 100vh;
        perspective-origin: 50%;
        will-change: perspective-origin;
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
};

export default createStyle;