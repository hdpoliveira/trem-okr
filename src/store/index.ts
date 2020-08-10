import Vue from "vue";
import Vuex from "vuex";

import tasks from "./modules/tasks";
import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tasks,
    },
    state,
    mutations,
    actions,
    getters,
    strict: process.env.NODE_ENV !== "production",
});
