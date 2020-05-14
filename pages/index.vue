<template>
  <div>
    <div>
      <myNavBar />
      <hero />
      <whatIOffer />
      <aboutSection />
      <myProject />
      <contact />
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
  head() {
    return {
      title: "AMR | front end developer 🚀",
      meta: [
        {
          hid:
            "amradel,amradelata,amr adel ata,amr adel, Front-end-developer, web-developer, web-designer, website-developer",
          name:
            "amradel,amradelata,amr adel ata,amr adel, Front-end-developer, web-developer, web-designer, website-developer",
          content:
            "amradel,amradelata,amr adel ata,amr adel, Front-end-developer, web-developer, web-designer, website-developer",
          icon:
            "https://bulma.io/images/css-book/css-in-44-minutes-book-cover.png"
        }
      ],
      noscript: [{ innerHTML: "Body No Scripts", body: true }]
    };
  },
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
