<template>
  <b-navbar id="nav" fixed="top">
    <b-navbar-brand>
      <!-- <div id="nav__brand">Kaleb Baldwin</div> -->
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#about">About</b-nav-item>
      <b-nav-item href="#projects">Projects</b-nav-item>
      <b-nav-item href="#contact">Contact</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#nav {
  background-color: rgba(#fff, 0);
  font-family: 'Ubuntu', sans-serif;

  #nav__brand {
    font-family: 'Venus Rising';
    color: white;
    .red {
      color: $red;
    }
    .cyan {
      color: $cyan;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;

    li {
      margin: 0 20px;
      padding: 0 10px;
      cursor: pointer;

      a { color: white }
    }
  }
}
</style>
