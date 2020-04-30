<template>
  <div>
    <myNavBar />
    <!-- login -->
    <div class="container loginCard" ref="loginCard">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" v-model="myemail" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" v-model="mybassword" />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-success" @click="chekme">Login</button>
        </p>
      </div>

      <div class="notification is-danger" ref="notification">
        <button class="delete" @click="close"></button>
        It may be an incorrect email address or password.
        <br />
        <strong>Please re-enter</strong>
      </div>
    </div>
    <!-- login -->
    <div id="admin" class="container" ref="myadmin">
      <nuxt-link to="/admin">admin</nuxt-link>
      <br />
      <br />
      <nuxt-link to="/admin_mybroject">my project</nuxt-link>
      <div id="form">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" v-model="addPostTitle" label="NAME" placeholder="title" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input" v-model="addPostImg" label="IMAGE" placeholder="img" />
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
            <textarea class="textarea" placeholder="the body" v-model="addPostBody"></textarea>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <button class="button is-primary is-fullwidth" @click="addProduct">add</button>
          </div>
        </div>
      </div>
      <!--  -->

      <div class="box" v-for="(post,index) in posts" :key="post._id">
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
                  <br />
                  <span ref="span">ID: {{post._id}}</span>
                  <br />

                  <span ref="span">TITLE: {{post.title}}</span>
                </strong>
                <br />
                <span>BODY: {{post.body}}</span>
                <br />
                <a :href="`/posts/${post._id}`">see the post</a>
                <br />
                <input
                  placeholder="ADD NAME"
                  class="input is-primary"
                  type="text"
                  :style="{'display': input}"
                  :value="post.title"
                  ref="input1"
                  id="input"
                />
                <input
                  placeholder="ADD BODY"
                  class="input is-primary"
                  type="text"
                  :style="{'display': input}"
                  :value="post.body"
                  ref="input2"
                  id="input"
                />
                <input
                  placeholder="ADD IMAGE"
                  class="input is-primary"
                  type="text"
                  :style="{'display': input}"
                  :value="post.img_url"
                  ref="input3"
                  id="input"
                />
                <button
                  class="button is-danger"
                  @click="remove(post._id)"
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
                  @click="save(index,post._id)"
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
const API = "https://amradelata-blog-api.herokuapp.com/posts";
export default {
  components: {
    myNavBar
  },
  data() {
    return {
      posts: [],
      addPostTitle: "",
      addPostImg: "",
      addPostBody: "",
      change: "inline-block",
      delet: "inline-block",
      saveChang: "none",
      input: "none",
      scrollToTop: true,
      myemail: "",
      mybassword: ""
    };
  },
  methods: {
    chekme() {
      // console.log();
      if (this.mybassword && this.myemail == 1) {
        // console.log("true");
        this.$refs["myadmin"].style.display = "block";
        this.$refs["loginCard"].style.display = "none";
      } else {
        // console.log("false");
        this.$refs["notification"].style.display = "block";
        this.$refs["myadmin"].style.display = "none";
      }
    },
    close() {
      this.$refs["notification"].style.display = "none";
    },
    async addProduct() {
      const res = await axios.post(API, {
        title: this.addPostTitle,
        body: this.addPostBody,
        img_url: this.addPostImg
      });

      this.posts.push(res.data);
      this.addPostTitle = "";
      this.addPostImg = "";
      this.addPostBody = "";
    },
    async remove(id) {
      // console.log(API + "/" + id);
      const myres = await axios.delete(API + "/" + id, {
        success: true,
        message: "Post deleted."
      });
      const dele = await axios.get(API);
      this.posts = dele.data.posts;
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
      // console.log(edit);
    },
    async save(index, id) {
      // console.log(id);
      const input1 = this.$refs["input1"][index];
      const input2 = this.$refs["input2"][index];
      const input3 = this.$refs["input3"][index];

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

      const res = await axios.patch(
        `https://amradelata-blog-api.herokuapp.com/posts/` + id,
        {
          title: input1Value,
          body: input2Value,
          img_url: input3Value
        }
      );
      const edi = await axios.get(API);
      this.posts = edi.data.posts;

      // console.log(this.posts);
    }
  },
  async created() {
    const res = await axios.get(API);
    this.posts = res.data.posts;

    // console.log(res.data.posts[2].body);
  }
};
</script>

<style lang="css" scoped>
#admin {
  position: relative;
  padding: 150px 100px 100px 100px;
  display: none;
}
.loginCard {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.notification {
  display: none;
}
.img {
  height: 100px;
  width: 100px;
}
</style>