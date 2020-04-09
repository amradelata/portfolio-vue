<template>
  <div>
    <myNavBar />
    <!-- login -->
    <div class="container loginCard">
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
                <input class="input" v-model="myProjectName" label="NAME" placeholder="name" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input" v-model="myProjectImg" label="IMAGE" placeholder="img" />
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
            <input class="input" placeholder="the Type" v-model="myProjectType" />
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <input class="input" placeholder="the LINK" v-model="myProjectLink" />
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <button class="button is-primary is-fullwidth" @click="addProject">add</button>
          </div>
        </div>
      </div>
      <!--  -->

      <div class="box" v-for="(post,index) in myProjects" :key="post._id">
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
                  <span ref="span">{{post.name}}</span>
                </strong>
                <br />
                <span>{{post.type}}</span>
                <br />
                <a :href="post.link" target="plank">padge link</a>
                <br />
                <input
                  placeholder="ADD NAME"
                  class="input is-primary"
                  type="text"
                  :style="{'display': input}"
                  :value="post.name"
                  ref="input1"
                  id="input"
                />
                <input
                  placeholder="ADD TYPE"
                  class="input is-primary"
                  type="text"
                  :style="{'display': input}"
                  :value="post.type"
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
                <input
                  placeholder="ADD LINK"
                  class="input is-primary"
                  type="text"
                  :style="{'display': input}"
                  :value="post.link"
                  ref="input4"
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
                  @click="save(index, post._id)"
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
const API = "https://amradelata-blog-api.herokuapp.com/projects";
export default {
  components: {
    myNavBar
  },
  data() {
    return {
      myProjects: [],
      myProjectName: "",
      myProjectImg: "",
      myProjectType: "",
      myProjectLink: "",
      delet: "inline-block",
      saveChang: "none",
      input: "none",
      change: "inline-block",
      scrollToTop: true,
      myemail: "",
      mybassword: ""
    };
  },
  methods: {
    chekme() {
      // console.log();
      if (this.mybassword && this.myemail == 1) {
        console.log("true");
        this.$refs["myadmin"].style.display = "block";
      } else {
        console.log("false");
        this.$refs["notification"].style.display = "block";
        this.$refs["myadmin"].style.display = "none";
      }
    },
    close() {
      this.$refs["notification"].style.display = "none";
    },
    async addProject() {
      const res = await axios.post(API, {
        name: this.myProjectName,
        type: this.myProjectType,
        link: this.myProjectLink,
        img_url: this.myProjectImg
      });
      this.myProjects.push(res.data);
      this.myProjectName = "";
      this.myProjectImg = "";
      this.myProjectType = "";
      this.myProjectLink = "";
    },
    async remove(id) {
      const res = await axios.delete(
        `https://amradelata-blog-api.herokuapp.com/projects/` + id
      );
      const delet = await axios.get(API);
      this.myProjects = delet.data.projects;
    },
    edit(index) {
      const input1 = this.$refs["input1"][index];
      const input2 = this.$refs["input2"][index];
      const input3 = this.$refs["input3"][index];
      const input4 = this.$refs["input4"][index];
      const edit = this.$refs["edit"][index];
      const save = this.$refs["save"][index];
      input1.style.display = "inline-block";
      input2.style.display = "inline-block";
      input3.style.display = "inline-block";
      input4.style.display = "inline-block";
      edit.style.display = "none";
      save.style.display = "inline-block";
      // console.log(edit);
    },
    async save(index, id) {
      const input1 = this.$refs["input1"][index];
      const input2 = this.$refs["input2"][index];
      const input3 = this.$refs["input3"][index];
      const input4 = this.$refs["input4"][index];

      const input1Value = this.$refs["input1"][index].value;
      const input2Value = this.$refs["input2"][index].value;
      const input3Value = this.$refs["input3"][index].value;
      const input4Value = this.$refs["input4"][index].value;

      const edit = this.$refs["edit"][index];
      const save = this.$refs["save"][index];
      input1.style.display = "none";
      input2.style.display = "none";
      input3.style.display = "none";
      input4.style.display = "none";
      edit.style.display = "inline-block";
      save.style.display = "none";

      const res = await axios.patch(
        `https://amradelata-blog-api.herokuapp.com/projects/` + id,
        {
          name: input1Value,
          type: input2Value,
          link: input4Value,
          img_url: input3Value
        }
      );
      const edi = await axios.get(API);
      this.myProjects = edi.data.projects;
      // console.log(span);
    }
  },
  async created() {
    const res = await axios.get(API);
    this.myProjects = res.data.projects;
    console.log(this.myProjects);
  }
};
</script>

<style lang="css" scoped>
#admin {
  position: relative;
  padding: 150px 100px 100px 100px;
  display: block;
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