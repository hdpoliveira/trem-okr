import { State } from "./state";

export const mutations = {
    TOGGLE_DRAWER(state: State) {
        state.drawer = !state.drawer;
    },
    SET_DRAWER(state: State, value: boolean) {
        state.drawer = value;
    },
};
