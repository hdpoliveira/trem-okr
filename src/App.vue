<template>
    <v-app>
        <NavigationMenu />

        <AppBar />

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "./components/AppBar.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
import store from "./store";

@Component({
    components: {
        AppBar,
        NavigationMenu,
    },
    store,
})
export default class App extends Vue {}
</script>
