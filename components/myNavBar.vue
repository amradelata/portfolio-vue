<template>
  <div>
    <nav class="container">
      <nuxt-link to="/">
        <img src="~/assets/img/logos/logo_transparent.png" alt="logo" class="logo" />
      </nuxt-link>
      <!-- <i class="fas fa-bars phonePars phoneParsNave" id="phoneParsNave"></i> -->

      <div class="my-buttons">
        <nuxt-link to="/posts" class="button radio downloadCvBtn">My Blog</nuxt-link>

        <!-- href="https://drive.google.com/open?id=1PKZ9yZvnuVU_cok9enCibwViG5ZrfqvB" -->
        <a
          href="~/./assets/cv/Amr-adel-ata-frontEndCV.pdf"
          target="_blank"
          class="button downloadCvBtn radio"
        >Download CV</a>
        <a
          href="https://www.patreon.com/user?alert=2"
          class="patreon-button button radio"
          target="_blank"
          rel="noopener"
        ></a>
        <!-- <nuxt-link to="/admin" class="button downloadCvBtn radio">admin</nuxt-link> -->
      </div>
    </nav>
    <i
      class="fas fa-bars phonePars phoneParsNave"
      id="phoneParsNave"
      ref="phoneParsNave"
      @click="handler"
    ></i>
    <a class="my-buttonsPhone" ref="my-buttonsPhone">
      <nuxt-link to="/posts" class="button radio downloadCvBtn">My Blog</nuxt-link>

      <a
        href="./assets/cv/Amr-adel-ata-frontEndCV.pdf"
        target="_blank"
        download
        class="button downloadCvBtn radio"
      >Download CV</a>
      <a
        href="https://www.patreon.com/user?alert=2"
        class="patreon-button button radio"
        target="_blank"
        rel="noopener"
      ></a>
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