<template>
  <div class="home">
    <Home :data="dbs" />
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import db from "../GotDatabase/db";
// @ is an alias to /src
export default {
  name: "HomePage",
  components: {
    Home,
  },
  data: () => ({
    dbs: null,
  }),
  methods: {
    async launch() {
      const res = await db();
      this.dbs = await res;
      // console.log(db);
    },
  },
  mounted() {
    this.launch();
  },
};
</script>
