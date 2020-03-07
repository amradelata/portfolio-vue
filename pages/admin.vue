<template>
  <div>
    <myNavBar />
    <div id="admin" class="container">
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
                <span :id="post.id">{{post.body}}</span>
                <br />

                <input
                  class="input is-primary"
                  type="text"
                  :style="{'display': input}"
                  :value="post.title"
                  ref="input1"
                  id="input"
                />
                <input
                  class="input is-primary"
                  type="text"
                  :style="{'display': input}"
                  :value="post.body"
                  ref="input2"
                  id="input"
                />
                <input
                  class="input is-primary"
                  type="text"
                  :style="{'display': input}"
                  :value="post.img_url"
                  ref="input3"
                  id="input"
                />
                <button
                  class="button is-danger"
                  @click="remove(index = post.id)"
                  :style="{'display': delet}"
                  ref="delete"
                  id="delete"
                >delete</button>
                <button
                  class="button is-link"
                  @click="edit(index)"
                  :style="{'display': change}"
                  ref="edit"
                  id="edit"
                >edit</button>
                <button
                  class="button is-success"
                  @click="save(index)"
                  :style="{'display': saveChang}"
                  ref="save"
                  id="save"
                >save</button>
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
  </div>
</template>

<script>
import myNavBar from "~/components/myNavBar.vue";
import axios from "axios";
const API = "http://localhost:4000/posts";
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
      const res = await axios.delete("http://localhost:4000/posts/" + index);
      const dele = await axios.get(API);
      this.posts = dele.data;
    },
    edit(index) {
      const input1 = this.$refs["input1"][index];
      const input2 = this.$refs["input2"][index];
      const input3 = this.$refs["input3"][index];
      const edit = this.$refs["edit"][index];
      const save = this.$refs["save"][index];
      input1.style.display = "inline-block";
      input2.style.display = "inline-block";
      input3.style.display = "inline-block";
      edit.style.display = "none";
      save.style.display = "inline-block";
      console.log(edit);
    },
    async save(index) {
      const input1 = this.$refs["input1"][index];
      const input2 = this.$refs["input2"][index];
      const input3 = this.$refs["input3"][index];
      const span = this.$refs["span"][index].id;

      const input1Value = this.$refs["input1"][index].value;
      const input2Value = this.$refs["input2"][index].value;
      const input3Value = this.$refs["input3"][index].value;

      const edit = this.$refs["edit"][index];
      const save = this.$refs["save"][index];
      input1.style.display = "none";
      input2.style.display = "none";
      input3.style.display = "none";
      edit.style.display = "inline-block";
      save.style.display = "none";

      const res = await axios.patch(API + "/" + span, {
        title: input1Value,
        body: input2Value,
        img_url: input3Value
      });
      const edi = await axios.get(API);
      this.API = edi.data;
      console.log(span);
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
  padding: 150px 100px 100px 100px;
}
.img {
  height: 100px;
  width: 100px;
}
</style>