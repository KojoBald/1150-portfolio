import Vue from 'vue'
import _throttle from 'lodash.throttle'

const SCREEN = new Vue({ data: {
  height: 0,
  width: 0,
  scrollY: 0,
  onScrollAt: function(position, callback) {
    SCROLL_LISTENERS[position] = callback;
    SCROLL_POSITIONS.push(position);
    SCROLL_POSITIONS.sort((a, b) => a - b);
    if(nextPosIndex < 0) updatePositionIndices(+1);
  }
}});

const SCROLL_LISTENERS = {};
const SCROLL_POSITIONS = [];

function onResize(ev) {
  //TODO: this thing
  console.log('resized');
}

let checkPositions = Function.prototype;
let prevPosIndex = -2;
let nextPosIndex = -1;

function onScroll(ev) {;
  SCREEN.scrollY = window.scrollY;
  checkPositions.call();
}

function checkForPrevious() {
  let previousPosition = SCROLL_POSITIONS[prevPosIndex];
  if(SCREEN.scrollY <= previousPosition) {
    SCROLL_LISTENERS[previousPosition].call();
    updatePositionIndices(-1);
    return true;
  }
}

function checkForNext() {
  let nextPosition = SCROLL_POSITIONS[nextPosIndex];
  if(SCREEN.scrollY >= nextPosition) {
    SCROLL_LISTENERS[nextPosition].call();
    updatePositionIndices(+1);
    return true;
  }
}

function checkForPreviousAndNext() {
  if(!checkForPrevious()) {
    checkForNext();
  }
}

function updatePositionIndices(mod) {
  prevPosIndex += mod;
  nextPosIndex += mod;
  if(prevPosIndex < 0) {
    checkPositions = checkForNext;
  } else if(nextPosIndex >= SCROLL_POSITIONS.length) {
    checkPositions = checkForPrevious;
  } else {
    checkPositions = checkForPreviousAndNext;
  }
}

function _initScreen() {
  SCREEN.height = window.innerHeight;
  SCREEN.width = window.innerWidth;
  SCREEN.scrollY = window.scrollY;
  window.addEventListener('resize', _throttle(onResize, 1000, { leading: false, trailing: true }));
  window.addEventListener('scroll', _throttle(onScroll, 10));
}

export default ({ app }, inject) => {
  if(process.client) _initScreen();
  inject('screen', SCREEN);
}
