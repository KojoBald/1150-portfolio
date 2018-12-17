<template>
  <div class="glitch">
    <component :is="tag" v-for="_class in ['glitch__cyan', 'glitch__white', 'glitch__red']" :class="_class" :key="_class">
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  props: {
    tag: { default: 'span', type: String },
    background: { default: 'black', type: String }
  }
}
</script>

<style lang="scss">
.glitch {
  position: relative;
  display: inline-block;
  .glitch__cyan, .glitch__red {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch__cyan {
    left: 2px;
    text-shadow: -1px 0 $cyan;
    background: $gray;
    animation: cyan-glitch 2.5s infinite linear alternate-reverse;
  }

  .glitch__red {
    left: -2px;
    text-shadow: -1px 0 $red;
    background: $gray;
    animation: red-glitch 2.5s infinite linear alternate-reverse;
  }
}

@keyframes cyan-glitch {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
    }
  }
}

@keyframes red-glitch {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
    }
  }
}
</style>
