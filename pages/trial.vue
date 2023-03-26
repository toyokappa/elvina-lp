<template lang="pug">
SectionsFirstViewSubPage(
  :pageTitle="title"
  pageTitleSub="FreeTrial"
  :breadcrumb="breadcrumb"
)
SectionsTrialProcess
SectionsGymInfo(bgBase)
</template>

<script setup>
const { host, serviceName } = useRuntimeConfig().public;
const { path } = useRoute();
const title = "無料体験トレーニング";
useHead({
  title: title + " | " + serviceName,
  link: [{ rel: "canonical", href: `${host}${path}` }],
});

const breadcrumb = [{ title }];
</script>
