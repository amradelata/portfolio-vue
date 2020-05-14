<template>
  <div>
    <myNavBar />
    <div class="container">
      <div class="postes">
        <div class="blogs">
          <div class="blog" v-for="post in posts" :key="post._id">
            <nuxt-link :to="'/posts/' + post._id">
              <div class>
                <div class="date">
                  <span class="is-size-3">{{post.updatedAt.slice(8, 10)}}</span>
                  <br />
                  <span>{{post.updatedAt.slice(6, 7)}}</span>
                  <br />
                  <span>{{post.updatedAt.slice(0, 4)}}</span>
                </div>
                <div class="img" :style="{backgroundImage: 'url('+ post.img_url+')'}"></div>
              </div>
              <div class="content">
                <h3>{{post.title}}</h3>
              </div>
            </nuxt-link>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
    <myFooter />
  </div>
</template>

<script>
import axios from "axios";
const API = "https://amradelata-blog-api.herokuapp.com/posts";
import myNavBar from "~/components/myNavBar.vue";
import myFooter from "~/components/myFooter.vue";
export default {
  components: {
    myNavBar,
    myFooter
  },
  data() {
    return {
      posts: []
    };
  },
  async created() {
    const res = await axios.get(API);
    this.posts = res.data;
    this.posts = this.posts.posts;
    console.log(this.posts);
  }
};
</script>

<style  scoped>
</style>