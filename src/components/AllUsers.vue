<template>
  <b-container class="mt-3" fluid="lg">
    <!-- Sort Start -->
      <div class="d-flex flex-column mx-2">
        <label class="mx-3 " for="sortJob" >Sort Job</label>
        <b-form-select
          @change="sortCategories"
          v-model="selectedJob"
          :options="optionsJob"
          class="mx-auto mt-1 w-50 p-2 "

          id="sortJob"
        ></b-form-select>
      </div>
    <!-- Sort End -->

    <b-row class="d-flex ">
      <!-- v-for -->
      <div class="col min-vw my-3" v-for="user in arr" :key="user.id">
        <b-card
          :title="user.name"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ user.department }}
          </b-card-text>
          <b-card-text>
            {{ user.sex }}
          </b-card-text>

          <b-button
            href="#"
            variant="primary"
            @click="$router.push({ name: 'User', params: { id: user.id } })"
            >View more</b-button
          >
        </b-card>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import database from "../GotDatabase/db";

export default {
  data: () => ({
    db: "",
    sorted: "",
    arr: [],
    selectedMale: "all",
    selectedJob: "all",
    // optionsSex: [
    //   // { value: null, text: "Please select an option" disabled},
    //   { value: "all", text: "All" },
    //   { value: "male", text: "Male" },
    //   { value: "female", text: "Female" },
    // ],
    optionsJob: [
      { value: "all", text: "All" },
      { value: "Accounting", text: "Accounting" },
      { value: "IT", text: "IT" },
      { value: "Marketing", text: "Marketing" },
       { value: "male", text: "Male" },
      { value: "female", text: "Female" },
    ],
  }),
  methods: {
    sortCategories() {
      this.arr = [];
      console.log(this.arr);
      this.db.forEach((user) => {
        const resJob = user.department == this.selectedJob;
        const resMale = user.sex == this.selectedJob;

        if (resJob) {
            return this.arr.push(user)
        }
        else if (resMale) {
            console.log("resJob and Male is true");
            return this.arr.push(user);
          }
          else if(this.selectedJob === 'all'){
             return this.arr.push(user)
          }
      });
    },
    async launch() {
      const res = await database();
      this.db = res;
      await this.sortCategories();
    },
  },
  mounted() {
    this.launch();
  },
  computed: {},
};
</script>

<style>
.min-vw {
  min-width: 300px;
}
</style>

// if (resJob) {
// if (resMale) {
// console.log("resJob and Male is true");
//return this.arr.push(user);
// }
// else if (!resMale) {
// console.log("resJob is true, Male i All");
// return this.arr.push(user);
// }
// }
// if (resMale){
// if (resJob) {
// console.log("Male and ResJob is true");
// return this.arr.push(user);
// } else if (!resJob) {
// console.log("Male is true, ResJob is all");
// return this.arr.push(user);
// }
// }
