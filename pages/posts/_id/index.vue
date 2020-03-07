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
      console.log(this.posts);
    }
  },
  async created() {
    const res = await axios.get(`http://localhost:4000/posts/${this.id}`);
    this.posts = res.data;
    // console.log(this.posts.title);
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
  font-weight: 300;
  font-size: 35px;

  text-align: left;
}

.singelpost p {
  color: rgb(122, 122, 122);
  white-space: pre-line;
  line-height: 30px;
  text-align: left;
}
</style>