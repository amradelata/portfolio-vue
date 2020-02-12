<template>
  <div id="admin">
    <div id="form">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" v-model="addProductValue" label="NAME" placeholder="title" />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input" v-model="addProductImg" label="IMAGE" placeholder="img" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <textarea class="textarea" placeholder="the body" v-model="addProductCategory"></textarea>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <button class="button is-primary is-fullwidth" @click="addProduct">add</button>
        </div>
      </div>
    </div>
    <!--  -->

    <div class="box" v-for="(post,index) in posts" :key="post.id">
      <article class="media">
        <div class="media-left">
          <figure class="image">
            <div class="img" :style="{ backgroundImage: 'url(' + post.img_url + ')' }"></div>
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>amradelata</strong>
              <small>amradelata@gmail.com</small>
              <br />
              <strong>
                <span :id="post.id" ref="span">{{post.title}}</span>
              </strong>
              <br />
              <span :id="post.id" ref="span">{{post.body}}</span>
              <br />
              <button
                class="button is-danger"
                @click="remove(index)"
                :style="{'display': delet}"
                ref="delete"
                id="delete"
              >delete</button>
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="retweet">
                <span class="icon is-small">
                  <i class="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="like">
                <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import myNavBar from "~/components/myNavBar.vue";
import axios from "axios";
const API = "http://localhost:3000/posts";
export default {
  components: {
    myNavBar
  },
  data() {
    return {
      posts: [],
      addProductValue: "",
      addProductImg: "",
      addProductCategory: "",
      change: "inline-block",
      delet: "inline-block",
      saveChang: "none",
      input: "none",
      change: "inline-block",
      delet: "inline-block",
      scrollToTop: true
    };
  },
  methods: {
    async addProduct() {
      const res = await axios.post(API, {
        title: this.addProductValue,
        img_url: this.addProductImg,
        body: this.addProductCategory
      });
      this.posts.push(res.data);
      this.addProductValue = "";
      this.addProductImg = "";
      this.addProductCategory = "";
    },
    async remove(index) {
      console.log(index);
      const res = await axios.delete(API + "/" + index);
      const dele = await axios.get(API);
      this.posts = dele.data;
    }
  },
  async created() {
    const res = await axios.get(API);
    this.posts = res.data;
    // console.log(this.posts);
  }
};
</script>

<style lang="css" scoped>
#admin {
  padding: 100px;
}
.img {
  height: 100px;
  width: 100px;
}
</style>