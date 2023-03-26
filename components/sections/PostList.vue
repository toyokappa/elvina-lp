<template lang="pug">
.post-list
  nuxt-link.post.mb-10(
    v-for="post in postList"
    :key="post.sys.id"
    :to="`/column/${post.fields.slug}`"
  )
    .post-left
      img.eyecatch(:src="post.fields.eyecatch.fields.file.url")
    .post-right
      .title {{ formatTitle(post.fields.title) }}
      .created-at.f-14 {{ formatDate(post.sys.createdAt) }}
</template>

<script setup>
import { format } from "date-fns";

const props = defineProps({
  postList: Array,
});

const formatTitle = (title) => {
  return title.substring(0, 30) + "...";
};
const formatDate = (datetime) => {
  return format(new Date(datetime), "Y.M.d");
};
</script>

<style lang="sass">
.post-list
  .post
    color: inherit
    text-decoration: none
    display: flex
    padding: 10px
    .post-left
      width: 100%
      margin-right: 10px
    .post-right
      width: 100%
      .title
        font-weight: bold
      .created-at
        margin-top: 5px
        color: $hint
        text-align: right
</style>
