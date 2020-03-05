<template>
  <div>
    <myNavBar />
    <div class="container">
      <div class="postes">
        <div class="cards">
          <div class="card" v-for="post in posts" :key="post.id">
            <nuxt-link :to="'posts/' + post.id">
              <div>
                <!-- <div class="img" :style="{ backgroundImage: 'url(' + single.img_url + ')' }"></div> -->
                <div class="img" :style="{backgroundImage: 'url('+ post.img_url+')'}"></div>
                <div class="content">
                  <h3>{{post.title}}</h3>
                  <p>{{post.body.slice(0, 50)+ " ..." }}</p>
                </div>
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
const API = "http://localhost:4000/posts";
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
    // console.log(this.posts);
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
</style>



