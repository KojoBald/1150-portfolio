let getElementY = function(element) {
  let y = 0;
  while(element) {
    y += element.offsetTop;
    element = element.offsetParent;
  }
  return y;
}

export default function(element) {
  let y = 0;
  while(element) {
    y += element.offsetTop;
    element = element.offsetParent;
  }
  return y;
}
