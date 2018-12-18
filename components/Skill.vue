<template>
  <li :class="`skill${hasMoreSkills ? ' has-more' : '' }`">
    <img :src="`/img/skills/${name}.png`" :class="{ 'is-main': hasMoreSkills }" v-b-tooltip.right="name"/>
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    name: String
  },
  computed: {
    hasMoreSkills: function() {
      return this.$slots.default != null;
    }
  }
}
</script>

<style lang="scss">
.skill {
  position: relative;
  text-align: center;
  width: 75px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    flex: 0 0 0;
    filter: contrast(25%);
    transition: filter 250ms ease, transform 150ms ease;
    display: block;
    transform: translateY(0);
    z-index: 5;
    cursor: pointer;
  }

  &:hover img {
    filter: contrast(100%);
  }
  .skill {
    opacity: 0;
    position: absolute;
    margin: 0;
    transition: transform 150ms ease;
    transform: translateY(0);
    z-index: 1;
  }
}

.skill.has-more:hover {
  img.is-main {
    position: absolute;
    transform: translateY(-50%);
  }
  .skill {
    opacity: 1;
    display: flex;
    margin: 10px 0 0 0;
    transform: translateY(50%);
  }
}

.red-tooltip + .tooltip > .tooltip-inner {
  background-color: $red !important;
}
</style>
