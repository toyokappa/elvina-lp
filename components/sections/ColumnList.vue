<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 美ボディコラム
  .container
    .description.mb-3 女性らしい美しいカラダをを手に入れるための運動やダイエットに関する情報を定期的に発信しています。
    nuxt-link.post(
      v-for="post in postList"
      :key="post.sys.id"
      :to="`/column/${post.fields.slug}`"
    )
      .post-left
        img.eyecatch(:src="post.fields.eyecatch.fields.file.url")
      .post-right
        .title {{ formatTitle(post.fields.title) }}
        .created-at.f-14 {{ formatDate(post.sys.createdAt) }}
    template(v-if="columnPage")
    template(v-else)
      PartsButton(color="white" to="/column") もっと見る
</template>

<script setup lang="ts">
import { format } from "date-fns";

interface Props {
  postList: object[];
  columnPage?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  columnPage: false,
});

const formatTitle = (title: string) => {
  return title.substring(0, 30) + "...";
};
const formatDate = (datetime: string) => {
  return format(new Date(datetime), "Y.M.d");
};
</script>

<style lang="sass" scoped>
.post
  color: inherit
  text-decoration: none
  display: flex
  padding: 10px 0
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
