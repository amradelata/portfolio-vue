<template>
  <!-- start hero Section -->
  <div class="container">
    <section class="hero">
      <div class="allherocontent">
        <div class="contents scale-in-center">
          <span class="is-size-5 is-bold is-white">Hi,</span>
          <p class="is-size-4">My name is Amr Adel Ata</p>
          <p class="is-size-1">Front end developer</p>
          <!--  -->

          <a
            class="myherobtn darckbtn"
            target="_blank"
            href="https://github.com/amradelata/portfolio-vue/blob/master/assets/cv/Amr-adel-ata-frontEndCV.pdf"
          >Download CV</a>
          <a class="seeprojects myherobtn" @click="scrollToMyProjects()">Projects</a>
          <!--  -->
          <div class="tow-images">
            <img src="~/assets/img/icons/js.png" alt="js" />
            <img src="~/assets/img/icons/vue.png" alt="vue" />
          </div>
        </div>
        <div class="heroimg">
          <img src="~/assets/img/logos/amr.png" class="scale-in-center" />
        </div>
      </div>
      <!-- <img
        src="~/assets/img/herosvg/bottom-right-corner.svg"
        class="top-right-corner scale-in-center"
      />-->

      <img src="~/assets/img/herosvg/left.svg" class="left-corner scale-in-center" />
    </section>
  </div>
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