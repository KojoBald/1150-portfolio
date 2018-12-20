<template>
  <footer>
    <div>
      <span class="heart">
        &lt;3
      </span>
      Kaleb Baldwin, 2018
    </div>
    <div class="links">
      <b-link target="_blank" href="https://drive.google.com/file/d/1iQx02wwdFRgyGypCCx1PaDQVOlIhUOJe/view?usp=sharing">resume</b-link>
      <a target="_blank" href="https://github.com/KojoBald">
        <img src="/img/skills/github.png" >
      </a>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
footer {
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 75px;
  width: 100vw;
  position: relative;
  z-index: 500;

  .heart {
    color: $red;
    font-family: Courier, sans-serif;
  }

  a {
    color: $red;
    position: relative;
    margin-left: 20px;
  }

  img {
    height: 40px;
  }
}
</style>
