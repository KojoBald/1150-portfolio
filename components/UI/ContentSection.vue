<template >
  <section class="content-section">
    <div class="__text">
      <h1 :data-header="header"><span>{{ header }}</span></h1>
      <slot name="text"/>
    </div>
    <div class="__visual" ref="visual" :style="visualTranslate">
      <slot />
    </div>
  </section>
</template>

<script>
import getElementY from '~/util/get-element-y.js'

export default {
  props: {
    header: { type: String, required: true }
  },
  data: function() {
    return {
      visualY: 0,
      visualVisible: false
    }
  },
  computed: {
    visualTranslate: function() {
      let translate = (this.$screen.scrollY - this.visualY) / 3;
      return { transform: `translateY(${translate}px)` }
    }
  },
  mounted() {
    this.visualY = getElementY(this.$refs.visual);
    this.$screen.onScrollAt(this.visualY - this.$screen.height, () => this.visualVisible = !this.visualVisible );
  }
}
</script>

<style lang="scss">
.content-section {

  .__text {
    position: relative;
    padding: 4rem 20%;
    background-color: white;
    z-index: 5;
    h1 {
      position: relative;
      font-weight: 600;
      opacity: .9;
      &:before {
        content: attr(data-header);
        display: inline-block;
        position: absolute;
        z-index: 1;
        top: 4px;
        left:-4px;
        color: $cyan;
      }
      span {
        position: relative;
        color: $red;
        z-index: 2;
      }
    }
  }

  .__visual {
    position: relative;
    width: 100vw;
    padding: 20vh 0;
    color: white;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
