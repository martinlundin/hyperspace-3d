export const calcWindowHeight = () => Math.min(document.documentElement.clientHeight, window.innerHeight);

export const calcViewBound = (element) => ({
  top: element.offsetTop,
  bottom: element.offsetTop + element.clientHeight,
});
