<template>
  <section class="hero is-fullheight myHero">
    <img src="~/assets/img/shap-5.svg" alt="shap-4" class="shap-4" />
    <img src="~/assets/img/shap-5.svg" alt="shap-5" class="shap-5" />
    <div class="hero-body">
      <div class="container">
        <div class="columns mainhero">
          <div class="column is-half my-content">
            <span class="is-size-5 is-bold is-white">Hi,</span>
            <p class="is-size-4">My name is Amr Adel Ata</p>
            <p class="is-size-1">Front end developer</p>
            <div class="tow-images">
              <img src="~/assets/img/icons/js.png" alt="js" />
              <img src="~/assets/img/icons/vue.png" alt="vue" />
            </div>
            <div class="herobtn">
              <a
                href="https://github.com/amradelata/portfolio-vue/blob/master/assets/cv/Amr-adel-ata-frontEndCV.pdf"
                download
                target="_blank"
                class="button downloadCvBtn radio"
              >Download CV</a>
              <a class="button downloadCvBtn radio" @click="scrollToMyProjects()">Projects</a>
            </div>
          </div>
          <div class="column is-half hero-emage"></div>
        </div>
      </div>
    </div>
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
</style>