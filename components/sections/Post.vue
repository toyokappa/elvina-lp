<template lang="pug">
.post
  img.eyecatch.mb-2(:src="eyecatch")
  .container
    h1.title.f-20 {{ title }}
    .created-at.mb-1 {{ formatDate(createdAt) }}
    .markdown(v-html="markdown")
</template>

<script setup>
import { format } from "date-fns";
import md from "markdown-it";

const props = defineProps({
  eyecatch: String,
  title: String,
  createdAt: String,
  content: String,
});

const formatDate = (datetime) => {
  return format(new Date(datetime), "Y.M.d");
};

const renderer = md();
const markdown = renderer.render(props.content);
</script>

<style lang="sass" scoped>
.post
  .title
    font-weight: bold
  .created-at
    color: $hint
</style>
