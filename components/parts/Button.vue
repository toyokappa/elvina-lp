<template lang="pug">
nuxt-link.button(:style="buttonStyles")
  slot
</template>

<script setup lang="ts">
interface Props {
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "black",
});

const buttonStyles = computed(() => {
  let styles;
  switch (props.color) {
    case "black":
      styles = { color: "white", backgroundColor: "black" };
      break;
    case "white":
      styles = {
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      };
      break;
    default:
      styles = { color: "white", backgroundColor: "black" };
  }
  return styles;
});
</script>

<style lang="sass" scoped>
.button
  display: block
  font-weight: bold
  text-align: center
  text-decoration: none
  width: 100%
  padding: 20px 40px
  border-radius: 5px
</style>
