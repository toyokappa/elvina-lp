<template lang="pug">
SectionsFirstViewSubPage(
  pageTitle="美ボディコラム"
  pageTitleSub="Column"
)
SectionsPostList(
  :postList="postList"
)
</template>

<script setup>
const res = await useNuxtApp().$contentful.getEntries({
  content_type: "blogPost",
  order: "-sys.createdAt",
});
const postList = res.items;
</script>
