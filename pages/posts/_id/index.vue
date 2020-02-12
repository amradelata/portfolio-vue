<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      posts: []
    };
  },
  computed: {
    single() {
      return this.posts;
      console.log(this.posts);
    }
  },
  async created() {
    const res = await axios.get(`http://localhost:3000/posts/${this.id}`);
    this.posts = res.data;
    console.log(this.posts.title);
    alert(this.posts.title)
  }
};
</script>

<style lang="scss" scoped>
</style>