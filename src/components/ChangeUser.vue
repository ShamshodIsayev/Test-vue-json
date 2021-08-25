<template>
  <div class="">
    <div class="fixed-top alert alert-warning" v-if="showAlert" role="alert" style="top:180px">
    CHANGED SUCCESS!
    </div>
    <b-button class="mx-2" v-b-modal.modal-multi-1>Change this worker</b-button>

    <b-modal
    ref="modal"
      id="modal-multi-1"
      size="lg"
      title="First Modal"
      ok-title="Hross"
      hide-footer
    >
      <b-form-input
        class="mx-auto my-3"
        style="position: relative"
        v-model="nameChange"
        placeholder="Enter name "
      ></b-form-input>

      <b-form-select
        v-model="departmentChange"
        :options="departmentOption"
        class="w-100 mx-auto my-3 px-1 d-block"
        height="80px"
        aria-placeholder="Select Department"
      ></b-form-select>
      <b-form-input
        class="mx-auto my-3  d-block"
        v-model="jobChange"
        placeholder="Job"
      ></b-form-input>
      <b-form-radio-group
        v-model="maleChange"
        :options="options"
        class=" d-flex align-items-center mx-auto my-3  d-block"
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
      ></b-form-radio-group>
      <input
        type="date"
        name=""
        id=""
        class="mx-auto my-3"
        v-model="userBirth"
      />

      <button
      type="submit"
        class="position-absolute btn btn-primary"
        style="bottom: 25px; right: 45px;"
        @click="changeData"
      >
        Change
      </button>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["user"],
  data: () => ({
    userBirth: "",
    tada: "",
    nameChange: null,
    departmentChange: null,
    jobChange: null,
    maleChange: null,
    options: [
      { item: "male", name: "Male" },
      { item: "female", name: "Female" },
    ],
    departmentOption: [
      { value: "Accounting", text: "Accounting" },
      { value: "IT", text: "IT" },
      { value: "Marketing", text: "Marketing" },
    ],
    showAlert: false,
  }),
  methods: {
    async changeData() {
      const uri = "http://localhost:3000/workers/";
      const res = await axios.put(uri + this.user.id, {
        name: this.nameChange,
        department: this.departmentChange,
        job: this.jobChange,
        sex: this.maleChange,
        birth: this.userBirth,
      });
      setTimeout(() => {
        this.$router.push({ name: "Home" });
      }, 2000);
      this.$refs.modal.hide()
      this.showAlert = true
      console.log(res);
    },
  },
  mounted() {
    setTimeout(() => {
      this.nameChange = this.user.name;
      this.departmentChange = this.user.department;
      this.jobChange = this.user.job;
      this.maleChange = this.user.sex;
      this.userBirth = this.user.birth;

    }, 1000);
  },
  computed: {},
};
</script>

<style></style>
