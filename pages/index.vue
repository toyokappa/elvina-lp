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
const res = await useNuxtApp().$contentful.getEntries({
  content_type: "blogPost",
  order: "-sys.createdAt",
  limit: 3,
});
const postList = res.items;
</script>
