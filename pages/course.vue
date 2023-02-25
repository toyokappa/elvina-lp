<template lang="pug">
SectionsFirstViewSubPage(
  pageTitle="コースと料金"
  pageTitleSub="Course"
)
SectionsCourseDetail
SectionsService
SectionsCourseProcess
SectionsPlanDetail
SectionsPaymentMethod
SectionsGymInfo
</template>

<script setup>
const { host, serviceName } = useRuntimeConfig().public;
const { path } = useRoute();
useHead({
  title: "コースと料金 | " + serviceName,
  link: [{ rel: "canonical", href: `${host}${path}` }],
});
</script>
