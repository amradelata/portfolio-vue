<template>
  <div>
    <myNavBar />
    <div class="container">
      <div class="postes">
        <div class="cards">
          <div class="card" v-for="post in posts" :key="post._id">
            <nuxt-link :to="'posts/' + post._id">
              <div>
                <div class="img" :style="{backgroundImage: 'url('+ post.img_url+')'}"></div>
                <div class="content">
                  <h3>{{post.title.slice(0, 18)}}</h3>
                  <p>{{post.body.slice(0, 20)+ " ..."}}</p>
                </div>
              </div>
              <div class="myhover">
                <h3>{{post.title}}</h3>
              </div>
            </nuxt-link>
          </div>
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
h1 {
  font-size: 30px;
}

.postes {
  padding-top: 150px;
  display: inline-flex;
}

.card {
  position: relative;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
}
.card .img {
  border-radius: 0;
  background-size: cover;
}
.card .content {
  text-align: left;
  padding: 25px;
}
.card .content h3 {
  font-weight: lighter;
  font-size: 30px;
}
.card .content p {
  font-weight: lighter;
  font-size: 20px;
}
.myhover h3 {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.2s, opacity 0.2s linear;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 10px;
}
.card:hover .myhover h3 {
  visibility: visible;
  opacity: 1;
  transition-delay: 0s;
}
</style>



