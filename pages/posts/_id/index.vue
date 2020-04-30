<template>
  <div>
    <myNavBar />
    <div>
      <div class="container">
        <div class="singelpost">
          <div class="img" :style="{ backgroundImage: 'url(' + this.posts.img_url + ')' }"></div>

          <div class="mycontent">
            <h3>{{ this.posts.title }}</h3>
            <p>{{ this.posts.body }}</p>
            <p>updatedAt: {{ this.posts.updatedAt }}</p>
            <p>createdAt: {{ this.posts.createdAt }}</p>
          </div>
        </div>
      </div>
      <myFooter />
    </div>
  </div>
</template>

<script>
import myNavBar from "~/components/myNavBar.vue";
import myFooter from "~/components/myFooter.vue";
import axios from "axios";
export default {
  components: {
    myNavBar,
    myFooter
  },
  data() {
    return {
      id: this.$route.params.id,
      posts: []
    };
  },
  async created() {
    const res = await axios.get(
      `https://amradelata-blog-api.herokuapp.com/posts/${this.id}`
    );
    this.posts = res.data.post;
    // console.log(res.data.post);
  }
};
</script>

<style  scoped>
.mycontent {
  padding: 15px;
}
.singelpost {
  padding-top: 150px;
  overflow-wrap: break-word;
}
.singelpost .img {
  height: 80vh;
  width: 100%;
  background-size: cover;
  background-position: center center;
  margin-bottom: 50px;
  border-radius: 0;
}
.singelpost h3 {
  font-size: 2.6rem;
  width: 100%;
  font-family: Signika, sans-serif;
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
  margin-bottom: 50px;
}

.singelpost p {
  color: rgb(122, 122, 122);
  white-space: pre-line;
  line-height: 30px;
  text-align: left;
}
</style>