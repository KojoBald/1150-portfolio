<template>
  <div id="banner" @mousemove="onMouseMove">
    <div id="logo">
      <span class="red" :style='{ transform: `translateX(${-x}px) translateY(${y}px)`}'>Kaleb Baldwin</span>
      <span class="white">Kaleb Baldwin</span>
      <span class="cyan" :style='{ transform: `translateX(${x}px) translateY(${-y}px)`}'>Kaleb Baldwin</span>
    </div>
  </div>
</template>

<script>
import _throttle from 'lodash.throttle'

let _windowHeight;
let _windowWidth;

export default {
  data: () => {
    return {
      x: 5,
      y: 5
    }
  },
  methods: {
    onMouseMove: _throttle(function({ clientX, clientY }) {
      console.log(clientX, clientY);
      this.x = this.calcX(clientX);
      this.y = this.calcY(clientY);
    }, 50),
    calcX: function(xMod) {
      return (xMod / _windowWidth) * 12;
    },
    calcY: function(yMod) {
      return (yMod / _windowHeight) * 5;
    }
  },
  mounted() {
    _windowWidth = window.innerWidth;
    _windowHeight = window.innerHeight;
  }
}
</script>

<style lang="scss">
#banner {
  width: 100vw;
  height: 90vh;
  background-color: #1E252B;
  background: radial-gradient(ellipse closest-side, #1E252B 80%, lighten(#1E252B, 2%) 97%, lighten(#1E252B, 3%) 110%);
  color: white;
  font-family: 'Venus Rising';

  #logo {
    position: relative;
    top: 50%;
    left: 20%;
    font-size: 2.5rem;

    span {
      position: absolute;
      transition: transform 50ms ease;
    }
    .red {
      color: #EB463D;
      opacity: .5;
      transform: translateX(0);
    }
    .cyan {
      color: #62D9DA;
      opacity: .5;
      transform: translateX(0);
    }
    .white {
      z-index: 5;
    }
  }
}
</style>
