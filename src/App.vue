<template>
    <v-app>
        <AppBar />

        <v-main>
            <HelloWorld />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import AppBar from "./components/AppBar.vue";

export default Vue.extend({
    name: "App",

    components: {
        AppBar,
        HelloWorld,
    },

    data: () => ({
        //
    }),
});
</script>
