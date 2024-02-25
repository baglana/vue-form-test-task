// global
Vue.use(window.vuelidate.default);

import {
  between,
  minLength,
  required,
} from "./node_modules/vuelidate/lib/validators";

import Vue from "./node_modules/vue";
import Vuelidate from "./node_modules/vuelidate";

Vue.use(Vuelidate);

export default {
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    age: {
      between: between(20, 30),
    },
  },
};
