<template>
  <div id="app">
    <div class="navbar  navbar-expand-lg justify-content-between">
      <h1 class="navbar-brand">
        Je plonge en Atlantique !
      </h1>
      <ul class="navbar-nav">
        <div v-if="this.$store.state.userData.name == undefined" class="d-flex">
          <li class="nav-item mr-2">
            <a class="nav-link" @click="home">Home</a>
          </li>
          <li class="nav-item mr-2">
            <a class="nav-link" @click="connexion">Connexion</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" @click="register">Inscription</a>
          </li>
        </div>
        <div v-else class="d-flex">
          <li class="nav-item mr-2">
            <a class="nav-link" @click="home">Home</a>
          </li>
          <li class="nav-item mr-2">
            <a class="nav-link" @click="dashboard">Mon compte</a>
          </li>
        </div>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    methods: {
      home() {
        this.$router.push({
          path: '/'
        });
      },
      connexion() {
        this.$router.push({
          path: '/login'
        });
      },
      register() {
        this.$router.push({
          path: '/register'
        });
      },
      dashboard() {
        this.$router.push({
          path: '/dashboard'
        });
      },
    }
  }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#app{
  background-image: url("./assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: 2000px;
    padding-bottom: 150px;
}


  a {
    font-family: 'Roboto', sans-serif;
    color: white !important;
  }
  a:hover{
    cursor:  pointer!important;
  }

  .navbar {
    font-family: 'Roboto', sans-serif;
    z-index: 10;
    position: fixed;
    background-color: rgba(0, 4, 255, 0.746) !important;
  }

  .navbar-brand {
    font-family: 'Roboto', sans-serif;
    color: white;
  }

  router-link {
    text-decoration: none;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    color: white;
    margin: 20px;

  }

  body {
    background-color: 	#010b17!important;
    font-family: 'Roboto', sans-serif;
  }

  .card-body {
    font-family: 'Roboto', sans-serif;
    background-color: rgba(255, 255, 255, 0);
  }
</style>