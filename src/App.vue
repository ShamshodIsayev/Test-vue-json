<template>
  <div id="app">
    <div>
      <b-nav tabs class="d-flex justify-content-center bg-secondary " id="nav">
        <router-link
          class="mx-2 btn-primary text-light rounded p-1 text-decoration-none"
          to="/"
          >Dashboard</router-link
        >
        <router-link
          class="mx-2 btn-primary text-light rounded p-1 text-decoration-none"
          :to="{ name: 'AllUsers' }"
          >Users</router-link
        >
      </b-nav>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: blue !important;
  background: #ececec;
}
</style>
