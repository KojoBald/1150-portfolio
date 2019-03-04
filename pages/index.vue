<template>
  <div id="home-page">
    <banner />
    <div id="content">
      <content-section header="Hello, World!" id="about">
        <template slot="text">
          The name is Kaleb Baldwin, and I build responsive and interactive web applications with a bit of backend, a whole lotta' frontend, and a splash of design.<br/> <br />
          For as long as I can remember, the idea of being connected with as many people as possible through the internet has fascinated me, and, even from an early age, I channeled that into web development.
          I remember late nights spent playing with various website builders like GeoCities, Weebly, and Spruz. I crave to develop web applications that make peoples' lives a little easier;
          give them a little joy through my creations.<br /> <br />
          After graduating High School in 2014, I began Ball State University for Computer Science and Music Media Production. This was my first real programming experience, and after one semester, I
          decided to drop my music major and pick up Computer Science as my focus. I guess you could say I fell in love. <br /> <br />
          My third semester, I got hired into a competitive student workforce; the <b-link href="https://www.bsu.edu/about/administrativeoffices/digital-corps">Ball State Digital Corps</b-link>.
          The Digital Corps are a collection of students of various disciplines that specialize in building modern, digital media. As a member of the development team, I got hands on experience
          building web applications and mobile applications. <br />
          Unfortunately, college life outside of the Digital Corps was a long story filled with sighs, so in December of 2017 I made the difficult decision to leave Ball State and get back in touch
          with myself. So here I am with the skills to pursue my passion and an excitement to discover the world.<br /> <br />
          Here's a few of my skills.
        </template>

        <skills />
        
      </content-section>

      <content-section header="This is what I've done" id="projects">
        <template slot="text">
          I've worked on many web projects utilizing my frontend skills and backend development skills. <br />
          As a frontend developer, I've worked with major frontend frameworks like Angular, Vue, and React.<br />
          On the backend side of things, I've mostly worked with PHP and Slim, but I'm also a big fan of Node.js with Express. <br /> <br />
          Take a look at some of the projects I've worked on.
        </template>

        <projects />

      </content-section>

      <content-section header="Get ahold of me" id="contact">
        <template slot="text">
          Gotta really cool project idea? Wanna hire me? Just wanna swap some web development tales? <br/> 
          Great! I love hearing from new people.<br /> <br />
          Fill out the contact form below, and I'll get back with you post haste.
        </template>

        <contact />

      </content-section>
    </div>
    <app-footer />
  </div>
</template>

<script>
import Banner from '~/components/UI/Banner'
import ContentSection from '~/components/UI/ContentSection'
import AppFooter from '~/components/UI/Footer'

import Skills from '~/components/Skills'
import Projects from '~/components/Projects'
import Contact from '~/components/Contact'

  export default {
    components: { Banner, ContentSection, AppFooter, Skills, Projects, Contact }
  }
</script>

<style lang="scss">
#home-page {
  padding-top: $banner-height;

  #banner {
    z-index: 1;
  }
  #content {
    position: relative;
    z-index: 10;
  }
}
</style>
