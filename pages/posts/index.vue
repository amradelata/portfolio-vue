<template>
  <div>
    <!--  -->
    <div class="cards" v-for="product in posts" :key="product.id" cols="12" sm="4">
      <div class="card" outlined tile>
        <nuxt-link :to="'posts/' + product.id">
          <div class="img" :style="{ backgroundImage: 'url(' + product.img_url + ')' }"></div>

          <div class="content">
            <h3 class="title">{{product.title}}</h3>
            <button>Shoew More</button>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API = "http://localhost:3000/posts";
export default {
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
.cards {
  display: flex;
  flex-wrap: wrap;
}
.card {
  flex-basis: calc(33.333% - 20px);
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 10px;
  border-radius: 4px;
  overflow: hidden;
}
.card .img {
  width: 100%;
  background-size: contain;
}
.card .content {
  padding: 15px;
}
.card .content h3 {
  margin: 0;
  font-size: 25px;
  margin-bottom: 10px;
}
.card .content button {
  padding: 10px 15px;
  background-color: #3498db;
  color: #fff;
  border-color: transparent;
  display: block;
  text-align: center;
  border-radius: 3px;
  width: 100%;
}
</style>