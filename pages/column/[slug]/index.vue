<template lang="pug">
SectionsFirstViewSubPage(
  pageTitle="美ボディコラム"
  pageTitleSub="Column"
  :mainHeader="false"
  :breadcrumb="breadcrumb"
)
SectionsColumn(
  :eyecatch="post.fields.eyecatch.fields.file.url"
  :title="post.fields.title"
  :createdAt="post.sys.createdAt"
  :content="post.fields.content"
)
</template>

<script setup>
const { host, serviceName } = useRuntimeConfig().public;
const { path, params } = useRoute();
const { slug } = params;

const res = await useNuxtApp().$contentful.getEntries({
  content_type: "blogPost",
  "fields.slug": slug,
});
const post = res.items[0];

useHead({
  title: post.fields.title + " | " + serviceName,
  link: [{ rel: "canonical", href: `${host}${path}` }],
});

const breadcrumb = [
  { title: "美ボディコラム", path: "/column" },
  { title: post.fields.title },
];
</script>
