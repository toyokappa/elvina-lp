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
  :prevPost="prevPost"
  :nextPost="nextPost"
)
</template>

<script setup>
const { host, serviceName } = useRuntimeConfig().public;
const { path, params } = useRoute();
const { slug } = params;

const { $contentful } = useNuxtApp();

const { ctf } = useRuntimeConfig().public;
const ctfUrl = `https://cdn.contentful.com/spaces/${ctf.spaceId}/environments/master/entries`;
const authorization = "Bearer " + ctf.accessToken;
const { data } = await useFetch(ctfUrl, {
  params: {
    content_type: "blogPost",
    "fields.slug": slug,
  },
  headers: {
    authorization,
  },
});
const post = data.value.items[0];
post.fields.eyecatch = data.value.includes.Asset[0];

const { data: prevRes } = await useFetch(ctfUrl, {
  params: {
    content_type: "blogPost",
    "sys.createdAt[lt]": post.sys.createdAt,
    order: "-sys.createdAt",
    limit: 1,
  },
  headers: {
    authorization,
  },
});
let prevPost;
if (prevRes.value.items.length > 0) {
  prevPost = prevRes.value.items[0];
  prevPost.fields.eyecatch = prevRes.value.includes.Asset[0];
}

const { data: nextRes } = await useFetch(ctfUrl, {
  params: {
    content_type: "blogPost",
    "sys.createdAt[gt]": post.sys.createdAt,
    order: "sys.createdAt",
    limit: 1,
  },
  headers: {
    authorization,
  },
});
let nextPost;
if (nextRes.value.items.length > 0) {
  nextPost = nextRes.value.items[0];
  nextPost.fields.eyecatch = nextRes.value.includes.Asset[0];
}

useHead({
  title: post.fields.title + " | " + serviceName,
  link: [{ rel: "canonical", href: `${host}${path}` }],
});

const breadcrumb = [
  { title: "美ボディコラム", path: "/column" },
  { title: post.fields.title },
];
</script>
