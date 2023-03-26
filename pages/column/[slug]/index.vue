<template lang="pug">
SectionsFirstViewSubPage(
  pageTitle="美ボディコラム"
  pageTitleSub="Column"
  :mainHeader="false"
)
SectionsPost(
  :eyecatch="post.fields.eyecatch.fields.file.url"
  :title="post.fields.title"
  :createdAt="post.sys.createdAt"
  :content="post.fields.content"
)
</template>

<script setup>
const { slug } = useRoute().params;

const res = await useNuxtApp().$contentful.getEntries({
  content_type: "blogPost",
  "fields.slug": slug,
});
const post = res.items[0];
</script>
