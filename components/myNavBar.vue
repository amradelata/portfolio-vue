<template>
  <div>
    <nav class="container">
      <img src="~/assets/img/logos/logo_transparent.png" alt="logo" class="logo" />

      <!-- <i class="fas fa-bars phonePars phoneParsNave" id="phoneParsNave"></i> -->

      <div class="my-buttons">
        <a
          href="https://www.patreon.com/user?alert=2"
          class="patreon-button button radio downloadCvBtn"
          target="_blank"
          rel="noopener"
        ></a>
        <nuxt-link to="/admin" class="button downloadCvBtn radio">admin</nuxt-link>
        <nuxt-link to="/posts" class="button downloadCvBtn radio">posts</nuxt-link>
        <a
          href="~/./assets/cv/Amr-adel-ata-frontEndCV.pdf"
          target="_blank"
          download
          class="button downloadCvBtn radio"
        >Download CV</a>
      </div>
    </nav>
    <i
      class="fas fa-bars phonePars phoneParsNave"
      id="phoneParsNave"
      ref="phoneParsNave"
      @click="handler"
    ></i>
    <a class="my-buttonsPhone" ref="my-buttonsPhone">
      <a
        href="https://www.patreon.com/user?alert=2"
        class="patreon-button button radio downloadCvBtn"
        target="_blank"
        rel="noopener"
      ></a>
      <nuxt-link to="/posts" class="button downloadCvBtn radio">posts</nuxt-link>

      <a
        href="./assets/cv/Amr-adel-ata-frontEndCV.pdf"
        target="_blank"
        download
        class="button downloadCvBtn radio"
      >Download CV</a>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    handler() {
      this.$refs["my-buttonsPhone"].classList.toggle("disblay-block");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>