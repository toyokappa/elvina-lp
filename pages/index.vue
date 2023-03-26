<template lang="pug">
SectionsFirstView
SectionsConcept
SectionsFeature
SectionsRecommend
SectionsBeforeAfter
SectionsCourse
SectionsColumnList(:postList="postList")
SectionsGymInfo(bgBase)
</template>

<script setup>
const { ctf } = useRuntimeConfig().public;
const { data } = await useFetch(
  `https://cdn.contentful.com/spaces/${ctf.spaceId}/environments/master/entries`,
  {
    params: {
      content_type: "blogPost",
      order: "-sys.createdAt",
      limit: 3,
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
