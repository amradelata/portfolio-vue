<template>
  <div>
    <myNavBar />
    <div>
      <div class="container">
        <div class="singelpost">
          <div class="img" :style="{ backgroundImage: 'url(' + single.img_url + ')' }"></div>

          <div class="mycontent">
            <h3>{{ single.title }}</h3>
            <p>{{ single.body }}</p>
            <p>updatedAt: {{ single.updatedAt }}</p>
            <p>createdAt: {{ single.createdAt }}</p>
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
  computed: {
    single() {
      return this.posts;
      // console.log(this.posts);
    }
  },
  async created() {
    const res = await axios.get(
      `https://amradelata-blog-api.herokuapp.com/posts/${this.id}`
    );
    this.posts = res.data;
    this.posts = this.posts.post;
    console.log(this.posts);
    // alert(this.posts.title);
  }
};
</script>

<style  scoped>
.mycontent {
  padding: 15px;
}
.singelpost {
  padding-top: 150px;
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
  font-size: 3.6rem;
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