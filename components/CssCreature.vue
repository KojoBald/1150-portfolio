<template>
  <div id="css-creature">
    <div id="head">
    <div id="head-hole"></div>
    <div id="face">
      <div id="features">
        <div id="glasses">
          <div class="piece left">
            <div class="shimmer"></div>
          </div>
          <div class="bridge"></div>
          <div class="piece right">
            <div class="shimmer"></div>
          </div>
        </div>
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="mouth">
          <div class="tooth small"></div>
          <div class="tooth small"></div>
          <div class="tooth big"></div>
          <div class="tooth big"></div>
          <div class="tooth small"></div>
          <div class="tooth small"></div>
        </div>
      </div>
    </div>
    <div id="neck"></div>
  </div>
  </div>
</template>

<style lang="css" scoped>
div:not(#css-creature) {
/*   position: absolute; */
  border: 1px solid black;
}

#head {
/*   margin-left: auto;
  margin-right: auto; */
  width: 100px;
  height: 130px;
  border: none;
}

#head-hole {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -1px;
  height: 15px;
  width: 40%;
  background-color: yellow;
}

#head-hole::before {
  content: '';
  display: block;
  background-color: khaki;
  height: 15px;
  width: 30%;
}

#head #face {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: yellow;
  overflow: hidden;
}

#head #face::before {
  content: '';
  display: inline-block;
  position: relative;
  height: 100px;
  width: 30%;
  background-color: khaki;
}

#glasses .piece {
  position: absolute;
  z-index: 10;
  height: 35px;
  width: 35px;
  border: 1px solid black;
  border-radius: 25px;
  background: linear-gradient(blue, green);
  opacity: .7;
  top: 42px;
  overflow: hidden;
}

#glasses .bridge {
  position: absolute;
  top: 60px;
  left: 50px;
  height: 2px;
  width: 9px;
  background-color: black;
}

#glasses .left {
  left: 15px
}

#glasses .right {
  left: 60px;
}

.shimmer {
  transform: rotate(-45deg);
  position: absolute;
  width: 75px;
  height: 20px;
  left: -20px;
  top: -32px;
  background-color: white;
  border: none;
  animation: shimmer 5s ease-in-out infinite;
  animation-delay: 2s;
}

.eye {
  width: 10px;
  height: 20px;
  border-radius: 15px;
  display: inline-block;
  position: absolute;
  top: 50px;
  background-color: black;
}

.eye::before {
  content: '';
  display: block;
  position: relative;
  width: 7px;
  height: 7px;
  border-radius: 5px;
  top: 2px;
  left: 1px;
  background-color: white;
}

.eye.left {
  left: 30px;
}

.eye.right {
  left: 70px;
}

.mouth {
  position: absolute;
  width: 70px;
  height: 30px;
  left: 22px;
  top: 85px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: black;
  display: flex;
  flex-direction: row;
  overflow: hidden
}

.mouth .tooth {
  height: 13px;
  width:10px;
  display: inline-block;
  background-color: white;
  border-top: 2px solid pink
}

.tooth.big {
  flex: 2 2 0;
}

.tooth.small {
  flex: 1 1 0;
}

#neck {
  width: 60%;
  height: 15px;
  background-color: yellow;
  margin-left: auto;
  margin-right: auto;
  margin-top: -1px;
}

#neck::before {
  content: '';
  display: block;
  height: 15px;
  width: 30%;
  background-color: khaki;
}

@keyframes shimmer {
  0% {
    top: -32px;
  }
  10% {
    top: 48px;
  }
  100% {
    top: 48px;
  }
}
</style>
