<template>
  <div>
    <section class="myProject desktop" id="myProjectDesktop">
      <div class="dark">
        <div class="yalow"></div>
        <div class="yalow"></div>
        <div class="yalow"></div>
      </div>
      <div class="towTaps">
        <div class="tapyalow">
          <div class="top-button">
            <button id="all" class="active" @click="getAll">All</button>
            <button id="front-end" @click="getFrountEnd">Front-end</button>
            <button id="uiUx" @click="uiUx">UI/UX</button>
            <button id="practicing" @click="practicing">Practicing</button>
            <button id="onlineProject" @click="onlineProject">Online-Project</button>
          </div>
        </div>
        <div class="tapGray">
          <a href="https://github.com/amradelata" class="gitPtndicktop">
            More on Github
            <i class="fab fa-github"></i>
          </a>
          <div class="all">
            <div class="cards">
              <div v-for="item in myProjects" :key="item.id" class="my-card">
                <a class="is-size-5" :href="item.link" target="_blank">
                  <div
                    class="imgMyproject"
                    :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
                  ></div>
                  <p style="color: #000;">{{ item.name }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="demo__phone phone" id="myProjectPhone">
      <div class="demo__screen-wrapper">
        <div class="demo__screen">
          <a href="https://github.com/amradelata" class="gitPtn">
            More on Github
            <i class="fab fa-github"></i>
          </a>
          <i class="fas fa-bars phonePars" id="phonePars" ref="phonePars" @click="projectpars"></i>
          <div class="top-buttonphone" ref="top-buttonphone">
            <button id="all" class="active" @click="getAll">All</button>
            <button id="front-end" @click="getFrountEnd">Front-end</button>
            <button id="uiUx" @click="uiUx">Ui/Ux</button>
            <button id="practicing" @click="practicing">Practicing</button>
            <button id="onlineProject" @click="onlineProject">Online-Project</button>
          </div>
          <div class="all">
            <div class="cards">
              <div v-for="item in myProjects" :key="item.id" class="my-card">
                <a :href="item.link" target="blank">
                  <div
                    class="imgMyproject"
                    :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
                  ></div>
                  <p class="is-size-5" style="color: #000">{{ item.name }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="demo__notch">
        <span class="whiteNotch"></span>
        <span class="cameraLens"></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const APImyProjects = "https://amradelata-blog-api.herokuapp.com/projects";
export default {
  data() {
    return { myProjects: [] };
  },
  computed: {
    allCards() {
      return document.querySelectorAll(".my-card");
    },
    buttons() {
      return document.querySelectorAll(".button");
    }
  },
  mounted() {
    this.buttons.forEach((value, index) => {});
  },
  methods: {
    projectpars() {
      this.$refs["top-buttonphone"].classList.toggle("heid");
    },
    async getAll() {
      const res = await axios.get(APImyProjects);
      this.myProjects = res.data.projects;
      this.$refs["top-buttonphone"].classList.toggle("heid");
    },
    async getFrountEnd() {
      const res = await axios.get(APImyProjects + "/?type=front-end");
      this.myProjects = res.data.projects;
      this.$refs["top-buttonphone"].classList.toggle("heid");
    },
    async uiUx() {
      const res = await axios.get(APImyProjects + "/?type=ui-ux");
      this.myProjects = res.data.projects;
      this.$refs["top-buttonphone"].classList.toggle("heid");
    },
    async practicing() {
      const res = await axios.get(APImyProjects + "/?type=practicing");
      this.myProjects = res.data.projects;
      this.$refs["top-buttonphone"].classList.toggle("heid");
    },
    async onlineProject() {
      const res = await axios.get(APImyProjects + "/?type=onlineProject");
      this.myProjects = res.data.projects;
      this.$refs["top-buttonphone"].classList.toggle("heid");
    }
  },
  async created() {
    const res = await axios.get(APImyProjects);
    this.myProjects = res.data.projects;
    console.log(this.myProjects);
  }
};
</script>

<style scoped>
.my-card {
  transition: all 0.3s ease-in-out;
}
.my-card:hover {
  transform: scale(0.9);
  opacity: 0.6;
}
</style>