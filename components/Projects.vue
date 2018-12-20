<template>
  <div id="_projects">
    <ul class="__list" :style="{ transform: `translateX(-${translate}px)`}" ref="list">
      <project name="CSS Creature"
        :skillsUtilized="['css']"
        link="https://codepen.io/heavygl0w/pen/jQRNvW"
        @mounted="projectMounted($event, 0)">

        <template slot="visual">
          <p data-height="265" data-theme-id="0" data-slug-hash="jQRNvW" data-default-tab="result" data-user="heavygl0w" data-pen-title="CSS Creature" class="codepen">See the Pen <a href="https://codepen.io/heavygl0w/pen/jQRNvW/">CSS Creature</a> by heavygl0w (<a href="https://codepen.io/heavygl0w">@heavygl0w</a>) on <a href="https://codepen.io">CodePen</a>.</p>
          <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
        </template>
        <p slot="text">A lego man head made with pure CSS.</p>
        <p slot="description">Our first project at 1150 Academy was to create a creature using only CSS. I decided to create a lego man head with some glasses with a shimmer effect.</p>
      </project>

      <project name="TeachMe.JS"
        :skillsUtilized="['javascript', 'css', 'bulma']"
        link="https://kojobald.github.io/tutorial-website"
        @mounted="projectMounted($event, 1)">

        <template slot="visual">
          <img src="/img/projects/teach_me_js.png">
        </template>
        <p slot="text">A basic site deployed to GitHub pages built with pure Javascript and CSS utilizing the Bulma CSS library.</p>
        <p slot="description">
          As part of our curriculum at 1150 Academy, we were tasked with creating a simple website that explained some Javascript fundamentals.
          This was great practice for me as it had been a bit since I had created anything using only Javascript, CSS, and HTML.
          I decided to use Bulma for some default styling, and I implemented a very simple hash routing system. I look forward to continue fleshing out this project.
        </p>
      </project>

      <project name="API Project"
        :skillsUtilized="['javascript', 'vue', 'css', 'bootstrap']"
        link="https://unsplash-api.firebaseapp.com/"
        @mounted="projectMounted($event, 2)">

        <template slot="visual">
          <img src="/img/projects/api_project.png">
        </template>
        <p slot="text">A simple Vue app that uses the Unsplash API to grab random images deployed to firebase hosting.</p>
        <p slot="description">
          Another project assignment we received at 1150 Academy was to create a site that pulled from an API (our choice) using Javascript's fetch API and display the results.
          I decided on the Unsplash API, and to use Vue with Bootstrap. You can search for a random image by username and/or dimensions.
          The background of the site is also the daily photo pulled from Unsplash.
        </p>
      </project>
    </ul>
    <div class="controls">
      <img :class="['__arrow left', { 'disabled': activeProjectIndex == 0 }]" src="/img/arrow.svg" @click="setActiveProjectIndex(activeProjectIndex - 1)">
      <div class="project-description">
        <portal-target name="project-description" />
      </div>
      <img :class="['__arrow right', { 'disabled': activeProjectIndex  == projects.length-1 }]" src="/img/arrow.svg" @click="setActiveProjectIndex(activeProjectIndex + 1)">
    </div>
  </div>
</template>

<script>
import Project from '~/components/UI/Project'
import CssCreature from '~/components/CssCreature'

export default {
  components: { Project, CssCreature },
  data: (_this) => ({
    projects: [],
    activeProjectIndex: 0,
    listWidth: 0
  }),
  computed: {
    translate: function() {
      let translate = (this.listWidth / this.projects.length) * this.activeProjectIndex;
      return translate + 250;
    }
  },
  watch: {
    activeProjectIndex: function(newIndex, oldIndex) {
      this.projects[oldIndex].active = false;
      this.projects[newIndex].active = true;
    }
  },
  methods: {
    setActiveProjectIndex(index) {
      if(!(index < 0) && !(index > this.projects.length-1)) {
        this.activeProjectIndex = index;
      }
    },
    projectMounted(project, index) {
      this.projects[index] = project;
      if(index == this.activeProjectIndex) project.active = true;
    }
  },
  mounted() {
    this.listWidth = this.$refs.list.clientWidth;
  }
}
</script>

<style lang="scss">
#_projects {
  text-align: center;

  .__list {
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 0 0 50px 0;
    padding: 0;
    left: 50%;
    transition: transform 150ms ease;

    li {
      margin: 0 2.5vw;
      flex: 0 0 auto;
      transition: transform 150ms ease;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }

    li.active {
      transform: scale(1.2);
    }
  }

  .controls {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0;
    width: 80vw;
    margin: 0 auto;
    height: 150px;

    .__arrow {
      height: 60px;
      cursor: pointer;
      margin-left: 20px;
      transition: transform 50ms ease;
      &.left {
        transform: rotate(180deg);
        margin-right: 20px;
        margin-left: 0px;
        &:active {
          transform: rotate(180deg) scale(.8);
        }
      }
      &.disabled {
        filter: brightness(50%);
      }
      &:active {
        transform: scale(.8);
      }
    }
  }
}
</style>
