<template>
  <ul id="skills">
    <skill name="css">
      <skill name="sass" />
    </skill>
    <skill name="javascript">
      <skill name="typescript" />
    </skill>
    <skill name="vue">
      <skill name="nuxt" />
    </skill>
    <skill name="react" />
    <skill name="firebase" />
    <skill name="node">
      <skill name="express" />
    </skill>
    <skill name="php">
      <skill name="slim" />
    </skill>
    <skill name="java" />
    <skill name="mySQL" />
  </ul>
</template>

<script>
import Skill from '~/components/UI/Skill'

export default {
  components: { Skill }
}
</script>

<style lang="scss">
#skills {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}
</style>
