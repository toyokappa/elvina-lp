<template lang="pug">
section.section
  .post
    img.eyecatch.mb-2(:src="eyecatch")
    .container
      h1.title.f-20 {{ title }}
      .created-at.mb-1 {{ formatDate(createdAt) }}
      .markdown(v-html="markdown")
      .related-post
        .prev
          template(v-if="prevPost")
            .pointer ＜ 前の記事
            nuxt-link(:to="`/column/${prevPost.fields.slug}`")
              img.eyecatch(:src="prevPost.fields.eyecatch.fields.file.url")
              .title.f-12 {{ prevPost.fields.title }}
              .created-at.f-12 {{ formatDate(prevPost.sys.createdAt) }}
        .next
          template(v-if="nextPost")
            .pointer 次の記事 ＞
            nuxt-link(:to="`/column/${nextPost.fields.slug}`")
              img.eyecatch(:src="nextPost.fields.eyecatch.fields.file.url")
              .title.f-12 {{ nextPost.fields.title }}
              .created-at.f-12 {{ formatDate(nextPost.sys.createdAt) }}
</template>

<script setup>
import { format } from "date-fns";
import md from "markdown-it";

const props = defineProps({
  eyecatch: String,
  title: String,
  createdAt: String,
  content: String,
  prevPost: Object,
  nextPost: Object,
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
  .related-post
    display: flex
    .prev, .next
      width: 100%
      a
        color: inherit
        text-decoration: none
      .pointer
        color: $hint
        margin-bottom: 5px
    .prev
      margin-right: 10px
    .next
        .pointer
          text-align: right
</style>
