<template>
  <li :class="['project', { 'active': active }]">
    <div class="__graphic">
      <slot name="visual" />
    </div>
    <div class="__description">
      <div class="__info">
        <h2>{{ name }}</h2>
        <slot name="text" />
        <b-link :href="link" target="_blank">Check it out here</b-link>
      </div>
      <div class="skills-utilized">
        <span>Skills Used</span>
        <ul>
          <skill v-for="skill in skillsUtilized" :name="skill" :key="name + skill" />
        </ul>
      </div>
    </div>
    <portal
    <portal to="project-description">
      <slot name="description" v-if="active"/>
    </portal>
  </li>
</template>

<script>
import Skill from '~/components/UI/Skill'

export default {
  components: { Skill },
  props: {
    name: String,
    skillsUtilized: Array,
    link: String
  },
  data: () => ({
    active: false
  }),
  mounted() {
    this.$emit('mounted', this);
  }
}
</script>

<style lang="scss">
.project {
  height: calc((500px * 9) / 16);
  width: 500px;
  border: 1px solid $cyan;
  background-color: #eee;
  overflow: hidden;
  position: relative;
  text-align: left;

  .__graphic {
    height: 100%;
    & > * {
      width: 100%;
      transition: transform 150ms ease;
    }
  }

  .__description {
    display: none;
    position: absolute;
    flex-direction: row;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba($gray, .8);

    .__info {
      padding: 15px;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      p {
        flex: 1 1 auto;
      }
      a {
        bottom: 15px;
        color: $red;
      }
    }
    .skills-utilized {
      flex: 0 0 auto;
      height: 100%;
      width: 15%;
      background: $gray;
      text-align: center;
      display: flex;
      flex-direction: column;

      span {
        font-size: .75rem;
        margin-top: 15px;
        color: lighten($gray, 50%);
        flex: 0 0 auto;
      }
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 0;
        margin: 0;
        width: 100%;
        flex: 1 1 auto;
        overflow-y: scroll;
        .skill {
          width: 50%;
          margin: 0 !important;
        }
      }
    }
  }
}

.project:hover {
  .__graphic > * {
    transform: scale(1.2);
  }
  .__description {
    display: flex;
  }
}
</style>
