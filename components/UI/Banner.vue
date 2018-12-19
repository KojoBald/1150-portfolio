<template>
  <div id="banner" :style="{ transform: `translateY(${-$screen.scrollY/3}px)` }" v-if="visible">
    <no-ssr>
      <particles />
    </no-ssr>
    <div id="logo">
      <glitch-text>Kaleb Baldwin</glitch-text>
      <span class="subtitle">Freelance Web Developer</span>
    </div>
  </div>
</template>

<script>
import GlitchText from '~/components/UI/GlitchText'

export default {
  components: { GlitchText },
  data: function() { return {
    visible: true
  }},
  mounted() {
    this.$screen.onScrollAt(this.$el.clientHeight, () => this.visible = !this.visible );
    // add 50px for the scroll listener to avoid screen flash when re rendering
  }
}
</script>

<style lang="scss">
#banner {
  width: 100vw;
  height: $banner-height;
  background-color: $gray;
  background: radial-gradient(ellipse closest-side, $gray 80%, lighten($gray, 2%) 97%, lighten($gray, 4%) 110%);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 50ms ease;

  #logo {
    font-size: 4rem;
    font-family: 'Venus Rising';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: $banner-height;

    .subtitle {
      font-family: 'Ubuntu';
      font-size: 2rem;
      text-transform: uppercase;
    }
    .red {
      color: $red;
      opacity: .5;
      transform: translateX(0);
    }
    .cyan {
      color: $cyan;
      opacity: .5;
      transform: translateX(0);
    }
    .white {
      z-index: 5;
    }
  }
}
</style>
