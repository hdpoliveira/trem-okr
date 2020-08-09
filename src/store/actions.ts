// TODO get type definition for Vuex context

export const actions = {
    toggleDrawer(context: any) {
        context.commit("TOGGLE_DRAWER");
    },
    setDrawer(context: any, value: boolean) {
        context.commit("SET_DRAWER", value);
    },
};
