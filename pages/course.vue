<template lang="pug">
SectionsFirstViewSubPage(
  :pageTitle="title"
  pageTitleSub="Course"
  :breadcrumb="breadcrumb"
)
SectionsCourseDetail
SectionsService
SectionsCourseProcess
SectionsPlanDetail
SectionsPaymentMethod
SectionsGymInfo(bgBase)
</template>

<script setup>
const { host, serviceName } = useRuntimeConfig().public;
const { path } = useRoute();
const title = "コースと料金";
useHead({
  title: title + " | " + serviceName,
  link: [{ rel: "canonical", href: `${host}${path}` }],
});

const breadcrumb = [{ title }];
</script>
