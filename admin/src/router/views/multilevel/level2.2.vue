<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Multi Level",
      items: [
        {
          text: "Level 1.2",
          href: "/"
        },
        {
          text: "Level 2.2",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
  </Layout>
</template>
