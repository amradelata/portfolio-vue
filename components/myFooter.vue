<template>
  <footer>
    <div class="container">
      <div class="left">
        <h2>
          <a class href="https://www.facebook.com/amr.ata.16">
            <i class="fab fa-facebook-f"></i>
          </a>

          <a class href="https://www.instagram.com/amradelata/">
            <i class="fab fa-instagram"></i>
          </a>

          <a class href="https://codepen.io/amradeata">
            <i class="fab fa-codepen"></i>
          </a>

          <a class href="https://github.com/amradelata">
            <i class="fab fa-github"></i>
          </a>

          <a class href="https://www.linkedin.com/in/amr-ata-1b8834117/">
            <i class="fab fa-linkedin"></i>
          </a>
        </h2>
      </div>
      <div class="right">
        <h2>
          <a class href="./blog.html"></a>
          <a
            href="/assets/cv/Amr-adel-ata-frontEndCV.pdf"
            target="_blank"
            download
            class="button downloadCvBtn radio"
          >Download CV</a>
          <a
            href="https://www.patreon.com/user?alert=2"
            class="patreon-button button radio downloadCvBtn"
            target="_blank"
            rel="noopener"
          ></a>
        </h2>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #ffc107;
  padding: 0 100px;
  margin-top: 100px;
}

footer h2,
footer a {
  margin: 25px 0;
  color: #31475e;
}

footer i {
  font-size: 50px;
  margin: 10px 20px;
}

footer .left {
  float: left;
}

footer .right {
  float: right;
}
</style>