<template>
  <div>
    <section class="myProject desktop">
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
                <div class="img" :style="{ backgroundImage: 'url(' + item.projectsImg + ')' }"></div>
                <p class="is-size-5">{{ item.projectsName }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="demo__phone phone">
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
          </div>
          <div class="all">
            <div class="cards">
              <div v-for="item in myProjects" :key="item.id" class="my-card">
                <div class="img" :style="{ backgroundImage: 'url(' + item.projectsImg + ')' }"></div>
                <p class="is-size-5">{{ item.projectsName }}</p>
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
const APImyProjects = "http://localhost:4000/myProjects";
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
    this.buttons.forEach((value, index) => {
      // console.log(value, index);
    });
  },
  methods: {
    projectpars() {
      this.$refs["top-buttonphone"].classList.toggle("heid");
    },
    async getAll() {
      const res = await axios.get(APImyProjects);
      this.myProjects = res.data;
    },
    async getFrountEnd() {
      const res = await axios.get(APImyProjects + "/?type=front-end");
      this.myProjects = res.data;
    },
    async uiUx() {
      const res = await axios.get(APImyProjects + "/?type=ui-ux");
      this.myProjects = res.data;
    },
    async practicing() {
      const res = await axios.get(APImyProjects + "/?type=practicing");
      this.myProjects = res.data;
    }
  },
  async created() {
    const res = await axios.get(APImyProjects);
    this.myProjects = res.data;
  }
};
</script>

<style lang="scss" scoped>
</style>