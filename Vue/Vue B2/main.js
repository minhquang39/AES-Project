const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
  computed: {
    fulName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split("");
      },
    },
  },
});
app.mount("#content");
