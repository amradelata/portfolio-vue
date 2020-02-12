<template>
  <div>
    <div>
      <myNavBar />
      <hero />
      <whatIOffer />
      <aboutSection />
      <myProject />
      <contact />>
    </div>
  </div>
</template>

<script>
import myNavBar from "~/components/myNavBar.vue";
import hero from "~/components/hero.vue";
import whatIOffer from "~/components/whatIOffer.vue";
import aboutSection from "~/components/aboutSection.vue";
import myProject from "~/components/myProject.vue";
import contact from "~/components/contact.vue";

export default {
  components: {
    myNavBar,
    hero,
    whatIOffer,
    aboutSection,
    myProject,
    contact
  }
};
</script>

<style>
</style>
