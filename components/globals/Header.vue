<template lang="pug">
header
  .container
    nuxt-link.logo(to="/")
      img(src="@/assets/images/logo.png" alt="Elvina")
</template>

<style lang="sass" scoped>
header
  width: 100%
  background-color: $white
  border-bottom: 1px solid $grey
  border-top: 5px solid $pink
  padding: 13px 0
  display: flex
  align-items: center
  justify-content: flex-start
  .logo
    img
      height: 30px
      width: auto
</style>
