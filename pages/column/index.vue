<template lang="pug">
SectionsFirstViewSubPage(
  :pageTitle="title"
  pageTitleSub="Column"
  :breadcrumb="breadcrumb"
)
SectionsColumnList(
  :postList="postList"
  :columnPage="true"
)
</template>

<script setup>
const { host, serviceName } = useRuntimeConfig().public;
const { path } = useRoute();
const title = "美ボディコラム";
useHead({
  title: title + " | " + serviceName,
  link: [{ rel: "canonical", href: `${host}${path}` }],
});

const breadcrumb = [{ title }];

const res = await useNuxtApp().$contentful.getEntries({
  content_type: "blogPost",
  order: "-sys.createdAt",
});
const postList = res.items;
</script>
