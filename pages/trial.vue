<template lang="pug">
SectionsFirstViewSubPage(
  pageTitle="無料体験トレーニング"
  pageTitleSub="FreeTrial"
)
SectionsTrialProcess
SectionsGymInfo
</template>

<script setup>
const { host, serviceName } = useRuntimeConfig().public;
const { path } = useRoute();
useHead({
  title: "無料体験トレーニング | " + serviceName,
  link: [{ rel: "canonical", href: `${host}${path}` }],
});
</script>
