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

const { ctf } = useRuntimeConfig().public;
const { data } = await useFetch(
  `https://cdn.contentful.com/spaces/${ctf.spaceId}/environments/master/entries`,
  {
    params: {
      content_type: "blogPost",
      order: "-sys.createdAt",
    },
    headers: {
      authorization: "Bearer " + ctf.accessToken,
    },
  }
);
const postList = data.value.items.map((item) => {
  const eyecatch = data.value.includes.Asset.find(
    (asset) => asset.sys.id === item.fields.eyecatch.sys.id
  );
  item.fields.eyecatch = eyecatch;
  return item;
});
</script>
