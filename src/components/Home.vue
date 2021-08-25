<template>
  <div>
    <div class="container">
      <div class="row mt-5 flex-wrap ">
        <div class="col">
          <div class="d-flex flex-column ">
            <h3>All Workers</h3>
            <h4 class="text-danger font-weight-bold">{{ users.length }}</h4>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column ">
            <h3>Men workers</h3>
            <h4 class="text-danger font-weight-bold">{{ male.length }}</h4>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column">
            <h3>Women workers</h3>
            <h4 class="text-danger font-weight-bold">{{ female.length }}</h4>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column">
            <h3>Accounting Specialists</h3>
            <h4 class="text-danger font-weight-bold">
              {{ accountent.length }}
            </h4>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column">
            <h3>IT Specialists</h3>
            <h4 class="text-danger font-weight-bold">{{ it.length }}</h4>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column">
            <h3>Marketing Specialists</h3>
            <h4 class="text-danger font-weight-bold">{{ marketing.length }}</h4>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column">
            <h3>Company's middle age</h3>
            <h4 class="text-danger font-weight-bold">{{ middleAge }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data: () => ({
    male: [],
    female: [],
    users: [],
    it: [],
    marketing: [],
    accountent: [],
    middleAge: 0,
    allAge: 0,
  }),
  methods: {
    async calculateUsers() {
      this.data.reduce((acc, user) => {
        // define male
        this.calcSex(user.sex);
        // define department
        this.calcDepartment(user.department);
        //define middle age
        this.calcFullAge(user);
        //define users length
        this.users.push(user);
        return user;
      });
    },
    calcFullAge(user) {
      let res = user.birth.split("-").reverse();
      return (this.allAge += +res[0]);
    },
    calcDepartment(department) {
      switch (department) {
        case "IT":
          this.it.push(department);
          break;
        case "Accounting":
          this.accountent.push(department);
          break;
        case "Marketing":
          this.marketing.push(department);
      }
    },
    calcSex(userMale) {
      userMale === "male"
        ? this.male.push(userMale)
        : this.female.push(userMale);
    },
    calcMiddleAge() {
      this.middleAge = (+this.allAge / +this.users.length).toFixed();
      return this.middleAge;
    },
  },

  mounted() {
    setTimeout(() => {
      this.calculateUsers();
      this.calcMiddleAge();
      this.users;
    }, 1000);
  },
};
</script>

<style></style>
