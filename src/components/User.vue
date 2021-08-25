<template>
  <b-container>
    <div
      class="fixed-top alert alert-danger"
      v-if="showAlert"
      role="alert"
      style="top:180px"
    >
      DELETE SUCCESS !
    </div>
    <div v-if="user" class="user mt-2">
      <!-- Name of Worker -->
      <h1 class="text-center">{{ user.name }}</h1>
      <!-- Department of Worker -->
      <div class="d-flex align-items-center justify-content-center my-4">
        <h4 class="text-dark mx-1 my-0 ">Department:</h4>
        <b-form-select
          v-model="selectedJob"
          :options="option"
          class="w-23 mt-1"
        ></b-form-select>
      </div>
      <!-- Job of Worker -->
      <div class="d-flex align-items-center justify-content-center my-4">
        <h4 class="text-dark mr-5 my-0">Job: {{ user.job }}</h4>
      </div>
      <!-- Sex of Worker -->
      <div class="d-flex align-items-center justify-content-center ">
        <h4 class="text-dark my-0">Male:</h4>
        <b-form-radio-group
          v-model="selectedMale"
          :options="options"
          class=" d-flex align-items-center mx-3 "
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-radio-group>
      </div>
      <!-- Birthday of Worker -->
      <div class="d-flex align-items-center justify-content-center my-4">
        <h4 class="text-dark mr-3 my-0">Birthday:</h4>
        <input type="date" name="" id="" :value="user.birth" ref="date" />
      </div>
      <div class="d-flex justify-content-center">
        <b-btn class="btn btn-danger" @click="deleteWorker">
          Delete this worker</b-btn
        >
        <ChangeUser :user="user" />
      </div>
    </div>
  </b-container>
</template>

<script>
import database from "../GotDatabase/db";
import axios from "axios";
import ChangeUser from "../components/ChangeUser.vue";
export default {
  components: {
    ChangeUser,
  },
  data: () => ({
    selectedMale: "",
    selectedJob: "",
    user: null,
    options: [
      { item: "male", name: "Male" },
      { item: "female", name: "Female" },
    ],
    option: [
      { value: "Accounting", text: "Accounting" },
      { value: "IT", text: "IT" },
      { value: "Marketing", text: "Marketing" },
    ],
    showAlert: false,
  }),
  methods: {
    async launch() {
      const res = await database();
      this.user = res;
      this.user.forEach((user) => {
        if (user.id == this.$route.params.id) {
          this.user = user;
          console.log(user);
        }
        this.selectedMale = this.user.sex;
        this.selectedJob = this.user.department;
      });
    },
    async deleteWorker() {
      const conf = confirm("Do you want to delete this?");
      if (conf) {
        const res = await axios.delete(
          "http://localhost:3000/workers/" + this.user.id
        );
        console.log(res);
      }
      setTimeout(() => {
        this.$router.push({ name: "Home" });
      }, 2000);
      this.showAlert = true;
    },
    async changeWorker() {},
  },
  mounted() {
    this.launch();
  },
  computed: {},
};
</script>

<style>
.custom-radio {
  margin: 0 5px;
}
</style>
