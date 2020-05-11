<template>
  <!-- start hero Section -->
  <section class="hero">
    <div class="allherocontent">
      <div class="contents">
        <span class="is-size-5 is-bold is-white">Hi,</span>
        <p class="is-size-4">My name is Amr Adel Ata</p>
        <p class="is-size-1">Front end developer</p>
        <!--  -->
        <a
          href="https://github.com/amradelata/portfolio-vue/blob/master/assets/cv/Amr-adel-ata-frontEndCV.pdf"
          download
          target="_blank"
          class="button downloadCvBtn radio"
        >Download CV</a>
        <a class="button radio seeprojects" @click="scrollToMyProjects()">Projects</a>
        <!--  -->
        <div class="tow-images">
          <img src="~/assets/img/icons/js.png" alt="js" />
          <img src="~/assets/img/icons/vue.png" alt="vue" />
        </div>
      </div>
      <div class="heroimg">
        <img src="~/assets/img/logos/amr.jpeg" class />
      </div>
    </div>
    <img
      src="~/assets/img/herosvg/bottom-right-corner.svg"
      class="top-right-corner scale-in-center"
    />
    <img
      src="~/assets/img/herosvg/top-right-corner.svg"
      class="bottom-right-corner scale-in-center"
    />
    <img src="~/assets/img/herosvg/left.svg" class="left-corner scale-in-center" />
  </section>
</template>

<script>
export default {
  methods: {
    scrollToMyProjects() {
      document.getElementById("myProjectPhone").scrollIntoView();
      document.getElementById("myProjectDesktop").scrollIntoView();
    }
  },
  created() {}
};
</script>

<style  scoped>
.herocontainer {
  padding: 0 10%;
}
</style>